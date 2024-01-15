import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Welcome() {
    return (
        <ScrollView indicatorStyle="white" style={welcomeStyles.container}>
                <Text style={welcomeStyles.headerText}>
                        Welcome to Little Lemon
                </Text>
                <Text style={welcomeStyles.regularText}>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                </Text>
        </ScrollView>
    );
}

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
   headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
})