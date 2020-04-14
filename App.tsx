import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem, { Goal } from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);

  function addGoal(goal: string) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goal },
    ]);

    setIsAddMode(false);
  }

  function deleteGoal(id: string) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />

      <GoalInput
        addGoal={addGoal}
        isVisible={isAddMode}
        closeInput={() => setIsAddMode(false)}
      />

      <FlatList
        keyExtractor={(item) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem goal={itemData.item} deleteGoal={deleteGoal} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
