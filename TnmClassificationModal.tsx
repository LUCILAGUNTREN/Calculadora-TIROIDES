import React from 'react'

interface TnmClassificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Table: React.FC<{ title: string; data: { code: string; desc: string }[] }> = ({ title, data }) => (
  <div>
    <h4 className="font-semibold text-md text-indigo-700 mb-2">{title}</h4>
    <div className="overflow-x-auto border border-slate-200 rounded-lg">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider w-1/4">Código</th>
            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Descripción</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-slate-900">{item.code}</td>
              <td className="px-4 py-2 whitespace-normal text-sm text-slate-600">{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

const ajcc8Data = {
  t: [
    { code: 'TX', desc: 'El tumor primario no puede ser evaluado.' },
    { code: 'T0', desc: 'No hay evidencia de tumor primario.' },
    { code: 'T1', desc: 'Tumor ≤2 cm, limitado a la tiroides.' },
    { code: 'T1a', desc: 'Tumor ≤1 cm, limitado a la tiroides.' },
    { code: 'T1b', desc: 'Tumor >1 cm pero ≤2 cm, limitado a la tiroides.' },
    { code: 'T2', desc: 'Tumor >2 cm pero ≤4 cm, limitado a la tiroides.' },
    { code: 'T3a', desc: 'Tumor >4 cm, limitado a la tiroides.' },
    { code: 'T3b', desc: 'ETE macroscópica a músculos pretiroideos.' },
    { code: 'T4a', desc: 'ETE macroscópica a subcutáneo, laringe, tráquea, esófago o NLR.' },
    { code: 'T4b', desc: 'ETE macroscópica a fascia prevertebral o envoltura carotídea/mediastínica.' },
  ],
  n: [
    { code: 'NX', desc: 'Los ganglios linfáticos regionales no pueden ser evaluados.' },
    { code: 'N0', desc: 'Sin metástasis ganglionares regionales.' },
    { code: 'N0a', desc: 'Ganglios confirmados benignos.' },
    { code: 'N0b', desc: 'Sin evidencia clínica/radiológica de metástasis.' },
    { code: 'N1', desc: 'Metástasis ganglionares regionales.' },
    { code: 'N1a', desc: 'Metástasis en compartimento central (VI o VII).' },
    { code: 'N1b', desc: 'Metástasis laterales I-V o retrofaríngeos.' },
  ],
  m: [
    { code: 'M0', desc: 'Sin metástasis a distancia.' },
    { code: 'M1', desc: 'Metástasis a distancia presentes.' },
  ]
}

const ajcc7Data = {
  t: [
    { code: 'TX', desc: 'El tumor primario no puede ser evaluado.' },
    { code: 'T0', desc: 'No hay evidencia de tumor primario.' },
    { code: 'T1a', desc: 'Tumor ≤1 cm, limitado a la tiroides.' },
    { code: 'T1b', desc: 'Tumor >1 cm pero ≤2 cm, limitado a la tiroides.' },
    { code: 'T2', desc: 'Tumor >2 cm pero ≤4 cm, limitado a la tiroides.' },
    { code: 'T3', desc: 'Tumor >4 cm limitado a la tiroides, o ETE mínima.' },
    { code: 'T4a', desc: 'ETE a subcutáneo, laringe, tráquea, esófago o NLR.' },
    { code: 'T4b', desc: 'Invasión de fascia prevertebral o envoltura carotídea/mediastínica.' },
  ],
  n: [
    { code: 'NX', desc: 'Los ganglios linfáticos regionales no pueden ser evaluados.' },
    { code: 'N0', desc: 'Sin metástasis ganglionares regionales.' },
    { code: 'N1a', desc: 'Metástasis en Nivel VI.' },
    { code: 'N1b', desc: 'Metástasis laterales (I-V) o mediastínicos sup. (VII).' },
  ],
  m: [
    { code: 'M0', desc: 'Sin metástasis a distancia.' },
    { code: 'M1', desc: 'Metástasis a distancia presentes.' },
  ]
}

const TnmClassificationModal: React.FC<TnmClassificationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center" aria-modal="true" role="dialog">
      <div className="bg-slate-50 rounded-xl shadow-2xl max-w-4xl w-full mx-4 my-8 max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-slate-200 sticky top-0 bg-slate-50 rounded-t-xl">
          <h2 className="text-lg font-bold text-indigo-800">Clasificación TNM Completa</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600" aria-label="Cerrar">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto space-y-8">
          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-indigo-200">AJCC 8ª Edición</h3>
            <div className="space-y-6">
              <Table title="T - Tumor Primario" data={ajcc8Data.t} />
              <Table title="N - Ganglios Linfáticos Regionales" data={ajcc8Data.n} />
              <Table title="M - Metástasis a Distancia" data={ajcc8Data.m} />
            </div>
          </section>
          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-indigo-200">AJCC 7ª Edición</h3>
            <div className="space-y-6">
              <Table title="T - Tumor Primario" data={ajcc7Data.t} />
              <Table title="N - Ganglios Linfáticos Regionales" data={ajcc7Data.n} />
              <Table title="M - Metástasis a Distancia" data={ajcc7Data.m} />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TnmClassificationModal
