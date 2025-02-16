CREATE TABLE IF NOT EXISTS "blogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"link" text,
	"tags" text[] DEFAULT '{}'::text[] NOT NULL,
	"description" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
