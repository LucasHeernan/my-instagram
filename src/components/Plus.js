import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import MessageContacts from "./MessageContacts";
import MessageBottom from "./MessageBottom";
import ProfileStoryHighlights from "./ProfileStoryHighlights";

export default function Plus({ navigation }) {

  const [like, setLike] = useState(false);
  const [plus, setPlus] = useState(true);

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 15
				}}
			>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Octicons name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={{ fontSize: 21, fontWeight: "700" }}>About</Text>
        <TouchableOpacity onPress={() => setLike(!like)}>
          <AntDesign
            name={ like ? "like1" : "like2" }
            size={24}
            color={ like ? "#0195F7" : "black" }
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#0195F7",
              paddingVertical: 10
            }}
          >This app</Text>
          <Text>
            This project is a replica of the entire visual interface of Instagram, 
            in which you can take a tour of all the screens and see how similar it is to the original.
          </Text>
          <Text>
            The app was built entirely with
            <Text style={{ fontWeight: "bold" }}> Javascript </Text> using
            <Text style={{ fontWeight: "bold" }}> React Native</Text>,
            <Text style={{ fontWeight: "bold" }}> Expo</Text> and pure
            <Text style={{ fontWeight: "bold" }}> CSS</Text> for the styles.
          </Text>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#0195F7",
              paddingVertical: 10
            }}
          >Let's meet</Text>
          <Text>
            👋🏼 Hi, my name is<Text style={{ fontWeight: "bold" }}> Lucas Hernan Benitez</Text>, I am a
            <Text style={{ fontWeight: "bold" }}> Full Stack developer</Text> with a <Text style={{ fontWeight: "bold" }}>Front end</Text> orientation from Argentina. 
            I am looking for my first job in the IT field with aspirations to further expand the knowledge already obtained. 
            I seek to be part of a team from which I can learn their skills and qualities.
          </Text>
          <Text>
            I consider myself a committed and persevering person when it comes to meeting the goals set, 
            dedicating myself proactively, adapting to different scenarios, achieving solutions to existing problems. 
            This project is a sample of what I can achieve if I set my mind to it.
          </Text>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#0195F7",
              paddingTop: 10,
              backgroundColor: "white"
            }}
          >Technologies</Text>
        </View>
        
        <ProfileStoryHighlights plus={plus} />

        <MessageContacts plus={plus} />

        <View style={{ paddingTop: 200 }}>
          <MessageBottom />
        </View>

      </ScrollView>
    </View>
  )
}
