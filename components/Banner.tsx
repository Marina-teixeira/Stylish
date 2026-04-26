import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Banner() {
    return (
        <View style={{
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
        }}>

            <Image
                source={require("../assets/images/Rectangle 48.png")}
                style={{ width: 350, height: 200, borderRadius: 10 }}
            />

            <View style={{
                position: "absolute",
                top: 70,
                left: 20,
                marginLeft: 10,
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
                    <Text style={{ color: "#fff", fontSize: 14, fontWeight: "400" }}>
                        Compre agora
                    </Text>
                    <Text style={{ color: "#fff", fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                        →
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}