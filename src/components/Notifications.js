import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { friendsData } from "../../assets/objects/friendsData";
import { useNavigation } from "@react-navigation/native";
import { Octicons, Ionicons } from "@expo/vector-icons";
import NotificationsContent from "./NotificationsContent";

export default function Notifications() {

  const navigation = useNavigation();

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Octicons name="arrow-left" size={24} color="black" style={{ marginRight: 30 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Notifications
        </Text>
      </View>
      
      <ScrollView style={{ marginHorizontal: 15 }} showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", paddingVertical: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              maxWidth: "64%",
              position: "relative"
            }}
          >
            <TouchableOpacity activeOpacity={0.7} >
              <Image
                source={require("../gallery/profilePictures/groot.jpg")}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 100,
                  marginRight: 17,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  left: 31,
                  bottom: 26,
                  width: 19,
                  height: 19,
                  backgroundColor: "#FA1E38",
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 0.5,
                  borderColor: "#D42D47"
                }}
              >
                <Text
                  style={{
                    color:"white",
                    fontSize: 10,
                    fontWeight: "700",
                    bottom: 0.5
                  }}
                >1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection:"column" }} >
              <Text style={{ fontWeight: "bold" }}>Follow requests</Text>
              <Text style={{ opacity: 0.5 }}>Aporove or ignore requests</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{ fontWeight: "bold", marginVertical: 10 }}>This Week</Text>
        {
          friendsData.slice(0, 3).map((data, index) => {
            const [follow, setFollow] = useState(data.follow);
            const [week, setWeek] = useState(true)
            return (
              <View key={index} style={{ width: "100%" }}>
                <NotificationsContent
                  name={data.name}
                  profileImage={data.profileImage}
                  week={week}
                  follow={follow}
                  setFollow={setFollow}
                  posts={data.posts}
                  followers={data.followers}
                  following={data.following}
                />
              </View>
            );
          })
        }

        <Text style={{ fontWeight: "bold", marginVertical: 10 }}>This Month</Text>
        {
          friendsData.slice(3, 6).map((data, index) => {
            const [follow, setFollow] = useState(data.follow);
            return (
              <View key={index} style={{ width: "100%" }}>
                <NotificationsContent
                  name={data.name}
                  profileImage={data.profileImage}
                  follow={follow}
                  setFollow={setFollow}
                  posts={data.posts}
                  followers={data.followers}
                  following={data.following}
                />
              </View>
            );
          })
        }

        <Text style={{ fontWeight: "bold", marginVertical: 10 }}>Earlier</Text>
        {
          friendsData.slice(3, 6).map((data, index) => {
            const [follow, setFollow] = useState(data.follow);
            return (
              <View key={index} style={{ width: "100%" }}>
                <NotificationsContent
                  name={data.name}
                  profileImage={data.profileImage}
                  follow={follow}
                  setFollow={setFollow}
                  posts={data.posts}
                  followers={data.followers}
                  following={data.following}
                />
              </View>
            );
          })
        }

        <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>Suggestions for you</Text>
        {
          friendsData.slice(6.12).map((data, index) => {
            const [follow, setFollow] = useState(data.follow);
            const [close, setClose] = useState(false);
            return (
              <View key={index} >
                { close ? null : (
                  <View
                    style={{
                      paddingVertical: 10,
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "space-between"
                    }}
                  >
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.push("FriendProfile", {
                            name: data.name,
                            profileImage: data.profileImage,
                            follow: follow,
                            posts: data.posts,
                            followers: data.followers,
                            following: data.following,
                          })
                        }
                        style={{ flexDirection: "row", maxWidth: "70%" }}
                      >
                        <Image
                          source={data.profileImage}
                          style={{
                            width: 55,
                            height: 55,
                            borderRadius: 100,
                            marginRight: 10,
                          }}
                        />
                        <View style={{ width: "100%", justifyContent:"center" }}>
                          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                            {data.name}
                          </Text>
                          <Text style={{ fontSize: 12, opacity: 0.5 }}>
                            Sugggested for you
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      { follow ? 
                        (
                          <TouchableOpacity
                            onPress={() => setFollow(!follow)}
                            style={{ width: follow ? 90 : 68 }}
                          >
                            <View
                              style={{
                                width: "100%",
                                height: 30,
                                borderRadius: 5,
                                backgroundColor: follow ? null : "#3493D9",
                                borderWidth: follow ? 1 : 0,
                                borderColor: "#DEDEDE",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Text style={{ color: follow ? "black" : "white" }}>
                                { follow ? "following" : "follow" }
                              </Text>
                            </View>
                          </TouchableOpacity>
                        ) : (
                          <>
                            <TouchableOpacity
                              onPress={() => setFollow(!follow)}
                              style={{ width: follow ? 90 : 74 }}
                            >
                              <View
                                style={{
                                  width: "100%",
                                  height: 30,
                                  borderRadius: 7,
                                  backgroundColor: follow ? null : "#0195F7",
                                  borderWidth: follow ? 1 : 0,
                                  borderColor: "#DEDEDE",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Text style={{ color: follow ? "black" : "white" }}>
                                  { follow ? "following" : "follow" }
                                </Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => setClose(true)}
                              style={{ paddingHorizontal: 5 }}
                            >
                              <Ionicons name="close" size={16} color="black" style={{ opacity: 0.6 }} />
                            </TouchableOpacity>
                          </>
                        )
                      }
                    </View>
                  </View>
                )}
              </View>
            );
          })
        }
      </ScrollView>
    </View>
  )
}