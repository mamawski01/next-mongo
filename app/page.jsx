import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className=" text-3xl">Welcome</h1>
      <Link href={"/properties"}>Show Properties</Link>
    </div>
  );
}
