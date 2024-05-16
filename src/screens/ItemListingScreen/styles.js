import {BACKGROUND_GREY, MAIN_BLUE} from '@constants/Color';
import {Platform} from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: MAIN_BLUE,
  },
  headerScreen: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: Platform.OS === 'android' ? 72 : 24,
    marginVertical: 8,
    flex: 1,
  },
  container: {
    paddingBottom: Platform.OS === 'android' ? 125 : 72,
    flex: 0,
    backgroundColor: BACKGROUND_GREY,
  },
  bgContainer: {
    bottom: 0,
    height: 365,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  bgImage: {height: '100%', width: '100%'},
  copyContainer: {
    paddingHorizontal: 34,
    paddingVertical: 48,
  },
  headerClose: {marginBottom: 8},
  scrollContainer: {
    height: '100%',
  },
  secondaryContainer: {
    marginBottom: 16,
  },
  titleContainer: {marginBottom: 8},
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionbutton: {
    paddingHorizontal: 44,
  },
  rightButton: {
    alignItems: 'center',
    height: 20,
    justifyContent: 'center',
    width: 20,
  },
});

export default styles;
