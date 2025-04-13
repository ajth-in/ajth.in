import { unstable_cache } from "next/cache";
import { db } from "~/server/db";
import { projectsTable, type SelectTable } from "~/server/db/schema";

export const getFeaturedProjects = unstable_cache(
  async (limit?: number): Promise<Array<SelectTable>> => {
    return db
      .select()
      .from(projectsTable)
      .limit(limit ?? 5);
  },
  ["projects"],
  { revalidate: 36000, tags: ["projects"] }
);
