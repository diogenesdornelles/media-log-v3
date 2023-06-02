import Rows from './Rows';

function Measures() {
  return (
    <form
      id="data-measures"
      className="flex flex-col p-4 bg-white border-2 border-gray-300 border-dashed rounded-lg hover:shadow-md"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
        Exposição e tempos:
      </h5>
      <div
        id="table-measures"
        className="grid gap-6 mb-6 grid-cols-2 w-full mx-auto"
      >
        <div>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Intensidade (dB(A))
          </p>
        </div>
        <div>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tempo de exposição (min./dia)
          </p>
        </div>
      </div>
      <Rows />
    </form>
  );
}

export default Measures;
