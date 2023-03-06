import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function MessageContacts({ pluss }) {

  return (
    <View>
      <Text
        style={{
          fontSize: pluss ? 20 : 17,
          fontWeight: pluss ? "700" : "500",
          color: "#0195F7",
          paddingHorizontal: 20,
          paddingVertical: pluss ? 10 : 15,
          marginTop: pluss ? 0 : 10
        }}
      >{ pluss ? "How to reach me" : "¿ How to reach me ?" }</Text>
      
      <TouchableOpacity
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
            width: pluss ? 30 : 37,
            height: pluss ? 30 : 37,
            borderRadius: 100
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", paddingLeft: 15 }}>lucas benitez</Text>
      </TouchableOpacity>
      <TouchableOpacity
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
            width: pluss ? 30 : 37,
            height: pluss ? 30 : 37,
            borderRadius: 100
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", paddingLeft: 15 }}>LucasHeernan</Text>
      </TouchableOpacity>
      <TouchableOpacity
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
            width: pluss ? 30 : 37,
            height: pluss ? 30 : 37,
            borderRadius: 100
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", paddingLeft: 15 }}>+54 9 11 3492-1341</Text>
      </TouchableOpacity>
      <TouchableOpacity
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
            width: pluss ? 30 : 37,
            height: pluss ? 30 : 37,
            borderRadius: 100
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", paddingLeft: 15 }}>lhbenitez2@gmail.com</Text>
      </TouchableOpacity>
    </View>
  )
}