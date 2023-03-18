import React, { useState, useRef } from "react";
import { Video } from "expo-av";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

export default function SingleReel({ item }) {

  const { width, height } = Dimensions.get("window");
  const firstVideo = useRef(null);

  const [like, setLike] = useState(item.isLike);
  const [music, setMusic] = useState(false);

  const handleVolume = () => {
    setMusic(true);

    setTimeout(() => {
      setMusic(false);
    }, 2000);
  }

  return (
    <View
      style={{
        width: width,
        height: height,
        position: "relative",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleVolume}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute"
        }}
      >
        <Video
          ref={firstVideo}
          source={item.video}
          style={{
            width: "100%",
            height: "100%",
          }}
          shouldPlay={true}
          rate={1}
          isMuted={false}
          useNativeControls={false}
          resizeMode="cover"
          isLooping={true}
        />
      </TouchableOpacity>
      <Ionicons
        name="volume-high"
        size={ music ? 20 : 0 }
        color="white"
        style={{
          position: "absolute",
          backgroundColor: "rgba(52,52,52,0.6)",
          borderRadius: 100,
          padding: music ? 20 : 0
        }}
      />

      <View
        style={{
          position: "absolute",
          width: width,
          zIndex: 1,
          padding: 10,
          bottom: 40
        }}
      >
        <View style={{ width: 150, flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              width: 32,
              height: 32,
              borderRadius: 100,
              backgroundColor: "white",
              margin: 10,
            }}
          >
            <Image
              source={item.postProfile}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 16 }}>{item.title}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "white", fontSize: 14, marginHorizontal: 10 }}>
          {item.description}
        </Text>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Ionicons name="ios-musical-note" size={16} color="white" />
          <Text style={{ color: "white" }}>
            Original Audio
          </Text>
        </View>
      </View>

      <View style={{ position: "absolute", bottom: 50, right: 0, zIndex: 1 }}>
        <TouchableOpacity onPress={() => setLike(!like)} style={{ padding: 10 }}>
          {
            like ? <AntDesign name="heart" color="red" size={24} /> : <Feather name="heart" color="white" size={24} />
          }
        </TouchableOpacity>
        <Text style={{ color: "white", alignSelf:"center" }}>{item.likes}</Text>
        <TouchableOpacity style={{ padding: 10 }}>
          <Feather name="message-circle" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", alignSelf:"center" }}>{item.messages}</Text>
        <TouchableOpacity style={{ padding: 10 }}>
          <Feather name="send" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10, alignSelf:"center" }}>
          <Feather name="more-vertical" size={20} color="white" />
        </TouchableOpacity>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "white",
            margin: 10,
          }}
        >
          <Image
            source={item.postProfile}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              resizeMode: "cover",
            }}
          />
        </View>
      </View>
    </View>
  )
}