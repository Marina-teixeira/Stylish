import {  View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EventSales() {
    return (
        <View style={{ 
                marginBottom: 15, 
                backgroundColor: "#fff", 
                margin: 16,
                borderRadius: 20,
            }}>
            <Image
                source={require("../assets/images/image 10.png")}
                style={{ width: "100%", height: 170,  borderTopLeftRadius: 16, borderTopRightRadius: 16}}
            />

            <View style={{ flexDirection: "row", margin: 15 }}>
                <Text style={{ fontSize: 16, marginTop: 5 }}>Coleção Verão 2026</Text>

                <TouchableOpacity style={{
                    backgroundColor: "#F83758",
                    marginLeft: "auto",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 10,
                }}>
                    <Text style={{ color: "#fff", fontSize: 13 }}>Veja agora</Text>

                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}