import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 24,
    justifyContent: "flex-start",
    paddingTop: 100,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEE",
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#DDD",
  },

  input: {
    flex: 1,
    marginLeft: 10,
  },

  message: {
    textAlign: "left",
    color: "#FF3B5C",
    marginBottom: 40,
    fontSize: 13,
    marginTop:10,
  },

  button: {
    backgroundColor: "#FF3B5C",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});