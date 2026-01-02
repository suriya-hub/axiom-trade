import { TOKEN_STAGES, TokenStage } from "../types/interface";
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

export const shortAddress = (address: string) => {
  if (!address) return "";
  if (address.length <= 6) return address;
  return `${address.slice(0, 3)}...${address.slice(-3)}`;
};

export const getRandomImage = () =>
  `https://picsum.photos/50/50?random=${Math.floor(Math.random() * 1000)}`;

export const getRandomStage = (): TokenStage =>
  TOKEN_STAGES[Math.floor(Math.random() * TOKEN_STAGES.length)];

const PREDEFINED_TOKEN_NAMES = [
  "Jade", "Nova", "Luna", "Apex", "Quantum",
  "Atlas", "Zenith", "Orbit", "Echo", "Nimbus",
  "Solara", "Helix", "Vertex", "Cosmo", "Aurora",
  "Pulse", "Meta", "Cryptex", "Valora", "Nexo",
  "Stellar", "Neo", "Vortex", "Hyper", "Galaxy",
  "Fusion", "Luma", "Astro", "Solarix", "Drift",
  "Ignis", "Prism", "Rift", "Astra", "Bolt",
  "Glow", "Terra", "Xeno", "Omni", "Fission"
] as const;
const ADDITIONAL_TOKEN_NAMES = [
  "Nebula", "Orion", "Lyra", "Eclipse", "Spectra",
  "Aether", "Vega", "Celes", "Novae", "Solstice",
  "Polaris", "Arion", "Zenara", "Ignite", "Quasar",
  "Lumina", "Stratus", "Aurion", "Draco", "Vertexa",
  "Cryon", "Vortix", "Axion", "Hyperion", "Celestia",
  "Radiant", "Obsidian", "Ionix", "Galara", "Nimbusa"
] as const;


export const getRandomTokenName = (): string => {
  const firstName =
    PREDEFINED_TOKEN_NAMES[Math.floor(Math.random() * PREDEFINED_TOKEN_NAMES.length)];
  const lastName =
    ADDITIONAL_TOKEN_NAMES[Math.floor(Math.random() * ADDITIONAL_TOKEN_NAMES.length)];
  return `${firstName } ${lastName}`;
};


export function formatK(num: number) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}
