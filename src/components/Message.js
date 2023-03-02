import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Octicons, Ionicons, Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";

export default function Message() {

  const navigation = useNavigation();

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white", position:"relative" }}>
      <View
        style={{
          flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 15
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Octicons name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", bottom: 2 }}>Contacts</Text>
        <TouchableOpacity>
          <Ionicons name="happy-outline" size={24} />
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginVertical: 7
          }}
        >
          <Image
            source={require("../gallery/profilePictures/userProfile.png")}
            style={{
              resizeMode: "cover",
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
          <View style={{ flexDirection: "column" }} >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Lucas Benitez
            </Text>
            <Text style={{ fontSize: 15 }}>
              FullStack Developer
            </Text>
          </View>
        </View>
        
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 20
            }}
          >
            <Ionicons name="logo-whatsapp" size={31} color="black" />
            <Text style={{ paddingLeft: 15 }}>1134921341</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 20
            }}
          >
            <Entypo name="linkedin-with-circle" size={31} color="black" />
            <Text style={{ paddingLeft: 15 }}>Lucas Benitez</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 20
            }}
          >
            <AntDesign name="github" size={30} color="black" />
            <Text style={{ paddingLeft: 15 }}>LucasHeernan</Text>
          </View>
        </View>

      </View>

      <View style={{ position: "absolute", width: "100%", padding: 5, bottom: 0,/*  backgroundColor: "lightblue" */ }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
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
              paddingHorizontal: 3,
              fontSize: 20,
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
              marginRight: 3,
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
              marginRight: 4
            }}
          />
          <Image
            source={require("../gallery/icons/css.png")}
            style={{
              width: 18,
              height: 18,
              top: 1
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
              fontWeight: "500",
              opacity: 0.5
            }}
          >Lucas Benitez <FontAwesome name="copyright" size={11} color="black" /> 2023 | All rights reserved.</Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "500",
              opacity: 0.5,
              paddingRight: 15
            }}
          >Contact me</Text>
          <Text style={{ position:"absolute", fontSize: 12, bottom: 1, right: 0 }} >☝🏻</Text>
        </View>
      </View>

    </View>
  )
}