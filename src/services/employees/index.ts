import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { PostgrestResponse } from "@supabase/supabase-js";
import { IEmployees } from "@/types/employees";

const getAllEmployees = async() =>{
    return await supabase.from('employees').select("*") as PostgrestResponse<IEmployees>
}

export const useEmployees = ()=>
useQuery({
    queryKey:['employees'],
    queryFn: getAllEmployees,
    refetchOnWindowFocus:false
})
