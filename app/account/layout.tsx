import AccountSideBar from "@/components/AccountSideBar";
import { Separator } from "@/components/separator";



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

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block w-full container">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <AccountSideBar items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
