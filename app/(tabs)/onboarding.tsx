import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/styles/onboarding.styles";
import { StatusBar } from "expo-status-bar";

export default function Onboarding() {
    return (

        <>

        <StatusBar style="light" />
        <ImageBackground
            source={require("../../assets/images/unsplash_fouVDmGXoPI.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <LinearGradient
                colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.2)"]}
                style={styles.overlay}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Você quer ser{"\n"}autêntico, aqui é{"\n"}o seu lugar!
                    </Text>

                    <Text style={styles.subtitle}>
                        Encontre aqui, compre agora!
                    </Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Comece já!</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ImageBackground>

        </>
    )
}
