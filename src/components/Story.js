import React, { useState, useEffect } from "react";
import { View, StatusBar, TouchableOpacity, Image, Text, TextInput, Animated } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

export default function Story({ route, navigation }) {

  const { name, image, story, setStory  } = route.params;
  const [like, setLike] = useState(false);

  useEffect(() => {

    setStory(true)

    let timer = setTimeout(() => {
      navigation.goBack();
    }, 8000);

    Animated.timing(progress, {
      toValue: 8,
      duration: 8000,
      useNativeDriver: false
    }).start();

    return () => clearTimeout(timer);

  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 8],
    outputRange: ["0%", "100%"]
  })

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
          height: 2.5,
          width: "95%",
          backgroundColor: "#C6C6C6",
          position: "absolute",
          borderRadius: 100,
          top: 18,
          zIndex: 1,
        }}
      >
        <Animated.View
          style={{
            height: "100%",
            backgroundColor: "white",
            borderRadius: 100,
            width: progressAnimation
          }}
        >
        </Animated.View>
      </View>

      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 18,
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
            zIndex: 1
          }}
        >
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: "black",
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
            width: "100%",
            zIndex: 1
          }}
        >
          <Text style={{ color: "white", fontSize: 17, fontWeight: "400", paddingLeft: 10 }}>{name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={21} color="white" />
          </TouchableOpacity>
        </View>
      </View>

        <Image
          source={story}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "90%"
          }}
        />

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginVertical: 10,
          height: "6%",
          width: "100%",
          paddingHorizontal: 5
        }}
      >
        <TextInput
          placeholder="Send message"
          placeholderTextColor="white"
          style={{
            borderColor: "gray",
            borderRadius: 25,
            width: "75%",
            height: 50,
            paddingLeft: 20,
            borderWidth: 1,
            fontSize: 18,
            color: "white",
            opacity: 0.9
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-around", width: 80 }}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            {
              like ? <AntDesign name="heart" size={24} color="red" /> :
              <Feather name="heart" size={24} color="white" />
            }
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={23} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
