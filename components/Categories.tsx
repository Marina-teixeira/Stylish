import { Image, ScrollView, Text, View } from "react-native";

const categories = [
  { name: "Beleza", img: require("../assets/images/Beleza.png") },
  { name: "Fashion", img: require("../assets/images/Fashion.png") },
  { name: "Crianças", img: require("../assets/images/Criancas.png") },
  { name: "Homens", img: require("../assets/images/Homens.png") },
  { name: "Mulheres", img: require("../assets/images/Mulheres.png") }
];

// Tem que fazer com que essas categorias sejam clicaveis depois

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingLeft: 10 }}
    >
      {categories.map((item, index) => (
        <View key={index} style={{ alignItems: "center", margin: 10 }}>
          <Image
            source={item.img}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30
            }}
          />
          <Text style={{ marginTop: 5, fontSize: 12 }}>
            {item.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}