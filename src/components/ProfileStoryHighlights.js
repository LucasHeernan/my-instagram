import React from "react";
import { View, TouchableOpacity, Image, ScrollView, Text } from "react-native";
import { iconsData } from "../../assets/objects/iconsData";
import { Octicons } from "@expo/vector-icons";

export default function ProfileStoryHighlights() {
  
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 12
        }}
      >
        {
          iconsData.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingHorizontal: 6
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: "#E6E6E6",
                    marginHorizontal: 5,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={data.img}
                    style={{
                      resizeMode: "cover",
                      width: "92%",
                      height: "92%",
                      borderRadius: 100,
                      backgroundColor: "white",
                      borderWidth: 0.5,
                      borderColor: "#F2F2F2"
                    }}
                  />
                </TouchableOpacity>
                {
                  typeof data.icon === "string" ? (
                    <View
                      key={index}
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 100,
                        marginTop: 8,
                        backgroundColor: "white"
                      }}
                    >
                      <Text
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        {data.icon}
                      </Text>
                    </View>
                  ) : (
                    <View
                      key={index}
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 100,
                        marginTop: 8,
                        backgroundColor: "white"
                      }}
                    >
                      <Image
                        source={data.icon}
                        style={{
                          width: "100%",
                          height: "100%"
                        }}
                      />
                    </View>
                  )
                }
              </View>
            )
          })
        }
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 13,
            flexDirection: "column"
          }}
        >
          <TouchableOpacity
            style={{
              width: 61,
              height: 61,
              borderRadius: 100,
              borderWidth: 1.2,
              alignItems: "center",
              justifyContent: "center",
              top: 1
            }}
          >
            <Octicons name="plus" size={25} color="black" />
          </TouchableOpacity>
          <Text style={{ marginTop: 8, top: 1 }} >And more</Text>
        </View>
      </ScrollView>
    </View>
  )
}