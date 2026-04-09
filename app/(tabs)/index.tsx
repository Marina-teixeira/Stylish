import { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../../assets/styles/splash.styles";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require("../../assets/images/logoipsum-255 1.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>  
    </View>
  )
}
