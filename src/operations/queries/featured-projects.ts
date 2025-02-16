import { db } from "~/server/db";
import { projectsTable, type SelectTable } from "~/server/db/schema";

export const getFeaturedProjects = async (
  limit = 5
): Promise<Array<SelectTable>> => {
  return db.select().from(projectsTable).limit(limit);
};
