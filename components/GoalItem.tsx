import React from "react";
import {View, Text, StyleSheet} from 'react-native';

interface GoalItemProps {
  title: string
}

function GoalItem({title}: GoalItemProps) {
  return (
    <View style={styles.goal}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  }
});

export default GoalItem;

