import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return (
      <View style={footerStyles.footerView}>
        <Text
          style={footerStyles.footerText}>
          All rights reserved by Little Lemon, 2022
        </Text>
      </View>
    );
  }

  const footerStyles = StyleSheet.create({
    footerView: {
      alignItems: 'center',
    },
    footerText: {
      padding: 5,
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'purple',
    }
  })