import Link from 'next/link';
import { ArrowRight, Bot, Code2, Download, GitBranch, Image, Layers, LayoutTemplate, MessageCircle, MousePointer2, Paintbrush, Play, Sparkles } from 'lucide-react';

const features = [
  { icon: MousePointer2, title: 'Canvas and layers', detail: 'Draw, select, resize, rotate, snap, group, and arrange in a native editor.', href: '/docs/editor' },
  { icon: LayoutTemplate, title: 'Layout and reuse', detail: 'Build horizontal, vertical, or grid layouts with components, instances, and variables.', href: '/docs/concepts' },
  { icon: Paintbrush, title: 'Detailed inspector', detail: 'Inspect resolved variables and edit fills, strokes, type, corners, and effects.', href: '/docs/editor/inspector' },
  { icon: Code2, title: 'Design as source', detail: 'Find and edit .fnx and JSON while preserving supported authored source fields.', href: '/docs/concepts/fnx-design-as-source' },
  { icon: GitBranch, title: 'Reviewable changes', detail: 'Keep a Git history and review design diffs from the app.', href: '/docs/guides/version-control-designs' },
  { icon: Bot, title: 'Agents on the canvas', detail: 'Connect Claude Code or Codex through 13 tools, or review tasks in Build mode.', href: '/docs/mcp' },
  { icon: Sparkles, title: 'Generation workspace', detail: 'Use the current signed-in catalog for image, video, audio, and vector work.', href: '/docs/agents/media-generation' },
  { icon: Image, title: 'Figma and media', detail: 'Import .fig, review any structure warnings, and place generated media.', href: '/docs/formats' },
  { icon: Download, title: 'Export', detail: 'Export a selection or page as PNG, JPEG, SVG, or PDF.', href: '/docs/formats/export' },
  { icon: Play, title: 'Prototype', detail: 'Add interactions and preview flows in the editor.', href: '/docs/concepts/prototyping' },
  { icon: MessageCircle, title: 'Local feedback', detail: 'Pin comments, reply, and resolve project-local threads.', href: '/docs/editor/surfaces' },
  { icon: Layers, title: 'Project Assets', detail: 'Keep generated image, vector, video, and audio results for later placement.', href: '/docs/editor/assets' },
];

