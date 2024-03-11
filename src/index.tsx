import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {RouteName} from './Navigation';
import SwipeCard from './SwipeCard';

const [, ...allScreen] = RouteName;

export const Home = () => {
  const renderCards = () => allScreen.map(name => <Text>{name}</Text>);
  return (
    <>
      <SwipeCard />
      <Text> React Native - Exploration </Text>
      {renderCards()}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
