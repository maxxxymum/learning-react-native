import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
} from "react-native";

interface Goal {
  key: number;
  value: string;
}

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState<string>("");
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function goalInputHandler(text: string): void {
    setEnteredGoal(text);
  }

  function addGoalHandler() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random(), value: enteredGoal },
    ]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <Button title="ADD" onPress={addGoalHandler} />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
