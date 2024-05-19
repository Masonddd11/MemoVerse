import { v } from "convex/values";

import { mutation } from "./_generated/server";
import { query } from "./_generated/server";


export const createFile = mutation({
  args: {
    title: v.string(),
    parent_file_id: v.optional(v.id("file")),
    content: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const file = await ctx.db.insert("file", {
      title: args.title,
      parent_file_id: args.parent_file_id,
      userId,
      content: args.content,
    });

    return file;
  },
});

export const readFile = query({

  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;
    const files = await ctx.db.query("file")
    .filter((q) => q.eq(q.field("userId"),userId)) 
    .collect();
    return files;
  },
});

export const readFilebyId = query({
  args: { fileId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;
    const file = await ctx.db.query("file")
      .filter((q) => q.and(q.eq(q.field("userId"),userId),q.eq(q.field("_id"),args.fileId)),)
      .collect()
      
    if (!file) {
      throw new Error("File not found");
    }

    return file;
  },
});

