import { SUPABASE_URL, SUPABASE_ANON_KEY, STRIPE_PUBLISHABLE_KEY, SEGMENT_WRITE_KEY, SENTRY_DSN, FIREBASE_API_KEY, FIREBASE_APP_ID, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_PROJECT_ID } from '@env';

export default {
  supabaseUrl: SUPABASE_URL,
  supabaseAnonKey: SUPABASE_ANON_KEY,
  stripePublishableKey: STRIPE_PUBLISHABLE_KEY,
  segmentWriteKey: SEGMENT_WRITE_KEY,
  sentryDsn: SENTRY_DSN,
  firebase: {
    apiKey: FIREBASE_API_KEY,
    appId: FIREBASE_APP_ID,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    projectId: FIREBASE_PROJECT_ID,
  },
};
