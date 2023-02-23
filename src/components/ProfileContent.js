import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function ProfileContent() {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{ backgroundColor: "violet", paddingVertical: 300, alignItems: 'center' }}
      >
          <Text>Aca van los posts</Text>
      </View>
    </ScrollView>
  )
}