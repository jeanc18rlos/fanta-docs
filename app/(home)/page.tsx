import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bot, Code2, GitBranch, Layers, MousePointer2, Play, Sparkles } from 'lucide-react';

const mediaRoot = '/launch/alpha-1.0.0-20261012';
const nativeRoot = '/screenshots/native-20261013';
const startingPoints = [
  { number: '01', title: 'What is FNX?', detail: 'Understand the source behind the canvas.', href: '/docs/concepts/fnx-design-as-source' },
  { number: '02', title: 'Fanta and Figma', detail: 'Two different ways to work with design.', href: '/docs/fanta-vs-figma' },
  { number: '03', title: 'Design with Git', detail: 'Review a diff. Branch an idea. Commit it.', href: '/docs/guides/version-control-designs' },
  { number: '04', title: 'What comes next', detail: 'Current capabilities and planned work.', href: '/docs/roadmap' },
];
const workflows = [
  { icon: MousePointer2, number: '01', title: 'Make it on the canvas', detail: 'Draw, arrange, and refine native layers. Use the inspector for type, fills, layout, and reusable components.', href: '/docs/editor', image: `${nativeRoot}/auto-layout-inspector.jpg`, width: 3456, height: 2168, alt: 'Fanta canvas with the Launch Card, native layers, and design inspector.' },
  { icon: Code2, number: '02', title: 'Open the source', detail: 'FNX describes the same design as readable text. Save a valid source edit and the canvas updates.', href: '/docs/concepts/fnx-design-as-source', image: `${nativeRoot}/fnx-workspace.jpg`, width: 3456, height: 2168, alt: 'Fanta Code workspace showing the Launch Card page as FNX source.' },
  { icon: GitBranch, number: '03', title: 'Review the change', detail: 'See which properties changed, keep a history, and review the design alongside the rest of your project.', href: '/docs/guides/version-control-designs', image: `${mediaRoot}/your-design-is-source-03-git.png`, width: 1728, height: 1084, alt: 'Fanta Review Changes showing a real Git diff of the Launch Card FNX.' },
];
const features = [
  { icon: Layers, title: 'Layout, components, variables', detail: 'Build reusable systems with auto layout, component instances, and shared values.', href: '/docs/concepts' },
  { icon: Bot, title: 'Agents on your canvas', detail: 'Connect Claude Code or Codex through the local MCP bridge and inspect each edit.', href: '/docs/mcp' },
  { icon: Sparkles, title: 'Media and generation', detail: 'Keep project assets together and explore the signed-in generation catalog.', href: '/docs/agents/media-generation' },
  { icon: Play, title: 'Motion and prototypes', detail: 'Explore the current animation and interaction workflows, including their alpha limits.', href: '/docs/editor/motion' },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="fanta-hero border-b border-fd-border">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-end">
            <div>
              <p className="fanta-label mb-6 flex items-center gap-3"><span className="size-1.5 rounded-full bg-current" />The Fanta field guide</p>
              <h1 className="max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-[5.2rem]">Your design.<br /><span className="text-fd-muted-foreground">Your source.</span></h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-fd-muted-foreground">A native design canvas backed by files you own. Work visually, edit FNX, and review every change with Git. Bring an agent into the same live design when you need a hand.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/docs/getting-started" className="inline-flex items-center gap-3 rounded-lg bg-fd-primary px-5 py-3 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90">Start designing <ArrowRight className="size-4" /></Link>
                <Link href="/docs/screenshots" className="inline-flex items-center gap-2 rounded-lg border border-fd-border px-5 py-3 text-sm font-medium transition hover:bg-fd-accent"><Layers className="size-4" />Explore the editor screens</Link>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-fd-muted-foreground">Apple Silicon macOS alpha. See the <Link href="/docs/getting-started/install" className="underline underline-offset-4">installation guide</Link> for the available build and requirements.</p>
            </div>
            <nav aria-label="Start with the essentials" className="border-t border-fd-border">
              {startingPoints.map(({ number, title, detail, href }) => (
                <Link key={number} href={href} className="group flex items-center gap-4 border-b border-fd-border py-5">
                  <span className="fanta-label">{number}</span>
                  <div className="flex-1"><h2 className="text-base font-medium group-hover:underline group-hover:underline-offset-4">{title}</h2><p className="mt-1 text-sm text-fd-muted-foreground">{detail}</p></div>
                  <ArrowRight className="size-4 text-fd-muted-foreground transition group-hover:translate-x-1" />
                </Link>
              ))}
            </nav>
          </div>
          <figure className="mt-12 lg:mt-16">
            <a href={`${nativeRoot}/auto-layout-inspector.jpg`} target="_blank" rel="noreferrer" aria-label="Open the full-size Fanta canvas screenshot" className="fanta-shot block overflow-hidden rounded-xl border border-fd-border">
              <Image src={`${nativeRoot}/auto-layout-inspector.jpg`} width={3456} height={2168} alt="The real Fanta editor: native Launch Card layers on the left, an editable canvas in the center, and the selected button's inspector on the right." sizes="(max-width: 1280px) 100vw, 1216px" priority className="h-auto w-full" />
            </a>
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-fd-muted-foreground"><span>Captured in Fanta 1.0.0 Public Alpha · October 13, 2026</span><Link href="/docs/screenshots" className="fanta-link inline-flex items-center gap-2">Layers, Variables, Motion, and more <ArrowRight className="size-3" /></Link></figcaption>
          </figure>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="fanta-label">Canvas → FNX → Git</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-5"><h2 className="max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">One design, from idea to diff.</h2><Link href="/docs/capabilities" className="fanta-link inline-flex items-center gap-2 text-sm">Explore all capabilities <ArrowRight className="size-4" /></Link></div>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {workflows.map(({ icon: Icon, number, title, detail, href, image, alt, width, height }) => (
            <article key={number}>
              <a href={image} target="_blank" rel="noreferrer" aria-label={`Open full-size screenshot: ${title}`} className="block overflow-hidden rounded-lg border border-fd-border transition hover:border-fd-ring"><Image src={image} width={width} height={height} alt={alt} sizes="(max-width: 1024px) 100vw, 390px" className="h-auto w-full" /></a>
              <div className="mt-5 flex items-center gap-3"><Icon className="fanta-link size-4" /><span className="fanta-label">{number}</span></div>
              <h3 className="mt-3 text-xl font-medium">{title}</h3><p className="mt-3 text-sm leading-relaxed text-fd-muted-foreground">{detail}</p>
              <Link href={href} className="fanta-link mt-4 inline-flex items-center gap-2 text-sm">Read the guide <ArrowRight className="size-3" /></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-fd-border bg-fd-card/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div><p className="fanta-label">A format for your design</p><h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">What is FNX?</h2><p className="mt-5 max-w-lg leading-relaxed text-fd-muted-foreground">FNX is Fanta’s readable design source format. It describes frames, text, shapes, and their properties in a static JSX-like syntax. The canvas and the source are two views of that design.</p><p className="mt-4 max-w-lg text-sm leading-relaxed text-fd-muted-foreground">FNX describes the artwork; it does not execute an application. A complete project keeps shared data, identity files, and media beside it.</p><Link href="/docs/concepts/fnx-design-as-source" className="fanta-link mt-6 inline-flex items-center gap-2 text-sm">Understand FNX <ArrowRight className="size-4" /></Link></div>
          <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-background"><div className="flex justify-between border-b border-fd-border px-5 py-3 font-mono text-xs text-fd-muted-foreground"><span>pages/fanta-studio/page.fnx</span><span>One text edit</span></div><pre className="overflow-x-auto p-5 font-mono text-sm leading-8"><code><span className="text-fd-muted-foreground">{'<Text\n  id="01M4PFJPB3RFR3DZY6B7XDDWJV"\n  name="CTA Label"\n  '}</span><span className="fanta-link">{'content="Explore Fanta"'}</span><span className="text-fd-muted-foreground">{'\n/>'}</span></code></pre><p className="border-t border-fd-border px-5 py-4 text-xs leading-relaxed text-fd-muted-foreground">A shortened node example. Preserve its existing ID, save valid source, then inspect the canvas.</p></div>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:py-24">
        <div><p className="fanta-label">Work with an agent</p><h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">The same canvas.<br />Another pair of hands.</h2><p className="mt-5 leading-relaxed text-fd-muted-foreground">Fanta’s local MCP bridge lets agents inspect layers, make focused edits, read FNX, and check screenshots. Review the result in the editor and Undo a successful batch as one step.</p><Link href="/docs/getting-started/connect-an-agent" className="fanta-link mt-6 inline-flex items-center gap-2 text-sm">Connect Claude Code or Codex <ArrowRight className="size-4" /></Link></div>
        <figure><a href={`${mediaRoot}/agent-edits-your-design-01.png`} target="_blank" rel="noreferrer" aria-label="Open the full-size result of the agent edit" className="block overflow-hidden rounded-xl border border-fd-border"><Image src={`${mediaRoot}/agent-edits-your-design-01.png`} width={1600} height={1000} alt="Fanta canvas after the recorded MCP agent edit, showing the Explore Fanta button and Your canvas. Your source. helper text." sizes="(max-width: 1024px) 100vw, 660px" className="h-auto w-full" /></a><figcaption className="mt-3 text-xs leading-relaxed text-fd-muted-foreground">The result of an external agent’s recorded MCP edit. Watch its inspection and Undo/Redo in the <Link href="/docs/demos#demo-agent" className="underline underline-offset-4">agent demo</Link>.</figcaption></figure>
      </section>
      <section className="border-t border-fd-border"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><p className="fanta-label">Explore the editor</p><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{features.map(({ icon: Icon, title, detail, href }) => <Link key={title} href={href} className="group rounded-xl border border-fd-border p-5 transition hover:bg-fd-card"><Icon className="fanta-link mb-5 size-5" /><h3 className="text-base font-medium group-hover:underline group-hover:underline-offset-4">{title}</h3><p className="mt-3 text-sm leading-relaxed text-fd-muted-foreground">{detail}</p></Link>)}</div><p className="mt-6 text-xs text-fd-muted-foreground">Features vary by build. The <Link href="/docs/capabilities" className="underline underline-offset-4">capability guide</Link> records current source behavior; the <Link href="/docs/roadmap" className="underline underline-offset-4">roadmap</Link> explains the work ahead.</p></div></section>
      <footer className="border-t border-fd-border"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-8 sm:px-8"><span className="text-sm text-fd-muted-foreground">Fanta · Your design is source.</span><nav aria-label="More about Fanta" className="flex flex-wrap gap-6 text-sm"><Link href="/docs/brand" className="hover:underline">Brand & assets</Link><Link href="/docs/fanta-vs-figma" className="hover:underline">Fanta and Figma</Link><a href="https://www.fantaisa.net/download" className="hover:underline">Download Fanta</a><a href="https://github.com/jeanc18rlos/fanta-edit" className="hover:underline">GitHub</a></nav></div></footer>
    </main>
  );
}
