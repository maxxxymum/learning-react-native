import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, ViewStyle, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import DefaultStyles from "../constants/default-styles";

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

type onGameOverCallback = (numberOfRounds: number) => void;

interface GameScreenProps {
  userChoice: number;
  onGameOver: onGameOverCallback;
}

type guessDirection = "lower" | "greater";

function useGameLogic(
  initialValue: number,
  onGameOver: onGameOverCallback
): [number, (direction: guessDirection) => void] {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, initialValue)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === initialValue) {
      onGameOver(rounds);
    }
  }, [currentGuess, initialValue, onGameOver]);

  function nextGuessHandler(direction: guessDirection) {
    if (
      (direction === "lower" && currentGuess < initialValue) ||
      (direction === "greater" && currentGuess > initialValue)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    setRounds((currentRounds) => currentRounds + 1);
  }

  return [currentGuess, nextGuessHandler];
}

const GameScreen: FunctionComponent<GameScreenProps> = ({
  userChoice,
  onGameOver,
}) => {
  const [currentGuess, nextGuessHandler] = useGameLogic(userChoice, onGameOver);

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>

      <NumberContainer>{currentGuess}</NumberContainer>

      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuessHandler("lower")}>
          <Ionicons name="md-remove" size={24} />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler("greater")}>
        <Ionicons name="md-add" size={24} />
        </MainButton>
      </Card>
    </View>
  );
};

interface Styles {
  screen: ViewStyle;
  buttonContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
