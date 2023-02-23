import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileButtons() {

  const [person, setPerson] = useState(false)

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingVertical: 10,
        paddingHorizontal: 5
      }}
    >
      <TouchableOpacity
        style={{
          height: 31,
          width: "43%",
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EFEFEF"
        }}
      >
        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              letterSpacing: 0.9,
              alignSelf:"center"
            }}
          >
            Edit profile
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 31,
          width: "43%",
          borderRadius: 8,
          justifyContent: "center",
          backgroundColor: "#EFEFEF"
        }}
      >
        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              letterSpacing: 0.9,
              alignSelf:"center"
            }}
          >
            Share profile
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setPerson(!person)}
        style={{
          height: 31,
          width: "8%",
          borderRadius: 8,
          justifyContent: "center",
          backgroundColor: "#EFEFEF",
        }}
      >
        <Ionicons name={ person ? "person-add" : "person-add-outline" } size={16} color="black" style={{ alignSelf:"center" }} />
      </TouchableOpacity>
    </View>
  )
}