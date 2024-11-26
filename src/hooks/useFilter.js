import { useState } from "react"

export function useFilter(dataList,callbcak) {
    const [query,setQuery]= useState('')
  const  filteredData= dataList.filter((data)=>  callbcak(data).toLowerCase().includes(query))
    
    return [filteredData, setQuery]

}