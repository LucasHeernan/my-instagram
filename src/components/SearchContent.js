import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { searchData } from "../../assets/objects/searchData";

export default function SearchContent({ getImage }) {

  return (
    <View>
      {
        searchData.map((data, index) => {
          return (
            <View key={index}>
              {
                data.id === 0 ? (
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      width: "100%"
                    }}
                  >
                    {
                      data.images.map((img, index) => {
                        return (
                          <TouchableOpacity
                            key={index}
                            onLongPress={() => getImage(img)}
                            onPressOut={() => getImage(null)}
                            delayLongPress={200}
                            style={{ paddingBottom: 2, width: "33%" }}
                          >
                            <Image
                              source={img}
                              style={{ width: "100%", height: 150 }}
                            />
                          </TouchableOpacity>
                        );
                      })
                    }
                  </View>
                ) : null
              }
              {
                data.id === 1 ? (
                  <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: "66.5%",
                        justifyContent: "space-between"
                      }}
                    >
                      {
                        data.images.slice(0, 4).map((img, index) => {
                          return (
                            <TouchableOpacity
                              key={index}
                              onLongPress={() => getImage(img)}
                              onPressOut={() => getImage(null)}
                              delayLongPress={200}
                              style={{ paddingBottom: 2, width: "49.6%" }}
                            >
                              <Image
                                source={img}
                                style={{ width: "100%", height: 150 }}
                              />
                            </TouchableOpacity>
                          );
                        })
                      }
                    </View>
                    <TouchableOpacity
                      onLongPress={() => getImage(data.images[4])}
                      onPressOut={() => getImage(null)}
                      delayLongPress={200}
                      style={{ marginLeft: 2, width: "33%" }}
                    >
                      <Image
                        source={data.images[4]}
                        style={{ width: "100%", height: 302 }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : null
              }
              {
                data.id === 2 ? (
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity
                      onLongPress={() => getImage(data.images[2])}
                      onPressOut={() => getImage(null)}
                      delayLongPress={200}
                      style={{ paddingRight: 2, width:"67%" }}>
                      <Image
                        source={data.images[2]}
                        style={{ width: "100%", height: 302 }}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: "33%",
                        justifyContent: "space-between",
                      }}
                    >
                      {
                        data.images.slice(0, 2).map((img, index) => {
                          return (
                            <TouchableOpacity
                              key={index}
                              onLongPress={() => getImage(img)}
                              onPressOut={() => getImage(null)}
                              delayLongPress={200}
                              style={{ paddingBottom: 2, width:"100%" }}
                            >
                              <Image
                                source={img}
                                style={{ width: "100%", height: 150 }}
                              />
                            </TouchableOpacity>
                          );
                        })
                      }
                    </View>
                  </View>
                ) : null
              }
            </View>
          )
        })
      }
    </View>
  )
}
