import { toast } from "react-toastify";
import { CopyToastOptions} from "../types/interface";
import { FaRegClipboard, FaTimes } from "react-icons/fa";


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