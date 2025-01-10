import ThemeCard from './ThemeCard';

export default function RightPanel() {
  return (
    <div className='scrollbar z-[1] grid h-full w-[260px] flex-shrink-0 overflow-y-auto overflow-x-hidden'>
      <div className='grid h-full grid-cols-1 px-2'>
        {new Array(10).fill(0).map((_, i) => (
          <div key={i}>
            <ThemeCard />
          </div>
        ))}
      </div>
    </div>
  );
}
