import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { Grid, Col, Row } from "react-native-easy-grid";
import { iconsData } from "../../assets/objects/iconsData";

export default function NewPostGallery() {

  const [select, setSelect] = useState(false);

  return (
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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Gallery</Text>
          <TouchableOpacity>
            <Feather name="chevron-down" size={17} style={{ paddingLeft: 4, opacity: 0.8 }}/>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
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
            { 
              select ?
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  paddingLeft: 8
                }}
              >SELECT MULTIPLE</Text> : null
            }
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <Grid>
          <Row style={{ height: 100 }}>
            {
              iconsData.slice(0, 4).map((data, index) => {
                return (
                  <Col key={index}>
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
                  <Col key={index}>
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
                  <Col key={index}>
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
  )
}