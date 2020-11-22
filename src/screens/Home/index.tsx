import React, { useState } from "react";
import { Text, View } from "../../components/Themed";

import SpeechToText from "../../components/SpeechToText";
import UserInfoItem from "../../components/UserInfoItem";
import Header from "../../components/Header";

import styles from "./styles";
import LeituraItem from "../../components/LeituraItem";

function Home() {
  const user = {
    nome: "José Francisco Maia (eu)",
    cidade: "Mercês",
    uf: "MG",

    imgUri:
      "https://lh3.googleusercontent.com/CM9RI1cAokz7YZDClsngmbgT86CveA1Ze9s-y_0Z-EvYvxP6mI-BE63gGVrD_CbFhdmkeBwpMUkp2crDV6MxxJKjlmYX4QN7dITw_yX3NY2VoVvRmUMhGR4LDDhXSgZXK-crfEer7qm1zQf1L0fwupz4RrpZGgxMsdoCW_SA1yLgiVN4wwOrfTezmK2AoPpaVvO4lQrtrjpJ-BpDzLhKTX7gqU60nEXzeeMbIzIUEdPg4uKaxtEcfcuUkGe9waXNdpK5A1lyjKad6wHBl6YB8Akzsu0BQ7x2aGCkvFmtPojtYg1s0i1u3wBvD_G5sTfwoWkrhS-bJKuC8AA_rADvigfY4a844e16nWVGfxI8nssmw3ji00_jh2tkKRYWfKnZ-olaz3_RfZg6yVbvUqQ1Lh54058vucG9ILdfpnzpzx6l013Mgw4ZDVE3saGuPwdBte2c-6ocNHzPg3Hm9XFbzIp8xWeRLqOyaYyPJ5B6iTB4bTsXpXHjbZb3Du_WKUpTewtx2T1QM2VIqKr9EYeXL1nBu711nQq6t4Wd1UGQnkram9z-zBicMboVLuq_CbwFL3wPOVtaNYI6VqfM56lXJsTe2T01ca8ed0dhTfBJavo_IgKnfFJ6QIbbGAylJnvkhr5efcHzHep5rQDfttpUe7IxqPAGE0S2ClaQYsuMZhglJMpnxWfF_ARTt33SxVw=s455-no?authuser=0",
  };
  const laticionios = {
    nome: "Laticínios IF Sudeste MG",
    cidade: "Rio Pomba",
    uf: "MG",

    imgUri:
      "https://maiseducacao.uai.com.br/wp-content/uploads/sites/4/2019/06/if-sudeste-mg-instituto-federal-de-educacao-ciencia-e-tecnologia-do-sudeste-de-minas-950x714.jpg",
  };
  const leitura = {
    nome: "Proteína",
    valor: "3,25",
    unidade: "%",
    data: "12/11/2020",
  };
  const leitura2 = {
    nome: "Gorduras",
    valor: "3,67",
    unidade: "%",
    data: "12/11/2020",
  };
  const leitura3 = {
    nome: "CCS",
    valor: "300.000",
    unidade: "UFC/ml",
    data: "12/11/2020",
  };

  const leitura4 = {
    nome: "CBT",
    valor: "290.000",
    unidade: "CEL/ml",
    data: "12/11/2020",
  };

  return (
    <View style={styles.container}>
      <Header backLink={false} />
      <View>
        <UserInfoItem user={user} />
        <UserInfoItem user={laticionios} />
      </View>
      <View style={styles.ultimaLeituraContainer}>
        <Text style={styles.ultimaLeituraTitle}>
          Ultima Leitura
          <Text style={styles.ultimaLeituraData}>{leitura.data}</Text>
        </Text>
        <LeituraItem leitura={leitura} />
        <LeituraItem leitura={leitura2} />
        <LeituraItem leitura={leitura3} />
        <LeituraItem leitura={leitura4} />
      </View>
    </View>
  );
}

export default Home;
