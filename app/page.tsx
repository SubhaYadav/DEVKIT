'use client'

import Link from 'next/link'
import { useMemo, useState, type ReactNode } from 'react'
import { ArrowRight, Check, Code2, GitBranch, Heart, LockKeyhole, Search, Sparkles, Terminal, Zap } from 'lucide-react'

const tools = [
  { name: 'JSON Formatter', description: 'Format and validate JSON instantly.', category: 'JSON', icon: '{ }', href: '/tools/json-formatter', hotkey: '⌘ J' },
  { name: 'Base64 Encoder', description: 'Encode and decode strings locally.', category: 'Encoding', icon: '64', href: '/tools/base64', hotkey: '⌘ B' },
  { name: 'JWT Decoder', description: 'Inspect token payloads without uploading.', category: 'Security', icon: 'jwt', href: '/tools/jwt-decoder', hotkey: '⌘ T' },
  { name: 'UUID Generator', description: 'Generate v4 UUIDs in one click.', category: 'Generators', icon: 'id', href: '/tools/uuid-generator', hotkey: '⌘ U' },
  { name: 'Unix Timestamp', description: 'Convert dates and timestamps quickly.', category: 'Time', icon: 'T', href: '/tools/unix-timestamp', hotkey: '⌘ I' },
  { name: 'Regex Tester', description: 'Test patterns against sample text.', category: 'Regex', icon: '.*', href: '/tools/regex-tester', hotkey: '⌘ R' },
]

export default function Home() {
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState<string[]>([])
  const filteredTools = useMemo(() => tools.filter((tool) => `${tool.name} ${tool.category} ${tool.description}`.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-mono text-sm font-bold tracking-tight" aria-label="DevKit home">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground"><Code2 className="size-4" /></span>
          DEVKIT
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <Link href="#tools" className="transition-colors hover:text-foreground">Tools</Link>
          <Link href="#principles" className="transition-colors hover:text-foreground">Why DevKit</Link>
          <Link href="/about" className="transition-colors hover:text-foreground">About</Link>
          <Link href="https://github.com/SubhaYadav/DEVKIT" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-foreground"><GitBranch className="size-4" /> GitHub</Link>
        </nav>
        <Link href="/tools" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium transition-colors hover:bg-muted">Open directory <ArrowRight className="size-3.5" /></Link>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground"><span className="size-1.5 rounded-full bg-accent" /> Open-source developer utilities</div>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl">Developer tools.<br /><span className="text-muted-foreground">One place.</span></h1>
          <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">Fast, private and open-source utilities for developers. Format, encode, decode, generate, test and transform without leaving your workflow.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3"><Link href="#tools" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Explore tools <ArrowRight className="size-4" /></Link><Link href="https://github.com/SubhaYadav/DEVKIT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"><GitBranch className="size-4" /> View on GitHub</Link></div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-3 border-y border-border py-5 sm:grid-cols-4"><Stat value="40+" label="utilities planned" /><Stat value="100%" label="client-side first" /><Stat value="0" label="accounts required" /><Stat value="MIT" label="open source" /></div>
      </section>

      <section id="tools" className="border-y border-border bg-card/30"><div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Tool directory</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Start with your workflow.</h2></div><Link href="/tools" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">View all tools <ArrowRight className="size-4" /></Link></div><div className="relative mt-9 max-w-2xl"><Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tools..." className="h-12 w-full rounded-lg border border-border bg-background pl-11 pr-16 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent" /><span className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">⌘ K</span></div><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{filteredTools.map((tool) => <ToolCard key={tool.name} tool={tool} favorite={favorites.includes(tool.name)} onFavorite={() => setFavorites((current) => current.includes(tool.name) ? current.filter((name) => name !== tool.name) : [...current, tool.name])} />)}</div>{filteredTools.length === 0 && <p className="py-10 text-sm text-muted-foreground">No tools match “{query}”. Try another search.</p>}</div></section>

      <section id="principles" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.3fr] lg:px-8 lg:py-28"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">The DevKit principle</p><h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">Useful by default.<br />Private by design.</h2></div><div className="grid gap-8 sm:grid-cols-2"><Principle icon={<LockKeyhole />} title="Runs locally" text="Your JSON, tokens and text stay in your browser. No unnecessary uploads, no accounts." /><Principle icon={<Zap />} title="Instant feedback" text="Small focused tools with keyboard-first workflows and zero setup." /><Principle icon={<Heart />} title="Built in public" text="Open-source utilities designed to be extended, audited and shared." /><Principle icon={<Terminal />} title="Web + CLI" text="The same core functionality will power the web app and your terminal." /></div></section>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><span className="font-mono">DEVKIT / Developer tools. One place.</span><span>Built with care by <Link href="https://www.subhayadav.com.np" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent">Subha Saubhagya Singh Yadav</Link></span></div></footer>
    </main>
  )
}

function Stat({ value, label }: { value: string; label: string }) { return <div><p className="font-mono text-xl font-semibold tracking-tight">{value}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p></div> }
function Principle({ icon, title, text }: { icon: ReactNode; title: string; text: string }) { return <div><div className="mb-3 text-accent">{icon}</div><h3 className="font-medium">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div> }
function ToolCard({ tool, favorite, onFavorite }: { tool: (typeof tools)[number]; favorite: boolean; onFavorite: () => void }) { return <div className="group relative rounded-lg border border-border bg-background p-5 transition-colors hover:border-accent/60"><Link href={tool.href} className="block"><div className="flex items-start justify-between"><span className="grid size-9 place-items-center rounded-md border border-border font-mono text-xs text-accent">{tool.icon}</span><span className="font-mono text-[10px] text-muted-foreground">{tool.hotkey}</span></div><h3 className="mt-5 font-medium">{tool.name}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{tool.description}</p><span className="mt-5 inline-block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{tool.category}</span></Link><button onClick={onFavorite} aria-label={`${favorite ? 'Remove' : 'Add'} ${tool.name} favorite`} className="absolute bottom-5 right-5 text-muted-foreground transition-colors hover:text-accent">{favorite ? <Check className="size-4 text-accent" /> : <Sparkles className="size-4" />}</button></div> }

