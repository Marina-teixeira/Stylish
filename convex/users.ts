import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import bcrypt from "bcryptjs";

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

    // Verifica se email já existe
    handler: async (ctx, args) => {
        const existingUser = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("email"), args.email))
            .first();

        if (existingUser) {
            throw new Error("EMAIL_ALREADY_EXISTS");
        }

        const hashedPassword = await bcrypt.hash(args.passwordHash, 10);

        const userId = await ctx.db.insert("users", {
            email: args.email,
            passwordHash: hashedPassword,
        });
        return userId;
    }

});

export const loginUser = mutation({
    args: {
        email: v.string(),
        passwordHash: v.string(),
    },

    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("email"), args.email))
            .first();
        
        if (!user) {
            throw new Error("INVALID_CREDENTIALS");
        }

        const isMatch = await bcrypt.compare(args.passwordHash, user.passwordHash);

        if (!isMatch) {
            throw new Error("INVALID_CREDENTIALS");
        }

        return user;
    }
})