import React from "react";
import { Text, TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

interface Props extends TouchableOpacityProps {
  label: string;
}
const Link: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <TouchableOpacity style={styles.link} {...rest}>
      <Text style={styles.linkText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Link;
