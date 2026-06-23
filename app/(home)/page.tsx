import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  GitBranch,
  Layers,
  Plug,
  Sparkles,
  Wrench,
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-20 pb-16 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-4 py-1.5 text-sm text-fd-muted-foreground">
          <Sparkles className="size-4" />
          Agent-native design canvas
        </span>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          The design canvas agents can&nbsp;actually&nbsp;use
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-fd-muted-foreground">
          Fantaisa is a native creative canvas whose app is a live MCP server.
          Claude Code, Codex, and GLM connect to the running editor and design on
          the real document — ~127 tools, undoable operations, visible in real time.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/getting-started/connect-an-agent"
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            Connect an agent
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-5 py-2.5 font-medium transition-colors hover:bg-fd-accent"
          >
            Read the docs
          </Link>
        </div>

        {/* Quickstart snippet */}
        <div className="mt-14 w-full max-w-2xl overflow-hidden rounded-xl border border-fd-border bg-fd-card text-left">
          <div className="flex items-center gap-2 border-b border-fd-border px-4 py-2.5 text-xs text-fd-muted-foreground">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-yellow-400/70" />
            <span className="size-2.5 rounded-full bg-green-400/70" />
            <span className="ml-2">Terminal</span>
          </div>
          <pre className="overflow-x-auto px-4 py-4 text-sm leading-relaxed">
            <code>
              <span className="text-fd-muted-foreground"># 1. Launch the editor (it serves MCP on :3846)</span>
              {'\n'}cargo run -p fanta-app
              {'\n\n'}
              <span className="text-fd-muted-foreground"># 2. Point Claude Code at the live editor</span>
              {'\n'}claude mcp add fantaisa --transport http http://127.0.0.1:3846/mcp
              {'\n\n'}
              <span className="text-fd-muted-foreground"># 3. Ask it to design — it calls agent_playbook, builds, then verifies</span>
            </code>
          </pre>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-4 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        <Feature
          icon={<Plug className="size-5" />}
          title="The app is the MCP server"
          desc="Streamable HTTP on :3846, a headless fanta-mcp binary, or a stdio --live proxy. One tool surface for every agent."
          href="/docs/mcp"
        />
        <Feature
          icon={<Wrench className="size-5" />}
          title="~127 design tools"
          desc="Create, auto-layout, components, variables, inspect, verify, generate media, prototype, and version control."
          href="/docs/tools"
        />
        <Feature
          icon={<Bot className="size-5" />}
          title="Agent build loop"
          desc="agent_playbook → get_guidelines → inspect → build → verify (export_png, review_design) → save."
          href="/docs/mcp/build-loop"
        />
        <Feature
          icon={<Layers className="size-5" />}
          title="Real design primitives"
          desc="Auto-layout, components & variants, design tokens, vectors & SVG — not flat absolute placement."
          href="/docs/concepts"
        />
        <Feature
          icon={<GitBranch className="size-5" />}
          title="Design as source (.fnx)"
          desc="Designs as React/JSX-style source files — git-friendly, code-like diffs, design-to-code both ways."
          href="/docs/concepts/fnx-design-as-source"
        />
        <Feature
          icon={<Sparkles className="size-5" />}
          title="LLM-first by default"
          desc="llms.txt, llms-full.txt, and a Markdown twin of every page. Built so agents can read the docs too."
          href="/docs/reference/llms"
        />
      </section>
    </main>
  );
}

function Feature({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:bg-fd-accent"
    >
      <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1.5 text-sm text-fd-muted-foreground">{desc}</p>
    </Link>
  );
}
