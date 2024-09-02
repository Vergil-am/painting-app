export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Pottery shop",
  description: "Discover Your Inner Artist with Our Pottery Painting Kit",
  navItems: [
    {
      label: "Shop online",
      href: "/shop",
    },
    {
      label: "Tracking",
      href: "/track",
    },
    {
      label: "My orders",
      href: "/orders"
    },
    {
      label: "About us",
      href: "/about"
    }

  ],
  navMenuItems: [
    {
      label: "Shop online",
      href: "/shop",
    },
    {
      label: "Tracking",
      href: "/track",
    },
    {
      label: "Account",
      href: "/account",
    },
    {
      label: "Shipping & Returns",
      href: "/shipping-and-returns",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  location: "https://maps.app.goo.gl/6GGERbnWDMzN21ho8"
};
