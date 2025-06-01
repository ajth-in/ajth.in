import { config } from "dotenv";
import { getIntrospectionQuery, printSchema, buildClientSchema } from "graphql";
import fetch from "node-fetch";
import fs from "fs/promises";

config();

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GITHUB_API;
const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

async function fetchSchema() {
  if (!GRAPHQL_ENDPOINT || !TOKEN) {
    console.error("❌ Missing GRAPHQL_ENDPOINT or TOKEN in .env file.");
    process.exit(1);
  }

  const introspectionQuery = getIntrospectionQuery();

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query: introspectionQuery }),
  });

  const json = await response.json();

  // @ts-expect-error unknknown type
  if (json.errors) {
    console.error(
      "❌ Error fetching schema:",
      // @ts-expect-error unknknown type
      JSON.stringify(json.errors, null, 2),
    );
    process.exit(1);
  }

  // @ts-expect-error unknknown type
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const schema = buildClientSchema(json.data);
  const printedSchema = printSchema(schema);

  await fs.writeFile("schema.graphql", printedSchema);
  console.log("✅ Schema written to schema.graphql");
}

fetchSchema().catch((err) => {
  console.error("❌ Unexpected error:", err);
});