export default function HomePage() {
  return <main className="flex flex-1 flex-col">
    <section className="relative overflow-hidden border-b border-fd-border bg-[radial-gradient(circle_at_78%_28%,rgba(139,92,246,.18),transparent_38%),radial-gradient(circle_at_12%_80%,rgba(250,146,92,.12),transparent_32%)]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1.5 text-sm text-fd-muted-foreground"><span className="size-2 rounded-full bg-violet-500" />Native design, readable source</p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.06] tracking-tight sm:text-6xl">Draw it. Read the diff. Let agents help.</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-fd-muted-foreground">Fanta is a design canvas backed by a source-based project folder. Draw by hand, edit .fnx, or review an agent's work on the same live document.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link href="/docs/capabilities" className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-3 font-medium text-fd-primary-foreground hover:opacity-90">Explore every capability <ArrowRight className="size-4" /></Link><Link href="/docs/getting-started" className="rounded-lg border border-fd-border bg-fd-card px-5 py-3 font-medium hover:bg-fd-accent">Get started</Link></div>
          <p className="mt-5 text-sm text-fd-muted-foreground">The documented download is an Apple Silicon macOS alpha. Some newer source features may reach a packaged release later.</p>
        </div>
        <div aria-label="Illustration of a canvas and its source" className="overflow-hidden rounded-2xl border border-fd-border bg-fd-card shadow-2xl shadow-violet-900/10">
          <div className="flex items-center gap-2 border-b border-fd-border px-4 py-3 text-xs text-fd-muted-foreground"><span className="size-2.5 rounded-full bg-red-400" /><span className="size-2.5 rounded-full bg-amber-400" /><span className="size-2.5 rounded-full bg-green-400" /><span className="ml-3">Fanta project</span><span className="ml-auto">Design · Build · Code · Git</span></div>
          <div className="grid min-h-80 grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr]">
            <div className="border-r border-fd-border p-4 text-xs"><div className="mb-4 font-semibold">Pages</div><div className="rounded bg-violet-500/10 px-2 py-1.5 text-violet-500">Home</div><div className="mt-6 mb-2 font-semibold">Layers</div><div className="space-y-2 text-fd-muted-foreground"><div>▾ Hero</div><div className="pl-3">Headline</div><div className="pl-3">Button</div><div>▸ Features</div></div></div>
            <div className="grid grid-rows-[1fr_auto]"><div className="m-4 flex items-center justify-center rounded-lg border border-dashed border-fd-border bg-[linear-gradient(rgba(128,128,128,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,.05)_1px,transparent_1px)] bg-[size:22px_22px] p-5"><div className="w-full max-w-xs rounded-xl border border-violet-400 bg-fd-background p-5 shadow-xl"><div className="mb-3 h-3 w-16 rounded-full bg-violet-400/50" /><div className="text-2xl font-semibold">A better idea starts here.</div><div className="mt-3 h-2 w-5/6 rounded-full bg-fd-muted-foreground/20" /><div className="mt-2 h-2 w-2/3 rounded-full bg-fd-muted-foreground/20" /><div className="mt-5 inline-block rounded-md bg-violet-600 px-4 py-2 text-xs text-white">Get started</div></div></div><div className="border-t border-fd-border bg-fd-background/70 px-4 py-3 font-mono text-[11px] leading-5 text-fd-muted-foreground sm:text-xs"><div className="text-violet-500">pages/home/page.fnx</div><div>&lt;Frame name=&quot;Hero&quot;&gt;</div><div className="pl-4">&lt;Text&gt;A better idea starts here.&lt;/Text&gt;</div><div>&lt;/Frame&gt;</div></div></div>
          </div>
        </div>
      </div>
    </section>
    <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8"><p className="text-sm font-semibold uppercase tracking-[.2em] text-violet-500">How Fanta works</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">One design, three ways to work</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{[
      ['01','Make a project','Start a design or open a .fig file. Fanta creates a folder with pages, components, and assets.'],
      ['02','Edit anywhere','Use the canvas and inspector, edit .fnx in the Code workspace, or connect an agent through MCP.'],
      ['03','Review and export','Autosave updates source. Inspect the Git diff, commit the design, and export a selection or page.'],
    ].map(([number,title,detail]) => <div key={number} className="rounded-xl border border-fd-border bg-fd-card p-6"><div className="mb-8 text-sm font-semibold text-violet-500">{number}</div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-fd-muted-foreground">{detail}</p></div>)}</div></section>
    <section className="border-y border-fd-border bg-fd-card/40"><div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-semibold uppercase tracking-[.2em] text-violet-500">The capabilities</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">From canvas to code</h2><p className="mt-4 text-fd-muted-foreground">Explore the current source workflows, with setup steps and limits.</p></div><Link href="/docs/capabilities" className="inline-flex items-center gap-2 font-medium text-violet-500 hover:underline">Full capability map <ArrowRight className="size-4" /></Link></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map(({icon: Icon,title,detail,href}) => <Link key={title} href={href} className="group rounded-xl border border-fd-border bg-fd-background p-5 transition hover:border-violet-500/60 hover:shadow-lg"><div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500"><Icon className="size-5" /></div><h3 className="font-semibold group-hover:text-violet-500">{title}</h3><p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">{detail}</p></Link>)}</div></div></section>
    <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[.2em] text-violet-500">Agent workflow</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">An agent edits what you see</h2><p className="mt-5 leading-relaxed text-fd-muted-foreground">Fanta exposes 13 local MCP tools for inspecting the design system, editing the canvas, validating source, reviewing comments, and checking screenshots. Batch operations appear on the canvas as they run and remain one undo step.</p><Link href="/docs/getting-started/connect-an-agent" className="mt-6 inline-flex items-center gap-2 font-medium text-violet-500 hover:underline">Connect Claude Code or Codex <ArrowRight className="size-4" /></Link></div><div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card"><div className="border-b border-fd-border px-4 py-3 text-sm font-medium">A focused edit loop</div><pre className="overflow-x-auto p-5 text-sm leading-7 text-fd-muted-foreground"><code>{`get_editor_state()
get_guidelines()
batch_get({ depth: 2 })
batch_design({ label: "Hero card", ops: [
  { op: "create_node", node_type: "frame",
    x: 0, y: 0, width: 320, height: 180 }
] })
get_screenshot()`}</code></pre></div></section>
    <section className="border-t border-fd-border"><div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-12 sm:px-8"><div><h2 className="text-2xl font-semibold">Explore the current Fanta source</h2><p className="mt-2 text-fd-muted-foreground">Start a project or read the complete capability guide, including build limits.</p></div><Link href="/docs/getting-started" className="rounded-lg bg-fd-primary px-5 py-3 font-medium text-fd-primary-foreground">Get started</Link></div></section>
  </main>;
}
