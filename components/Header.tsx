import React from "react";
import { View, StyleSheet, Platform, ViewStyle, TextStyle } from "react-native";

import Colors from "../constants/colors";
import TitleText from "../components/TitleText";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{title}</TitleText>
    </View>
  );
}

interface Styles {
  headerBase: ViewStyle;
  headerIOS: ViewStyle;
  headerAndroid: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: "white",
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  title: {
    color: Platform.OS === "ios" ? Colors.primary : "white",
  },
});

export default Header;
