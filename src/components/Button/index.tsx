import React from "react";
import { Text, TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

interface Props extends TouchableOpacityProps {
  label: string;
}
const Button: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
