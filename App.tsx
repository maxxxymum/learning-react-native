import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

interface Goal {
  key: number;
  value: string;
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function addGoal(goal: string) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random(), value: goal },
    ]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput addGoal={addGoal} /> 

      <FlatList
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
