import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "../../components/Themed";

import Header from "../../components/Header";

import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NovaLeituraButton from "../../components/NovaLeituraButton";

function New() {
  return (
    <View style={styles.container}>
      <Header backLink={true} />
      <NovaLeituraButton />
    </View>
  );
}

export default New;
