import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TextInput,
  TouchableHighlight,
  FlatList,
  Keyboard,
  Dimensions,
} from "react-native";
import {
  Conteudo,
  Header,
  Logo,
  BarBusca,
  Titulo,
  ContainerItem,
} from "./styled";
import Constants from "expo-constants";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useFetch } from "../../hooks/useFetch";
import ToggleSwitch from "toggle-switch-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomePage({ navigation }) {
  const { data: kanjis } = useFetch("/kanjis");
  const [searching, setSearching] = useState("");
  const [themeBlack, setThemeBlack] = useState(false);
  const [clear, setClear] = useState(false);
  const { width, height } = Dimensions.get("window");

  const saveTheme = async (value) => {
    try {
      setThemeBlack(value);
      const valor = value ? "true" : "false";
      await AsyncStorage.setItem("BlackTheme", valor);
    } catch (e) {
      console.log("Erro ao salvar", e);
    }
  };

  const recuperaTheme = async () => {
    try {
      const value = await AsyncStorage.getItem("BlackTheme");
      if (value !== null) {
        const resultadoThema = value === "true" ? true : false;
        setThemeBlack(resultadoThema);
      }
    } catch (e) {
      console.log("Erro ao recuperar dados", e);
    }
  };
  useEffect(() => {
    recuperaTheme();
  }, []);

  useEffect(() => {
    if (searching.length >= 1) {
      setClear(true);
    } else {
      setClear(false);
    }
  }, [searching]);

  function renderItem({ item }) {
    return (
      <ContainerItem>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{ fontSize: 30, color: themeBlack ? "#FFFFFF" : "#FF0000" }}
          >
            {item.kanji}
          </Text>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Detalhe", {
                kanji: item.kanji,
                romaji: item.Romaji,
              });
            }}
            underlayColor="transparent"
          >
            <AntDesign
              name="right"
              size={24}
              color={themeBlack ? "#FFFFFF" : "#777777"}
            />
          </TouchableHighlight>
        </View>
        <View>
          <Text
            style={{ fontSize: 15, color: themeBlack ? "#FFFFFF" : "#777777" }}
          >
            {item.Romaji}
          </Text>
        </View>
      </ContainerItem>
    );
  }

  return (
    <>
      {kanjis ? (
        <>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: themeBlack ? "#121212" : "#FFFFFF",
            }}
          >
            <Header
              style={{
                paddingTop:
                  Platform.OS === "android" ? Constants.statusBarHeight : 0,
              }}
            >
              <Logo />
              <Titulo style={{ color: themeBlack ? "#FFFFFF" : "#707070" }}>
                Asuka Jyuku
              </Titulo>
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
                  backgroundColor: themeBlack ? "#3D3D3D" : "#FFFFFF",
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
                    backgroundColor: themeBlack ? "#3D3D3D" : "#FFFFFF",
                    // marginBottom: 20,
                    color: "#000",
                  }}
                  placeholder="Buscar Kanji por romaji"
                  placeholderTextColor="#777777"
                />
                {clear ? (
                  <TouchableHighlight
                    onPress={() => {
                      Keyboard.dismiss();
                      setSearching("");
                      setClear(false);
                    }}
                    underlayColor="transparent"
                  >
                    <AntDesign
                      style={{ marginLeft: width > 360 ? "55%" : "45%" }}
                      name="close"
                      size={20}
                      color="#777777"
                    />
                  </TouchableHighlight>
                ) : null}
              </View>
            </BarBusca>
            <View
              style={{
                marginBottom: "2%",
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingRight: "5%",
              }}
            >
              <Text
                style={{
                  marginRight: "2%",
                  color: themeBlack ? "#FFFFFF" : "#707070",
                }}
              >
                Dark
              </Text>
              <ToggleSwitch
                isOn={themeBlack}
                onColor="#FF665A"
                offColor="#777777"
                size="medium"
                onToggle={(isOn) => {
                  saveTheme(isOn);
                }}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "93%",
                  borderBottomColor: "#B8B8B8",
                  borderBottomWidth: 1,
                }}
              />
            </View>
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
