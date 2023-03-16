import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { storyData } from "../../assets/objects/storyData";

export default function Stories() {

	const navigation = useNavigation();

	return (
    <View style={{ borderBottomColor: "#D8D8D8", borderBottomWidth: 0.29 }}>  
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 6 }}
      >
        {
          storyData.map((data, index) => {
            const [story, setStory] = useState(false);
            return data.id === 29 ? (
              <View
                key={index}
                style={{
                  paddingHorizontal: 8,
                  position: "relative",
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    bottom: 19,
                    right: 10,
                    zIndex: 1
                  }}
                >
                  <Entypo
                    name="circle-with-plus"
                    size={20}
                    color="#0095fc"
                    style={{ backgroundColor: "white", borderRadius: 100 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    width: 72,
                    height: 72,
                    backgroundColor: "white",
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={data.image}
                    style={{
                      resizeMode: "cover",
                      width: "90%",
                      height: "90%",
                      borderRadius: 100,
                      backgroundColor: "white"
                    }}
                  />
                </View>
                <Text style={{ textAlign: "center", fontSize: 11, fontWeight:"500" }}>
                  {data.name}
                </Text>
              </View>
            ) : (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() => navigation.push("Story", {
                  name: data.name,
                  image: data.image,
                  story: data.story,
                  setStory
                })}
                style={{ flexDirection: "column", paddingHorizontal: 8, position: "relative" }}
              >
                <View
                  style={{
                    width: 75,
                    height: 75,
                    backgroundColor: "white",
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 2
                  }}
                >
                  <View
                    style={{
                      width: story ? "95.5%" : "93%",
                      height: story ? "95.5%" : "93%",
                      borderRadius: 100,
                      backgroundColor: "white",
                      position: "absolute",
                      zIndex: 1
                    }}
                  >
                  </View>
                  {
                    story ?
                      <View
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 100,
                          backgroundColor: "#E6E6E6"
                        }}
                      ></View> : 
                      <Image
                        source={require("../../assets/story.png")}
                        style={{
                          width: "100%",
                          height: "100%",
                          resizeMode: "contain",
                        }}
                      />
                  }
                  
                  <Image
                    source={data.image}
                    style={{
                      resizeMode: "cover",
                      width: "85%",
                      height: "85%",
                      borderRadius: 100,
                      backgroundColor: "white",
                      borderWidth: story ? 0.5 : 0,
                      borderColor: story ? "#BDBDBD" : null,
                      position: "absolute",
                      zIndex: 1
                    }}
                  />
                </View>
                <Text style={{ textAlign: "center", fontSize: 11, fontWeight:"500" }}>
                  {data.name}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
	)
}
