import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { iconsData } from "../../assets/objects/iconsData";
import { Ionicons } from "@expo/vector-icons";
import { Grid, Col, Row } from "react-native-easy-grid";

export default function NewPost() {

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10
        }}
      >
        <TouchableOpacity>
          <Ionicons name="close-outline" size={35} />
        </TouchableOpacity>
        <Text style={{ fontSize: 21, fontWeight: "bold", right: 90, bottom: 1 }}>
          New post
        </Text>
        <TouchableOpacity>
          <Ionicons name="checkmark" size={30} color="#0195F7" />
        </TouchableOpacity>
      </View>

      
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>

      <View style={{ width: "100%", height: 300 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15,
            backgroundColor: "orange"
          }}
        >
          <Text>Technologies</Text>
          <Text>Selec multiples</Text>
        </View>

        
        {/* <View> */}
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
        {/* </View> */}

        {/* <ScrollView> */}
          {/* <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              width: "100%",
              paddingTop: 3,
              backgroundColor: "lightgray"
            }}
          >
            {
              iconsData.map((data, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      width: "24%",
                      margin: 1
                    }}
                  >
                    <Image
                      source={data.img}
                      style={{
                        width: "100%",
                        height: 100,
                        backgroundColor: "white",
                        resizeMode: "cover"
                      }}
                    />
                  </TouchableOpacity>
                )
              })
            }
          </View> */}

        {/* </ScrollView> */}
      </View>

    </View>
  )
}