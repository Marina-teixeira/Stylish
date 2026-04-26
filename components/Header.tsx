import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            padding: 20,
        }}>
            <Ionicons name="menu" size={24} />

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
            }}>

                <Image
                    source={require("../assets/images/Group 34010.png")}
                    style={{
                        height: 35,
                        width: 35,
                        resizeMode: "contain",
                    }}
                />

                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#4392F9",
                    }}>
                    Stylish
                </Text>

            </View>



            <Image
                source={require("../assets/images/imagem_perfil.png")}
                style={{
                    height: 35,
                    width: 35,
                    resizeMode: "contain",
                }}
            />

        </View>
    )
}