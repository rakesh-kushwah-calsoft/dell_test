import { useContext, useState } from "react"
import { UserList } from "../components/UserList"
import { UserContext } from "../context/userContext"
import { Link } from "react-router-dom"
import type { IUser } from "../types/user.type"

const Home = () => {
  const context = useContext(UserContext)
  const [asc, setAsc] = useState(false)
  const [selectedField, setSelectedFeild] = useState<keyof IUser>('name')

  const sortUser = [...(context?.users || [])].sort((a, b) => 
    asc ? a[selectedField].localeCompare(b[selectedField]) : b[selectedField].localeCompare(a[selectedField]))

  return(
    <>
      <Link to={"/add-user"}>Add User</Link>
      <table>
        <thead>
          <tr onClick={(e) => {
            const target = e.target as HTMLElement
            setSelectedFeild((target.innerText.toLowerCase()) as keyof IUser)
            // console.log(target.innerText)
            setAsc(pre => !pre)
          }}>
            <th className="sort">Name</th>
            <th className="sort">Email</th>
            <th className="sort">City</th>
            <th className="sort">Company</th>
          </tr>
        </thead>
        <tbody>
          {
            sortUser?.map((user)=>
            <UserList
              key={user.email}
              user={user}
            />
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default Home