import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader.js';
import LittleLemonFooter from './components/LittleLemonFooter.js';
import Welcome from './components/Welcome.js';
import MenuItems from './components/MenuItems.js';

export default function App() {
  return (
    <>
      <View
        style={styles.main}>
        <LittleLemonHeader />
        <Welcome />
        <MenuItems />
      </View>
      <View
        style={styles.footer}>
          <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  footer: {
    backgroundColor: '#495E57',
  }
})