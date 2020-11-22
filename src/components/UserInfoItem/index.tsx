import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";

import { View, Text } from "../Themed";
import styles from "./styles";
export interface IUserInfoItem {
  nome: string;
  cidade: string;
  uf: string;
  imgUri: string;
}

export interface IUser {
  user: IUserInfoItem;
}
const UserInfoItem: React.FC<IUser> = ({ user }, props) => {
  return (
    <View style={styles.container} {...props}>
      <View style={styles.imageContainer}>
        {user.imgUri === "" ? (
          <SimpleLineIcons
            name="user"
            size={52}
            color="#0a0a0a"
            style={{ textAlign: "center", alignSelf: "center" }}
          />
        ) : (
          <Image source={{ uri: user.imgUri }} style={styles.image} />
        )}
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{user.nome}</Text>
        <Text>
          <SimpleLineIcons name="location-pin" size={12} color="black" />
          {user.cidade} - {user.uf}
        </Text>
      </View>
    </View>
  );
};

export default UserInfoItem;
