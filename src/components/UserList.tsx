import type { IUser } from "../types/user.type"

export const UserList: React.FC<{user: IUser}> = ({user}) => {
  return(
    <>
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.city}</td>
        <td>{user.company}</td>
      </tr>
    </>
  )
}