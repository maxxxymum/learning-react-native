import React from "react";
import { Text, StyleSheet, TextStyle, StyleProp } from "react-native";

interface BodyTextProps {
  style?: StyleProp<TextStyle>;
}

const BodyText: React.FunctionComponent<BodyTextProps> = ({
  style,
  children,
}) => <Text style={[styles.body, style]}>{children}</Text>;

interface Styles {
  body: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  body: {
    fontFamily: "open-sans",
  },
});

export default BodyText;
