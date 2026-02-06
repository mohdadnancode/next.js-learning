import Link from "next/link"

const Users = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
        <h1>User Management</h1>
        <ul className="mt-10">
            <li><Link href={"/dashboard/users/1"}>User 1</Link></li>
            <li><Link href={"/dashboard/users/2"}>User 2</Link></li>
            <li><Link href={"/dashboard/users/3"}>User 3</Link></li>
            <li><Link href={"/dashboard/users/4"}>User 4</Link></li>
            <li><Link href={"/dashboard/users/5"}>User 5</Link></li>
        </ul>
        <br /><br />
    </div>
  )
}

export default Users