import React, { FunctionComponent } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface CardProps {
  style?: StyleProp<ViewStyle>;
}

const Card: FunctionComponent<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

interface Styles {
  card: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
