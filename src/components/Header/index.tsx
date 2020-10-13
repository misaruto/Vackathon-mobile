import React from "react";
import { Text, View, Image, ViewProps } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface Props extends ViewProps {
  title: string;
  text?: string;
  backLink: Boolean;
}
const Header: React.FC<Props> = (props) => {
  const { goBack } = useNavigation();
  function handleNavigateBack() {
    goBack();
  }
  return (
    <View style={styles.header}>
      <View style={styles.logoAndNavigateContainer}>
        {props.backLink && (
          <TouchableOpacity onPress={handleNavigateBack} style={styles.back}>
            <AntDesign name="left" size={24} style={styles.backIcon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        {props.text && <Text style={styles.text}>{props.text}</Text>}
      </View>
      {props.children}
    </View>
  );
};

export default Header;
