import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FFFFFF',
    flex: 1,
    backgroundColor: '#2478b7',
  },
  headerScreen: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 24,
    marginVertical: 8,
  },
  container: {
    // paddingHorizontal: 24,
    paddingBottom: 72,
    flex: 0,
    backgroundColor: '#FFFFFF',
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
