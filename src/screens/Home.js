import React, { useEffect, useCallback } from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import Stories from "../components/Stories";
import Post from "../components/Post";

export default function Home() {

	const [fonstLoaded] = useFonts({
		Lobster: require("../../assets/fonts/Lobster-Regular.ttf")
	});

	useEffect(() => {
		async function prepare() {
		  await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);

  const onLayout = useCallback( async () => {
    if (fonstLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fonstLoaded]);

  if (!fonstLoaded) return null;

	return (
		<View onLayout={onLayout}
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
					paddingTop: 16,
          paddingBottom: 7
				}}
			>
				<Text
          style={{
						fontFamily: 'Lobster',
            fontSize: 25,
						marginLeft: 15
          }}>
          Instagram
        </Text>
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
					<TouchableOpacity>
						<Feather name="heart" size={24} color="black" style={{ marginHorizontal: 10 }} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Feather name="message-circle" size={24} color="black" style={{ marginHorizontal: 10 }} />
					</TouchableOpacity>
				</View>
			</View>

			<ScrollView>
				<Stories />
        <Post />
			</ScrollView>

		</View>
	)
}
