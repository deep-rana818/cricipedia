'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <nav style={{ backgroundColor: 'var(--cricket-green)' }} className="text-white px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-300 no-underline hover:no-underline">
          🏏 Cricipedia
        </Link>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex-1 mx-8 flex gap-2">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search players, teams, matches..."
            className="w-full px-4 py-2 rounded text-black text-sm outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded text-sm font-semibold"
            style={{ backgroundColor: 'var(--cricket-gold)', color: '#1a1a1a' }}
          >
            Search
          </button>
        </form>

        {/* Nav links */}
<div className="flex gap-6 text-sm">
  <Link href="/" className="text-white hover:text-yellow-300 no-underline">Home</Link>
  <Link href="/teams" className="text-white hover:text-yellow-300 no-underline">Teams</Link>
  <Link href="/player/virat-kohli" className="text-white hover:text-yellow-300 no-underline">Players</Link>
  <Link href="/match/ind-vs-aus-2024" className="text-white hover:text-yellow-300 no-underline">Matches</Link>
</div>
      </div>
    </nav>
  )
}