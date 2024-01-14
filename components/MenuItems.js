import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const menuItemsToDisplay = [
    ' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
  ];

export default function MenuItems() {
    return (
        <View style={menuStyles.menuView}>
            <Text style={menuStyles.title}>
                    View Menu
                </Text>
            <ScrollView style={menuStyles.scroll} indicatorStyle='white'>
                <Text style={menuStyles.items}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView>
        </View>
    )
}

const menuStyles = StyleSheet.create({
    menuView: {
        flex: .6,
    },
    scroll: {
        paddingHorizontal: 40,
        backgroundColor: 'black',
    },
    title: {
        color: 'white', 
        fontSize: 40, 
        flexWrap: 'wrap',
        backgroundColor: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    items: {
        color: '#F4CE14', 
        fontSize: 36
    }
})