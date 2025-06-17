'use client';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { login } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { adminLogin } from '@/api/api_handler';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (email && password) {
  //     try {
  //       const res = await adminLogin(email, password);
  //       console.log('Login Response:', res.data);

  //       const user = res?.data?.data;
  //       const token = user?.token;
  //       const name = user?.name;
  //       // const email = user?.email;
  //       const id = user?.id;

  //       // console.log(user);
  //       // console.log(token);
  //       // console.log(name);

  //       if (res.data.success && token && name && user?.email && id) {
  //         const UserData = {
  //           token,
  //           userName: name,
  //           userEmail: user?.email,
  //           id: String(id),
  //         };

  //         dispatch(login(UserData));
  //         toast.success('Login successful!');
  //         setTimeout(() => {
  //           router.push('/dashboard');
  //         }, 100); // small delay is enough
  //       } else {
  //         toast.error('Login failed. Invalid credentials or response.');
  //       }
  //     } catch (error) {
  //       console.error('Login error:', error);
  //       toast.error('Something went wrong! Please try again.');
  //     }
  //   } else {
  //     toast.error('Please fill in both fields.');
  //   }
  // };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in both fields.');
      return;
    }

    try {
      const response = await adminLogin(email, password);
      const { success, data, message } = response?.data || {};

      if (!success || !data) {
        toast.error(message || 'Login failed. Invalid credentials.');
        return;
      }

      const { token, name, email: userEmail, profileImage, id } = data;

      console.log(profileImage);

      if (!token || !name || !userEmail || !id) {
        toast.error('Incomplete response received from server.');
        return;
      }

      const UserData = {
        token,
        userName: name,
        userEmail,
        profileImage,
        id: String(id),
      };

      // Save token and user to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(UserData));

      dispatch(login(UserData));
      toast.success('Login successful!');
      setTimeout(() => router.push('/dashboard'), 300); // small delay

      // router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Something went wrong! Please try again.');
    }
  };

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleLogin}
        className='bg-white p-8 rounded shadow-lg w-full max-w-md'
      >
        <h1 className='text-2xl font-bold text-center text-slate-800 mb-6'>
          Login
        </h1>

        <div className='mb-4'>
          <TextField
            fullWidth
            id='email'
            label='Email Address'
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-6'>
          <TextField
            fullWidth
            id='password'
            label='Password'
            type={showPassword ? 'text' : 'password'}
            variant='outlined'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowPassword} edge='end'>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className='hover:bg-blue-700 p-2'
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
