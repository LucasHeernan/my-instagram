import React from "react";
import { View, TouchableOpacity, Image, ScrollView, Text } from "react-native";
import { iconsData } from "../../assets/objects/iconsData";
import { Octicons } from "@expo/vector-icons";

export default function ProfileStoryHighlights({ plus }) {
  
  return (
    <View style={{ paddingBottom: 8 }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 14 }}
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
                    width: 68,
                    height: 68,
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
                      width: "94%",
                      height: "94%",
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
                        width: plus ? "100%" : 18,
                        height: 18,
                        borderRadius: 100,
                        marginTop: 8
                      }}
                    >
                      {
                        plus ?
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: "500",
                            alignSelf: "center"
                          }}
                        >{data.tech}</Text>
                        :
                        <Text style={{ width: "100%", height: "100%" }}>
                          {data.icon}
                        </Text>
                      }
                    </View>
                  ) : (
                    <View
                      key={index}
                      style={{
                        width: plus ? "100%" : 18,
                        height: plus ? null : 18,
                        borderRadius: 100,
                        marginTop: 8
                      }}
                    >
                      {
                        plus ?
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: "500",
                            alignSelf: "center"
                          }}
                        >{data.tech}</Text>
                        :
                        <Image
                          source={data.icon}
                          style={{ width: "100%", height: "100%" }}
                        />
                      }
                    </View>
                  )
                }
              </View>
            )
          })
        }
        {
          plus ? null :
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
                width: 66,
                height: 66,
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
        }
      </ScrollView>
    </View>
  )
}