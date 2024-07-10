import { auth } from "@/auth";
import AccountSideBar from "@/components/AccountSideBar";
import { Separator } from "@/components/separator";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";



const sidebarNavItems = [
  {
    title: "Profile",
    href: "/account",
  },
  {
    title: "History",
    href: "/account/history",
  },
  {
    title: "Notifications",
    href: "/account/notifications",
  },
]

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth()
  if (!session) {
    redirect("/auth/signin")
  }


  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block w-full container">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6 bg-foreground" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <AccountSideBar items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
