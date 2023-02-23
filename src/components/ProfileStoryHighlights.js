import React from "react";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import { iconsData } from "../../assets/objects/iconsData";
import { Octicons } from "@expo/vector-icons";

export default function ProfileStoryHighlights() {
  
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 12,
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
                    alignItems: "center",
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
              </View>
            )
          })
        }
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 13
          }}
        >
          <TouchableOpacity
            style={{
              width: 58,
              height: 58,
              borderRadius: 100,
              borderWidth: 1.2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Octicons name="plus" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}