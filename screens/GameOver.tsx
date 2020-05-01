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
  ScrollView,
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

import useDeviceDimensions from "../hooks/useDeviceDimensions";

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
  const { deviceWidth, deviceHeight } = useDeviceDimensions();

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The game is Over!</TitleText>
        <View
          style={[
            styles.imageContainer,
            {
              width: deviceWidth * 0.7,
              height: deviceWidth * 0.7,
              borderRadius: (deviceWidth * 0.7) / 2,
              marginVertical: deviceHeight / 30,
            },
          ]}
        >
          <Image
            source={{
              uri:
                "https://www.oddizzi.com/wp-content/uploads/2011/01/img-woman-on-summit.jpg",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View
          style={[
            styles.resultContainer,
            { marginVertical: deviceHeight / 60 },
          ]}
        >
          <BodyText
            style={[
              styles.resultText,
              { fontSize: deviceHeight < 400 ? 16 : 20 },
            ]}
          >
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </BodyText>
        </View>

        <MainButton onPress={onRestartGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
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
    paddingVertical: 10,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 20,
  },
  resultText: {
    textAlign: "center",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
