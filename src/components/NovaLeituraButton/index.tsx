import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "../Themed";
import styles from "./styles";
function NovaLeituraButton() {
  const navigate = useNavigation();
  function handleNavigateToReadNew() {
    navigate.navigate("New", {
      screen: "ReadNew",
    });
  }
  return (
    <View
      style={styles.novaLeituraContainer}
      lightColor="#1CAAFC"
      darkColor="#00598C"
    >
      <TouchableOpacity
        onPress={handleNavigateToReadNew}
        style={styles.novaLeituraButton}
        lightColor="#1CAAFC"
        darkColor="#00598C"
      >
        <MaterialCommunityIcons
          name="plus"
          size={100}
          color="white"
          style={{ textAlign: "center", margin: 0 }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default NovaLeituraButton;
