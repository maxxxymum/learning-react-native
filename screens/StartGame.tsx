import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ViewStyle,
  TextStyle,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";

function StartGame() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The a New Game!</Text>

      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary} />
          </View>
        </View>
      </Card>

      <View style={styles.inputContainer}></View>
    </View>
  );
}

interface Styles {
  screen: ViewStyle;
  title: TextStyle;
  inputContainer: ViewStyle;
  buttonsContainer: ViewStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
      width: 100,
  },
});

export default StartGame;
