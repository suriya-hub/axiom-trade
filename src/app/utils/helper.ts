import { SortKey, SortOrder } from "../types/types";

/* --------------- HELPERS --------------- */

export function sortTokens<T extends Record<string, any>>(
  tokens: T[],
  key: SortKey,
  order: SortOrder
) {
  return [...tokens].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];

    if (aVal === bVal) return 0;

    if (order === "asc") {
      return aVal > bVal ? 1 : -1;
    }
    return aVal < bVal ? 1 : -1;
  });
}