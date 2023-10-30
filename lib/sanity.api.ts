export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const apiVersion = assertValue(
  process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  "2023-06-21"
);

export const readToken = process.env.SANITY_API_READ_TOKEN || "";
export const projectTitle =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "Next.js blog with Sanity";
export const previewSecretId: `${string}.${string}` = "preview.secret";
export const DRAFT_MODE_ROUTE = "/api/draft";
