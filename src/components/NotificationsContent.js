import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NotificationsContent({ name, profileImage, follow, setFollow, posts, followers, following }) {

  const navigation = useNavigation();
  
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.push("FriendProfile", {
            name: name,
            profileImage: profileImage,
            follow: follow,
            posts: posts,
            followers: followers,
            following: following,
          })
        }
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "59%"
        }}
      >
        <Image
          source={profileImage}
          style={{
            width: 45,
            height: 45,
            borderRadius: 100,
            marginRight: 17,
          }}
        />
        <Text style={{ fontSize: 15 }}>
          <Text style={{ fontWeight: "bold" }}>{name}</Text>, who
          you might know, is on instagram
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setFollow(!follow)}
        style={{ width: follow ? 77 : 73 }}
      >
        <View
          style={{
            width: "100%",
            height: 30,
            borderRadius: 7,
            backgroundColor: follow ? null : "#0195F7",
            borderWidth: follow ? 1 : 0,
            borderColor: follow ? "#DEDEDE" : null,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: follow ? "black" : "white" }}>
            { follow ? "Following" : "Follow" }
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}