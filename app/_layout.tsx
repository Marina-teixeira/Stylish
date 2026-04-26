import { Stack } from "expo-router";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

// 🔥 fecha automaticamente o browser quando volta
WebBrowser.maybeCompleteAuthSession();

export default function RootLayout() {

  useEffect(() => {

    // escuta retorno do Google (deep link)
    const subscription = Linking.addEventListener("url", async (event) => {
      console.log("URL recebida:", event.url);

      const { data, error } = await supabase.auth.exchangeCodeForSession(event.url);

      if (error) {
        console.log("Erro ao trocar sessão:", error);
        return;
      }

      console.log("Login finalizado!");
    });

    // escuta estado de login
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("EVENTO:", event);

        if (event === "SIGNED_IN") {
          console.log("Usuário logado:", session?.user);
        }
      }
    );

    return () => {
      subscription.remove();
      listener.subscription.unsubscribe();
    };

  }, []);

  return (
    <Stack 
      screenOptions={{ headerShown: false }} 
    />
  );
}