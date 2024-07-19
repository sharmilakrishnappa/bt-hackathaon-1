"use client";

import { useRouter } from "next/navigation";

const Redirect = () => {
  const router = useRouter();

  router.push("/home");

  return <></>;
};

export default Redirect;
