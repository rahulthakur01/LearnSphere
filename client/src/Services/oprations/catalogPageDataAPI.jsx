import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";

export const getCatalogaPageData = async () => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector();
  } catch (error) {}
};
