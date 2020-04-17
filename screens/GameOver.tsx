import React from 'react';
import {View, Text, StyleSheet, ViewStyle } from "react-native";

const GameOverScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The game is Over!</Text>
        </View>
    );
}

interface Styles {
    screen: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default GameOverScreen;