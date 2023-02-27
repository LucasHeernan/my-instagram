import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { friendsData } from "../../assets/objects/friendsData";

export default function Suggested({ name }) {

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
          friendsData.map((data, index) => {
            const [follow, setFollow] = useState(false);
            const [close, setClose] = useState(false);
            return (
              <View key={index}>
                {
                  data.name === name || close ? null : (
                  <View
                    style={{
                      width: 160,
                      height: 200,
                      margin: 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 0.5,
                      borderColor: '#DEDEDE',
                      borderRadius: 2,
                      position: 'relative',
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setClose(true)}
                      style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                      }}
                    >
                      <AntDesign
                        name="close"
                        style={{
                          fontSize: 20,
                          color: 'black',
                          opacity: 0.5,
                        }}
                      />
                    </TouchableOpacity>
                    <Image
                      source={data.profileImage}
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 100,
                        margin: 10,
                      }}
                    />
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                      {data.name}
                    </Text>
                    <Text style={{fontSize: 12}}>{data.accountName}</Text>
                    <TouchableOpacity
                      onPress={() => setFollow(!follow)}
                      style={{width: '80%', paddingVertical: 10}}
                    >
                      <View
                        style={{
                          width: '100%',
                          height: 30,
                          borderRadius: 5,
                          backgroundColor: follow ? null : '#3493D9',
                          borderWidth: follow ? 1 : 0,
                          borderColor: '#DEDEDE',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Text style={{color: follow ? 'black' : 'white'}}>
                          {follow ? 'Following' : 'Follow'}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}