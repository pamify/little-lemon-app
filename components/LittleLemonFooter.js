import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            padding: 5,
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 10,
            width: '100%',
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'purple',
          }}>
          All rights reserved by Little Lemon, 2022
        </Text>
      </View>
    );
  }