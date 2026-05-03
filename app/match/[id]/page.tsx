import { getMatch } from '@/lib/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function MatchPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const match = getMatch(id)

  if (!match) return notFound()

  return (
    <div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <Link href="/">Home</Link> › <Link href="/">Matches</Link> › {match.title}
      </div>

      {/* Match Header */}
      <div className="bg-white border border-gray-200 rounded p-6 mb-6">
        <div className="text-sm text-gray-400 mb-1">{match.format}</div>
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--cricket-green)' }}>
          {match.title}
        </h1>
        <div className="flex gap-6 text-sm text-gray-500 mb-3">
          <span>📅 {match.date}</span>
          <span>📍 {match.venue}</span>
        </div>
        <div
          className="inline-block px-4 py-2 rounded text-white text-sm font-semibold"
          style={{ backgroundColor: 'var(--cricket-green)' }}
        >
          🏆 {match.result}
        </div>
      </div>

      {/* Innings */}
      {[match.innings1, match.innings2].map((innings, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded p-6 mb-6">

          {/* Innings Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
            <h2 className="text-xl font-bold" style={{ color: 'var(--cricket-green)' }}>
              {innings.team}
            </h2>
            <div className="text-right">
              <div className="text-2xl font-bold" style={{ color: 'var(--cricket-green)' }}>
                {innings.total}
              </div>
              <div className="text-xs text-gray-400">{innings.overs}</div>
            </div>
          </div>

          {/* Batting Table */}
          <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">Batting</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase">
                  <th className="text-left py-2 pr-4">Batter</th>
                  <th className="text-left py-2 pr-4 text-gray-400 font-normal">Dismissal</th>
                  <th className="py-2 px-3 text-center">R</th>
                  <th className="py-2 px-3 text-center">B</th>
                  <th className="py-2 px-3 text-center">4s</th>
                  <th className="py-2 px-3 text-center">6s</th>
                  <th className="py-2 px-3 text-center">SR</th>
                </tr>
              </thead>
              <tbody>
                {innings.batting.map((b, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="py-2 pr-4 font-semibold" style={{ color: 'var(--cricket-green)' }}>{b.name}</td>
                    <td className="py-2 pr-4 text-gray-400 text-xs">{b.dismissal}</td>
                    <td className="py-2 px-3 text-center font-bold">{b.runs}</td>
                    <td className="py-2 px-3 text-center text-gray-500">{b.balls}</td>
                    <td className="py-2 px-3 text-center">{b.fours}</td>
                    <td className="py-2 px-3 text-center">{b.sixes}</td>
                    <td className="py-2 px-3 text-center text-gray-500">{b.strikeRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bowling Table */}
          <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">Bowling</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 text-xs uppercase">
                  <th className="text-left py-2 pr-4">Bowler</th>
                  <th className="py-2 px-3 text-center">O</th>
                  <th className="py-2 px-3 text-center">M</th>
                  <th className="py-2 px-3 text-center">R</th>
                  <th className="py-2 px-3 text-center">W</th>
                  <th className="py-2 px-3 text-center">Econ</th>
                </tr>
              </thead>
              <tbody>
                {innings.bowling.map((b, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="py-2 pr-4 font-semibold" style={{ color: 'var(--cricket-green)' }}>{b.name}</td>
                    <td className="py-2 px-3 text-center">{b.overs}</td>
                    <td className="py-2 px-3 text-center">{b.maidens}</td>
                    <td className="py-2 px-3 text-center">{b.runs}</td>
                    <td className="py-2 px-3 text-center font-bold" style={{ color: b.wickets >= 3 ? '#f4c430' : 'inherit' }}>
                      {b.wickets}
                    </td>
                    <td className="py-2 px-3 text-center text-gray-500">{b.economy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      ))}

    </div>
  )
}