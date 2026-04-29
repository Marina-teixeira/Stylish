import { ScrollView, View } from "react-native";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import EspecialOferrs from "@/components/EspecialOferrs";
import PopularProducts from "@/components/PopularProducts";
import EventSales from "@/components/EventSales";
import ProductList from "@/components/ProductList";
import Sponsored from "@/components/sponsored";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5", paddingBottom: 80 }}>
        <Header />
        <SearchBar />
        <Categories />
        <Banner />

        {/* No futuro colocar aba de descontos do dia aqui */}

        <ProductCard />
        <EspecialOferrs />
        <EventSales />

        <PopularProducts />
        <ProductList />

        <Sponsored />

      </ScrollView>

      <Footer />
    </View>


  );
}