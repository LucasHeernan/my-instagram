import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import storyInfo from "../../assets/objects/storyInfo";

const Stories = () => {

	const navigation = useNavigation();

	return (
    <View
      style={{
        borderBottomColor: "#D8D8D8",
        borderBottomWidth: 0.29
      }}
    >  
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 6 }}
      >
        {
          storyInfo.map((data, index) => {
            return data.id === 29 ? (
              <View
                key={index}
                style={{
                  flexDirection: "column",
                  paddingHorizontal: 8,
                  position: "relative"
                }}
              >
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    bottom: 19,
                    right: 10,
                    zIndex: 1
                  }}
                >
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: "#0095fc",
                      backgroundColor: "white",
                      borderRadius: 100,
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    width: 72,
                    height: 72,
                    backgroundColor: "white",
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 2
                  }}
                >
                  <Image
                    source={data.image}
                    style={{
                      resizeMode: "cover",
                      width: "90%",
                      height: "90%",
                      borderRadius: 100,
                      backgroundColor: "orange"
                    }}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 11
                  }}
                >
                  {data.name}
                </Text>
              </View>
            ) : (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.push("Story", {
                  name: data.name,
                  image: data.image,
                })}
                style={{
                  flexDirection: "column",
                  paddingHorizontal: 8,
                  position: "relative"
                }}
              >
                <View
                  style={{
                    width: 72,
                    height: 72,
                    backgroundColor: "white",
                    borderWidth: 2.4,
                    borderRadius: 100,
                    borderColor: "#c13584",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 2
                  }}
                >
                  <Image
                    source={data.image}
                    style={{
                      resizeMode: "cover",
                      width: "91%",
                      height: "91%",
                      borderRadius: 100,
                      backgroundColor: "white"
                    }}
                  />
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 11
                  }}
                >
                  {data.name}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
	)
}

export default Stories;