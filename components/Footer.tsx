import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Footer() {
    return (
        <View style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 90,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 1,
            borderColor: "#ddd",
            elevation: 4,
            overflow: "visible"
        }}>
            <View style={{ 
                marginBottom: 40,
                flexDirection: "row",
                height: 35,
                gap: 20,
                overflow: "visible"
                }}>

                {/* Home */}
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <Ionicons name="home-outline" size={24} color="#EB3030" />

                    <Text style={{ color: "#EB3030", fontSize: 12 }}>
                        Home
                    </Text>
                </TouchableOpacity>

                {/* Lista de desejos */}
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <Ionicons name="heart-outline" size={24} color="#000" />

                    <Text style={{ color: "#000", fontSize: 12 }}>
                        Wishlist
                    </Text>
                </TouchableOpacity>

                {/* Carrinho */}
                <TouchableOpacity style={{ 
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    elevation: 2,
                    borderRadius: 40,
                    width: 60,
                    height: 60,
                    top: -30,
                    }}>
                    <Ionicons name="cart-outline" size={24} color="#333" />
                </TouchableOpacity>

                {/* Pesquisa */}
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <Ionicons name="search-outline" size={24} color="#333" />

                    <Text style={{ color: "#000", fontSize: 12 }}>
                        Pesquisa
                    </Text>
                </TouchableOpacity>

                {/* Configurações */}
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <Ionicons name="settings-outline" size={24} color="#333" />

                    <Text style={{ color: "#000", fontSize: 12 }}>
                        Config.
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}