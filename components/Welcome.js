import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Welcome() {
    return (
        <View style={welcomeStyles.welcomeView}>
            <ScrollView>
                <Text style={welcomeStyles.title}>
                        Welcome to Little {'\n'} 
                        Lemon
                    </Text>
                    <Text style={welcomeStyles.description}>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                    </Text>
            </ScrollView>
        </View>
    )
}

const welcomeStyles = StyleSheet.create({
    welcomeView: {
        alignItems: 'center',
        flex: .70,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 40,
        color: 'white',
    },
    description: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        paddingLeft: 40,
        paddingRight: 40,
        lineHeight: 70,
    }
})