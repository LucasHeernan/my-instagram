import React, { useState } from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import SingleReel from "./SingleReel";

export default function ReelsComponent() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndex = ({index}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndex}
      data={videos}
      renderItem={({item, index}) => (
        <SingleReel
          item={item}
          index={index}
          currentIndex={currentIndex}
        />
      )}
      keyExtractor={(item, index) => index}
    />
  )
}