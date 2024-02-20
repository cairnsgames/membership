import React, { createContext, useEffect, useState } from "react";

import 'dotenv/config';

type MembershipType = {
  membership: string
  config: any
  params: any
}
type MembershipProviderType = {
  children: React.ReactNode
  application: string
  config: any
  params: any
}

// create context
const MembershipContext = createContext<MembershipType>({ membership: "", config: {}, params: []});

const MembershipProvider = ( props: MembershipProviderType ) => {
  const { children } = props;

  if (!props.application) {
    throw new Error("MembershipProvider: application prop is required");
  }

  const [membership, ] = useState(props.application);
  const [configValue, ] = useState(props.config);
  const [params, setParams] = useState(props.params);

  useEffect(() => {
    fetch(process.env.REACT_APP_TENANT_API + "params.php", {
      headers: { "Content-Type": "application/json", "APP_ID": membership },
    })
      .then((res) => res.json())
      .then((data) => {
        setParams(data.params);
      })
  }, [membership]);

  return (
    <MembershipContext.Provider value={{membership, config: configValue, params}}>
      {children}
    </MembershipContext.Provider>
  );
};

export { MembershipContext, MembershipProvider }