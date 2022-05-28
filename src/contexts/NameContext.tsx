import React, { ReactNode, useContext } from "react";

const NameContext = React.createContext({} as string);
const UpdateNameContext = React.createContext({} as (name: string) => void);

export function useName() {
  return useContext(NameContext);
}

export function useUpdateName() {
  return useContext(UpdateNameContext);
}

export function NameProvider({ children }: { children: ReactNode }) {
  const [name, setName] = React.useState("User");
  return (
    <NameContext.Provider value={name}>
      <UpdateNameContext.Provider value={setName}>
        {children}
      </UpdateNameContext.Provider>
    </NameContext.Provider>
  );
}

