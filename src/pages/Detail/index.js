import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Kanji, Romaji } from "./styled";

export default function Detail({ navigation, route }) {
  const kanji = route.params?.kanji;
  const romaji = route.params?.romaji;

  useEffect(() => {
    if (kanji && romaji) {
      navigation.setOptions({ title: `${kanji} - ${romaji}` });
    }
  }, [kanji]);

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <Kanji>{kanji}</Kanji>
      <Romaji>{romaji}</Romaji>
    </View>
  );
}
