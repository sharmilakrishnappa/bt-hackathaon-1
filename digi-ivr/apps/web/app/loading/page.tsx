import Load from "./Load";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const Redirect = dynamic(() => import("./Redirect"), { ssr: false });

export function delay() {
  return new Promise((resolve) => setTimeout(resolve, 900));
}

export default async function Home() {
  await delay();
  redirect("/home");

  return <Load isOpen={true} />;
}
