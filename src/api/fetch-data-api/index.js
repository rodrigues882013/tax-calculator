import {yahooFinanceApiUrl} from '../../config';

const addOneDay = (date) => date.add('1', 'days');

const toTimeStamp = (date) => date.unix();

const fetchStockData = ({stockCode, dateBought, dateSold}) => {
  const upperBound = toTimeStamp(addOneDay(dateSold));
  const lowerBound = toTimeStamp(dateBought);

  const url = `${yahooFinanceApiUrl}/${stockCode}.SA?period1=${lowerBound}&period2=${upperBound}&interval=1d&includePrePost=prepost&events=div,splits')`;

  return fetch(url);
};

export {fetchStockData};
