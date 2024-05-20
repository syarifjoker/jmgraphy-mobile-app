import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ItemListingScreen from './src/screens/ItemListingScreen';

import itemList from './resources/jsonData/ItemList.json';

function App(): React.JSX.Element {
  console.log('azim dapat award :: ', itemList);
  return (
    <SafeAreaProvider style={styles.warp}>
      <ItemListingScreen productList={itemList} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  warp: {flex: 1},
});

export default App;
