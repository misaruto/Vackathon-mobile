import React, { Ref, RefObject } from "react";

import { TextInput, TextInputProps, Text } from "react-native";
import { View } from "../Themed";
import styles from "./styles";

interface Props extends TextInputProps {
  name: string;
  placeHolder?: string;
  error?: string;
}

const Input: React.FC<Props> = ({ name, placeHolder, error, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        placeholder={placeHolder}
        {...rest}
      />
      {error && <Text style={styles.inputError}>{error}</Text>}
    </View>
  );
};
export default Input;
