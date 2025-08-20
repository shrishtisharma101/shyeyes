
const menuData = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Features",
    subMenu: [
      // { label: "All Members", path: "/members" },
      { label: "Profiles", path: "/profile2" },
      { label: "Member Profile", path: "/profile" },
      { label: "Pricing Plan", path: "/pricing-plan" },
    ],
  },
  {
    label: "Blog",
    subMenu: [
      { label: "Blog", path: "/blog" },
      { label: "Blog Single", path: "/blog-single" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

export default menuData;