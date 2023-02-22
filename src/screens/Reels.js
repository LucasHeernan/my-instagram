import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import SingleReel from "../components/SingleReel";
import { Feather } from "@expo/vector-icons";
import { videoData } from "../../assets/objects/videoData";

export default function Reels() {

  const { width, height } = Dimensions.get("window");

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndex = ({index}) => {
    setCurrentIndex(index);
  };

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
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 1,
          padding: 15,
          alignItems: "center"
        }}
      >
        {
          !currentIndex ? (
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "white"}}>
              Reels
            </Text>  
          ) : ( <Text style={{ fontSize: 22, opacity: 0}}>AAA</Text> )
        }
        <Feather name="camera" size={25} color="white" />
      </View>
      <SwiperFlatList
        vertical={true}
        onChangeIndex={handleChangeIndex}
        data={videoData}
        renderItem={({item, index}) => (
          <SingleReel
            item={item}
            index={index}
            currentIndex={currentIndex}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
