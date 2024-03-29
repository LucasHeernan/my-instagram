import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { suggestedData } from "../../assets/objects/suggestedData";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Suggested({ name, friendProfile }) {

  const navigation = useNavigation();

  return (
    <View style={{ marginLeft: 11, marginBottom: 15 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 1.5,
          paddingTop: friendProfile ? 10 : 9,
          paddingBottom: friendProfile ? 20 : 9
        }}
      >
        <Text style={{ fontWeight: "500" }}>{ friendProfile ? "Suggested for you" : "Discover people" }</Text>
        <Text style={{ fontWeight: "500", color: "#0195F7", right: 12 }}>See all</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
          suggestedData.map((data, index) => {
            const [follow, setFollow] = useState(false);
            const [close, setClose] = useState(false);
            return data.name === name || close ? null : (
              <View key={index}>
                <View
                  style={{
                    width: 155,
                    height: 205,
                    margin: 2,
                    alignItems: "center",
                    borderWidth: 0.5,
                    borderColor: "#DEDEDE",
                    borderRadius: 5,
                    position: "relative"
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setClose(true)}
                    style={{ position: "absolute", top: 5, right: 5 }}
                  >
                    <AntDesign name="close" size={18} color="black" style={{ opacity: 0.5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.push("FriendProfile", {
                        name: data.name,
                        accountName: data.accountName,
                        profileImage: data.profileImage,
                        follow: data.follow,
                        posts: data.posts,
                        followers: data.followers,
                        following: data.following,
                      })
                    }
                  >
                    <Image
                      source={data.profileImage}
                      style={{
                        width: 85,
                        height: 85,
                        borderRadius: 100,
                        marginTop: 12,
                        marginBottom: 9
                      }}
                    />
                  </TouchableOpacity>
                  <Text style={{ fontWeight: "500", fontSize: 14 }}>
                    {data.accountName}
                  </Text>
                  <Text style={{ fontSize: 11, opacity: 0.5 }}>Follows you</Text>
                  <View
                    style={{
                      width: "95%",
                      padding: 10,
                      position: "absolute",
                      bottom: 2
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setFollow(!follow)}
                      style={{
                        width: "100%",
                        height: 30,
                        borderRadius: 8,
                        backgroundColor: follow ? null : "#0195F7",
                        borderWidth: follow ? 1 : 0,
                        borderColor: "#DEDEDE",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: follow ? "black" : "white" }}>
                        { follow ? "Following" : "Follow" }
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}