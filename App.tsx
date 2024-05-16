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
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ItemListingScreen from './src/screens/ItemListingScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={styles.warp}>
      <ItemListingScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  warp: {flex: 1},
});

export default App;
