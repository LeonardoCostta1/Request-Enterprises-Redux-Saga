import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Title from "../Components/Title";
const Detail = () => {
  const enterprises = useSelector((state) => {
    return state.id.enterprise
  });
  useEffect(()=>{
    enterprises
  },)

  return (
    <View style={styles.container}>
      <Title title="enterprise description" />
      <View style={styles.description}>
        <Text style={styles.name}>{enterprises.enterprise_name}</Text>
        <Text style={styles.descriptionText}>{enterprises.description}</Text>
        <View style={styles.location}>
          <Text style={styles.box}>{enterprises.city}</Text>
          <Text style={styles.box}>{enterprises.country}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  description: {},
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  descriptionText: {
    textAlign: "justify",
  },
  location: {
    flexDirection: "row",
    marginTop: 20,
  },
  box: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default Detail;
