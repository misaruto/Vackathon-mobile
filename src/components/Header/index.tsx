import React from "react";
import { Image } from "react-native";
import { Text, View, ViewProps } from "../Themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/images/logo.png";

interface Props extends ViewProps {
  title?: string;
  text?: string;
  backLink: Boolean;
}
const Header: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  function handleNavigateBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.header}>
      <View
        lightColor="#1682C2"
        darkColor="#1662ff"
        style={styles.logoAndNavigateContainer}
      >
        {props.backLink && (
          <TouchableOpacity onPress={handleNavigateBack} style={styles.back}>
            <MaterialCommunityIcons
              name="chevron-left"
              color="#fff"
              size={60}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        )}
        <View
          style={styles.logoImgContainer}
          lightColor="#1682C2"
          darkColor="#1662ff"
        >
          <Image
            source={logoImg}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>
      </View>
      {props.text && (
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
