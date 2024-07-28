import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { signIn } from '../services/auth';
import analytics from '../services/analytics';
import { AuthResponse } from '@supabase/supabase-js';

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);

const HomeScreen: React.FC = () => {
  const handleSignIn = async () => {
    try {
      const { data, error }: AuthResponse = await signIn('user@example.com', 'password');
      if (error) throw error;
      if (data?.user) {
        analytics.track('User Signed In', { userId: data.user.id });
      }
    } catch (error) {
      console.error('Error signing in:', (error as Error).message);
    }
  };

  return (
    <StyledView className="flex-1 justify-center items-center bg-white dark:bg-gray-900">
      <StyledText className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Welcome to your Boilerplate App!
      </StyledText>
      <StyledTouchableOpacity 
        onPress={handleSignIn}
        className="bg-blue-500 py-2 px-4 rounded-lg"
      >
        <StyledText className="text-white font-semibold">Sign In</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default HomeScreen;
