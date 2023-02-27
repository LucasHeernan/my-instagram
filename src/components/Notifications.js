import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { FriendsData } from "../../assets/objects/friendsData";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

export default function Notifications() {

  const navigation = useNavigation();

  return (
    <View
      style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
    >
      <View
        style={{ padding: 20, flexDirection: "row", alignItems: "center" }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Octicons name="arrow-left" size={24} color="black" style={{ marginRight: 30 }} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Notifications
        </Text>
      </View>
      
      <ScrollView style={{ margin: 15 }} showsVerticalScrollIndicator={false}>



        <View style={{width: '100%', paddingVertical: 10}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              maxWidth: '64%'
            }}
          >
            <Image
              source={require("../gallery/profilePictures/profile3.jpg")}
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginRight: 17,
              }}
            />
            <View style={{ flexDirection:"column" }} >
              <Text style={{fontWeight: 'bold'}}>Follow requests</Text>
              <Text style={{opacity: 0.5}}>Aporove or ignore requests</Text>
            </View>
          </TouchableOpacity>
        </View>



        <Text style={{fontWeight: 'bold', marginVertical: 10}}>This Week</Text>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          {FriendsData.slice(0, 3).map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.push('FriendProfile', {
                    name: data.name,
                    profileImage: data.profileImage,
                    follow: data.follow,
                    post: data.posts,
                    followers: data.followers,
                    following: data.following,
                  })
                }
              >
                <Text>{data.name},</Text>
              </TouchableOpacity>
            );
          })}
          <Text> Started following you</Text>
        </View>

        <Text style={{fontWeight: 'bold', marginVertical: 10}}>This Month</Text>
        {
          FriendsData.slice(3, 6).map((data, index) => {
            const [follow, setFollow] = useState(data.follow);
            return (
              <View key={index} style={{width: '100%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 12
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.push('FriendProfile', {
                        name: data.name,
                        profileImage: data.profileImage,
                        follow: follow,
                        post: data.posts,
                        followers: data.followers,
                        following: data.following,
                      })
                    }
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      maxWidth: '59%'
                    }}
                  >
                    <Image
                      source={data.profileImage}
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: 100,
                        marginRight: 17,
                      }}
                    />
                    <Text style={{fontSize: 15}}>
                      <Text style={{fontWeight: 'bold'}}>{data.name}</Text>, who
                      you might know, is on instagram
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setFollow(!follow)}
                    style={{width: follow ? 77 : 73}}
                  >
                    <View
                      style={{
                        width: '100%',
                        height: 30,
                        borderRadius: 7,
                        backgroundColor: follow ? null : '#0085e4',
                        borderWidth: follow ? 1 : 0,
                        borderColor: follow ? '#DEDEDE' : null,
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
              </View>
            );
          })
        }

        <Text style={{fontWeight: 'bold', marginVertical: 10}}>Earlier</Text>
        {
          FriendsData.slice(3, 6).map((data, index) => {
            const [follow, setFollow] = useState(data.follow);
            return (
              <View key={index} style={{width: '100%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 12
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.push('FriendProfile', {
                        name: data.name,
                        profileImage: data.profileImage,
                        follow: follow,
                        post: data.posts,
                        followers: data.followers,
                        following: data.following,
                      })
                    }
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      maxWidth: '59%'
                    }}
                  >
                    <Image
                      source={data.profileImage}
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: 100,
                        marginRight: 17,
                      }}
                    />
                    <Text style={{fontSize: 15}}>
                      <Text style={{fontWeight: 'bold'}}>{data.name}</Text>, who
                      you might know, is on instagram
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setFollow(!follow)}
                    style={{width: follow ? 77 : 73}}
                  >
                    <View
                      style={{
                        width: '100%',
                        height: 30,
                        borderRadius: 7,
                        backgroundColor: follow ? null : '#0085e4',
                        borderWidth: follow ? 1 : 0,
                        borderColor: follow ? '#DEDEDE' : null,
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
              </View>
            );
          })
        }

      </ScrollView>
    </View>
  )
}