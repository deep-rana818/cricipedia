import Link from 'next/link'

export default function HomePage() {
  return (
    <div>

      {/* Hero */}
      <div className="text-center py-12 border-b border-gray-300 mb-8">
        <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--cricket-green)' }}>
          Welcome to Cricipedia
        </h1>
        <p className="text-gray-600 text-lg">
          The free cricket encyclopedia — players, matches, stats, and history.
        </p>
      </div>

      {/* Featured sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white border border-gray-200 rounded p-5 shadow-sm">
          <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--cricket-green)' }}>🧑 Players</h2>
          <p className="text-sm text-gray-600 mb-3">Profiles, stats, batting averages, centuries and more.</p>
          <Link href="/player/virat-kohli" className="text-sm font-semibold" style={{ color: 'var(--cricket-green)' }}>
            Browse Players →
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded p-5 shadow-sm">
          <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--cricket-green)' }}>📋 Matches</h2>
          <p className="text-sm text-gray-600 mb-3">Scorecards, results, head-to-head records.</p>
          <Link href="/match/ind-vs-aus-2024" className="text-sm font-semibold" style={{ color: 'var(--cricket-green)' }}>
            Browse Matches →
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded p-5 shadow-sm">
          <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--cricket-green)' }}>🏆 Tournaments</h2>
          <p className="text-sm text-gray-600 mb-3">World Cups, IPL, The Ashes, and every series.</p>
          <Link href="/" className="text-sm font-semibold" style={{ color: 'var(--cricket-green)' }}>
            Coming Soon →
          </Link>
        </div>

      </div>

      {/* Featured Players */}
      <div className="bg-white border border-gray-200 rounded p-6">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--cricket-green)' }}>Featured Players</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Virat Kohli', role: 'Batsman', country: '🇮🇳 India', slug: 'virat-kohli' },
            { name: 'Rohit Sharma', role: 'Batsman', country: '🇮🇳 India', slug: 'rohit-sharma' },
            { name: 'Steve Smith', role: 'Batsman', country: '🇦🇺 Australia', slug: 'steve-smith' },
            { name: 'Ben Stokes', role: 'All-rounder', country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England', slug: 'ben-stokes' },
          ].map((player) => (
            <Link
              key={player.slug}
              href={`/player/${player.slug}`}
              className="border border-gray-200 rounded p-4 text-center hover:border-green-700 transition-colors no-underline"
            >
              <div className="text-3xl mb-2">🧑‍🏏</div>
              <div className="font-semibold text-sm" style={{ color: 'var(--cricket-green)' }}>{player.name}</div>
              <div className="text-xs text-gray-500">{player.role}</div>
              <div className="text-xs text-gray-400">{player.country}</div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}