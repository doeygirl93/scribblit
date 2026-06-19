import { query } from "./_generated/server";

export const getDrawings = query(async ({ db }) => {
  return await db.query("drawings").collect();
});
