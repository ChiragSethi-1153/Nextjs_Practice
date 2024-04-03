import Link from "next/link";

export const metadata = {
    title: "Home",
    description: "Home Page",
  };
  
//   const neww = 1
//   if(neww){
//     throw new Error('cmsamcc')
//   }
  

export default function Home() {
    return (
    <>
        <h1>WELCOME</h1>
        <Link href={'/profile'}>Profile</Link>
    </>
    )
}