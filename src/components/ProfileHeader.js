import React from "react";
import { View, Text, Image } from "react-native";

export default function ProfileHeader({ name, profileImage, posts, followers, following }) {

  return (
    <>
      {
        profileImage ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginVertical: 7
            }}
          >
            <View>
              <Image
                source={profileImage}
                style={{
                  resizeMode: "cover",
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                  top: 7
                }}
              />
              <Text style={{ fontWeight: "bold", paddingTop: 10 }}>
                {name}
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>{posts}</Text>
              <Text>Posts</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>{followers}</Text>
              <Text>Followers</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>{following}</Text>
              <Text>Following</Text>
            </View>
          </View>
        ) : (
          <View style={{ width: "100%", paddingTop: 3, paddingHorizontal: 15 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 3,
                width: "97%"
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../gallery/profilePictures/perfil.jpg")}
                  style={{
                    display: "flex",
                    resizeMode: "cover",
                    width: 80,
                    height: 80,
                    borderRadius: 100
                  }}
                />
              </View>
      
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 21 }}>0</Text>
                <Text>Posts</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 21 }}>39</Text>
                <Text>Followers</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 21 }}>118</Text>
                <Text>Following</Text>
              </View>
            </View>
      
            <View style={{ flexDirection: "column" }} >
              <Text style={{ fontSize: 14, fontWeight: "700" }}>
                Lucas Benitez
              </Text>
              <Text style={{ fontSize: 13, fontWeight: "500" }}>
                FullStack Developer
              </Text>
            </View>
          </View>
        )
      }
    </>
  )
}