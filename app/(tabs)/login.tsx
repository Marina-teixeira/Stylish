import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "../../assets/styles/login.styles";
import { StatusBar } from "expo-status-bar";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />

            <Text style={styles.title}>
                Bem vindo(a)!
            </Text>

            {/* input Email */}
            <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color="#777" />
                <TextInput 
                    placeholder="Digite o seu Email"
                    style={styles.input}
                />
            </View>

            {/* input Senha */}
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color="#777" />
                <TextInput 
                    placeholder="Senha"
                    secureTextEntry={!showPassword}
                    style={styles.input}
                />

                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name="eye-outline" size={20} color="#777" />
                </TouchableOpacity>
            </View>

            <Text style={styles.forgot}>Esqueceu a senha?</Text>

            {/* botão */}
            <TouchableOpacity style={styles.button}>
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
                Crie uma conta <Text style={styles.signupLink}>Sign up</Text>
            </Text>
        </View>
        
    )
}