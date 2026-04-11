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
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [touched, setTouched] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Mensagens de erro
    const hasError = touched && password && confirmPassword && password !== confirmPassword;

    const emailError = submitted && !email;
    const passwordEmptyError = submitted && !password;
    const confirmPasswordEmptyError = submitted && !confirmPassword;

    // Validação de email
    const isValidEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const emailInvalidError = submitted && email && !isValidEmail(email);

    // Validação de senha
    const isValidPassword = (password: string) => {
        const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regex.test(password);
    };
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isPasswordValid = hasMinLength && hasUppercase && hasNumber;
    const passwordInvalidError = submitted && password && !isPasswordValid;
    const Requirement = ({ valid, text }) => (
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <Ionicons
                name={valid ? "checkmark-circle" : "ellipse-outline"}
                size={14}
                color={valid ? "#4CAF50" : "#999"}
                style={{ marginRight: 5 }}
            />
            <Text style={{ color: valid ? "#4CAF50" : "#999", fontSize: 12 }}>
                {text}
            </Text>
        </View>
    );

    const createUser = useMutation(api.users.createUser);

    const handleSignUp = async () => {
        setError("");
        setSubmitted(true);

        if (!email || !password || !confirmPassword) {
            return;
        }

        if (password !== confirmPassword) {
            return;
        }

        if (!isValidEmail(email)) {
            return;
        }

        if (!isValidPassword(password)) {
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

            {submitted && (!email || !password || !confirmPassword) && (
                <Text style={styles.errorText}>*Por favor, preencha todos os campos.</Text>
            )}

            {/* input Email */}
            <View style={[styles.inputContainer, (emailError || emailInvalidError) && styles.inputError]}>
                <Ionicons name="person-outline" size={20} color="#777" />
                <TextInput
                    placeholder="Digite o seu Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
            </View>

            {emailInvalidError && (
                <Text style={styles.errorText}>*Email inválido.</Text>
            )}

            {/* input Senha */}
            <View style={[styles.inputContainer, (passwordEmptyError || hasError || passwordInvalidError) && styles.inputError]}>
                <Ionicons name="lock-closed-outline" size={20} color="#777" />
                <TextInput
                    placeholder="Senha"
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                    }}
                    autoCorrect={false}
                    autoCapitalize="none"
                    textContentType="oneTimeCode"
                    secureTextEntry={!showPassword}
                    style={styles.input}
                />

                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name="eye-outline" size={20} color="#777" />
                </TouchableOpacity>

            </View>

            {password.length > 0 && (
                <View style={{ marginTop: 2 }}>
                    <Requirement valid={hasMinLength} text="Mínimo de 8 caracteres;" />
                    <Requirement valid={hasUppercase} text="Pelo menos uma letra maiúscula;" />
                    <Requirement valid={hasNumber} text="Pelo menos um número;" />
                </View>
            )}

            {passwordInvalidError && (
                <Text style={styles.errorText}>
                    *Sua senha não atende aos requisitos.
                </Text>
            )}

            {/* confirmar senha */}
            <View style={[styles.inputContainer, (confirmPasswordEmptyError || hasError) && styles.inputError]}>
                <Ionicons name="lock-closed-outline" size={20} color="#777" />
                <TextInput
                    placeholder="Confirmar a senha"
                    secureTextEntry={!showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={(text) => {
                        setConfirmPassword(text);
                        setTouched(true);
                    }}
                    autoCorrect={false}
                    autoCapitalize="none"
                    textContentType="oneTimeCode"
                    style={styles.input}
                />

                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <Ionicons name="eye-outline" size={20} color="#777" />
                </TouchableOpacity>
            </View>

            {hasError && (
                <Text style={styles.errorText}>*As senhas não coincidem.</Text>
            )}

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