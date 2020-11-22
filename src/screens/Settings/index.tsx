import React, { useState } from "react";
import { Text, View } from "../../components/Themed";

import Header from "../../components/Header";

import styles from "./styles";

function Settings() {
  return (
    <View style={styles.container}>
      <Header backLink={true} />
    </View>
  );
}

export default Settings;
