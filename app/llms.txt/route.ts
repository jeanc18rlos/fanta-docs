import { source } from '@/lib/source';
import { previewDocsRoute } from '@/lib/shared';
import { llms } from 'fumadocs-core/source';
import type { Folder, Node } from 'fumadocs-core/page-tree';

export const revalidate = false;

function firstUrl(folder: Folder): string | undefined {
  if (folder.index) return folder.index.url;
  for (const child of folder.children) {
    if (child.type === 'page') return child.url;
    if (child.type === 'folder') {
      const url = firstUrl(child);
      if (url) return url;
    }
  }
  return undefined;
}

function isReleasedRoot(node: Node): node is Folder {
  if (node.type !== 'folder' || !node.root) return false;
  const url = firstUrl(node);
  return url !== undefined && url !== previewDocsRoute && !url.startsWith(`${previewDocsRoute}/`);
}

export function GET() {
  const released = source.getPageTree().children.find(isReleasedRoot);
  const index = llms(source);
  const lines = ['# Fanta docs', ''];
  if (released) {
    if (released.index) lines.push(index.indexNode(released.index));
    for (const child of released.children) lines.push(index.indexNode(child));
  }
  lines.push(
    '',
    `The Fanta 2.0 preview, which is in development and not released, is documented under ${previewDocsRoute}.`,
  );
  return new Response(lines.join('\n'));
}
