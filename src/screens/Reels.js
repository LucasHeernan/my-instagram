import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Reels() {

  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: "white",
        position: "relative",
        backgroundColor: "black",
      }}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 1,
          padding: 10,
        }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white"}}>
          Reels
        </Text>
        <Feather name="camera" size={25} color="white" />
      </View>
    </View>
  );
}
