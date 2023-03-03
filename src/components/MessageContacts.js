import React from "react";
import { View, Text, Image } from "react-native";

export default function MessageContacts() {

  return (
    <View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "500",
          color: "#0195F7",
          paddingHorizontal: 20,
          paddingVertical: 15,
          marginTop: 10
        }}
      >¿ How to reach me ?</Text>
      
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10
        }}
      >
        <Image
          source={require("../gallery/icons/linkedin_logo.png")}
          style={{
            resizeMode: "cover",
            width: 37,
            height: 37,
            borderRadius: 100
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", paddingLeft: 15 }}>lucas benitez</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10
        }}
      >
        <Image
          source={require("../gallery/icons/github_logo.png")}
          style={{
            resizeMode: "cover",
            width: 37,
            height: 37,
            borderRadius: 100
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", paddingLeft: 15 }}>LucasHeernan</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10
        }}
      >
        <Image
          source={require("../gallery/icons/whatsapp_logo.png")}
          style={{
            resizeMode: "cover",
            width: 37,
            height: 37,
            borderRadius: 100
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", paddingLeft: 15 }}>+54 9 11 3492-1341</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10
        }}
      >
        <Image
          source={require("../gallery/icons/gmail_logo.png")}
          style={{
            resizeMode: "cover",
            width: 37,
            height: 37,
            borderRadius: 100
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", paddingLeft: 15 }}>lhbenitez2@gmail.com</Text>
      </View>
    </View>
  )
}