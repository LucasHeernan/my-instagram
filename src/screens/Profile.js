import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Feather, SimpleLineIcons, Octicons } from "@expo/vector-icons";
import ProfileHeader from "../components/ProfileHeader";
import ProfileButtons from "../components/ProfileButtons";
import ProfileStoryHighlights from "../components/ProfileStoryHighlights";
import ProfileContent from "../components/ProfileContent";

export default function Profile() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white"
      }}
    >
      <View
        style={{
          paddingTop: 15,
          paddingHorizontal: 15,
          paddingBottom: 10
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 3
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Octicons name="lock" size={14} color="black" style={{ top: 2 }} />
            <Text
              style={{
                fontSize: 21,
                fontWeight: "bold",
                paddingLeft: 6,
                paddingRight: 2
              }}
            >
              lucasheernan
            </Text>
            <TouchableOpacity>
              <Feather name="chevron-down" size={17} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <TouchableOpacity>
              <Feather name="plus-square" size={25} style={{ paddingHorizontal: 18 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SimpleLineIcons name="menu" size={22} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} >
        <ProfileHeader />
        <ProfileButtons />
        <ProfileStoryHighlights />
        <ProfileContent />
      </ScrollView>
      

    </View>
  )
}
