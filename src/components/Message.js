import React from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Octicons, Ionicons, Entypo, AntDesign } from "@expo/vector-icons";

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

      <View /* style={{ position:"relative" }} */>
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

      <Image
        source={require("../gallery/profilePictures/userProfile.png")}
        style={{
          position: "absolute",
          bottom: 35,
          left: 15,
          resizeMode: "cover",
          width: 20,
          height: 20,
          borderRadius: 100,
        }}
      />
      
      <Text
        style={{
          fontSize: 20,
          position: "absolute",
          bottom: 18,
          left: 25,
          padding: 15,
          opacity: 0.5
        }}
      >|</Text>
      <Text
        style={{
          fontSize: 10,
          position: "absolute",
          bottom: 0,
          padding: 15
        }}
      >Lucas C 2023 | All rights reserved.</Text>
      <Text
        style={{
          fontSize: 10,
          position: "absolute",
          bottom: 0,
          right: 0,
          padding: 15
        }}
      >Lucas Benitez</Text>

    </View>
  )
}