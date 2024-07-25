import { Text } from '@/components/typography';
import { Link } from 'react-router-dom';
import { APP_ROUTS } from '@/constants/routes';
import { Button } from '@/components/ui/button';

export const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3">
      <Text className="font-bold text-[96px]">404</Text>
      <Text className="text-[21px]">Oops! The page you're looking for doesn't exist.</Text>
      <div className="flex items-center gap-1">
        <Button variant={'default'} asChild>
          <Link to={APP_ROUTS.App.Dashboard.Root.path} replace>
            <Text variant={'size-14'} className="font-semibold">
              Go To Dashboard
            </Text>
          </Link>
        </Button>
      </div>
    </div>
  );
};
