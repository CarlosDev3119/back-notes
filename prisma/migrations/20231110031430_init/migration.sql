-- CreateTable
CREATE TABLE "notes" (
    "id_notes" SERIAL NOT NULL,
    "title_note" TEXT,
    "date_note" DATE,
    "content_note" TEXT,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id_notes")
);
