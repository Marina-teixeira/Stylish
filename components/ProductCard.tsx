import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { use, useRef } from "react";

export default function ProductCard() {
    // Botão de scroll horizontal
    const scrollRef = useRef<ScrollView>(null);
    let scrollx = useRef(0);

    const CARD_WIDTH = 176;

    const handleScroll = () => {
        scrollx.current += CARD_WIDTH;

        scrollRef.current?.scrollTo({
            x: scrollx.current,
            animated: true,
        })
    }

    return (

        <View style={{ flexDirection: "row" }}>

            <ScrollView
                ref={scrollRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
            >
                {/* Primeiro card */}
                <View style={{
                    width: 170,
                    backgroundColor: "#fff",
                    borderRadius: 16,
                    marginLeft: 16,
                    elevation: 3,
                }}>

                    <Image
                        source={require("../assets/images/Mask Group.png")}
                        style={{ width: "100%", height: 120, borderRadius: 5 }}
                    />

                    <View style={{ padding: 5 }}>
                        <Text numberOfLines={2} style={{ marginTop: 5, fontWeight: 500 }}>
                            Vestido Florido Feminino
                        </Text>

                        <Text style={{ marginTop: 5, fontSize: 12 }}>
                            Neque porro quisquam est qui dolorem ipsum quia
                        </Text>

                        <Text style={{ fontSize: 16, marginTop: 5, fontWeight: 500 }}>
                            R$ 99,90
                        </Text>

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{
                                textDecorationLine: "line-through",
                                color: "#999"
                            }}>
                                R$1599
                            </Text>

                            <Text style={{ color: "#FE735C", marginLeft: 5 }}>
                                40% OFF
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>

                            <Ionicons name="star" size={16} color="#EFAE1A" />
                            <Ionicons name="star" size={16} color="#EFAE1A" />
                            <Ionicons name="star" size={16} color="#EFAE1A" />
                            <Ionicons name="star" size={16} color="#EFAE1A" />
                            <Ionicons name="star-half" size={16} color="#EFAE1A" />

                            <Text style={{ marginLeft: 5, color: "#A4A9B3" }}>
                                56890
                            </Text>

                        </View>

                    </View>

                </View>

                {/* Segundo card */}
                <View style={{
                    width: 170,
                    backgroundColor: "#fff",
                    borderRadius: 16,
                    marginLeft: 16,
                    elevation: 3,
                }}>

                    <Image
                        source={require("../assets/images/tenis.png")}
                        style={{ width: "100%", height: 120, borderRadius: 5 }}
                    />

                    <View style={{ padding: 5 }}>
                        <Text numberOfLines={2} style={{ marginTop: 5, fontWeight: 500 }}>
                            HRX by Hrithik Roshan
                        </Text>

                        <Text style={{ marginTop: 5, fontSize: 12 }}>
                            Neque porro quisquam est qui dolorem ipsum quia
                        </Text>

                        <Text style={{ fontSize: 16, marginTop: 5, fontWeight: 500 }}>
                            R$ 99,90
                        </Text>

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{
                                textDecorationLine: "line-through",
                                color: "#999"
                            }}>
                                R$1599
                            </Text>

                            <Text style={{ color: "#FE735C", marginLeft: 5 }}>
                                50% OFF
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>

                            <Ionicons name="star" size={16} color="#EFAE1A" />
                            <Ionicons name="star" size={16} color="#EFAE1A" />
                            <Ionicons name="star" size={16} color="#EFAE1A" />
                            <Ionicons name="star" size={16} color="#EFAE1A" />
                            <Ionicons name="star-half" size={16} color="#EFAE1A" />

                            <Text style={{ marginLeft: 5, color: "#A4A9B3" }}>
                                56890
                            </Text>

                        </View>

                    </View>

                </View>

                {/* Terceiro card */}
                <View style={{
                    width: 170,
                    backgroundColor: "#fff",
                    borderRadius: 16,
                    marginLeft: 16,
                    elevation: 3,
                }}>

                    <Image
                        source={require("../assets/images/tenis.png")}
                        style={{ width: "100%", height: 120, borderRadius: 5 }}
                    />

                    <View style={{ padding: 5 }}>
                        <Text numberOfLines={2} style={{ marginTop: 5, fontWeight: 500 }}>
                            HRX by Hrithik Roshan
                        </Text>

                        <Text style={{ marginTop: 5, fontSize: 12 }}>
                            Neque porro quisquam est qui dolorem ipsum quia
                        </Text>

                        <Text style={{ fontSize: 16, marginTop: 5, fontWeight: 500 }}>
                            R$ 99,90
                        </Text>

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{
                                textDecorationLine: "line-through",
                                color: "#999"
                            }}>
                                R$1599
                            </Text>

                            <Text style={{ color: "#FE735C", marginLeft: 5 }}>
                                50% OFF
                            </Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>

                            <Ionicons name="star" size={16} color="#EFAE1A" />
                            <Ionicons name="star" size={16} color="#EFAE1A" />
                            <Ionicons name="star" size={16} color="#EFAE1A" />
                            <Ionicons name="star" size={16} color="#EFAE1A" />
                            <Ionicons name="star-half" size={16} color="#EFAE1A" />

                            <Text style={{ marginLeft: 5, color: "#A4A9B3" }}>
                                56890
                            </Text>

                        </View>

                    </View>

                </View>

            </ScrollView>

            {/* Botão de scroll */}
            <TouchableOpacity
                onPress={handleScroll}
                style={{
                    position: "absolute",
                    right: 10,
                    top: "40%",
                    backgroundColor: "#eee",
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 5,
                }}
            >
                <Ionicons name="chevron-forward" size={20} color="#333" />
            </TouchableOpacity>

        </View>

    )
}

// Fazer com que as estrelinhas funcionem depois:

{/* <View style={{ flexDirection: "row" }}>
  {[1,2,3,4,5].map((i) => {
    if (i <= Math.floor(rating)) {
      return <Ionicons key={i} name="star" size={16} color="#EFAE1A" />;
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      return <Ionicons key={i} name="star-half" size={16} color="#EFAE1A" />;
    } else {
      return <Ionicons key={i} name="star-outline" size={16} color="#EFAE1A" />;
    }
  })}
</View> */}

// O card fica muito para a direita após utilizar o scroll