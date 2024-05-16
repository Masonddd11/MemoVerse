import { v } from "convex/values";

import { mutation } from "./_generated/server";
import { query } from "./_generated/server";

import { Doc, Id } from "./_generated/dataModel";
import { UserRoundIcon } from "lucide-react";

export const createFolder = mutation({
  args: { title: v.string(), parent_folder_id: v.optional(v.id("folders")) },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const folder = await ctx.db.insert("folders", {
      title: args.title,
      parent_folder_id: args.parent_folder_id,
      userId
    });

    return folder;
  },
});

export const readFolder = query({
  args: { folderId: v.id("folders") },
  handler: async (ctx, args) => {
    const folder = await ctx.db.get(args.folderId);
    // do something with `folder`
  },
});
