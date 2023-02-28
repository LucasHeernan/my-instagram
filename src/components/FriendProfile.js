import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons, Feather } from "@expo/vector-icons";
import ProfileHeader from "./ProfileHeader";
import ProfileButtons from "./ProfileButtons";
import Suggested from "./Suggested";

export default function FriendProfile({ route, navigation }) {

  const { name, profileImage, post, followers, following } = route.params;
  const [moreFriends, setMoreFriends] = useState(false);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 10,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 6 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Octicons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '92%',
          }}>
          <Text style={{fontSize: 20, marginLeft: 35, fontWeight: 'bold', bottom: 2 }}>
            {name}
          </Text>
          <Feather name="more-vertical" size={20} color='black' style={{ left: 8 }} />
        </View>
      </View>

      <ProfileHeader
        name={name}
        profileImage={profileImage}
        post={post}
        followers={followers}
        following={following}
      />

      <ProfileButtons
        moreFriends={moreFriends}
        setMoreFriends={setMoreFriends}
        name={name}
        friendProfile={true}
      />

      {
        moreFriends ? <Suggested name={name} friendProfile={true} /> : null
      }
      
    </View>
  )
}