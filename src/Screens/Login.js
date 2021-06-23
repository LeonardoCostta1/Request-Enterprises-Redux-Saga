import React, { useState } from "react";
import { Image, View, StyleSheet, Dimensions, TextInput } from "react-native";
import logo from "../Assets/img/logo_ioasys.png";
import ButtonC from "../Components/ButtonC";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authentication, listEnterprises } from "../Store/Actions/actions";
import { useNavigation } from "@react-navigation/core";
const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("testeapple@ioasys.com.br");
  const [senha, setSenha] = useState("12341234");
  const sign = async () => {
    await axios
      .post("https://empresas.ioasys.com.br/api/v1/users/auth/sign_in", {
        email: email,
        password: senha,
      })
      .then(function (response) {
        dispatch(
          authentication({
            token: response.headers["access-token"],
            client: response.headers.client,
            uid: response.headers.uid,
          })
        );
        listEnterprises();
        navigation.navigate("Enterprises");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} resizeMode="contain" />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(e) => setEmail(e)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(e) => setSenha(e)}
        value={senha}
      />
      <ButtonC title="Log in" onPress={sign} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: Dimensions.get("window").width * 0.2,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    paddingHorizontal: 20,
  },
});

export default Login;
