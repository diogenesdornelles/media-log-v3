import Result from './Result';

/**
 * Component JSX that render Sheet
 * @returns {JSX.Element} - return Sheet
 */

function Sheet() {
  return (
    <div
      id="result-container-avg"
      className="p-4 bg-white border-2 border-gray-300 border-dashed rounded-lg transition-all shadeable"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        Planilha:
      </h5>
      <Result />
    </div>
  );
}

export default Sheet;
