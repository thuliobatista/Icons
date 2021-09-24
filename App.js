import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

const Icon = createIconSetFromIcoMoon(
  require('./imagens/selection.json'),
  'IcoMoon',
  'icomoon.ttf'
);

export default function App() {
  // Load the icon font before using it
  const [fontsLoaded] = useFonts({ IcoMoon: require('./imagens/fonts/icomoon.ttf') });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Icon name="montanha" size={50} color="black" />
    </View>
  );
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
