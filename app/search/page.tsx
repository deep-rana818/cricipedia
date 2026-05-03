'use client'

import { useSearchParams } from 'next/navigation'
import { players, matches } from '@/lib/data'
import Link from 'next/link'
import { Suspense } from 'react'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.toLowerCase() || ''

  const matchedPlayers = players.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.country.toLowerCase().includes(query) ||
    p.role.toLowerCase().includes(query)
  )

  const matchedMatches = matches.filter(m =>
    m.title.toLowerCase().includes(query) ||
    m.venue.toLowerCase().includes(query) ||
    m.result.toLowerCase().includes(query)
  )

  const total = matchedPlayers.length + matchedMatches.length

  return (
    <div>

      {/* Header */}
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--cricket-green)' }}>
          Search Results
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          {total} result{total !== 1 ? 's' : ''} for <strong>"{query}"</strong>
        </p>
      </div>

      {total === 0 && (
        <div className="bg-white border border-gray-200 rounded p-8 text-center text-gray-500">
          <div className="text-4xl mb-3">🏏</div>
          <p className="font-semibold">No results found for "{query}"</p>
          <p className="text-sm mt-1">Try searching for a player name, country, or match.</p>
        </div>
      )}

      {/* Player Results */}
      {matchedPlayers.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--cricket-green)' }}>
            🧑 Players ({matchedPlayers.length})
          </h2>
          <div className="bg-white border border-gray-200 rounded divide-y divide-gray-100">
            {matchedPlayers.map(player => (
              <Link
                key={player.slug}
                href={`/player/${player.slug}`}
                className="flex items-center gap-4 p-4 hover:bg-gray-50 no-underline block"
              >
                <div className="text-3xl">{player.image}</div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--cricket-green)' }}>
                    {player.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {player.country} · {player.role}
                  </div>
                </div>
                <div className="ml-auto text-xs text-gray-400">View Profile →</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Match Results */}
      {matchedMatches.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--cricket-green)' }}>
            📋 Matches ({matchedMatches.length})
          </h2>
          <div className="bg-white border border-gray-200 rounded divide-y divide-gray-100">
            {matchedMatches.map(match => (
              <Link
                key={match.slug}
                href={`/match/${match.slug}`}
                className="flex items-center gap-4 p-4 hover:bg-gray-50 no-underline block"
              >
                <div className="text-3xl">📋</div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--cricket-green)' }}>
                    {match.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {match.date} · {match.venue}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--cricket-gold)' }}>
                    🏆 {match.result}
                  </div>
                </div>
                <div className="ml-auto text-xs text-gray-400">View Scorecard →</div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-gray-500">Searching...</div>}>
      <SearchResults />
    </Suspense>
  )
}