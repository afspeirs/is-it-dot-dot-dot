import { createContext, useContext } from 'react';

const DatesContext = createContext();
export const useDates = () => useContext(DatesContext);

export default DatesContext;
