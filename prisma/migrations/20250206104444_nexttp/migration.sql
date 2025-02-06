-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Enrollment" ALTER COLUMN "enrollmentDate" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Progress" ALTER COLUMN "date" DROP DEFAULT,
ALTER COLUMN "evaluation" DROP NOT NULL,
ALTER COLUMN "comments" DROP NOT NULL;
