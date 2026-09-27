import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: { title: appName },
    links: [
      { text: 'Capabilities', url: '/docs/capabilities' },
      { text: 'Documentation', url: '/docs', active: 'nested-url' },
      { text: 'MCP', url: '/docs/mcp' },
      { text: 'Claude plugin', url: '/docs/plugin' },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
