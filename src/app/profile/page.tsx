
import {auth,signOut, signIn } from "@/auth"
 
export default async function SignIn() {
    const session = await auth()
    console.log(session)
    const user = session?.user
  return user ?(
    <>
    <h1> Welcome {user?.name}</h1>
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" className="p-2 border-2 bg-blue-400">Sign Out</button>
    </form></>) : (<>
    <h1> You are not authenticated </h1>
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="p-2 border-2 bg-blue-400">SignIn with Google</button>
    </form></>)
  
} 