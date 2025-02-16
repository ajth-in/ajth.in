ALTER TABLE "projects" ALTER COLUMN "image" SET DEFAULT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "link" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "link" DROP NOT NULL;