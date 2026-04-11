import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getUsers = query({
    handler: async (ctx) => {
        const users = await ctx.db.query("users").order("desc").collect();
        return users;
    },
});

export const createUser = mutation({
    args: {
        email: v.string(),
        passwordHash: v.string(),
    },

    handler: async (ctx, args) => {
        const userId = await ctx.db.insert("users", {
            email: args.email,
            passwordHash: args.passwordHash,
        });
        
        return userId;
    }
})