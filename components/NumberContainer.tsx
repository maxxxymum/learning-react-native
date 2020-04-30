import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

import Colors from "../constants/colors";

const NumberContainer: FunctionComponent = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  number: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
      color: Colors.accent,
      fontSize: 22,
  },
});

export default NumberContainer;
