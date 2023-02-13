import React, {useState, useEffect} from "react";
import { View, StatusBar, TouchableOpacity, Image, Text, TextInput } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const Story = ({ route, navigation }) => {

  const { name, image } = route.params;

  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          height: 3,
          width: "95%",
          borderWidth: 1,
          backgroundColor: "gray",
          position: "absolute",
          top: 18,
        }}
      >
        <View
          style={{
            height: "100%",
            backgroundColor: "white",
            width: "50%"
          }}
        >
        </View>
      </View>

      <View
        style={{
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          top: 12,
          left: 0,
          width: "90%",
        }}
      >
        <View
          style={{
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: "orange",
              resizeMode: "cover",
              width: "92%",
              height: "92%"
            }}
          />
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%"
          }}
        >
          <Text style={{ color: "white", fontSize: 15, paddingLeft: 10 }}>{name}</Text>
          <TouchableOpacity>
            <Ionicons
              name="close"
              style={{
                fontSize: 20,
                color: "white",
                opacity: 0.6
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={image}
        style={{
          position: "absolute",
          width: "100%",
          height: 600
        }}
      />

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
          width: "100%",
          paddingHorizontal: 5
        }}
      >
        <TextInput
          placeholder="send message"
          placeholderTextColor="white"
          style={{
            borderColor: "gray",
            borderRadius: 25,
            width: "80%",
            height: 50,
            paddingLeft: 20,
            borderWidth: 1,
            fontSize: 20,
            color: "white"
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: 80
          }}
        >
          <TouchableOpacity>
            <Feather name="heart" size={24} color= "white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={24} color= "white" />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Story;