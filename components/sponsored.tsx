import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Sponsored() {
    return (
        <View style={{ margin: 16, overflow: "visible", }}>
            <View style={{
                backgroundColor: "#fff",
                marginBottom: 100,
                width: 390,
                padding: 16,
                borderRadius: 20,
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 500,
                    marginBottom: 10,
                }}>
                    Patrocinado
                </Text>

                <Image
                    source={require("../assets/images/image 12.png")}
                    style={{
                        width: 370,
                        height: 300,
                        borderRadius: 5,
                    }}
                />

                <View style={{ flexDirection: "row" }}>
                    <Text style={{
                        marginTop: 10,
                        fontSize: 16,
                        fontWeight: "bold",
                    }}>
                        Até 50% OFF
                    </Text>

                    <TouchableOpacity style={{
                        marginTop: 10,
                        marginLeft: 240,
                    }}>
                        <Ionicons name="chevron-forward" size={20} color="#333" />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}