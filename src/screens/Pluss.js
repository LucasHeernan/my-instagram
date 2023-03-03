import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Pluss() {

  const [like, setLike] = useState(true)

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: "lightblue"
				}}
			>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>About</Text>
        <TouchableOpacity onPress={() => setLike(!like)}>
          <AntDesign
            name={ like ? "like1" : "like2" }
            size={24}
            color={ like ? "#0195F7" : "black" }
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
