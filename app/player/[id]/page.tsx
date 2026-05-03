import { getPlayer } from '@/lib/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const player = getPlayer(id)

  if (!player) return notFound()

  const formats = [
    { label: 'Test', stats: player.testStats },
    { label: 'ODI', stats: player.odiStats },
    { label: 'T20I', stats: player.t20Stats },
  ]

  return (
    <div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <Link href="/">Home</Link> › <Link href="/">Players</Link> › {player.name}
      </div>

      {/* Player Header */}
      <div className="bg-white border border-gray-200 rounded p-6 mb-6 flex gap-6 items-start">
        <div className="text-7xl">{player.image}</div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-1" style={{ color: 'var(--cricket-green)' }}>
            {player.name}
          </h1>
          <p className="text-gray-500 text-sm mb-3">{player.country} · {player.role}</p>

          {/* Info grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Born', value: player.born },
              { label: 'Batting', value: player.batting },
              { label: 'Bowling', value: player.bowling },
            ].map(item => (
              <div key={item.label} className="bg-gray-50 rounded p-2">
                <div className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</div>
                <div className="font-medium text-gray-700">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="bg-white border border-gray-200 rounded p-6 mb-6">
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--cricket-green)' }}>Biography</h2>
        <p className="text-gray-700 leading-relaxed">{player.bio}</p>
      </div>

      {/* Stats Tables */}
      <div className="bg-white border border-gray-200 rounded p-6">
        <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--cricket-green)' }}>Career Statistics</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: 'var(--cricket-green)' }} className="text-white">
                <th className="text-left p-3">Format</th>
                <th className="p-3">Matches</th>
                <th className="p-3">Runs</th>
                <th className="p-3">Average</th>
                <th className="p-3">Strike Rate</th>
                <th className="p-3">100s</th>
                <th className="p-3">50s</th>
                <th className="p-3">Wickets</th>
              </tr>
            </thead>
            <tbody>
              {formats.map((f, i) => (
                <tr
                  key={f.label}
                  className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="p-3 font-bold" style={{ color: 'var(--cricket-green)' }}>{f.label}</td>
                  <td className="p-3 text-center">{f.stats.matches}</td>
                  <td className="p-3 text-center font-semibold">{f.stats.runs.toLocaleString()}</td>
                  <td className="p-3 text-center">{f.stats.average}</td>
                  <td className="p-3 text-center">{f.stats.strikeRate}</td>
                  <td className="p-3 text-center font-bold" style={{ color: 'var(--cricket-gold)' }}>
                    {f.stats.hundreds}
                  </td>
                  <td className="p-3 text-center">{f.stats.fifties}</td>
                  <td className="p-3 text-center">{f.stats.wickets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}