import React, { Children } from "react";

import { ViewProps } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const Container: React.FC<ViewProps> = (props) => {
  return (
    <LinearGradient {...props} colors={[]}>
      {props.children}
    </LinearGradient>
  );
};
export default Container;
