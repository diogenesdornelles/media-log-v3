import proptypes from 'prop-types';
import { createContext, useReducer } from 'react';
import { reducer } from '../reducers/generalReducer';
import { globalGeneralState } from '../states/globalGeneralState';
export const GlobalGeneralContext = createContext();

export const GeneralContext = ({ children }) => {
  const [contextGeneralState, dispatchGeneralState] = useReducer(
    reducer,
    globalGeneralState,
  );
  return (
    <GlobalGeneralContext.Provider
      value={{ contextGeneralState, dispatchGeneralState }}
    >
      {children}
    </GlobalGeneralContext.Provider>
  );
};

GeneralContext.propTypes = {
  children: proptypes.node,
};
