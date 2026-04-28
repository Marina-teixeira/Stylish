import { View, Text, Image } from "react-native";

export default function EspecialOferrs() {
    return (
        <View style={{
            padding: 20,
            backgroundColor: "#fff",
            marginTop: 15,
            borderRadius: 20,
            margin: 16,
            marginBottom: 10, 
        }}>

            <View style={{ position: "relative", flexDirection: "row" }}>
                <Image
                    source={require("../assets/images/Rectangle 56.png")}
                ></Image>

                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontWeight: 500, fontSize: 16, color: "#333", marginTop: 5 }}>
                            Ofertas Especiais
                        </Text>

                        <View style={{
                            width: 28,
                            height: 28,
                            borderRadius: 12,
                            backgroundColor: "#fff",
                            borderWidth: 2,
                            borderColor: "#E5E7EB",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: 8,
                        }}>
                            <Text style={{ fontSize: 12 }}>😱</Text>
                        </View>

                    </View>

                    <Text style={{ marginTop: 4, color: "#666", fontSize: 13 }}>
                        Garantimos que você encontre a oferta que precisa pelos melhores preços.
                    </Text>
                </View>

            </View>


        </View>
    )
}