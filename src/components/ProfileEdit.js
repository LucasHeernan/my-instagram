import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

export default function ProfileEdit({ navigation }) {

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close-outline" size={35} />
          </TouchableOpacity>
          <Text style={{ fontSize: 19, fontWeight: "bold", right: 80, bottom: 1 }}>
            Edit Profile
          </Text>
          <TouchableOpacity onPress={() => { navigation.goBack()}}>
            <Ionicons name="checkmark" size={30} color="#0195F7" />
          </TouchableOpacity>
        </View>

        <View style={{ padding: 5, alignItems: "center" }}>
          <TouchableOpacity>
            <Image
              source={require("../gallery/profilePictures/userProfile.png")}
              style={{ width: 90, height: 90, borderRadius: 100 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 17, color: "#0195F7", paddingTop: 5 }}>
              Change profile photo
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ padding: 15 }}>
          <View>
            <Text style={{ fontSize: 12, opacity: 0.5 }}>
              Name
            </Text>
            <TextInput
              placeholder="name"
              defaultValue="Lucas Benitez"
              style={{
                fontSize: 15,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD"
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontSize: 12, opacity: 0.5 }}>
              Username
            </Text>
            <TextInput
              placeholder="accountname"
              defaultValue="lucasheernan"
              style={{
                fontSize: 15,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <TextInput
              placeholder="Pronouns"
              style={{
                fontSize: 15,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
              }}
            />
          </View>
          <View style={{ paddingTop: 10 }}>
            <TextInput
              placeholder="Bio"
              style={{
                fontSize: 15,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD"
              }}
            />
          </View>
        </View>

        <View>
          <View style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 15 }}>Add channel</Text>
          </View>
          <View
            style={{
              paddingTop: 15,
              paddingBottom: 25,
              paddingHorizontal: 15,
              borderBottomWidth: 1,
              borderColor: "#EFEFEF"
            }}
          >
            <Text style={{ fontSize: 15 }}>Add link</Text>
          </View>
          <View style={{ paddingVertical: 15, paddingHorizontal: 15}}>
            <Text style={{ fontSize: 15, fontWeight: "500" }} >Connected Facebook Page</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
              paddingHorizontal: 15
            }}
          >
            <Text style={{ fontSize: 15 }}>Page</Text>
            <TouchableOpacity style={{ opacity: 0.5 }} >
              <Entypo name="chevron-small-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 15,
              paddingHorizontal: 15,
              paddingVertical: 12,
              color: "#0195F7",
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: "#EFEFEF",
            }}
          >
            Switch to professional account
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginVertical: 15,
              paddingHorizontal: 15,
              color: "#0195F7",
              borderColor: "#EFEFEF",
            }}
          >
            Create avatar
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingHorizontal: 15,
              paddingBottom: 15,
              marginBottom: 30,
              color: "#0195F7",
              borderBottomWidth: 1,
              borderColor: "#EFEFEF",
            }}
          >
            Personal information settings
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};