import { useRouter } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/styles/signup.styles";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const createUser = useMutation(api.users.createUser);

    const handleSignUp = async () => {
        setError("");

        if (!email || !password || !confirmPassword) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (password !== confirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }

        try {
            await createUser({
                email,
                passwordHash: password, 
            });

            alert("Usuário criado com sucesso");
        } catch (error) {
            console.log(error);
            alert("Erro ao cadastrar");
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <Text style={styles.title}>
                Crie sua conta!
            </Text>

            {/* input Email */}
            <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color="#777" />
                <TextInput
                    placeholder="Digite o seu Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
            </View>

            {/* input Senha */}
            <View style={[styles.inputContainer, error ? styles.inputError : null]}>
                <Ionicons name="lock-closed-outline" size={20} color="#777" />
                <TextInput
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    style={styles.input}
                />

                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name="eye-outline" size={20} color="#777" />
                </TouchableOpacity>
            </View>

            {/* confirmar senha */}
            <View style={[styles.inputContainer, error ? styles.inputError : null]}>
                <Ionicons name="lock-closed-outline" size={20} color="#777" />
                <TextInput
                    placeholder="Confirmar a senha"
                    secureTextEntry={!showPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    style={styles.input}
                />

                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name="eye-outline" size={20} color="#777" />
                </TouchableOpacity>
            </View>

            {error ? (
                <Text style={styles.errorText}>*{error}</Text>
            ) : null}

            {/* botão */}
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>

            {/* social */}
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome name="google" size={20} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome name="facebook" size={20} />
                </TouchableOpacity>
            </View>

            <Text style={styles.login}>
                Já tem uma conta?{" "}
                <Text
                    style={styles.loginLink}
                    onPress={() => router.push("/login")}
                >
                    Sign In
                </Text>
            </Text>
        </View>
    )
}