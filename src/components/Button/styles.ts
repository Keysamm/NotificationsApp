import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  touchable: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFD700',
  },
  text: {
    fontSize: 18,
    color: colors.black,
    textAlign: 'center',
  },
});
