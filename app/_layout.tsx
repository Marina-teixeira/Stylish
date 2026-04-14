import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const convex = new ConvexReactClient("https://confident-ibex-124.convex.cloud");

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ConvexAuthProvider client={convex} storage={AsyncStorage}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </ConvexAuthProvider>
    </ConvexProvider>
  );
}