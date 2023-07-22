import React from "react"
import { useEmployees } from "@/services/employees";

const Home = () => {
  const { data } = useEmployees()
  console.log(data);
  return <>
  HOme
  </>
}

export default Home;
