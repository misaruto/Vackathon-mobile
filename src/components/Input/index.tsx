import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { TextInput, TextInputProps, View, Text } from "react-native";
import styles from "./styles";

interface Props extends TextInputProps {
  name: string;
  label?: string;
}

const Input: React.FC<Props> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);
  return (
    <>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <TextInput ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <Text style={styles.inputError}>{error}</Text>}
    </>
  );
};
export default Input;
