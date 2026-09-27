import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';
import { appName } from '@/lib/shared';

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: `${appName} — Design as source`, template: `%s — ${appName}` },
  description: 'Fanta is a native design canvas with readable .fnx source, Git review, and local tools for AI agents.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return <html lang="en" className="font-sans" suppressHydrationWarning><body className="flex min-h-screen flex-col"><RootProvider>{children}</RootProvider></body></html>;
}
