import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/Routes/stack";
import { Provider} from "react-redux";
import store from "./src/Store";
export default function App() {
  return (
    <Provider store={store}>
        <StatusBar />
        <Routes />
    </Provider>
  );
}
