import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";
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
): [number, (direction: guessDirection) => void, number[]] {
  const initialGuess = generateRandomBetween(1, 100, initialValue);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState<number[]>([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === initialValue) {
      onGameOver(pastGuesses.length);
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
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    setPastGuesses((guesses) => [nextNumber, ...guesses]);
  }

  return [currentGuess, nextGuessHandler, pastGuesses];
}

function useDeviceHeight() {
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  return availableDeviceHeight;
}

const GameScreen: FunctionComponent<GameScreenProps> = ({
  userChoice,
  onGameOver,
}) => {
  const [currentGuess, nextGuessHandler, pastGuesses] = useGameLogic(
    userChoice,
    onGameOver
  );
  const deviceHeight = useDeviceHeight();

  if (deviceHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text style={DefaultStyles.title}>Opponent's Guess</Text>

        <View style={styles.controls}>
          <MainButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="md-remove" size={24} />
          </MainButton>

          <NumberContainer>{currentGuess}</NumberContainer>

          <MainButton onPress={() => nextGuessHandler("greater")}>
            <Ionicons name="md-add" size={24} />
          </MainButton>
        </View>

        <View style={styles.listContainer}>
          <ScrollView contentContainerStyle={styles.list}>
            {pastGuesses.map((guess, index) => (
              <View key={guess} style={styles.listItem}>
                <BodyText>#{pastGuesses.length - index}</BodyText>
                <BodyText>{guess}</BodyText>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }

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

      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => (
            <View key={guess} style={styles.listItem}>
              <BodyText>#{pastGuesses.length - index}</BodyText>
              <BodyText>{guess}</BodyText>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

interface Styles {
  screen: ViewStyle;
  buttonContainer: ViewStyle;
  controls: ViewStyle;
  listContainer: ViewStyle;
  list: ViewStyle;
  listItem: ViewStyle;
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
    marginTop: Dimensions.get("window").height > 600 ? 20 : 10,
    width: 300,
    maxWidth: "80%",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  listContainer: {
    flex: 1,
    width: "80%",
  },
  list: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  listItem: {
    width: Dimensions.get("window").width > 350 ? "60%" : "90%",
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default GameScreen;
