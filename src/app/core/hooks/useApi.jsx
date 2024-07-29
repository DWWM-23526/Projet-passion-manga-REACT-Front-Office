import { useContext } from "react";
import ApiContext from "../contexts/api/ApiContext";

export function useApi() {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
