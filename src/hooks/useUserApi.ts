import { useEffect, useState } from "react"
import type { IResponse, IUser } from "../types/user.type"

export const useUserApi = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(false)

  const handleUserApi = async() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    try{
      setLoading(true)
      const response = await fetch(url)
      const result: IResponse[] = await response.json()

      const filterData: IUser[] = result.map((user: IResponse) => ({
        email: user.email,
        name: user.name,
        city: user.address.city,
        company: user.company.name
      }))
      setUsers(filterData)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    handleUserApi()
  }, [])

  return{
    users,
    setUsers,
    loading
  }
}