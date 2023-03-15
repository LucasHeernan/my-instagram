import React from "react";
import { ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import ProfileGrid from "./ProfileGrid";

export default function ProfileContent() {

  const Tab = createMaterialTopTabNavigator();

  const Posts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "100%" }}
      >
        <ProfileGrid />
      </ScrollView>
    );
  };

  const Video = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "100%" }}
      >
        <ProfileGrid />
      </ScrollView>
    );
  };

  const Tags = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "100%" }}
      >
        <ProfileGrid />
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