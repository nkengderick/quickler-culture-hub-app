"use client"
import Link from "next/link";
import { ThemeToggle } from "../(toggle)/ThemeToggle";
import Button from "../(ui)/Button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter()
  return (
    <header className="p-4 bg-header text-header-foreground">
      <div className="flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold">Quickler</a>
        </Link>
        <nav className="flex space-x-4">
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/community">Community</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/events">Events</Link>
        </nav>
        <Button onClick={()=>router.push('/signup')}>Sign In</Button>
      </div>
      <ThemeToggle />
    </header>
  );
}