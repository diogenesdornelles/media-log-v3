import proptypes from 'prop-types';
import { createContext, useReducer } from 'react';
import { reducer } from '../reducers/generalReducer';
import { globalGeneralState } from '../states/globalGeneralState';
export const GlobalGeneralContext = createContext();

/**
 * Global context provider component for the GeneralContext.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} - The GeneralContext provider component.
 */

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
