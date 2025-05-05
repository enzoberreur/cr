-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLogin" TIMESTAMP(3),
    "accountStatus" TEXT NOT NULL DEFAULT 'pending',
    "userType" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "administrators" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "administrators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volunteers" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "phone" TEXT NOT NULL,
    "experience" INTEGER DEFAULT 0,
    "skills" JSONB,
    "availability" JSONB,
    "trainings" JSONB,
    "specializations" JSONB,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "volunteers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beneficiaries" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "phone" TEXT,
    "address" TEXT,
    "city" TEXT,
    "postalCode" TEXT,
    "familySituation" TEXT,
    "householdSize" INTEGER DEFAULT 1,
    "professionalSituation" TEXT,
    "housingType" TEXT,
    "monthlyIncome" INTEGER,
    "priorityNeeds" JSONB,
    "photoUrl" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "beneficiaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diagnostics" (
    "id" TEXT NOT NULL,
    "diagnosticDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "formResponses" JSONB,
    "results" JSONB,
    "recommendations" JSONB,
    "suggestedAids" JSONB,
    "nextSteps" TEXT,
    "pdfUrl" TEXT,
    "version" TEXT,
    "beneficiaryId" TEXT NOT NULL,
    "volunteerId" TEXT,

    CONSTRAINT "diagnostics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnonymousDiagnostic" (
    "id" TEXT NOT NULL,
    "diagnosticDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "formResponses" JSONB NOT NULL,
    "results" JSONB,
    "recommendations" JSONB,
    "suggestedAids" JSONB,
    "nextSteps" TEXT,
    "pdfUrl" TEXT,
    "version" TEXT,

    CONSTRAINT "AnonymousDiagnostic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aid_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "eligibilityCriteria" JSONB,

    CONSTRAINT "aid_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beneficiary_aids" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'requested',
    "requestDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "decisionDate" TIMESTAMP(3),
    "notes" TEXT,
    "beneficiaryId" TEXT NOT NULL,
    "aidTypeId" TEXT NOT NULL,

    CONSTRAINT "beneficiary_aids_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FaceEmbedding" (
    "id" TEXT NOT NULL,
    "beneficiaryId" TEXT NOT NULL,
    "embedding" JSONB NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FaceEmbedding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KnowledgeDocument" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uploadedBy" TEXT,

    CONSTRAINT "KnowledgeDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "administrators_userId_key" ON "administrators"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "volunteers_userId_key" ON "volunteers"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "beneficiaries_userId_key" ON "beneficiaries"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "FaceEmbedding_beneficiaryId_key" ON "FaceEmbedding"("beneficiaryId");

-- AddForeignKey
ALTER TABLE "administrators" ADD CONSTRAINT "administrators_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volunteers" ADD CONSTRAINT "volunteers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beneficiaries" ADD CONSTRAINT "beneficiaries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diagnostics" ADD CONSTRAINT "diagnostics_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "beneficiaries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diagnostics" ADD CONSTRAINT "diagnostics_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "volunteers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beneficiary_aids" ADD CONSTRAINT "beneficiary_aids_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "beneficiaries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "beneficiary_aids" ADD CONSTRAINT "beneficiary_aids_aidTypeId_fkey" FOREIGN KEY ("aidTypeId") REFERENCES "aid_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FaceEmbedding" ADD CONSTRAINT "FaceEmbedding_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "beneficiaries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KnowledgeDocument" ADD CONSTRAINT "KnowledgeDocument_uploadedBy_fkey" FOREIGN KEY ("uploadedBy") REFERENCES "administrators"("id") ON DELETE SET NULL ON UPDATE CASCADE;
