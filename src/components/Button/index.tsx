import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IButtonProps} from '../../types/propTypes';
import {styles} from './styles';

export const Button = ({title, onPress}: IButtonProps) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
