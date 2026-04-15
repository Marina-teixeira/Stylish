import { useRouter } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "../../assets/styles/senha.styles";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Senha() {

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.container}>
                    <StatusBar style="dark" />

                    <Text style={styles.title}>
                        Esqueceu a senha?
                    </Text>

                    <View style={styles.inputContainer}>
                        <Ionicons name="mail" size={20} color="#888" />
                        <TextInput 
                            placeholder="Digite o seu email"
                            style={styles.input}
                        />
                    </View>

                    <Text style={styles.message}>
                        *Enviaremos uma mensagem para que você redefina sua senha.
                    </Text>

                    {/* botão */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Enviar
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        </KeyboardAvoidingView>
    )
}