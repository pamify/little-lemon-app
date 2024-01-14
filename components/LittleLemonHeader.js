import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return (
      <View style={headerStyles.headerView}>
        <Text style={headerStyles.headerText} >
            Little Lemon
        </Text>
      </View>
    );
  }

  const headerStyles = StyleSheet.create({
    headerView: {
      flex: 0.2, 
      backgroundColor: '#F4CE14',
      alignItems: 'center'
    },
    headerText: {
      marginTop: 20,
      padding: 40,
      fontSize: 30,
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  })