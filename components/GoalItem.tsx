import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export interface Goal {
  id: string;
  value: string;
}

interface GoalItemProps {
  goal: Goal;
  deleteGoal: (id: string) => void;
}

function GoalItem({ goal, deleteGoal }: GoalItemProps) {
  function touchHandler() {
    deleteGoal(goal.id);
  }

  return (
    <TouchableOpacity onPress={touchHandler} activeOpacity={0.8}>
      <View style={styles.goal}>
        <Text>{goal.value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
