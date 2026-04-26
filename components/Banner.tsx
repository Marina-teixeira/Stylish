import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Banner() {
    return (
        <View style={{ padding: 16 }}>

            <View style={{ position: "relative" }}>
                <Image
                    source={require("../assets/images/Rectangle 48.png")}
                    style={{ width: 350, height: 200, borderRadius: 10 }}
                />

                <View style={{
                    position: "absolute",
                    top: 70,
                    left: 20,
                }}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}>
                        50-40% OFF
                    </Text>

                    <Text style={{ color: "#fff", marginTop: 5 }}>
                        Agora em todos os produtos!{"\n"}
                        Todas as cores
                    </Text>

                    <TouchableOpacity style={{
                        alignSelf: "flex-start",
                        flexDirection: "row",
                        borderColor: "#fff",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        marginTop: 10,
                    }}>
                        <Text style={{ color: "#fff", fontSize: 14 }}>
                            Compre agora
                        </Text>
                        <Text style={{
                            color: "#fff",
                            fontWeight: "800",
                            marginLeft: 4
                        }}>
                            →
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Carrossel */}
            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                gap: 6,
            }}>

                <View style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#DEDBDB",
                }} />

                <View style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#FFA3B3",
                }} />

                <View style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#DEDBDB",
                }} />

            </View>

        </View>
    );
}

// Fazer o carrossel funcionar depois, tem que ser clicavel e mudar a imagem do banner