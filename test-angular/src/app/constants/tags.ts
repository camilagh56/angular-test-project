export interface StateTag {
  id: string;
  label: string;
  color: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  type: 'tag' | 'chip';
  icon?: string;
  size?: 'small' | 'medium' | 'large';
}

export const STATES_TAGS: StateTag[] = [
  { 
    id: 'approved',
    color: 'success',
    label: 'Approved',
    type: 'tag',
    icon: 'check_circle'
  },
  { 
    id: 'rejected', 
    label: 'Rejected',
    color: 'danger',
    icon: 'do_not_disturb_on',
    type: 'tag'
  },
  { 
    id: 'pending', 
    label: 'Under Review',
    color: 'warning',
    type: 'tag',
    icon: 'schedule'
  },
  { 
    id: 'informative', 
    label: 'Current Version',
    color: 'info',
    type: 'tag', 
    icon: 'info'
  },
  {
    id: 'default',
    label: 'Default',
    color: 'primary',
    type: 'tag',
  },
 /* {
    id: 'default',
    label: 'Default',
    color: 'primary',
    type: 'chip',
  },*/
];