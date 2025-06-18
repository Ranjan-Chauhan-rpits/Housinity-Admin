'use client';

import { useParams } from 'next/navigation';

export default function Property() {
  const params = useParams();
  const id = params?.id as string;
  console.log('id', id);

  return (
    <div className='w-full text-center'>
      <p>view single property by id dynamically</p>
    </div>
  );
}
