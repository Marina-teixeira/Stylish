import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={{
      flexDirection: "row",
      backgroundColor: "#fff",
      marginHorizontal: 16,
      marginBottom: 10,
      borderRadius: 12,
      padding: 10,
      alignItems: "center"
    }}>
      <Ionicons name="search" size={20} color="#aaa" />

      <TextInput
        placeholder="Pesquise um produto"
        style={{ marginLeft: 10, flex: 1 }}
      />
    </View>
  );
}