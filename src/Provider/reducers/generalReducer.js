import generalActions from '../actions/generalActions';

export const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case generalActions.parte: {
      const { payload } = action;
      return {
        ...state,
        parte: payload,
      };
    }
    case generalActions.empresa: {
      const { payload } = action;
      return {
        ...state,
        empresa: payload,
      };
    }
    case generalActions.ano: {
      const { payload } = action;
      return {
        ...state,
        ano: payload,
      };
    }
    case generalActions.number: {
      const { payload } = action;
      return {
        ...state,
        number: payload,
      };
    }
    case generalActions.register: {
      const { payload } = action;
      return {
        ...state,
        register: payload,
      };
    }
    case generalActions.measures: {
      const { payload } = action;
      return {
        ...state,
        measures: payload,
      };
    }
    case generalActions.result: {
      const { payload } = action;
      return {
        ...state,
        result: payload,
      };
    }
    case generalActions.sector: {
      const { payload } = action;
      return {
        ...state,
        sector: payload,
      };
    }
    case generalActions.developer: {
      const { payload } = action;
      return {
        ...state,
        developer: payload,
      };
    }
    case generalActions.hasDeveloper: {
      const { payload } = action;
      return {
        ...state,
        hasDeveloper: payload,
      };
    }
  }
  return { ...state };
};
