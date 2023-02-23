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
      <View style={{width: "100%", paddingTop: 15, paddingHorizontal: 15}}>
        <ProfileHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <ProfileButtons />
        <ProfileStoryHighlights />
        <ProfileContent />
      </ScrollView>

    </View>
  )
}
