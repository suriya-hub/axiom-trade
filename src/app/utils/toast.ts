import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Generic wrapper for all toast types
export const Toast = {
  success: (message: string, autoClose = 3000) =>
    toast.success(message, { position: "top-right", autoClose }),

  error: (message: string, autoClose = 3000) =>
    toast.error(message, { position: "top-right", autoClose }),

  info: (message: string, autoClose = 3000) =>
    toast.info(message, { position: "top-right", autoClose }),

  warn: (message: string, autoClose = 3000) =>
    toast.warn(message, { position: "top-right", autoClose }),
};
