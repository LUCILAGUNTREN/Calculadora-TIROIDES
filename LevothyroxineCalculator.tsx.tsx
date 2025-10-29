import React, { useState } from 'react'
import Card from './shared/Card'
import SelectInput from './shared/SelectInput'
import ResultDisplay from './shared/ResultDisplay'
import { type DynamicResponseCategory } from '../types'

const TSH_GOALS: { [key in DynamicResponseCategory]?: { goal: string; note: string; color: string } } = {
  'Excellent': { goal: '0.5 - 2.0 mU/L', note: 'Mantener TSH en rango normal-bajo. Sin supresión.', color: 'border-green-400 bg-green-50' },
  'Indeterminate': { goal: '0.5 - 2.0 mU/L', note: 'Rango normal-bajo. Considerar supresión leve (0.1-0.5) si hubo alto riesgo inicial.', color: 'border-yellow-400 bg-yellow-50' },
  'Biochemically Incomplete': { goal: '0.1 - 0.5 mU/L', note: 'Se recomienda supresión de TSH (individualizar por edad/comorbilidades).', color: 'border-orange-400 bg-orange-50' },
  'Structurally Incomplete': { goal: '< 0.1 mU/L', note: 'Supresión intensa. Individualizar balanceando riesgos/beneficios.', color: 'border-red-400 bg-red-50' },
  'Inconclusive': { goal: 'N/A', note: 'Seleccione una categoría de respuesta válida.', color: 'border-slate-400 bg-slate-50' }
}

const LevothyroxineCalculator: React.FC = () => {
  const [response, setResponse] = useState<DynamicResponseCategory>('Excellent')
  const recommendation = TSH_GOALS[response] || TSH_GOALS['Inconclusive']

  return (
    <Card title="Levotiroxina (Meta de TSH)" description="Rango objetivo de TSH según respuesta dinámica.">
      <SelectInput
        label="Categoría de Respuesta"
        value={response}
        onChange={(e) => setResponse(e.target.value as DynamicResponseCategory)}
        options={[
          { value: 'Excellent', label: 'Respuesta Excelente' },
          { value: 'Indeterminate', label: 'Respuesta Indeterminada' },
          { value: 'Biochemically Incomplete', label: 'Respuesta Bioquímicamente Incompleta' },
          { value: 'Structurally Incomplete', label: 'Respuesta Estructuralmente Incompleta' },
        ]}
      />

      {recommendation && (
        <ResultDisplay title="Meta de TSH Recomendada" color={recommendation.color}>
          <p className="font-bold text-xl">{recommendation.goal}</p>
          <p className="text-sm mt-2">{recommendation.note}</p>
        </ResultDisplay>
      )}
    </Card>
  )
}

export default LevothyroxineCalculator