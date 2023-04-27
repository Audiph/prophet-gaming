import Link from 'next/link';
import React from 'react';

const JoinUs = () => {
  return (
    <div className="fixed left-4 bottom-20 flex items-center justify-center">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Link
          href="https://discord.gg/kJBrUsmdjp"
          target={'_blank'}
          className="flex items-center justify-center absolute left-1/2 -top-10 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
        >
          Join Us!
        </Link>
      </div>
    </div>
  );
};

export default JoinUs;
