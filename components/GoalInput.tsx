import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

interface GoalInputProps {
  addGoal: (goal: string) => void;
  isVisible: boolean;
  closeInput: () => void;
}

function GoalInput({ addGoal, isVisible, closeInput }: GoalInputProps) {
  const [enteredGoal, setEnteredGoal] = useState<string>("");

  function goalInputHandler(text: string): void {
    setEnteredGoal(text);
  }

  function addGoalHandler() {
    addGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <View style={styles.buttons}>
          <Button title="CANCEL" onPress={closeInput} color="red" />

          <Button title="ADD" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default GoalInput;
