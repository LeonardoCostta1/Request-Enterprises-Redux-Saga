import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Title = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    height: 70,
    justifyContent: "flex-start",
    alignItems:'center',
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

export default Title;
