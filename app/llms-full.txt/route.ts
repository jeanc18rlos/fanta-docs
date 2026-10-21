import { getLLMText, releasedPages } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const scanned = await Promise.all(releasedPages().map(getLLMText));

  return new Response(scanned.join('\n\n'));
}
