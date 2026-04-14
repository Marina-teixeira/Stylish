import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 24,
    justifyContent: "center",
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
  
  errorText: {
    color: "#FF3B5C",
    fontSize: 12,
    marginTop: -2,
    marginBottom: 10,
  },

  forgot: {
    textAlign: "right",
    color: "#FF3B5C",
    marginBottom: 30,
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

  or: {
    textAlign: "center",
    color: "#777",
    marginBottom: 20,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 30,
  },

  socialButton: {
    borderWidth: 1,
    borderColor: "#FF3B5C",
    borderRadius: 50,
    padding: 12,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  signup: {
    textAlign: "center",
    color: "#777",
  },

  signupLink: {
    color: "#FF3B5C",
    fontWeight: "bold",
  },
});