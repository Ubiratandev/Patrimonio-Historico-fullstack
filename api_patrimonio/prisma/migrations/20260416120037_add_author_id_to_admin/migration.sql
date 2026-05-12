-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "author_id" BIGINT;

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
