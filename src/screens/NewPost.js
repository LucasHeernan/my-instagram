import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import NewPostGallery from "../components/NewPostGallery";

export default function NewPost() {

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white", position:"relative" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          paddingVertical: 10
        }}
      >
        <TouchableOpacity>
          <AntDesign name="close" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 21, fontWeight: "900", right: 80 }}>
          New post
        </Text>
        <TouchableOpacity>
          <AntDesign name="arrowright" size={28} color="#0195F7" />
        </TouchableOpacity>
      </View>

      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", height: "100%", alignItems: "center", paddingVertical: 25 }}>
          <Image
            source={require("../../assets/wood.jpg")}
            style={{ position:"absolute", width: "100%" }}
          />
          <View
            style={{
              position: "relative",
              width: "90%",
              backgroundColor: "#FBFCFC",
              borderRadius: 10,
              padding: 15,
              elevation: 10,
              shadowColor: "black",
              shadowOpacity: 0.5,
              shadowRadius: 10,
              shadowOffset: {
                height: 5,
                width: 5
              }
            }}
          >
            <Image
              source={require("../../assets/sheet.jpg")}
              style={{ width: "100%" }}
            />
            <Image
              source={require("../../assets/sheet2.jpg")}
              style={{ width: "100%" }}
            />
            <View style={{ position: "absolute", paddingHorizontal: 18, paddingVertical: 15 }}>
              <Text style={{ lineHeight: 24, fontWeight: "400" }}>
                <Text style={{ fontSize: 16, fontWeight: "900", color: "#0195F7" }}>ABOUT THIS PROYECT</Text>{"\n"}
                This project is a replica of the entire visual interface of Instagram, 
                in which you can take a tour of all the screens and see how similar it is to the original.{"\n"}
                The app was built entirely with
                <Text style={{ fontWeight: "900" }}> Javascript </Text> using
                <Text style={{ fontWeight: "900" }}> React Native</Text>,
                <Text style={{ fontWeight: "900" }}> Expo</Text> and pure
                <Text style={{ fontWeight: "900" }}> CSS</Text> for the styles.
                {"\n"}{"\n"}
                <Text style={{ fontSize: 16, fontWeight: "900", color: "#0195F7" }}>ABOUT ME</Text>{"\n"}
                <Text style={{ fontSize: 17 }}>👋🏼</Text> Hi! My name is<Text style={{ fontWeight: "900" }}> Lucas Hernan Benitez</Text>, I am a
                <Text style={{ fontWeight: "900" }}> Full Stack developer</Text> with a <Text style={{ fontWeight: "900" }}>Front end</Text> orientation from Argentina. 
                I am looking for my first job in the IT field with aspirations to further expand the knowledge already obtained. 
                I seek to be part of a team from which I can learn their skills and qualities.{"\n"}
                <Text style={{ lineHeight: 25 }}>
                I consider myself a committed and persevering person when it comes to meeting the goals set, 
                dedicating myself proactively, adapting to different scenarios, achieving solutions to existing problems. 
                This project is a sample of what I can achieve if I set my mind to it.
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <NewPostGallery />

    </View>
  )
}