import { db } from "~/server/db";
import { blogsTable, type SelectBlogs } from "~/server/db/schema";

export const getFeaturedBlogs = async (
  limit = 5
): Promise<Array<SelectBlogs>> => {
  return db.select().from(blogsTable).limit(limit);
};
