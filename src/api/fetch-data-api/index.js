import {yahooFinanceApiUrl} from '../../config';
import moment from 'moment';

const parseDate = (date) => moment(date, 'DD-MM-YYYY');
const addOneDay = (date) => date.add('1', 'days');
const toTimeStamp = (date) => date.unix();

const fetchStockData = (stockCode, date) => {
  const upperBound = toTimeStamp(addOneDay(parseDate(date)));
  const lowerBound = toTimeStamp(parseDate(date));
  const url = `${yahooFinanceApiUrl}/${stockCode}.SA?period1=${lowerBound}&period2=${upperBound}&interval=1d&includePrePost=prepost&events=div,splits`;
  return fetch(url);
};

export default fetchStockData;
