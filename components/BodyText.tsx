import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

const BodyText: React.FunctionComponent = ({ children }) => (
  <Text style={styles.body}>{children}</Text>
);

interface Styles {
  body: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  body: {
    fontFamily: "open-sans",
  },
});

export default BodyText;
