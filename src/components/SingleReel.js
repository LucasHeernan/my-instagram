import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import Video from "react-native-video";

export default function SingleReel() {

  const { width, height } = Dimensions.get("window");

  const [like, setLike] = useState(false);
  const [mute, setMute] = useState(false);

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
        style={{
          width: "100%",
          height: "100%",
          position: "absolute"
        }}
      >
        <Video
          style={{
            width: "100%",
            height: "100%",
            position: "absolute"
          }}
        />
      </TouchableOpacity>
    </View>
  )
}