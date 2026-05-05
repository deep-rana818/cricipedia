import Link from 'next/link'
import { players } from '@/lib/data'

const teams = [
  { name: 'India', flag: '🇮🇳', slug: 'India', color: '#1a5c38', founded: '1932', homeGround: 'Wankhede Stadium, Mumbai' },
  { name: 'Australia', flag: '🇦🇺', slug: 'Australia', color: '#00843D', founded: '1877', homeGround: 'Melbourne Cricket Ground' },
  { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', slug: 'England', color: '#003366', founded: '1877', homeGround: 'Lords, London' },
  { name: 'Pakistan', flag: '🇵🇰', slug: 'Pakistan', color: '#115740', founded: '1952', homeGround: 'Gaddafi Stadium, Lahore' },
  { name: 'New Zealand', flag: '🇳🇿', slug: 'New Zealand', color: '#000000', founded: '1930', homeGround: 'Eden Park, Auckland' },
  { name: 'South Africa', flag: '🇿🇦', slug: 'South Africa', color: '#007A4D', founded: '1889', homeGround: 'Newlands, Cape Town' },
  { name: 'West Indies', flag: '🏝️', slug: 'West Indies', color: '#7B0D1E', founded: '1928', homeGround: 'Kensington Oval, Barbados' },
  { name: 'Sri Lanka', flag: '🇱🇰', slug: 'Sri Lanka', color: '#003478', founded: '1982', homeGround: 'R. Premadasa Stadium, Colombo' },
]

export default function TeamsPage() {
  return (
    <div>

      {/* Header */}
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold" style={{ color: 'var(--cricket-green)' }}>
          🌍 International Teams
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          All major international cricket teams
        </p>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {teams.map(team => {
          const teamPlayers = players.filter(p =>
            p.country.toLowerCase().includes(team.slug.toLowerCase())
          )
          return (
            <div
              key={team.slug}
              className="bg-white border border-gray-200 rounded p-5 hover:border-green-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{team.flag}</span>
                <div>
                  <h2 className="text-xl font-bold" style={{ color: 'var(--cricket-green)' }}>
                    {team.name}
                  </h2>
                  <p className="text-xs text-gray-400">Test cricket since {team.founded}</p>
                </div>
              </div>

              <div className="text-sm text-gray-500 mb-3">
                📍 {team.homeGround}
              </div>

              {/* Players from this team */}
              {teamPlayers.length > 0 && (
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">Featured Players</div>
                  <div className="flex flex-wrap gap-2">
                    {teamPlayers.map(p => (
                      <Link
                        key={p.slug}
                        href={`/player/${p.slug}`}
                        className="text-xs px-2 py-1 rounded no-underline"
                        style={{
                          backgroundColor: '#f0f9f4',
                          color: 'var(--cricket-green)',
                          border: '1px solid #c6e8d4'
                        }}
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

    </div>
  )
}