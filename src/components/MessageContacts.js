import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

export default function MessageContacts({ plus }) {

  const whatsappUrl = "whatsapp://send?text=Hola! 👋🏼&phone=5491134921341";
  const gmail = "mailto:lhbenitez2@gmail.com?subject=Hello%20from%20Instagram%20clone";

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: plus ? 20 : 17,
          fontWeight: plus ? "700" : "500",
          color: "#0195F7",
          paddingHorizontal: 20,
          paddingVertical: plus ? 10 : 15,
          marginTop: plus ? 0 : 10
        }}
      >{ plus ? "How to reach me" : "¿ How to reach me ?" }</Text>
      
      <TouchableOpacity
        onPress={() => handleLinkPress("https://www.linkedin.com/in/lucas-hernan-benitez/")}
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
            width: plus ? 30 : 37,
            height: plus ? 30 : 37,
            borderRadius: 100
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", paddingLeft: 15 }}>lucas benitez</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleLinkPress("https://github.com/LucasHeernan")}
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
            width: plus ? 30 : 37,
            height: plus ? 30 : 37,
            borderRadius: 100
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", paddingLeft: 15 }}>LucasHeernan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleLinkPress(whatsappUrl)}
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
            width: plus ? 30 : 37,
            height: plus ? 30 : 37,
            borderRadius: 100
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", paddingLeft: 15 }}>+54 9 11 3492 1341</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleLinkPress(gmail)}
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
            width: plus ? 30 : 37,
            height: plus ? 30 : 37,
            borderRadius: 100
          }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", paddingLeft: 15 }}>lhbenitez2@gmail.com</Text>
      </TouchableOpacity>
    </View>
  )
}