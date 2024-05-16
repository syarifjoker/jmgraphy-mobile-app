import _ from 'lodash';
import {groupBy} from 'lodash';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  SectionList,
  ScrollView,
} from 'react-native';

import styles from './styles';
import assets from '@assets';
import {BLACK} from 'src/constants/Color';

import Text from '@components/Text';

const TileList = props => {
  const options = {
    itemList: [
      {
        id: '1',
        item_cat: 'Vegetable',
        item_name: 'Tomato',
        expiry_date: '2024-02-30T09:16:01',
      },
      {
        id: '2',
        item_cat: 'Vegetable',
        item_name: 'Onion',
        expiry_date: '2024-06-30T09:16:01',
      },
      {
        id: '3',
        item_cat: 'Vegetable',
        item_name: 'Cucumber',
        expiry_date: '2024-03-30T09:16:01',
      },
      {
        id: '4',
        item_cat: 'Vegetable',
        item_name: 'Brocolli',
        expiry_date: '2024-01-30T09:16:01',
      },
      {
        id: '5',
        item_cat: 'Vegetable',
        item_name: 'Bell Pepper',
        expiry_date: '2023-10-30T09:16:01',
      },
      {
        id: '6',
        item_cat: 'Vegetable',
        item_name: 'Chili',
        expiry_date: '2023-12-30T09:16:01',
      },
      {
        id: '7',
        item_cat: 'Vegetable',
        item_name: 'Celery',
        expiry_date: '2023-09-30T09:16:01',
      },
      {
        id: '8',
        item_cat: 'Vegetable',
        item_name: 'Potato',
        expiry_date: '2023-11-30T09:16:01',
      },
      {
        id: '9',
        item_cat: 'Fruit',
        item_name: 'Orange',
        expiry_date: '2023-12-30T09:16:01',
      },
      {
        id: '10',
        item_cat: 'Fruit',
        item_name: 'Apple',
        expiry_date: '2023-10-30T09:16:01',
      },
      {
        id: '11',
        item_cat: 'Fruit',
        item_name: 'Pear',
        expiry_date: '2023-12-30T09:16:01',
      },
      {
        id: '12',
        item_cat: 'Fruit',
        item_name: 'Watermelon',
        expiry_date: '2023-10-30T09:16:01',
      },
      {
        id: '13',
        item_cat: 'Fruit',
        item_name: 'Plum',
        expiry_date: '2023-12-30T09:16:01',
      },
      {
        id: '14',
        item_cat: 'Fruit',
        item_name: 'Lemon',
        expiry_date: '2023-12-30T09:16:01',
      },
      {
        id: '15',
        item_cat: 'Fruit',
        item_name: 'Peach',
        expiry_date: '2024-01-30T09:16:01',
      },
      {
        id: '16',
        item_cat: 'Fruit',
        item_name: 'Cherry',
        expiry_date: '2024-03-30T09:16:01',
      },
      {
        id: '17',
        item_cat: 'Fruit',
        item_name: 'Grapes',
        expiry_date: '2023-01-30T09:16:01',
      },
      {
        id: '18',
        item_cat: 'Seafood',
        item_name: 'Crab',
        expiry_date: '2024-03-30T09:16:01',
      },
      {
        id: '19',
        item_cat: 'Seafood',
        item_name: 'Shrimp',
        expiry_date: '2024-03-30T09:16:01',
      },
      {
        id: '20',
        item_cat: 'Seafood',
        item_name: 'Lobster',
        expiry_date: '2024-03-30T09:16:01',
      },
      {
        id: '21',
        item_cat: 'Seafood',
        item_name: 'Oyster',
        expiry_date: '2023-10-30T09:16:01',
      },
      {
        id: '22',
        item_cat: 'Seafood',
        item_name: 'Squid',
        expiry_date: '2023-11-30T09:16:01',
      },
      {
        id: '23',
        item_cat: 'Seafood',
        item_name: 'Bass',
        expiry_date: '2024-02-30T09:16:01',
      },
      {
        id: '24',
        item_cat: 'Seafood',
        item_name: 'Salmon',
        expiry_date: '2024-01-30T09:16:01',
      },
      {
        id: '25',
        item_cat: 'Seafood',
        item_name: 'Tuna',
        expiry_date: '2024-01-30T09:16:01',
      },
      {
        id: '26',
        item_cat: 'Meat',
        item_name: 'Lamb Chop',
        expiry_date: '2023-12-30T09:16:01',
      },
      {
        id: '27',
        item_cat: 'Meat',
        item_name: 'Sirloin',
        expiry_date: '2023-12-30T09:16:01',
      },
      {
        id: '28',
        item_cat: 'Meat',
        item_name: 'Dice Beef',
        expiry_date: '2024-03-30T09:16:01',
      },
      {
        id: '29',
        item_cat: 'Meat',
        item_name: 'Chicken',
        expiry_date: '2023-02-30T09:16:01',
      },
      {
        id: '30',
        item_cat: 'Meat',
        item_name: 'Salami',
        expiry_date: '2024-01-30T09:16:01',
      },
      {
        id: '31',
        item_cat: 'Meat',
        item_name: 'Sausages',
        expiry_date: '2024-01-30T09:16:01',
      },
    ],
  };
  const currentDate = new Date();

  // Filter valid and expired items
  const valid = options?.itemList.filter(
    item => new Date(item.expiry_date) >= currentDate,
  );
  const expired = options?.itemList.filter(
    item => new Date(item.expiry_date) < currentDate,
  );

  // Add isExpired parameter to each item
  valid.forEach(item => (item.isExpired = false));
  expired.forEach(item => (item.isExpired = true));

  const numOfCol = 2;

  const renderTileContent = ({item}) => {
    let imageHeader;

    switch (item.item_cat) {
      case 'Vegetable':
        imageHeader = assets.wrapImage.vege;
        break;
      case 'Fruit':
        imageHeader = assets.wrapImage.fruit;
        break;
      case 'Seafood':
        imageHeader = assets.wrapImage.seafood;
        break;
      case 'Meat':
        imageHeader = assets.wrapImage.meat;
        break;
    }
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View
              style={[styles.imageContainer, item.isExpired && {opacity: 0.5}]}>
              <Image source={imageHeader} style={styles.image} />
            </View>
            <View style={styles.detailContainer}>
              <Text
                //   fontFamily: 'Montserrat',
                style={{fontWeight: '500'}}
                fontSize={16}
                lineHeight={18}>
                {item.item_name}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <View style={{paddingBottom: 24}}>
          <Text
            style={{fontWeight: '700'}}
            fontSize={20}
            lineHeight={24}
            textAlign={'left'}>
            Items
          </Text>
          <FlatList
            data={valid}
            renderItem={renderTileContent}
            scrollEnabled={false}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            ListFooterComponentStyle={{paddingVertical: 24}}
          />
        </View>
        <View style={{paddingBottom: 24}}>
          <Text
            style={{fontWeight: '700'}}
            fontSize={20}
            lineHeight={24}
            textAlign={'left'}>
            Expired
          </Text>
          <FlatList
            data={expired}
            renderItem={renderTileContent}
            scrollEnabled={false}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            ListFooterComponentStyle={{paddingVertical: 24}}
          />
        </View>
      </View>

      <View style={{marginVertical: 24}}></View>
    </ScrollView>
  );
};

export default TileList;
