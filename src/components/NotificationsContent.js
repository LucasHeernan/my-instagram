import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NotificationsContent({
  name,
  accountName,
  profileImage,
  follow,
  setFollow,
  posts,
  week,
  month,
  num,
  numW,
  earlier,
  followers,
  following }) {

  const navigation = useNavigation();
  
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: earlier ? null : "space-between",
        alignItems: "center",
        paddingVertical: 12
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.push("FriendProfile", {
            name: name,
            accountName: accountName,
            profileImage: profileImage,
            follow: follow,
            posts: posts,
            followers: followers,
            following: following,
          })
        }
        style={{
          flexDirection: "row",
          justifyContent: earlier ? null : "space-between",
          alignItems: "center",
          maxWidth: earlier ? "80%" : "58%"
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
        {
          week ? <Text style={{ fontSize: 14 }}>
            <Text style={{ fontWeight: "bold" }}>{accountName}</Text> is on Instagram.
            <Text style={{ fontWeight: "bold" }}> Disney</Text> and others millions also follow them.
            <Text style={{ fontWeight: "400", color:"#848484" }}> {num}d</Text>
          </Text> : null
        }
        {
          month ? <Text style={{ fontSize: 14 }}>
            <Text style={{ fontWeight: "bold" }}>{accountName}</Text> started following you.
            <Text style={{ fontWeight: "400", color:"#848484" }}> {num}w</Text>
          </Text> : null
        }
        {
          earlier ? <Text style={{ fontSize: 14 }}>
            <Text style={{ fontWeight: "bold" }}>{name}</Text>,
            <Text style={{ fontWeight: "bold" }}> Disney, Pixar</Text> and others shared {num} photos.
            <Text style={{ fontWeight: "400", color:"#848484" }}> {numW}w</Text>
          </Text> : null
        }
      </TouchableOpacity>
      {
        earlier ? null : (
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
        )
      }
    </View>
  )
}