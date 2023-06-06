/**
 * Actions object with various action types.
 *
 * @type {Object<string, string>} actions
 * @property {string} actions.number - Action type for changing the number.
 * @property {string} actions.parte - Action type for changing the parte.
 * @property {string} actions.register - Action type for changing the register.
 * @property {string} actions.empresa - Action type for changing the empresa.
 * @property {string} actions.ano - Action type for changing the ano.
 * @property {string} actions.measures - Action type for changing the measures.
 * @property {string} actions.result - Action type for changing the result.
 * @property {string} actions.sector - Action type for changing the sector.
 * @property {string} actions.hasDeveloper - Action type for changing the hasDeveloper flag.
 * @property {string} actions.developer - Action type for changing the developer.
 */
const actions = {
  number: 'CHANGE_NUMBER',
  parte: 'CHANGE_PARTE',
  register: 'CHANGE_REGISTER',
  empresa: 'CHANGE_EMPRESA',
  ano: 'CHANGE_ANO',
  measures: 'CHANGE_MEASURES',
  result: 'CHANGE_RESULT',
  sector: 'CHANGE_SECTOR',
  hasDeveloper: 'CHANGE_HAS_DEVELOPER',
  developer: 'CHANGE_DEVELOPER',
};

export default actions;
