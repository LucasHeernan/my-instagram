import React from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { iconsData } from "../../assets/objects/iconsData";
import MessageContacts from "./MessageContacts";
import MessageBottom from "./MessageBottom";

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
        <Text style={{ fontSize: 20, fontWeight: "bold", bottom: 2 }}>Contact</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="checkmark" size={30} color="#0195F7" style={{ bottom: 2 }} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: "center",
          alignContent: "center",
          paddingVertical: 7
        }}
      >
        <Image
          source={require("../gallery/profilePictures/userProfile.png")}
          style={{
            resizeMode: "cover",
            width: 120,
            height: 120,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: "#0195F7",
            marginBottom: 5
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "700" }}>
          Lucas Benitez
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "500", color: "#0195F7" }}>
          FullStack Developer
        </Text>
      </View>
      
      <View style={{ paddingVertical: 10 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            iconsData.map((data, index) => {
              return typeof data.icon === "string" ? (
                <View
                  key={index}
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 100,
                    backgroundColor: "white",
                    marginVertical: 10,
                    marginHorizontal: 5
                  }}
                >
                  <Text style={{ width: "100%", height: "100%" }}>
                    {data.icon}
                  </Text>
                </View>
              ) : (
                <View
                  key={index}
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 100,
                    backgroundColor: "white",
                    marginVertical: 10,
                    marginLeft: data.tech === "javascript" ? 20 : 7,
                    marginRight: 7
                  }}
                >
                  <Image
                    source={data.icon}
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
              )
            })
          }
        </ScrollView>
      </View>

      <MessageContacts />

      <MessageBottom />
      
    </View>
  )
}