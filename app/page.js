import Image from "next/image";
import Link from "next/link";
import Navigation from "./_components/Navigation";

export default function Home() {
  return (
    <div>
      <h1>The Wild Oasis. Welcome to paradise.</h1>

      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
