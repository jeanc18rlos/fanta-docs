import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';
import { FantaBrand } from '@/components/fanta-brand';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: { title: <FantaBrand /> },
    links: [
      { text: 'Capabilities', url: '/docs/capabilities' },
      { text: 'Documentation', url: '/docs', active: 'nested-url' },
      { text: 'MCP', url: '/docs/mcp' },
      { text: 'Roadmap', url: '/docs/roadmap' },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
