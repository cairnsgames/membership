import { useContext } from "react";
import { MembershipContext } from "./provider";

export const useMembership = () => {
    // get the context
    const context = useContext(MembershipContext);
  
    // if `undefined`, throw an error
    if (!context) {
      throw new Error("useMembership was used outside of its Provider");
    }
    const { membership } = context;
  
    return {membership};
  };
