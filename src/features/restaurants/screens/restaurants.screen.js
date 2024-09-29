import React, { useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { colors } from '../../../utils/colors.js';
import { RestuarantInfoCard } from '../components/restaurant-info-card.component.js';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestuarantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: colors.green,
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    padding: 16,
  },
});
