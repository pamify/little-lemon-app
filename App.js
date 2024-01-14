import * as React from 'react';
import { View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader.js';
import LittleLemonFooter from './components/LittleLemonFooter.js';
import Welcome from './components/Welcome.js';
import MenuItems from './components/MenuItems.js';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
        <Welcome />
        <MenuItems />
      </View>
      <View
        style={{ backgroundColor: '#495E57'}}>
          <LittleLemonFooter />
      </View>
    </>
  );
}