import React from "react";
import { View, StatusBar, ScrollView, TouchableOpacity, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Stories from "../components/Stories";
import Post from "../components/Post";

export default function Home() {

  const navigation = useNavigation();

	return (
		<View
			style={{
				backgroundColor: "#FFFFFF",
				height: "100%"
			}}
		>
			<StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" animated={true} />
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingTop: 9,
          paddingBottom: 7
				}}
			>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../../assets/fonts/instagram_font_image.png")}
            style={{
              width: 115,
              height: 40,
              marginLeft: 14
            }}
          />
          <TouchableOpacity>
            <MaterialCommunityIcons name="chevron-down" size={22} color="black" style={{ top: 2.5 }} />
          </TouchableOpacity>
        </View>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						marginRight: 6
					}}
				>
					<TouchableOpacity>
						<Feather name="plus-square" size={24} color="black" style={{ marginHorizontal: 10 }} />
					</TouchableOpacity>
					<TouchableOpacity
            onPress={() => navigation.push("Notifications")}
          >
						<Feather name="heart" size={24} color="black" style={{ marginHorizontal: 10 }} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Feather name="message-circle" size={24} color="black" style={{ marginHorizontal: 10 }} />
					</TouchableOpacity>
				</View>
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				<Stories />
        <Post />
			</ScrollView>

		</View>
	)
}
