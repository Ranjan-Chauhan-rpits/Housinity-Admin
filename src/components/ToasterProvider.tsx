'use client';

import { Toaster } from 'react-hot-toast';

export default function ToasterProvider() {
  return (
    <Toaster
      position='top-right'
      toastOptions={{
        style: {
          marginTop: '55px', // shifts the toast lower from the top
        },
      }}
    />
  );
}
