import { createContext, useContext } from 'react';

const SnackbarContext = createContext();
export const useSnackbar = () => useContext(SnackbarContext);

export default SnackbarContext;
