import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import SingleVideo from "../components/SingleReel";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { videoData } from "../../assets/objects/videoData";

export default function Reels() {

  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: "white",
        position: "relative",
        backgroundColor: "black",
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 1,
          padding: 15,
          alignItems: "center"
        }}
      >
        <Feather name="camera" size={25} color="white" />
      </TouchableOpacity>
      <SwiperFlatList
        vertical={true}
        data={videoData}
        renderItem={({item, index}) => (
          <SingleVideo
            item={item}
            index={index}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  )
}