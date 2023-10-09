import axios from 'axios';
import React from 'react';
import {Alert, View} from 'react-native';
import {Button} from '../components/Button';
import {string} from '../constants/strings';
import {useSubscribeToPushNotifications} from '../hooks/useSubscribeToPushNotifications';
import {styles} from './styles';

/**
 * The API_URL is obtained from an ngrok server. When starting and compiling the backend,
 * make sure to run 'ngrok http 3000' in your terminal, and then replace this value with
 * the new ngrok URL generated.
 */
const API_URL = 'https://c861-185-102-186-116.ngrok.io/send-notification';

export const Notifications = () => {
  const {token} = useSubscribeToPushNotifications();

  const handleFirebaseEvent = async () => {
    try {
      const response = await axios.post(API_URL, {
        deviceToken: token,
        title: 'Hey, ScootAPI👋',
        message: 'Nice to meet you',
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Notification sent successfully');
      } else {
        throw new Error('Failed to send notification');
      }
    } catch (error) {
      Alert.alert(
        'Something went wrong',
        'Please check your Internet connection or reload the app',
      );

      // Log error to the analytics..
      console.error('API Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={string.notificationBtnText}
        onPress={handleFirebaseEvent}
      />
    </View>
  );
};
