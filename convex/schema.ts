import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  folders: defineTable({
    title: v.string(),
    userId: v.string(),
    parent_folder_id: v.optional(v.id("folders")),

  })
  .index("by_user", ["userId"])
  .index("by_user_parent",["userId","parent_folder_id"])
});