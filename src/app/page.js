import { redirect } from "next/navigation";

const page = () => {
  const authenticated = false;

  redirect(!authenticated ? "/login" : "/products");
};

export default page;
