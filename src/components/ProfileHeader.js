import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather, Octicons, SimpleLineIcons } from "@expo/vector-icons";

export default function ProfileHeader() {

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 3,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Octicons name="lock" size={14} color="black" style={{ top: 2 }} />
          <Text
            style={{
              fontSize: 21,
              fontWeight: "bold",
              paddingLeft: 6,
              paddingRight: 2
            }}
          >
            lucasheernan
          </Text>
          <TouchableOpacity>
            <Feather name="chevron-down" size={17} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <TouchableOpacity>
            <Feather name="plus-square" size={25} style={{ paddingHorizontal: 18 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons name="menu" size={22} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 3,
            width: "97%",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../gallery/profilePictures/userProfile.png")}
              style={{
                display: "flex",
                resizeMode: "cover",
                width: 80,
                height: 80,
                borderRadius: 100
              }}
            />
          </View>

          <View style={{alignItems: "center"}}>
            <Text style={{fontWeight: "bold", fontSize: 21}}>0</Text>
            <Text>Posts</Text>
          </View>
          <View style={{alignItems: "center"}}>
            <Text style={{fontWeight: "bold", fontSize: 21}}>39</Text>
            <Text>Followers</Text>
          </View>
          <View style={{alignItems: "center"}}>
            <Text style={{fontWeight: "bold", fontSize: 21}}>118</Text>
            <Text>Following</Text>
          </View>

        </View>

        <View style={{ flexDirection: "column" }} >
          <Text style={{ fontSize: 14, fontWeight: "600" }}>
            Lucas Benitez
          </Text>
          <Text style={{ fontSize: 13 }}>
            FullStack Developer
          </Text>
        </View>

      </View>

    </View>
  )
}