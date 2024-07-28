import { BADGE_COLORS } from '@/constants/badge-colors-map';
import { TImageAspectRatio, TTaskGenType, TTaskTemplateId } from '@/constants/task-constants';
import { cn } from '@/lib/utils';
import { FC } from 'react';

interface IBadgeComponentProps {
  badgeLabel: TTaskGenType | TImageAspectRatio | TTaskTemplateId;
}

export const BadgeComponent: FC<IBadgeComponentProps> = ({ badgeLabel }) => {
  return <div className={cn('rounded-full p-1 flex justify-center', BADGE_COLORS[badgeLabel])}>{badgeLabel}</div>;
};
