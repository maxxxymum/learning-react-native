import React, { FunctionComponent } from "react";
import { TextInput, StyleSheet, StyleProp, ViewStyle, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
}

const Input: FunctionComponent<InputProps> = ({ style, ...props }) => {
  return <TextInput {...props} style={[styles.input, style]} />;
};

interface Styles {
  input: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default Input;
