import React, { useState } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { AxiosRequest } from '../Axios/AxiosRequest';
import { toast,ToastContainer } from 'react-toastify';

const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await AxiosRequest.post('/api/auth/login', { email, password });
      
      // Handle response
      console.log('Login successful:', response.data);
      toast.success('Login successful');
      setTimeout(() =>{
       navigate("/home")
       }, 1000);

      // Redirect or show success message
    } catch (error) {
      // Handle error
      console.error('Error during login:', error.message);
      if (error.response && error.response.status === 400) {
        toast.error('Invalid Email or Password');
      } else {
        toast.error('Login failed');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#14082c] py-12 px-4 sm:px-6 lg:px-8">
            <ToastContainer />
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Input
            type="email"
            value={email}
            label='Email Address'
            onChange={(e) => setEmail(e.target.value)}
            required   
            size="md"
            color='black'
            variant='outlined'
            className="focus:ring-0"
          />
          <Input
            type="password"
            value={password}
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
            color="black"
            size="md"
            className='focus:!ring-0'
          />
          <Button type="submit" color="black" size="lg">
            Sign in
          </Button>
        </form>
        <div className="text-center">
          <span className="text-gray-600">Don't have an account?</span>{' '}
          <a href="/signup" onClick={toggleForm} className="font-medium text-[#623fb1] hover:text-[#14082c]">
            Sign up instead
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
