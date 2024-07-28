import { combineReducers } from '@reduxjs/toolkit';

// This rootReducer is currently empty, as we haven't defined any slices yet.
const rootReducer = combineReducers({
  // Add your reducers here as you create them
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
