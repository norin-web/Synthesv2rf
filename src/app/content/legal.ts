// Legal texts must be the owner's documents reproduced VERBATIM.
// Only markup may change: section headings become "## ", bullets become "- ".
// Do not edit the wording.
//
// PLACEHOLDER — the owner has not sent the Privacy Policy and Terms of Use yet
// (2026-11-10). Until they arrive, both pages show a notice instead of a text.

// PLACEHOLDER — effective date from the owner's documents
export const legalUpdated = "PLACEHOLDER";

const PRIVACY: string | null = null;
const TERMS: string | null = null;

// "At a glance" cards are a site summary, not part of the documents.
// Fill them in from the real text once it arrives; hidden while empty.
export const privacy = {
  title: "Privacy Policy",
  body: PRIVACY,
  glance: [] as [string, string][],
  other: { to: "/terms", label: "Terms of Use" },
};

export const terms = {
  title: "Terms of Use",
  body: TERMS,
  glance: [] as [string, string][],
  other: { to: "/privacy", label: "Privacy Policy" },
};
