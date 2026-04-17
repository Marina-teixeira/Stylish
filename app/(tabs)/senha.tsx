import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "../../assets/styles/senha.styles";
import { supabase } from "@/lib/supabase";
import { isValidEmail } from "@/utils/validators";


export default function Senha() {
    const [email, setEmail] = useState("");

    const handleResetPassword = async () => {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: "exp://localhost:19000/reset-password",
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (!isValidEmail(email)) {
            alert("Digite um email válido");
            return;
        }

        alert("Email de recuperação enviado!");
    };

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
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <Text style={styles.message}>
                        *Enviaremos uma mensagem para que você redefina sua senha.
                    </Text>

                    {/* botão */}
                    <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                        <Text style={styles.buttonText}>
                            Enviar
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        </KeyboardAvoidingView>
    )
}