import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PopularProducts() {
    return (
        <View style={{
            backgroundColor: "#FD6E87",
            padding: 12,
            borderRadius: 20,
            margin: 16,
            marginBottom: 20, //mudar depois
        }}>

            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "#fff", fontWeight: 500, fontSize: 16 }}>Produtos Populares</Text>

                    {/* Botão "Veja todos" */}
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        width: 120,
                        height: 28,
                        borderRadius: 7,
                        borderWidth: 1,
                        borderColor: "#E5E7EB",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        right: 0,
                        marginTop: 30,
                    }}>
                        <Text style={{ fontSize: 13, color: "#fff" }}>
                            Veja todos
                        </Text>

                        <Ionicons name="arrow-forward" size={20} color="#fff" />
                    </TouchableOpacity>

                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                }}>
                    <Ionicons name="calendar-outline" size={20} color="#fff" />

                    <Text style={{
                        marginLeft: 5,
                        color: "#fff",
                        fontSize: 13,
                    }}>
                        Última data 29/02/22
                    </Text>
                </View>
            </View>
        </View>
    )
}