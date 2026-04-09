import { Background } from "@react-navigation/elements";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
    },

    overlay: {
        flex: 1,
        justifyContent: "flex-end"
    },

    container: {
        padding: 24,
        marginBottom: 40,
    },

    title: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 36,
        marginBottom: 12,
    },

    subtitle: {
        color: "#DDDDDD",
        fontSize: 16,
        marginBottom: 20,
    },

    button: {
        backgroundColor: "#FF3B5C",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});