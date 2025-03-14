import { LoaderCircle } from 'lucide-react';
import React from 'react';

const Loader = () => {
  return (
    <div className="inline-flex items-center justify-center text-center">
      <LoaderCircle />
    </div>
  );
};

export default Loader;