import Google from "@auth/core/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: "SEU_CLIENT_ID",
      clientSecret: "SEU_CLIENT_SECRET",
    }),
  ],
};

export default authConfig;