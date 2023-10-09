import notifee, {AndroidImportance} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import {useEffect, useState} from 'react';
import {string} from '../constants/strings';
import {INotification} from '../types/propTypes';

const DEFAULT_CHANNEL_ID = 'default';

notifee.createChannel({
  id: DEFAULT_CHANNEL_ID,
  name: 'Default Channel',
  importance: AndroidImportance.HIGH,
});

export function useSubscribeToPushNotifications() {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const initializeNotifications = async () => {
      try {
        await notifee.requestPermission();

        if (!messaging().isDeviceRegisteredForRemoteMessages) {
          await messaging().registerDeviceForRemoteMessages();
        }

        const FCMToken = await messaging().getToken();
        setToken(FCMToken);

        messaging().onMessage(remoteMessage => {
          console.log('remoteMessage', remoteMessage);
          const {title, body} = remoteMessage.notification || {};
          if (title && body) {
            showNotification({title, body});
          }
        });
      } catch (e) {
        console.log('Error:', e);
      }
    };

    initializeNotifications();
  }, []);

  const showNotification = async ({
    title = string.notificationTitle,
    body = string.notificationBody,
  }: INotification) => {
    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId: DEFAULT_CHANNEL_ID,
        pressAction: {
          id: DEFAULT_CHANNEL_ID,
        },
      },
    });
  };

  return {
    token,
  };
}
