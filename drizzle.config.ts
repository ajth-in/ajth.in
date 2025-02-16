import { type Config } from "drizzle-kit";

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/server/db/schema.ts",
  out: "./supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
}) satisfies Config;
