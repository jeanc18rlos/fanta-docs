import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';
import { appName } from '@/lib/shared';
import { VersionedSearchDialog } from '@/components/search-dialog';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://fanta-docs.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: `${appName} — Design as source`, template: `%s — ${appName}` },
  description: 'Fanta is a native design canvas with readable .fnx source, Git review, and local tools for AI agents.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable} font-sans`} suppressHydrationWarning><body className="flex min-h-screen flex-col"><RootProvider search={{ SearchDialog: VersionedSearchDialog }}>{children}</RootProvider></body></html>;
}
