import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons, Feather } from "@expo/vector-icons";
import ProfileHeader from "./ProfileHeader";
import ProfileButtons from "./ProfileButtons";
import Suggested from "./Suggested";

export default function FriendProfile({ route, navigation }) {

  const { name, accountName, profileImage, posts, followers, following } = route.params;
  const [moreFriends, setMoreFriends] = useState(true);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white"
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Octicons name="arrow-left" size={24} color="black" style={{ marginRight: 30 }} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "85%"
          }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", bottom: 2 }}>
            {accountName}
          </Text>
          <TouchableOpacity>
            <Feather name="more-vertical" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ProfileHeader
        name={name}
        profileImage={profileImage}
        posts={posts}
        followers={followers}
        following={following}
      />

      <ProfileButtons
        moreFriends={moreFriends}
        setMoreFriends={setMoreFriends}
        name={name}
        friendProfile={true}
      />

      { moreFriends ? <Suggested name={name} friendProfile={true} /> : null }
      
    </View>
  )
}