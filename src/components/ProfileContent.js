import React from "react";
import { View, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";

export default function ProfileContent() {

  const Tab = createMaterialTopTabNavigator();

  let squares = [];
  let numberOfSquare = 15;

  for (let i = 0; i < numberOfSquare; i++) {
    squares.push(
      <View
        key={i}
        style={{
          width: 130,
          height: 150,
          marginVertical: 1,
          marginHorizontal: 1,
          backgroundColor: "black",
          opacity: 0.1,
        }}
      ></View>
    );
  }

  const Posts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            flexWrap: "wrap",
            flexDirection: "row",
            paddingVertical: 5,
            justifyContent: "space-evenly",
          }}>
          {squares}
        </View>
      </ScrollView>
    );
  };

  const Video = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            flexWrap: "wrap",
            flexDirection: "row",
            paddingVertical: 5,
            justifyContent: "space-evenly"
          }}>
          {squares}
        </View>
      </ScrollView>
    );
  };

  const Tags = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            flexWrap: "wrap",
            flexDirection: "row",
            paddingVertical: 5,
            justifyContent: "space-evenly",
          }}>
          {squares}
        </View>
      </ScrollView>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: "black",
          height: 1.5,
        },
          tabBarIcon: ({focused, colour}) => {
            let iconName;
            if (route.name === "Posts") {
              iconName = focused ? "ios-apps-sharp" : "ios-apps-sharp";
              colour = focused ? "black" : "gray";
              return <Ionicons name={iconName} color={colour} size={22} />;
            } else if (route.name === "Video") {
              return focused ? <Entypo name="youtube" size={24} color="black"/> : <Feather name="youtube" size={24} color="gray"/>
            } else if (route.name === "Tags") {
              iconName = focused ? "ios-person" : "ios-person-outline";
              colour = focused ? "black" : "gray";
              return <Ionicons name={iconName} color={colour} size={22} />
            }
            return
          }
        })
      }
    >
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  )
}