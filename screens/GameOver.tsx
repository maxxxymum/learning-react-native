import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, ViewStyle, Button } from "react-native";

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onRestartGame: () => void;
}

const GameOverScreen: FunctionComponent<GameOverScreenProps> = ({
  roundsNumber,
  userNumber,
  onRestartGame,
}) => {
  return (
    <View style={styles.screen}>
      <Text>The game is Over!</Text>
      <Text>Number of rounds: {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={onRestartGame} />
    </View>
  );
};

interface Styles {
  screen: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
