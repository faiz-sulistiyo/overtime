import { useEmployees } from '@/services/employees';
import React from 'react'

const Login = () => {
  const {data} = useEmployees()
  console.log(data);
  return <>
  asjdnasjkdn
  </>
}

export default Login