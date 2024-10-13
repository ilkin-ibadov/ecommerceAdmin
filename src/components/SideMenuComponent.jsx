import Link from "next/link";

const SideMenuComponent = () => {
  const menuItems = [
    {
      title: "Products",
      route: "/products",
    },
    {
      title: "Category",
      route: "/category",
    },
    {
      title: "Orders",
      route: "/orders",
    },
    {
      title: "Users",
      route: "/users",
    },
  ];

  return (
    <div className="flex flex-col bg-blue-950 h-screen w-[15%] text-white px-5 pt-10">
      {menuItems.map((item) => (
        <Link className="py-4 border-b border-blue-900" href={item.route}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default SideMenuComponent;
