import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Image } from "react-native";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Reels from "./src/screens/Reels";
import Pluss from "./src/screens/Pluss";
import Profile from "./src/screens/Profile";
import { Ionicons, MaterialCommunityIcons, Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import Story from "./src/components/Story";
import Notifications from "./src/components/Notifications";
import FriendProfile from "./src/components/FriendProfile";
import ProfileEdit from "./src/components/ProfileEdit";

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },

          tabBarIcon: ({focused, size = 24}) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
              return <Ionicons name={iconName} size={size} style={{ bottom: 0.5 }} />;
            } else if (route.name === "Search") {
              return focused ? <FontAwesome name="search" size={size} /> : <Ionicons name="search" size={size} />
            } else if (route.name === "Reels") {
              return focused ? <Entypo name="youtube" size={size} /> : <Feather name="youtube" size={size} />
            } else if (route.name === "Pluss") {
              iconName = focused ? "plus-square" : "plus-square-o"
              return focused ? <FontAwesome name={iconName} size={23} style={{ bottom: 1 }} /> : <FontAwesome name={iconName} size={size} />
            } else if (route.name === "Profile") {
              return iconName = focused ? (
                <View
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 100,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 2,
                    borderColor: "black"
                  }}
                >
                  <Image
                    source={require("./src/gallery/profilePictures/userProfile.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 100,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={require("./src/gallery/profilePictures/userProfile.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      borderRadius: 100
                    }}
                  />
                </View>
              )
            }
            return
          }
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Pluss" component={Pluss} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Story" component={Story} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
