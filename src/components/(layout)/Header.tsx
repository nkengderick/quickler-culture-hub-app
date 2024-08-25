"use client";
import Link from "next/link";
import { ThemeToggle } from "../(toggle)/ThemeToggle";
import Button from "../(ui)/Button";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Header() {
  const router = useRouter();
  const t = useTranslations('header');

  return (
    <header className="p-4 bg-header text-header-foreground">
      <div className="grid grid-cols-3 items-center">
        <div>
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold">{t('name')}</a>
          </Link>
        </div>
        <nav className="flex justify-center space-x-6">
          <Link href="/marketplace" className="hover:text-muted-foreground transition-colors duration-200">
            {t('marketplace')}
          </Link>
          <Link href="/explore" className="hover:text-muted-foreground transition-colors duration-200">
            {t('explore')}
          </Link>
          <Link href="/community" className="hover:text-muted-foreground transition-colors duration-200">
            {t('community')}
          </Link>
          <Link href="/resources" className="hover:text-muted-foreground transition-colors duration-200">
            {t('resources')}
          </Link>
          <Link href="/events" className="hover:text-muted-foreground transition-colors duration-200">
            {t('events')}
          </Link>
        </nav>
        <div className="flex justify-end space-x-4">
          <Button onClick={() => router.push('/signup')}>
            {t('signIn')}
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
