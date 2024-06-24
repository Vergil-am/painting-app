import {Input} from "@nextui-org/input"
import { Button } from "@nextui-org/button";
import {signIn} from "@/auth"


export default function page({searchParams}
  : {searchParams: {callbackUrl: string | undefined}}) 
  {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm(); 
  const {callbackUrl} = searchParams

  const handleSubmit = async (data: FormData) => {
        "use server"
             const user = await signIn("credentials",
              { email: data.get("email"),
               password: data.get("password"),
               redirectTo: callbackUrl || "/"
              }
              ) 



  }

  return (
    <div className="flex justify-center w-screen">
      <form
      className="w-[50vw]"
    
      action={handleSubmit}
       >
        <Input name="email" label="Email" type="email" placeholder="test@email.com"/>
        <Input name="password" label="Password" type="password" placeholder="******" />
        <Button type="submit">SignIn</Button>
      </form>
    </div>
  )
}
