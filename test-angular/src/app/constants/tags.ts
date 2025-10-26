export interface StateTag {
  id: string;
  label: string;
  type: 'approved' | 'rejected' | 'pending' | 'informative';
}

export const STATES_TAGS: StateTag[] = [
  { 
    id: 'approved', 
    label: 'Aprobado',
    type: 'approved'
  },
  { 
    id: 'rejected', 
    label: 'Rechazado',
    type: 'rejected'
  },
  { 
    id: 'pending', 
    label: 'Pendiente',
    type: 'pending'
  },
  { 
    id: 'informative', 
    label: 'Informativo',
    type: 'informative'
  }
];