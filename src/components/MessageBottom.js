import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function MessageBottom() {

  return (
    <View style={{ position: "absolute", width: "100%", padding: 5, bottom: 0 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 2
        }}
      >
        <Image
          source={require("../gallery/profilePictures/userProfile.png")}
          style={{
            resizeMode: "cover",
            width: 25,
            height: 25,
            borderRadius: 100
          }}
        />
        <Text
          style={{
            paddingRight: 3,
            paddingLeft: 5,
            fontSize: 20,
            fontWeight: "400",
            opacity: 0.5,
            bottom: 0.5
          }}
        >|</Text>
        <Image
          source={require("../gallery/icons/expo_logo.png")}
          style={{
            resizeMode: "cover",
            width: 18,
            height: 18,
            borderRadius: 100,
            marginRight: 3,
            top: 1
          }}
        />
        <Image
          source={require("../gallery/icons/react_logo.png")}
          style={{
            resizeMode: "cover",
            width: 18,
            height: 18,
            borderRadius: 100,
            marginRight: 5,
            top: 1
          }}
        />
        <Image
          source={require("../gallery/icons/js.png")}
          style={{
            resizeMode: "cover",
            width: 18,
            height: 18,
            borderRadius: 100,
            marginRight: 6
          }}
        />
        <Image
          source={require("../gallery/icons/css.png")}
          style={{
            width: 18,
            height: 18,
            top: 0.5
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontWeight: "700",
            opacity: 0.5
          }}
        >Lucas Benitez <FontAwesome name="copyright" size={11} color="black"/> 2023 | All rights reserved.</Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "700",
            opacity: 0.5,
            paddingRight: 15
          }}
        >Contact me</Text>
        <Text style={{ position:"absolute", fontSize: 13, bottom: 0, right: 0 }} >☝🏻</Text>
      </View>
    </View>
  )
}