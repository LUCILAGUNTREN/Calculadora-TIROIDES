export type Calculator =
  | 'TIRADS'
  | 'Bethesda'
  | 'TNM'
  | 'ATA Risk'
  | 'RAI Dose'
  | 'Dynamic Risk'
  | 'Levothyroxine';

export interface TiradsFeatures {
  composition: '0' | '1' | '2';
  echogenicity: '0' | '1' | '2' | '3';
  shape: '0' | '3';
  margin: '0' | '2' | '3';
  echogenicFoci: ('0' | '1' | '2' | '3')[];
}

export interface TnmInputs {
  edition: '7' | '8';
  age: number;
  t: 'TX' | 'T0' | 'T1a' | 'T1b' | 'T2' | 'T3a' | 'T3b' | 'T4a' | 'T4b';
  n: 'NX' | 'N0' | 'N1a' | 'N1b';
  m: 'M0' | 'M1';
}

export interface AtaRiskInputs {
  tumorType: 'PTC' | 'FTC_IEFVPTC' | 'OTC';
  tStage: 'T1' | 'T2' | 'T3a' | 'T3b' | 'T4';
  isIMPC: boolean;
  ete: 'none' | 'microscopic' | 'gross_strap' | 'gross_major';
  vascularInvasion: 'none' | 'focal' | 'extensive';
  nStage: 'N0' | 'N1a' | 'N1b';
  nodeCount: '<=5' | '>5';
  largestNode: '<1' | '1-3' | '>3';
  hasDistantMets: boolean;
  incompleteResection: boolean;
  brafV600e: boolean;
  aggressiveHistology: boolean;
}

export interface DynamicRiskInputs {
  initialTx: 'total_rai' | 'total_no_rai' | 'hemi';
  tg: string;
  stimulatedTg: string;
  tgAb: 'stable_declining' | 'rising' | 'negative';
  imaging: 'negative' | 'nonspecific' | 'suspicious';
}

export type AtaRiskCategory = 'Low' | 'Low-Intermediate' | 'Intermediate-High' | 'High' | 'Not Determined';
export type DynamicResponseCategory = 'Excellent' | 'Indeterminate' | 'Biochemically Incomplete' | 'Structurally Incomplete' | 'Inconclusive';
