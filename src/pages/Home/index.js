import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TextInput,
  TouchableHighlight,
  FlatList,
} from "react-native";
import {
  Conteudo,
  Header,
  Logo,
  BarBusca,
  Titulo,
  ContainerItem,
} from "./styled";
import * as kanjiApi from "../../services/Kanji";
import Constants from "expo-constants";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useFetch } from "../../hooks/useFetch";

export default function HomePage({ navigation }) {
  const { data: kanjis } = useFetch("/kanjis");
  const [searching, setSearching] = useState("");

  // useEffect(() => {
  //   if (kanjis) {
  //     setListaKanjis(kanjis);
  //   }
  // }, [kanjis]);

  // const kanjis = [
  //   {
  //     kanji: {
  //       diagrama: "内",
  //       romaji: "Uchi",
  //     },
  //   },
  //   {
  //     kanji: {
  //       diagrama: "家",
  //       romaji: "Ie",
  //     },
  //   },
  //   {
  //     kanji: {
  //       diagrama: "米",
  //       romaji: "Kome",
  //     },
  //   },
  //   {
  //     kanji: {
  //       diagrama: "日",
  //       romaji: "Hi",
  //     },
  //   },
  //   {
  //     kanji: {
  //       diagrama: "水",
  //       romaji: "Mizu",
  //     },
  //   },
  //   {
  //     kanji: {
  //       diagrama: "歩く",
  //       romaji: "Aruku",
  //     },
  //   },
  //   {
  //     kanji: {
  //       diagrama: "電車",
  //       romaji: "Densha",
  //     },
  //   },
  //   {
  //     kanji: {
  //       diagrama: "危険",
  //       romaji: "Kiken",
  //     },
  //   },
  //   {
  //     kanji: {
  //       diagrama: "空",
  //       romaji: "Sora",
  //     },
  //   },
  //   {
  //     kanji: {
  //       diagrama: "空",
  //       romaji: "Sora",
  //     },
  //   },
  // ];

  function renderItem({ item }) {
    return (
      <ContainerItem>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 30, color: "#FF0000" }}>{item.kanji}</Text>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Detalhe", {
                kanji: item.kanji,
                romaji: item.Romaji,
              });
            }}
            underlayColor="transparent"
          >
            <AntDesign name="right" size={24} color="#777777" />
          </TouchableHighlight>
        </View>
        <View>
          <Text style={{ fontSize: 15, color: "#777777" }}>{item.Romaji}</Text>
        </View>
      </ContainerItem>
    );
  }

  return (
    <>
      {kanjis ? (
        <>
          <SafeAreaView style={{ flex: 1 }}>
            <Header
              style={{
                paddingTop:
                  Platform.OS === "android" ? Constants.statusBarHeight : 0,
              }}
            >
              <Logo />
              <Titulo> Asuka Jyuku</Titulo>
            </Header>
            <BarBusca>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "center",
                  // justifyContent: "space-between",
                  height: 40,
                  borderRadius: 5,
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: "#777777",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <TouchableHighlight
                  onPress={() => {
                    console.log("Pegadinha");
                  }}
                  underlayColor="transparent"
                >
                  <MaterialCommunityIcons
                    name="magnify"
                    size={24}
                    color="#777777"
                  />
                </TouchableHighlight>
                <TextInput
                  onChangeText={setSearching}
                  value={searching}
                  style={{
                    width: 200,
                    height: "100%",
                    padding: 5,
                    backgroundColor: "#f5f5f5",
                    // marginBottom: 20,
                    color: "#000",
                  }}
                  placeholder="Buscar Kanji por romaji"
                  placeholderTextColor="#777777"
                />
              </View>
            </BarBusca>
            <Conteudo>
              {/* <Button
              title="Detail"
              onPress={() => {
                navigation.navigate("Detalhe");
              }}
            /> */}
              <FlatList
                data={kanjis.filter((item) =>
                  item.Romaji.toUpperCase().match(searching.toUpperCase())
                )}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </Conteudo>
          </SafeAreaView>
        </>
      ) : (
        <Text>Loading!!!</Text>
      )}
    </>
  );
}
