'use client';

// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
// import { login } from '@/redux/slices/authSlice';
// import { useRouter } from 'next/navigation';
// import { adminLogin } from '@/api/api_handler';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  //   const dispatch = useDispatch();
  //   const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      //   try {
      //     const res = await adminLogin(email, password);
      //     console.log(res);
      //     console.log(res.data.success);
      //     if (res.data.success) {
      //       const UserData = {
      //         token: res.data.result['token'],
      //         userName: res.data.result['name'],
      //         userEmail: res.data.result['email'],
      //         role: res.data.result['role'],
      //         id: res.data.result['id'],
      //       };
      //       // Dispatch the login action with the required fields
      //       dispatch(login(UserData));
      //       // Show success toast
      //       toast.success('Login successful!');
      //       // Redirect to another page
      //       setTimeout(() => {
      //         router.push('/admin-users?page=1&filter=name&search=');
      //       }, 2000);
      //     } else {
      //       // Show error toast
      //       toast.error('Login failed');
      //     }
      //   } catch (error) {
      //     console.error(error);
      //     // Show error toast
      //     toast.error('Something went wrong! Please try again.');
      //   }
    } else {
      toast.error('Please fill in both fields.');
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
          className='hover:bg-blue-700'
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
