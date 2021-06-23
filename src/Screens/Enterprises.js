import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Title from "../Components/Title";
import { id, listEnterprises } from "../Store/Actions/actions";
import { useNavigation } from "@react-navigation/core";
import { Ionicons } from "@expo/vector-icons";
const Enterprises = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const enterprises = useSelector((state) => {
    return state.list.enterprises;
  });

  useEffect(() => {
    dispatch(listEnterprises());
  }, []);

  const onlyEnterprise = (value) => {
    dispatch(id(value));
    navigation.navigate("Detail");
  };
  return (
    <View style={styles.container}>
      <Title title="enterprises" />
       <ScrollView style={styles.flatList} showsVerticalScrollIndicator={false}>
      {enterprises.map((item, index) => {
        if (item.city) {
          return (     
            <TouchableOpacity
              style={styles.enterprise}
              key={index}
              onPress={() => onlyEnterprise(item.id)}
            >
              <View>
                <Text style={styles.name}>{item.enterprise_name}</Text>
                <Text style={styles.city}>{item.city}</Text>
              </View>

              <View style={styles.icon}>
                <Ionicons
                  name="chevron-forward-circle-outline"
                  size={24}
                  color="#999"
                />
              </View>
            </TouchableOpacity>
          );
        } else {
          return (
            <View key={index}>
              <Text>Loading...</Text>
            </View>
          );
        }
         
      })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#F6F8FC",
  },
  flatList:{

  },
  enterprise: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    borderLeftColor: "#000",
    borderLeftWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  city: {
    fontWeight: "200",
    fontSize: 12,
    color: "#999",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Enterprises;
