import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className='flex h-14 items-center justify-between border-b bg-white px-6 py-4 shadow-md dark:bg-black dark:text-white'>
      {/* Left: Logo */}
      <div className='flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='size-6'
        >
          <path
            fill-rule='evenodd'
            d='M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z'
            clip-rule='evenodd'
          />
        </svg>

        <span className='ml-2 text-xl font-semibold'>Barakash Share</span>
      </div>

      {/* Center: Blank */}
      <div className='flex-1'></div>

      {/* Right: shadcn button */}
      <div>
        <Button variant='default' className='bg-primary'>
          <DownloadIcon />
          Action
        </Button>
      </div>
    </header>
  );
}
