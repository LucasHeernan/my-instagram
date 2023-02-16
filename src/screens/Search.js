import React, { useState } from "react";
import { View, ScrollView, Dimensions, StatusBar, Image, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import SearchContent from "../components/SearchContent";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Search() {

  const [image, setImage] = useState(null);

  const getImage = (currentImage) => {
    setImage(currentImage)
  }

  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar />
        <SearchContent getImage={getImage} />
      </ScrollView>
      {
        image ? (
          <View
            style={{
              position: "absolute",
              zIndex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(52,52,52,0.8)",
            }}
          >
            <StatusBar backgroundColor="#525252" barStyle="dark-content" />
            <View
              style={{
                position: "absolute",
                top: height / 6,
                left: width / 25,
                backgroundColor: "white",
                width: "92%",
                height: 465,
                borderRadius: 12,
                zIndex: 1,
                elevation: 50
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 12,
                  paddingHorizontal: 15
                }}
              >
                <Image
                  source={image}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                  }}
                />
                <View style={{ paddingLeft: 8 }}>
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>
                    profile_image
                  </Text>
                </View>
              </View>
              <Image source={image} style={{width: "100%", height: "80%"}} />
              <View
                style={{
                  justifyContent: "space-around",
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 6,
                  paddingBottom: 3
                }}
              >
                <Feather name="heart" size={23} />
                <Ionicons name="person-circle-outline"size={27} />
                <Feather name="send" size={22} />
                <Feather name="more-vertical" size={20} />
              </View>

            </View>

          </View>
        ) : null
      }
    </View>
  )
}
