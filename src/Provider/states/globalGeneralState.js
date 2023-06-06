/**
 * Global application state object.
 *
 * @type {Object}
 * @property {string} number - The value for the number.
 * @property {string} parte - The value for the parte.
 * @property {string} register - The value for the register.
 * @property {string} empresa - The value for the empresa.
 * @property {string} ano - The value for the ano.
 * @property {number} result - The result value.
 * @property {string} sector - The value for the sector.
 * @property {string} developer - The value for the developer.
 * @property {boolean} hasDeveloper - Indicates if a developer is present.
 * @property {Array<Object>} measures - Array of measures objects.
 * @property {string} measures[].noise - The value for the noise measure.
 * @property {string} measures[].time - The value for the time measure.
 */

export const globalGeneralState = {
  number: '',
  parte: '',
  register: '',
  empresa: '',
  ano: '',
  result: 0,
  sector: '',
  developer: '',
  hasDeveloper: false,
  measures: [
    {
      noise: '',
      time: '',
    },
  ],
};
