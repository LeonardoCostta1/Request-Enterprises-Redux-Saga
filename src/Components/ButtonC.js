import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const ButtonC = ({title,...rest}) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: "90%",
    backgroundColor: "#000",
    margin: 12,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ButtonC;
