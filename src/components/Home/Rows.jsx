import React, { useContext, useCallback, useState } from 'react';
import { Alert } from 'flowbite-react';
import { GlobalGeneralContext } from '../../Provider/contexts/GlobalGeneralContext';
import generalActions from '../../Provider/actions/generalActions';
import { nanoid } from 'nanoid';
import { Button } from 'flowbite-react';

/**
 * Component JSX that render Rows
 * @returns {JSX.Element} - return Rows
 */

function Rows() {
  const generalContext = useContext(GlobalGeneralContext);
  const {
    dispatchGeneralState,
    contextGeneralState: { measures },
  } = generalContext;
  const [alert, setAlert] = useState(false);

  const handleTiBlur = useCallback(
    (e, index) => {
      const { value } = e.target;
      let newValue = value.replace(/,/g, '.');
      if (!parseFloat(newValue) && newValue !== '') {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 5000);
        return;
      }
      if (!newValue) return;
      const newMeasures = [...measures];
      newMeasures[index].noise = parseFloat(newValue);
      dispatchGeneralState({
        type: generalActions.measures,
        payload: newMeasures,
      });
    },
    [dispatchGeneralState, measures],
  );

  const handleLiBlur = useCallback(
    (e, index) => {
      const { value } = e.target;
      let newValue = value.replace(/,/g, '.');
      if (!parseFloat(newValue) && newValue !== '') {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 5000);
        return;
      }
      if (!newValue) return;
      const newMeasures = [...measures];
      newMeasures[index].time = parseFloat(newValue);
      dispatchGeneralState({
        type: generalActions.measures,
        payload: newMeasures,
      });
    },
    [dispatchGeneralState, measures],
  );
  const handleClickIncreaseLine = () => {
    const newMeasures = [...measures, { noise: '', time: '' }];
    dispatchGeneralState({
      type: generalActions.measures,
      payload: newMeasures,
    });
  };
  const handleClickDecreaseLine = () => {
    const newMeasures = [...measures];
    newMeasures.splice(newMeasures.length - 1, 1);
    dispatchGeneralState({
      type: generalActions.measures,
      payload: newMeasures,
    });
  };

  // const getFocus = (e) => {
  //   //e.target.focus();
  //   e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  // };

  const clearMeasures = () => {
    dispatchGeneralState({
      type: generalActions.measures,
      payload: [
        {
          noise: '',
          time: '',
        },
      ],
    });
    dispatchGeneralState({
      type: generalActions.result,
      payload: 0,
    });
  };

  return (
    <>
      {measures.map((measure, index) => (
        <React.Fragment key={nanoid(5)}>
          <div
            className="grid gap-6 mb-6 grid-cols-2 w-full mx-auto"
            data-testid="measures-input"
          >
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="T_i"
                pattern="[0-9]{0,3}"
                defaultValue={measure?.noise}
                onBlur={(e) => handleTiBlur(e, index)}
                data-testid="ti-input"
              />
            </div>
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="L_i"
                pattern="[0-9]{0,3}"
                defaultValue={measure?.time}
                onBlur={(e) => handleLiBlur(e, index)}
                data-testid="li-input"
              />
            </div>
          </div>
        </React.Fragment>
      ))}
      {alert && (
        <Alert color="failure">
          <span>
            <p>
              <span className="font-medium mr-3">Info!</span>
              Valor inválido! Forneça um valor decimal.
            </p>
          </span>
        </Alert>
      )}
      <div className="flex w-full mb-6 gap-x-2 justify-center mt-5">
        <Button
          color="gray"
          className="hover:shadow-sm"
          onClick={handleClickIncreaseLine}
          data-testid="more-rows"
        >
          +
        </Button>
        <Button
          color="gray"
          className="hover:shadow-sm"
          onClick={handleClickDecreaseLine}
        >
          -
        </Button>
      </div>
      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={clearMeasures}
        data-testid="clear-li-ti"
      >
        Limpar
      </button>
    </>
  );
}

export default Rows;
