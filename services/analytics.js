import { createClient } from '@segment/analytics-react-native';
import config from '../config';

const analytics = createClient({
  writeKey: config.segmentWriteKey,
});

export default analytics;
