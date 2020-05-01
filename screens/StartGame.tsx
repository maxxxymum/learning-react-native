import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ViewStyle,
  TextStyle,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

interface StartGameProps {
  onStartGame: (userChoice: number) => void;
}

function StartGame({ onStartGame }: StartGameProps) {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number>();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  function numberInputHandler(inputText: string) {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  }

  function resetInputHandler() {
    setEnteredValue("");
    setConfirmed(false);
  }

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
  
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    }
  })

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(parseInt(enteredValue));
    Keyboard.dismiss();
  }

  let confirmedContent;

  if (confirmed && selectedNumber) {
    confirmedContent = (
      <Card style={styles.sumarryContainer}>
        <Text>You selected</Text>

        <NumberContainer>{selectedNumber}</NumberContainer>

        <MainButton onPress={() => onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TitleText style={styles.title}>Start a New Game!</TitleText>

            <Card style={styles.inputContainer}>
              <BodyText>Select a Number</BodyText>
              <Input
                blurOnSubmit
                style={styles.input}
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                maxLength={2}
                value={enteredValue}
                onChangeText={numberInputHandler}
              />
              <View style={styles.buttonsContainer}>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    color={Colors.accent}
                    onPress={resetInputHandler}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Confirm"
                    color={Colors.primary}
                    onPress={confirmInputHandler}
                  />
                </View>
              </View>
            </Card>

            {confirmedContent}

            <View style={styles.inputContainer}></View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

interface Styles {
  screen: ViewStyle;
  title: TextStyle;
  inputContainer: ViewStyle;
  buttonsContainer: ViewStyle;
  input: ViewStyle;
  sumarryContainer: ViewStyle;
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
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: 50,
  },
  sumarryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGame;
