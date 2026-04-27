import { ScrollView } from "react-native";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import EspecialOferrs from "@/components/EspecialOferrs";

export default function Home() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <Header />
      <SearchBar />
      <Categories />
      <Banner />

    {/* No futuro colocar aba de descontos do dia aqui */}

      <ProductCard />
      <EspecialOferrs />

    </ScrollView>
  );
}