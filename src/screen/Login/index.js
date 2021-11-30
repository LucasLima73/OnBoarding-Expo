import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import styles from "./style";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Todo App</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        type="text"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        type="text"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {errorLogin === true ? (
        <View style={styles.contentAlert}>
          {" "}
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}>Email ou senha inválidos</Text>
        </View>
      ) : (
        <View></View>
      )}
      {email === "" || password === "" ? (
        <TouchableOpacity style={styles.buttonLogin} disabled={true}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonLogin} onPress={handleSignUp}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.registration}>
        Ainda não tem uma conta?{" "}
        <Text
          style={styles.linkSubscribe}
          onPress={() => navigation.navigate("NewUser")}
        >
          Clique aqui
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

export default Login;

