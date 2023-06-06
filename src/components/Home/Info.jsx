/**
 * Component JSX that render General Info
 * @returns {JSX.Element} - return General Info
 */

function Info() {
  return (
    <ul className="mr-10 space-y-1 text-gray-500 list-disc list-inside w-full p-4 bg-white border-2 border-gray-300 border-dashed rounded-lg hover:shadow-md">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
        Informações gerais:
      </h5>
      <li className="ml-8 mt-8">Fornecer intensidade sonora em dB(A).</li>
      <li className="ml-8 mt-8">
        Tempo de exposição deve ser informado em minutos (0 a 480min./dia).
      </li>
      <li className="ml-8 mt-8">
        Fórmula: L_Aeq = 10 * log10(∑(10^(L_1/10) * T_i)/∑(T_i))
      </li>
      <li className="ml-8 mb-8">
        Onde: L_Aeq = Média logarítimica ponderada; T_i = medições de ruído em
        decibéis; L_i = Tempo de exposição em minutos
      </li>
    </ul>
  );
}

export default Info;
