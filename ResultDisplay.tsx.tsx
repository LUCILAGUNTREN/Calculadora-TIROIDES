import React, { type ReactNode } from 'react'

const ResultDisplay: React.FC<{ title: string; color: string; children: ReactNode }> = ({ title, color, children }) => {
  return (
    <div className={`mt-6 border ${color} rounded-lg p-4`}>
      <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  )
}

export default ResultDisplay