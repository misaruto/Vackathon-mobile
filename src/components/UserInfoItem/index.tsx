import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Avatar, Title } from "react-native-paper";

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
      <View>
        {user.imgUri === "" ? (
          <View style={styles.imageContainer}>
            <SimpleLineIcons
              name="user"
              size={40}
              color="#0a0a0a"
              style={{ textAlign: "center", alignSelf: "center" }}
            />
          </View>
        ) : (
          <Avatar.Image source={{ uri: user.imgUri }} />
        )}
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{user.nome}</Text>
        <Text>
          <SimpleLineIcons name="location-pin" size={14} />
          {user.cidade} - {user.uf}
        </Text>
      </View>
    </View>
  );
};

export default UserInfoItem;
