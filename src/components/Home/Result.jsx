import React, { useContext, useEffect, useState } from 'react';
import { GlobalGeneralContext } from '../../Provider/contexts/GlobalGeneralContext';
import weightedLogarithmicAverage from '../../utils/weightedLogarithmicAverage';
import { nanoid } from 'nanoid';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import generalActions from '../../Provider/actions/generalActions';

/**
 * Component JSX that render Result
 * @returns {JSX.Element} - return Result
 */

function Result() {
  const generalContext = useContext(GlobalGeneralContext);
  const {
    dispatchGeneralState,
    contextGeneralState: {
      measures,
      ano,
      empresa,
      number,
      parte,
      register,
      result,
      sector,
      hasDeveloper,
      developer,
    },
  } = generalContext;
  const [recognition, setRecognition] = useState('');
  useEffect(() => {
    const avg = weightedLogarithmicAverage(measures);
    if (avg > 90) {
      setRecognition('Período(s) em qualquer época.');
    } else if (avg <= 90 && avg > 85) {
      setRecognition('Período(s) até 05/03/1997 e a partir de 19/11/2003.');
    } else if (avg <= 85 && avg > 80) {
      setRecognition('Período(s) até 05/03/1997.');
    } else {
      setRecognition('Nenhum período(s).');
    }
    if (parseFloat(avg)) {
      dispatchGeneralState({
        type: generalActions.result,
        payload: avg,
      });
    }
  }, [measures, dispatchGeneralState]);
  const saveToPDF = () => {
    const doc = new jsPDF();
    const table = document.getElementById('table-avg-noise');
    autoTable(doc, {
      html: table,
      startY: 20,
      theme: 'grid',
    });
    doc.save('table.pdf');
  };
  return (
    <div>
      <table
        id="table-avg-noise"
        className="w-full text-sm text-left text-gray-500 rounded-lg"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-4 font-bold bg-gray-200" colSpan="3">
              MÉDIA LOGARÍTMICA PONDERADA
            </th>
          </tr>
          <tr>
            <th scope="col" className="px-6 py-3">
              Nº
            </th>
            <th scope="col" className="px-6 py-3">
              Intensidade (dB(A))
            </th>
            <th scope="col" className="px-6 py-3">
              Tempo de exposição (min./dia)
            </th>
          </tr>
        </thead>
        <tbody data-testid="table-body">
          {measures.map((measure, index) => (
            <React.Fragment key={nanoid(6)}>
              <tr className="bg-white border-b" style={{ height: '70px' }}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{measure.noise} dB(A)</td>
                <td className="px-6 py-4">{measure.time} min.</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-slate-200 border-b" data-testid="row-result">
            <td className="px-6 py-4 font-bold text-lg" colSpan="3">
              RESULTADO:
              <span className="px-2" data-testid="result" role="result">
                {result}
              </span>
              dB(A)
            </td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-bold" colSpan="3"></td>
          </tr>
          <tr className="border-b bg-slate-100">
            <td className="px-6 py-4 font-bold" colSpan="3">
              Fórmula: L_Aeq = 10*log10(Sum(10^(L_1/10)*T_i)/Sum(T_i))
            </td>
          </tr>
          <tr className="bg-slate-100 border-b">
            <td className="px-6 py-4 font-bold" colSpan="3">
              Onde: L_Aeq = Média logarítimica ponderada; T_i = medições de
              ruído em decibéis; L_i = Tempo de exposição em minutos
            </td>
          </tr>
          <tr className="bg-slate-100 border-b">
            <td className="px-6 py-4 font-bold" colSpan="3">
              Data do cálculo: {register}
            </td>
          </tr>
          <tr className="bg-slate-100 border-b">
            <td className="px-6 py-4 font-bold" colSpan="3">
              Parte: {parte}
            </td>
          </tr>
          <tr className="bg-slate-100 border-b">
            <td className="px-6 py-4 font-bold" colSpan="3">
              Processo: {number}
            </td>
          </tr>
          <tr className="bg-slate-100 border-b">
            <td className="px-6 py-4 font-bold" colSpan="3">
              Empresa: {empresa}
            </td>
          </tr>
          <tr className="bg-slate-100 border-b">
            <td className="px-6 py-4 font-bold" colSpan="3">
              Ano do laudo: {ano}
            </td>
          </tr>
          <tr className="bg-slate-100 border-b">
            <td className="px-6 py-4 font-bold" colSpan="3">
              Setor: {sector}
            </td>
          </tr>
          {hasDeveloper && (
            <tr className="bg-slate-100 border-b">
              <td className="px-6 py-4 font-bold" colSpan="3">
                Elaborado por: {developer}
              </td>
            </tr>
          )}
          <tr className="bg-slate-100 border-b">
            <td className="px-6 py-4 font-bold" colSpan="3">
              Enquadra: {recognition}
            </td>
          </tr>
        </tfoot>
      </table>
      <button
        type="button"
        className="w-full mt-8 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={saveToPDF}
      >
        Gerar PDF
      </button>
    </div>
  );
}

export default Result;
