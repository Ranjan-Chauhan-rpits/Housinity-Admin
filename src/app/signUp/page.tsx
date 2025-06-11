'use client';

import { TextField } from '@mui/material';
import React, { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
}

const SingUp = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded shadow-lg w-full max-w-md'
      >
        <h1 className='text-2xl font-bold text-center text-slate-800 mb-6'>
          singUp Here
        </h1>

        <div>
          <TextField
            fullWidth
            id='email'
            label='Email Address'
            variant='outlined'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default SingUp;
