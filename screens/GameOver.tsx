import React, { FunctionComponent } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  Image,
  ImageStyle,
  Text,
  TextStyle,
  Dimensions,
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

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
          source={{
            uri:
              "https://www.oddizzi.com/wp-content/uploads/2011/01/img-woman-on-summit.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>

      <MainButton onPress={onRestartGame}>NEW GAME</MainButton>
    </View>
  );
};

interface Styles {
  screen: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  resultContainer: ViewStyle;
  resultText: TextStyle;
  highlight: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
