import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingVertical: 10,
        position: "relative",
        paddingRight: 9
      }}
    >
      <Ionicons
        name="search"
        size={18}
        style={{
          opacity: 0.8,
          position: "absolute",
          zIndex: 1,
          left: 26,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={{
          width: "94%",
          backgroundColor: "#EBEBEB",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
          padding: 4,
          paddingLeft: 45,
        }}
      />
    </View>
  );
};
