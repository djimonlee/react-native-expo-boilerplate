import { Stripe } from '@stripe/stripe-react-native';
import config from '../config';

export const initializeStripe = async () => {
  await initStripe({
    publishableKey: config.stripePublishableKey,
  });
};
