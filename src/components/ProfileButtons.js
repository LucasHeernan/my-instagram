import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileButtons({ suggestions, setSuggestions, moreFriends, setMoreFriends, friendProfile }) {

  const navigate = useNavigation();
  const [follow, setFollow] = useState(false);

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
        onPress={ friendProfile ? () => setFollow(!follow) : () => navigate.push("ProfileEdit") }
        style={{
          height: 31,
          width: "43%",
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: friendProfile ? ( follow ? "#EFEFEF" : '#0195F7' ) : "#EFEFEF"
        }}
      >
        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              letterSpacing: 0.5,
              alignSelf:"center",
              color: friendProfile ? ( follow ? "black" : "white" ) : "black"
            }}
          >
            { friendProfile ? ( follow ? "Following" : "Follow" ) : "Edit profile" }
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
              letterSpacing: 0.5,
              alignSelf:"center"
            }}
          >
            { friendProfile ? "Message" : "Share profile" }
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => friendProfile ? setMoreFriends(!moreFriends) : setSuggestions(!suggestions)}
        style={{
          height: 31,
          width: "8%",
          borderRadius: 8,
          justifyContent: "center",
          backgroundColor: "#EFEFEF",
        }}
      >
        <Ionicons
          name={ friendProfile ? ( moreFriends ? "person-add" : "person-add-outline" ) : ( suggestions ? "person-add" : "person-add-outline" ) }
          size={16}
          color="black"
          style={{ alignSelf:"center" }}
        />
      </TouchableOpacity>
    </View>
  )
}