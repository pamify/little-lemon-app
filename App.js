import * as React from 'react';
import { View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader.js';
import LittleLemonFooter from './components/LittleLemonFooter.js';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <LittleLemonHeader />
      <LittleLemonFooter />
    </View>
  );
}