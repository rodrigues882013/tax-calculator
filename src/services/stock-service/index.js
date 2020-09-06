import fetchStockData from './../../api/fetch-data-api';

const buildReport = (dataBought, dataSold, quantity, isRealStateStock) => {
  return new Promise((resolve, reject) => {
    try {
      let chargedTax = 0;

      const totalBought = dataBought.price * quantity;
      const totalSold = dataSold.price * quantity;
      const delta = totalBought - totalSold;

      if (delta < 0) {
        gain = abs(delta);

        if (isRealStateStock || gain > 20000.0) {
          chargedTax = gain * 0.15005;
        }
      }

      resolve({chargedTax});
    } catch (e) {
      reject(Error(e));
    }
  });
};

const fetchData = ({stockCode, dateBought, dateSold}) =>
  fetchStockData(stockCode, dateBought, dateSold);

export {fetchData, buildReport};
