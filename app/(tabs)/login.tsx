import { useRouter } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "../../assets/styles/login.styles";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const loginUser = useMutation(api.users.loginUser);

    // Função de login
    const handleLogin = async () => {
        setSubmitted(true);
        setError("");

        if (!email || !password) {
            return;
        }

        try {
            const user = await loginUser({ email, passwordHash: password });

            alert("Login realizado com sucesso!");
        } catch (err: any) {
            const message =
                err?.message ||
                err?.data?.message ||
                "";

            if (message.includes("INVALID_CREDENTIALS")) {
                setError("Email ou senha inválidos.");
                return;
            }

            setError("Erro ao fazer login.")
        }
    }

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
                        Bem vindo(a)!
                    </Text>

                    {/* Mensagens de erro */}
                    {submitted && (!email || !password) && (
                        <Text style={styles.errorText}>
                            Por favor, preencha todos os campos.
                        </Text>
                    )}

                    {error && (
                        <Text style={styles.errorText}>
                            *{error}
                        </Text>
                    )}

                    {/* input Email */}
                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="#777" />
                        <TextInput
                            placeholder="Digite o seu Email"
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    {/* input Senha */}
                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="#777" />
                        <TextInput
                            placeholder="Senha"
                            secureTextEntry={!showPassword}
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                        />

                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons
                                name={showPassword ? "eye-outline" : "eye-off-outline"}
                                size={20}
                                color="#777"
                            />
                        </TouchableOpacity>
                    </View>

                    <Text 
                        style={styles.forgot}
                        onPress={() => router.push("/senha")}
                    >
                        Esqueceu a senha?
                    </Text>

                    {/* botão */}
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <Text style={styles.or}>- Ou Continue com -</Text>

                    {/* social */}
                    <View style={styles.socialContainer}>
                        <TouchableOpacity style={styles.socialButton}>
                            <FontAwesome name="google" size={20} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.socialButton}>
                            <FontAwesome name="facebook" size={20} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.signup}>
                        Crie uma conta{" "}
                        <Text
                            style={styles.signupLink}
                            onPress={() => router.push("/signup")}
                        >
                            Sign Up
                        </Text>
                    </Text>
                </View>

            </ScrollView>

        </KeyboardAvoidingView>




    );
}