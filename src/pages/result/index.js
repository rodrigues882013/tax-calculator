import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {fetchData, buildReport} from './../../services';

const Result = ({route}) => {
  const {stockCode, dateBought, dateSold, quantity} = route.params;

  const setData = (data) => {};

  const handleError = (error) => {};

  useEffect(() => {
    fetchData({stockCode, dateBought, dateSold})
      .then((response) => response.json())
      .then((data) => buildReport(data, quantity))
      .then(setData)
      .catch(handleError);
  });

  return (
    <View>
      <Text>Show Simulation Result</Text>
    </View>
  );
};

export default Result;
