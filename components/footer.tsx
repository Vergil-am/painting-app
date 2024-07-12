import Link from "next/link";
import { FacebookIcon, InstagramIcon, PintrestIcon, TiktokIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="w-dvw flex flex-col items-center justify-center py-3 mx-auto container">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Follow us on social media</h1>
      <div className="flex w-full justify-center gap-4">
        <Link href="https://www.facebook.com" ><FacebookIcon className="w-8 h-8 " /></Link>
        <Link href="https://www.instagram.com" ><InstagramIcon className="w-8 h-8 " /> </Link>
        <Link href="https://www.pintrest.com"><PintrestIcon className="w-8 h-8" /></Link>
        <Link href="https://www.tiktok.com"><TiktokIcon className="w-8 h-8" /></Link>
      </div>
    </footer>
  )
}

