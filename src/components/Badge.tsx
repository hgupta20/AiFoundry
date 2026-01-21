import { Maturity } from '@/types';

interface BadgeProps {
  maturity: Maturity;
  size?: 'sm' | 'md';
}

const maturityColors: Record<Maturity, { bg: string; text: string; border: string }> = {
  Live: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
  },
  Pilot: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
  },
  Concept: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
  },
  Vision: {
    bg: 'bg-slate-50',
    text: 'text-slate-600',
    border: 'border-slate-200',
  },
};

export function Badge({ maturity, size = 'md' }: BadgeProps) {
  const colors = maturityColors[maturity];
  const sizeClasses = size === 'sm' 
    ? 'px-2 py-0.5 text-xs' 
    : 'px-2.5 py-1 text-sm';

  return (
    <span
      className={`inline-flex items-center font-medium rounded border ${colors.bg} ${colors.text} ${colors.border} ${sizeClasses}`}
    >
      {maturity}
    </span>
  );
}

interface LaneBadgeProps {
  lane: string;
  size?: 'sm' | 'md';
}

export function LaneBadge({ lane, size = 'md' }: LaneBadgeProps) {
  const sizeClasses = size === 'sm' 
    ? 'px-2 py-0.5 text-xs' 
    : 'px-2.5 py-1 text-sm';

  return (
    <span
      className={`inline-flex items-center font-medium rounded bg-gray-100 text-gray-700 border border-gray-200 ${sizeClasses}`}
    >
      {lane}
    </span>
  );
}

