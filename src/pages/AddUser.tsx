import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { useNavigate } from "react-router-dom"

const UserField = [
  {name: 'email', value: 'Email'},
  {name: 'name', value: 'Name'},
  {name: 'city', value: 'City'},
  {name: 'company', value: 'Company'},
]

export const AddUser = () => {
  const context = useContext(UserContext)
  const navigate = useNavigate()
  
  const handlForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get("email") as string;
    const name = form.get("name") as string;
    const city = form.get("city") as string;
    const company = form.get("company") as string;

    context?.setUsers([...(context?.users), {email, name, city, company}])
    navigate("/")
  } 
  return(
    <>
    <h2>Add new User</h2>
      <form onSubmit={handlForm} className="form">
        {
          UserField.map((field: {name: string, value: string}) =>
          (
            <div key={field.name}>
              <label>{field.value}</label>
              <input type="text" name={field.name} required/>
            </div>
          )
          )
        }
        <input type="submit" />
      </form>
    </>
  )
}