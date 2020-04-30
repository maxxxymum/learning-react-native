import React from "react";
import { Text, StyleSheet, TextStyle, StyleProp } from "react-native";

interface TitleTextProps {
  style?: StyleProp<TextStyle>;
}

const TitleText: React.FunctionComponent<TitleTextProps> = ({
  style,
  children,
}) => <Text style={[styles.body, style]}>{children}</Text>;

interface Styles {
  body: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  body: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default TitleText;
