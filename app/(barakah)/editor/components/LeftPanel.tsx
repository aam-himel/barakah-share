import { Button } from '@/components/ui/button';
import ThemeCard from './ThemeCard';

export default function LeftPanel() {
  return (
    <div className='scrollbar z-[1] h-full w-[260px] flex-shrink-0 overflow-y-auto overflow-x-hidden border-r px-3'>
      <div>
        <Button className='w-full'>Check stats</Button>
        {new Array(10).fill(0).map((_, i) => (
          <div key={i}>
            <ThemeCard />
          </div>
        ))}
      </div>
    </div>
  );
}
