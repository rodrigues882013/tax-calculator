import fetchStockData from './../../api/fetch-data-api';

const parseData = (data) => {
  console.log(data);
  return {
    priceBought: data[0].chart.result[0].meta.chartPreviousClose,
    priceSold: data[1].chart.result[0].meta.chartPreviousClose,
  };
};

const buildReport = (data, quantity, isRealStateStock) => {
  return new Promise((resolve, reject) => {
    try {
      let chargedTax = 0;

      const {priceBought, priceSold} = parseData(data);
      const totalBought = priceBought * quantity;
      const totalSold = priceSold * quantity;
      const delta = totalBought - totalSold;

      if (delta < 0) {
        const gain = Math.abs(delta);
        if (isRealStateStock || gain > 20000.0) {
          chargedTax = gain * 0.15005;
        }
      }

      resolve(chargedTax);
    } catch (e) {
      console.log(e);
      reject(Error(e));
    }
  });
};

const fetchData = ({stockCode, dateBought, dateSold}) => {
  return new Promise((resolve, reject) => {
    Promise.all(
      [dateBought, dateSold].map((date) => fetchStockData(stockCode, date)),
    )
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((datas) => resolve(datas))
      .catch((err) => reject(err));
  });
};

export {fetchData, buildReport};
