import { createContext, useContext } from 'react';

const GlobalStateContext = createContext();
export const useGlobalState = () => useContext(GlobalStateContext);

export default GlobalStateContext;
