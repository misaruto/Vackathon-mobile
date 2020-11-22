import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import Header from "../../components/Header";
import HistoryItem from "../../components/HistoryItem";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "../../components/Themed";
import styles from "./styles";
function History() {
  const history = {
    id: "1",
    data: "12/11/2020",
    hora: "09:23",
  };
  return (
    <View style={styles.container}>
      <Header backLink={true} />
      <TouchableOpacity
        lightColor="#1CAAFC"
        darkColor="#00598C"
        style={styles.verEvolucaoContainer}
      >
        <Text style={styles.verEvolucaoTexto}>
          Ver evolução ao longo do tempo
        </Text>
        <MaterialCommunityIcons
          name="chart-line"
          size={30}
          color="white"
          style={{}}
        />
      </TouchableOpacity>

      <ScrollView style={{ height: "50%" }}>
        <HistoryItem history={history} />
        <HistoryItem history={history} />
        <HistoryItem history={history} />
        <HistoryItem history={history} />
        <HistoryItem history={history} />
        <HistoryItem history={history} />
        <HistoryItem history={history} />
        <HistoryItem history={history} />
        <HistoryItem history={history} />
        <HistoryItem history={history} />
        <HistoryItem history={history} />
      </ScrollView>
    </View>
  );
}

export default History;
