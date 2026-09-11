'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Code2, ExternalLink, GitBranch, Globe, Link2, ShieldCheck } from 'lucide-react'

const links = [
  { name: 'GitHub', description: 'Explore the open-source DevKit repository.', href: 'https://github.com/SubhaYadav/DEVKIT', icon: GitBranch, label: 'View DevKit on GitHub' },
  { name: 'Website', description: 'Visit Subha\'s personal website.', href: 'https://www.subhayadav.com.np', icon: Globe, label: "Visit my Website" },
  { name: 'LinkedIn', description: 'Connect with Subha on LinkedIn.', href: 'https://www.linkedin.com/in/subha-saubhagya-singh-yadav-38596a317/', icon: Link2, label: 'Connect on LinkedIn' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-mono text-sm font-bold tracking-tight" aria-label="DevKit home"><span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground"><Code2 className="size-4" /></span>DEVKIT</Link>
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><ArrowLeft className="size-4" /> Back home</Link>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About DevKit</p><h1 className="mt-4 text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Built by a Developer,<br /><span className="text-muted-foreground">for Developers.</span></h1><p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">DevKit started as a simple idea: developers shouldn&apos;t need to search for a different website every time they need to perform a small technical task.</p></div>
      </section>

      <section className="border-y border-border bg-card/30"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-20"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">The project</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Practical utilities, kept close.</h2></div><div className="flex flex-col gap-5 text-sm leading-7 text-muted-foreground"><p>I&apos;m building DevKit as an open-source project to bring those everyday utilities together while learning, experimenting, and improving it through real developer feedback.</p><div className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"><ShieldCheck className="mt-1 size-5 shrink-0 text-accent" /><p>Privacy is part of the product direction: browser-local tools keep sensitive developer inputs in the browser whenever possible.</p></div><Link href="https://github.com/SubhaYadav/DEVKIT" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 font-medium text-foreground hover:text-accent">Explore DevKit on GitHub <ArrowUpRight className="size-4" /></Link></div></div></section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24"><div className="grid items-center gap-10 rounded-xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[220px_1fr] lg:p-10"><div className="mx-auto overflow-hidden rounded-full border-4 border-background outline outline-1 outline-border lg:mx-0"><Image src="/profile.jpg" alt="Subha Saubhagya Singh Yadav" width={220} height={220} className="size-44 object-cover object-[58%_46%] sm:size-52" priority /></div><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About the creator</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Subha Saubhagya Singh Yadav</h2><p className="mt-2 text-sm font-medium text-muted-foreground">IT Student • Web Developer • Open-Source Builder • AI/ML Learner</p><p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">Hi, I&apos;m Subha Saubhagya Singh Yadav, an IT/BCA student and developer interested in building practical software, exploring AI/ML, and creating technology that solves real-world problems.</p><p className="mt-3 text-sm italic text-muted-foreground">Building practical software, exploring AI/ML, and learning by creating.</p><div className="mt-6 flex flex-wrap gap-2">{links.map(({ name, href, icon: Icon, label }) => <Link key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium transition-colors hover:border-accent hover:text-accent"><Icon className="size-4" />{name}<ExternalLink className="size-3" /></Link>)}</div></div></div></section>

      <section className="border-t border-border"><div className="mx-auto max-w-6xl px-5 py-14 lg:px-8"><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Find the project</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">Open links, no inflated numbers.</h2><div className="mt-7 grid gap-3 md:grid-cols-3">{links.map(({ name, description, href, icon: Icon, label }) => <Link key={name} href={href} target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/60"><div className="flex items-center justify-between"><Icon className="size-5 text-accent" /><ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div><h3 className="mt-5 font-medium">{name}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p><span className="mt-5 inline-block text-xs font-medium text-foreground">{label}</span></Link>)}</div></div></section>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><span className="font-mono">DEVKIT / Developer tools. One place.</span><span>Built with care by <Link href="https://www.subhayadav.com.np" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent">Subha Saubhagya Singh Yadav</Link> · <Link href="https://github.com/SubhaYadav/DEVKIT" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</Link> · <Link href="https://www.linkedin.com/in/subha-saubhagya-singh-yadav-38596a317/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</Link></span></div></footer>
    </main>
  )
}
