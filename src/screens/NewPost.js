import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { iconsData } from "../../assets/objects/iconsData";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Grid, Col, Row } from "react-native-easy-grid";

export default function NewPost() {

  const [select, setSelect] = useState(false);

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          paddingVertical: 10
        }}
      >
        <TouchableOpacity>
          <AntDesign name="close" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 21, fontWeight: "bold", right: 90 }}>
          New post
        </Text>
        <TouchableOpacity>
          <AntDesign name="arrowright" size={28} color="#0195F7" />
        </TouchableOpacity>
      </View>

      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", alignItems: "center", paddingVertical: 25 }}>
          <Image
            source={require("../../assets/madera3.jpg")}
            style={{ position:"absolute", width: "100%" }}
          />
          <View
            style={{
              position: "relative",
              width: "90%",
              backgroundColor: '#FFFFFF',
              borderRadius: 5,
              padding: 15,
              elevation: 10,
              shadowColor: '#000000',
              shadowOpacity: 0.5,
              shadowRadius: 10,
              shadowOffset: {
                height: 5,
                width: 5
              }
            }}
          >
            <Image
              source={require("../../assets/sheet1.jpg")}
              style={{ width: "100%" }}
            />
            <View style={{ position: "absolute", paddingHorizontal: 18, paddingVertical: 15 }}>
              <Text style={{ lineHeight: 24, fontWeight: "300" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#0195F7" }}>ABOUT THIS PROYECT</Text>{'\n'}
                This project is a replica of the entire visual interface of Instagram, 
                in which you can take a tour of all the screens and see how similar it is to the original.{'\n'}
                The app was built entirely with
                <Text style={{ fontWeight: "bold" }}> Javascript </Text> using
                <Text style={{ fontWeight: "bold" }}> React Native</Text>,
                <Text style={{ fontWeight: "bold" }}> Expo</Text> and pure
                <Text style={{ fontWeight: "bold" }}> CSS</Text> for the styles.
                {'\n'}{'\n'}
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#0195F7" }}>LET'S MEET</Text>
                {'\n'}
                <Text style={{ fontSize: 17 }}>👋🏼</Text> Hi! My name is<Text style={{ fontWeight: "bold" }}> Lucas Hernan Benitez</Text>, I am a
                <Text style={{ fontWeight: "bold" }}> Full Stack developer</Text> with a <Text style={{ fontWeight: "bold" }}>Front end</Text> orientation from Argentina. 
                I am looking for my first job in the IT field with aspirations to further expand the knowledge already obtained. 
                I seek to be part of a team from which I can learn their skills and qualities.
                {'\n'}
                I consider myself a committed and persevering person when it comes to meeting the goals set, 
                dedicating myself proactively, adapting to different scenarios, achieving solutions to existing problems. 
                This project is a sample of what I can achieve if I set my mind to it.
              </Text>
            </View>
          </View>
        </View>
        
        {/* <View style={{ paddingHorizontal: 20 }}>
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
        </View> */}

      </ScrollView>

      <View style={{ width: "100%", height: 300 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Gallery</Text>
            <TouchableOpacity>
              <Feather
                name="chevron-down"
                size={17}
                style={{ paddingLeft: 4, opacity: 0.8 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => setSelect(!select)}
              style={{
                backgroundColor: "gray",
                padding: 7,
                borderRadius: 100,
                alignItems: "center",
                marginHorizontal: 10,
                flexDirection: "row"
              }}
            >
              <MaterialCommunityIcons name="folder-multiple-outline" size={17} color="white" />
              { select ?
                <Text
                  style={{
                    fontSize: 12,
                    color: "white",
                    paddingLeft: 8
                  }}
                >SELECT MULTIPLE</Text> : null }
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "gray",
                padding: 7,
                borderRadius: 100,
              }}
            >
              <Feather name="camera" size={17} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Grid>
            <Row style={{ height: 100 }}>
              {
                iconsData.slice(0, 4).map((data, index) => {
                  return (
                    <Col
                      key={index}
                    >
                      <View style={{ padding: 0.5 }}>
                        <Image
                          source={data.img}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderWidth: 0.5,
                            borderColor: "#E6E6E6",
                            backgroundColor:"white"
                          }}
                        />
                      </View>
                    </Col>
                  )
                })
              }
            </Row>
          </Grid>
          <Grid>
            <Row style={{ height: 100 }}>
              {
                iconsData.slice(4, 8).map((data, index) => {
                  return (
                    <Col
                      key={index}
                    >
                      <View style={{ padding: 0.5 }}>
                        <Image
                          source={data.img}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderWidth: 0.5,
                            borderColor: "#E6E6E6",
                            backgroundColor:"white"
                          }}
                        />
                      </View>
                    </Col>
                  )
                })
              }
            </Row>
          </Grid>
          <Grid>
            <Row style={{ height: 100 }}>
              {
                iconsData.slice(8, 12).map((data, index) => {
                  return (
                    <Col
                      key={index}
                    >
                      <View style={{ padding: 0.5 }}>
                        <Image
                          source={data.img}
                          size={25}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderWidth: 0.5,
                            borderColor: "#E6E6E6",
                            backgroundColor:"white"
                          }}
                        />
                      </View>
                    </Col>
                  )
                })
              }
            </Row>
          </Grid>
        </ScrollView>

      </View>

    </View>
  )
}