import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ScreenProps {
  title: string;
  children: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ title, children }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Screen;