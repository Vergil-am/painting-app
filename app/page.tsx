import { title} from "@/components/primitives";
import { auth } from "@/auth";

export default async function Home() {

  const session = await auth()
  console.log("session homepage", session)


  return (
    <>
    <h1 className={title()}>Home</h1>
    </>

  );
}
