import React, {useRef} from 'react';
import {Animated, Image, TouchableOpacity, View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import TileList from '../../components/List/TileList';

export default function ItemListingScreen() {
  //   const bgAnimate = useRef(new Animated.Value(1));

  //   function bgScale() {
  //     return {
  //       transform: [
  //         {
  //           scale: bgAnimate.current.interpolate({
  //             inputRange: [-200, 0, 1],
  //             outputRange: [1.2, 1, 1],
  //           }),
  //         },
  //         {
  //           translateY: bgAnimate.current.interpolate({
  //             inputRange: [-200, 0, 240],
  //             outputRange: [0, 0, -100],
  //           }),
  //         },
  //       ],
  //     };
  //   }

  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            padding: 12,
            backgroundColor: '#2478b7',
            paddingHorizontal: 24,
          }}>
          <View style={styles.headerScreen}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat',
                  fontWeight: '700',
                  fontSize: 20,
                }}>
                Grocerieeez
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat',
                  fontWeight: '700',
                  fontSize: 14,
                }}>
                Login
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <TileList />
        </View>
      </SafeAreaView>
    </View>
  );
}
