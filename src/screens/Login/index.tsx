import React, { useEffect } from "react";

import Header from "../../components/Header";

import { useForm } from "react-hook-form";

import styles from "./styles";
import Input from "../../components/Input";
import { ScrollView, Text, View } from "../../components/Themed";
import Button from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Link from "../../components/Link";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const { navigate } = useNavigation();

  function handleNavigateToHome() {
    navigate("BottomTabNavigator");
  }

  const { register, handleSubmit, setValue } = useForm();

  const handleSubmitForm = (data: FormData) => {
    handleNavigateToHome();
  };

  useEffect(() => {
    register("login");
    register("password");
  }, [register]);
  return (
    <View style={styles.container}>
      <Header backLink={false} />
      <View style={styles.formLoginContainer}>
        <Input
          name="login"
          placeHolder="Login"
          onChangeText={(text) => setValue("login", text)}
        />
        <Input
          name="password"
          placeHolder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setValue("password", text)}
        />
        <Button label="Login" onPress={handleSubmit(handleSubmitForm)}>
          <MaterialCommunityIcons name="login" size={30} color="white" />
        </Button>

        <Link label="Recuperar a senha" />
        <Link label={`Não é cliente? \nveja nossas ofertas`}></Link>
      </View>
    </View>
  );
}

export default Login;
