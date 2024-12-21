import React, { useState, useContext } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  FlatList,
} from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component.js';
import { SafeArea } from '../../../components/utility/safe-area.component.js';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context.js';``

const SearchContainer = styled.View`

  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};

`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const restaurantsContext = useContext(RestaurantsContext);
  console.log(restaurantsContext);
  

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={restaurantsContext.restaurants}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16, marginTop: 16 }} 
      />
    
      
     
    </SafeArea>
  );
};
