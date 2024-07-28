import * as Notifications from 'expo-notifications';
import * as firebase from 'firebase/app';
import 'firebase/messaging';
import config from '../config';

export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config.firebase);
  }
};

export const registerForPushNotifications = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }
  const token = (TokenAsync()).data;
  return token;
};
