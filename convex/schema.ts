import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  file: defineTable({
    title: v.string(),
    userId: v.string(),
    parent_file_id: v.optional(v.id("file")),
    content: v.optional(v.string())

  })
  .index("by_user", ["userId"])
  .index("by_user_parent",["userId","parent_file_id"])
});