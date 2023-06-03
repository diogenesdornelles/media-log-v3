import { useEffect, useState, useContext } from 'react';
import { Label, TextInput } from 'flowbite-react';
import { GlobalGeneralContext } from '../../Provider/contexts/GlobalGeneralContext';
import InputMask from 'react-input-mask';
import moment from 'moment';
import generalActions from '../../Provider/actions/generalActions';

function parseProcessNumber(inputString) {
  const processNumberRegex =
    /^(\d{7}-\d{2}[./]\d{4}[./]\d{1}[./]\d{2}[./]\d{4})$/g;
  const match = processNumberRegex.exec(inputString);
  return match;
}

function Data() {
  const [isValidNumber, setIsValidNumber] = useState(false);
  const generalContext = useContext(GlobalGeneralContext);
  const {
    dispatchGeneralState,
    contextGeneralState: { number, parte, register, empresa, ano },
  } = generalContext;
  const handleChangeProcessNumber = (e) => {
    const { value } = e.target;
    dispatchGeneralState({ type: generalActions.number, payload: value });
    const isValid = parseProcessNumber(value);
    if (isValid) {
      setIsValidNumber(true);
    } else {
      setIsValidNumber(false);
    }
  };
  useEffect(() => {
    dispatchGeneralState({
      type: generalActions.register,
      payload: moment().locale('pt-BR').format('DD/MM/YYYY'),
    });
  }, [dispatchGeneralState]);
  const handleChangeParteName = (e) => {
    const { value } = e.target;
    dispatchGeneralState({ type: generalActions.parte, payload: value });
  };

  const handleChangeEmpresaName = (e) => {
    const { value } = e.target;
    dispatchGeneralState({ type: generalActions.empresa, payload: value });
  };
  const handleChangeAno = (e) => {
    const { value } = e.target;
    dispatchGeneralState({ type: generalActions.ano, payload: value });
  };
  const clearDataRegister = () => {
    dispatchGeneralState({ type: generalActions.ano, payload: '' });
    dispatchGeneralState({ type: generalActions.empresa, payload: '' });
    dispatchGeneralState({ type: generalActions.parte, payload: '' });
    dispatchGeneralState({ type: generalActions.number, payload: '' });
  };
  return (
    <div className="flex flex-col p-4 bg-white border-2 border-gray-300 border-dashed rounded-lg hover:shadow-md">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Informe os dados:
      </h5>
      <div className="flex flex-col gap-4 p-8">
        <div className="flex flex-col items-center gap-2">
          <div className="mb-2 block self-start">
            <Label htmlFor="processo" value="Número do processo" />
          </div>
          <InputMask
            id="processo"
            mask="9999999-99.9999.9.99.9999"
            maskChar={null}
            value={number}
            onChange={handleChangeProcessNumber}
            className={`block text-base w-full m-auto p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              isValidNumber && 'bg-green-100'
            }`}
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="parte" value="Empresa" />
        </div>
        <TextInput
          id="parte"
          type="text"
          placeholder=""
          required
          value={empresa}
          onChange={handleChangeEmpresaName}
        />
        <div className="mb-2 block">
          <Label htmlFor="parte" value="Parte" />
        </div>
        <TextInput
          id="parte"
          type="text"
          placeholder=""
          required
          value={parte}
          onChange={handleChangeParteName}
        />
        <div className="mb-2 block">
          <Label htmlFor="data" value="Data de elaboração do cálculo" />
        </div>
        <TextInput
          id="data"
          type="text"
          placeholder=""
          required
          value={register}
          disabled
        />
        <div className="mb-2 block">
          <Label htmlFor="parte" value="Ano do PPRA/LTCAT" />
        </div>
        <TextInput
          id="parte"
          type="text"
          placeholder=""
          required
          value={ano}
          onChange={handleChangeAno}
        />
      </div>
      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={clearDataRegister}
      >
        Limpar
      </button>
    </div>
  );
}

export default Data;
