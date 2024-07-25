import React, { FC, cloneElement } from 'react';
import { LucideProps } from 'lucide-react';
import { Text } from '@/components/typography';

interface IAppTableHeaderProps {
  title?: string;
  icon: React.ReactElement<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
}

export const AppTableHeader: FC<IAppTableHeaderProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2">
      {cloneElement(icon)}
      {title && (
        <Text variant={'size-14'} type={'body-600'} className="text-stone-700">
          {title}
        </Text>
      )}
    </div>
  );
};
