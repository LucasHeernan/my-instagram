import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import postInfo from "../../assets/objects/postInfo";
import { Feather, AntDesign, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

export default function Post() {

  const [keep, setKeep] = useState(false);

  return (
    <View>
      {
        postInfo.map((data, index) => {
          const [like, setLike] = useState(data.isLiked);
          return (
            <View
              key={index}
              style={{
                paddingBottom: 10
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 15,
                  paddingVertical: 10
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={data.postPersonImage}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 100
                    }}
                  />
                  <View style={{ paddingLeft: 5 }} >
                    <Text style={{ fontSize: 15, fontWeight: "500"}} >
                      {data.postTitle}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Feather name="more-vertical" style={{fontSize: 20}} />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={data.postImage}
                  style={{
                    width: "100%",
                    height: 400
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 12,
                  paddingVertical: 10
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity onPress={() => setLike(!like)}>
                    {
                      like ? <AntDesign name="heart" size={25} color="red" style={{paddingRight: 16}}/> :
                      <Feather name="heart" size={25} color="black" style={{paddingRight: 16}}/>
                    }
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather
                      name="message-circle"
                      size={25}
                      style={{ paddingRight: 15 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name="send" size={23} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => setKeep(!keep)}>
                  {
                    keep ? <FontAwesome name="bookmark" size={24} /> :
                    <FontAwesome name="bookmark-o" size={24} />
                  }
                </TouchableOpacity>
              </View>

              <View style={{paddingHorizontal: 15}} >
                <Text>
                  Liked by { like ? "you and " : ""}
                  { like ? data.likes + 1 : data.likes } others
                </Text>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 14,
                    paddingVertical: 2,
                  }}>
                  If enjoy the app ! Please like and share 😉
                </Text>
                <Text
                  style={{
                    opacity: 0.4,
                    paddingVertical: 2
                  }}
                >
                  View all comments
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      source={data.postPersonImage}
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 100,
                        backgroundColor: 'orange',
                        marginRight: 10
                      }}
                    />
                    <TextInput
                      placeholder="Add a comment... "
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                  >
                    <TouchableOpacity style={{ paddingRight: 9 }}>
                      <Text>❤️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingRight: 9, bottom: 2 }}>
                      <Text>🙌</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="plus-circle-outline"
                        size={16}
                        color="black"
                        style={{ opacity: 0.4 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

              </View>

            </View>
          )
        })
      }
    </View>
  )
}
