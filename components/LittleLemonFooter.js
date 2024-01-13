import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F4CE14', alignItems: 'center' }}>
        <Text
          style={{
            padding: 5,
            fontSize: 15,
            fontWeight: 'bold',
            position: 'absolute',
            bottom: 5,
            width: '100%',
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'purple'
          }}>
          All rights reserved by Little Lemon, 2022
        </Text>
      </View>
    );
  }