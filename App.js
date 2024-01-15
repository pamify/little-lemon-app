import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader.js';
import LittleLemonFooter from './components/LittleLemonFooter.js';
// import WelcomeScreen from './components/WelcomeScreen.js';
import MenuItems from './components/MenuItems.js';

export default function App() {
  return (
    <>
      <View
        style={styles.container}>
        <LittleLemonHeader />
        {/* <WelcomeScreen /> */}
        <MenuItems />
      </View>
      <View
        style={styles.footerContainer}>
          <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  }
})