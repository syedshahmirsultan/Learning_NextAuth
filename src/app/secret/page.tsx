import {auth } from "@/auth"
import {redirect} from 'next/navigation'


export default async function Secret(){
 const session = await auth()

 if(!session) return redirect('/profile')

 return (
    <h1>Welcome to Secret Page</h1>
 )
}