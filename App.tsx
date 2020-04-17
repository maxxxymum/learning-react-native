import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGame";
import GameScreen from "./screens/Game";
import GameOverScreen from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [guessRounds, setGuessRounds] = useState(0);

  function startGameHandler(selectedNumber: number) {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  function gameOverHandler(numberOfRounds: number) {
    setGuessRounds(numberOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = <GameOverScreen />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />

      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
