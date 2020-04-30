import React, { FunctionComponent } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  Button,
  Image,
  ImageStyle,
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

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
      <TitleText>The game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      
      <BodyText>Number of rounds: {roundsNumber}</BodyText>
      <BodyText>Number was: {userNumber}</BodyText>
      <Button title="NEW GAME" onPress={onRestartGame} />
    </View>
  );
};

interface Styles {
  screen: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
