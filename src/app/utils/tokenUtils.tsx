import { toast } from "react-toastify";
import { TOKEN_STAGES, TokenStage } from "../types/token";
import { showError, showSuccess } from "./toast";
import { FaRegClipboard, FaTimes } from "react-icons/fa";
import { ReactNode } from "react";

interface CopyToastOptions {
  message?: string;
  icon?: ReactNode;
}

export const TOKEN_NAMES = [
  "NovaPulse",
  "LunaFlux",
  "ApexCoin",
  "QuantumX",
  "AtlasPay",
  "Zenith",
  "OrbitChain",
  "EchoToken",
  "Nimbus",
  "Solara",
  "HelixPay",
  "Vertex",
  "CosmoX",
  "Aurora",
  "PulseNet",
  "MetaCoin",
  "Cryptex",
  "Valora",
  "Nexo",
  "BlockZen",
] as const;

export const getRandomStage = (): TokenStage =>
  TOKEN_STAGES[Math.floor(Math.random() * TOKEN_STAGES.length)];

export const getRandomTokenName = () =>
  TOKEN_NAMES[Math.floor(Math.random() * TOKEN_NAMES.length)];

export const copyToClipboard = async (
  value: string,
  options?: CopyToastOptions
) => {
  const {
    message = "Address copied to clipboard",
    icon = <FaRegClipboard className="text-blue-500 text-sm" />,
  } = options || {};

  try {
    await navigator.clipboard.writeText(value);

    toast(
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text">
          {icon}
          <span>{message}</span>
        </div>

        <FaTimes
          className="cursor-pointer text-gray-400 hover:text-white"
          onClick={() => toast.dismiss()}
        />
      </div>,
      {
        autoClose: 800,
        closeButton: false,
        pauseOnHover: false,
      }
    );
  } catch {
    toast.error("Copy failed");
  }
};