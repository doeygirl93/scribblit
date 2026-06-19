import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  users: defineTable({
    userName: v.string(),
    passwordHash: v.string(),
  }).index("by_username", ["username"]),
});
 
export default schema;