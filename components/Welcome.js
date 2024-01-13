import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Welcome() {
    return (
        <View style={welcomeStyles.welcomeView}>
            <Text style={welcomeStyles.title}>
                Welcome to Little {'\n'} 
                Lemon
            </Text>
            <Text style={welcomeStyles.description}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
    )
}

const welcomeStyles = StyleSheet.create({
    welcomeView: {
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 40,
        color: 'white',
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        paddingLeft: 40,
        paddingRight: 40,
        lineHeight: 30,
    }
})