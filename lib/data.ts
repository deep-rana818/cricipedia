export type Player = {
  slug: string
  name: string
  country: string
  role: string
  born: string
  batting: string
  bowling: string
  image: string
  bio: string
  testStats: Stats
  odiStats: Stats
  t20Stats: Stats
}

export type Stats = {
  matches: number
  runs: number
  average: number
  strikeRate: number
  hundreds: number
  fifties: number
  wickets: number
}

export const players: Player[] = [
  {
    slug: 'virat-kohli',
    name: 'Virat Kohli',
    country: '🇮🇳 India',
    role: 'Right-hand Batsman',
    born: '5 November 1988, Delhi, India',
    batting: 'Right-handed',
    bowling: 'Right-arm medium',
    image: '🧑‍🏏',
    bio: 'Virat Kohli is an Indian international cricketer and former captain of the Indian national team. Widely regarded as one of the greatest batsmen of all time, he holds numerous batting records across all formats of the game.',
    testStats: {
      matches: 113, runs: 8848, average: 48.08,
      strikeRate: 55.6, hundreds: 29, fifties: 30, wickets: 0
    },
    odiStats: {
      matches: 295, runs: 13906, average: 57.88,
      strikeRate: 93.6, hundreds: 50, fifties: 72, wickets: 4
    },
    t20Stats: {
      matches: 125, runs: 4188, average: 52.35,
      strikeRate: 137.0, hundreds: 1, fifties: 38, wickets: 0
    },
  },
  {
    slug: 'rohit-sharma',
    name: 'Rohit Sharma',
    country: '🇮🇳 India',
    role: 'Right-hand Batsman',
    born: '30 April 1987, Nagpur, India',
    batting: 'Right-handed',
    bowling: 'Right-arm off-break',
    image: '🧑‍🏏',
    bio: 'Rohit Sharma is an Indian international cricketer and the current captain of the Indian national team. Known for his elegant strokeplay and big scores, he holds the record for the highest individual score in ODIs — 264.',
    testStats: {
      matches: 67, runs: 4301, average: 40.57,
      strikeRate: 58.3, hundreds: 12, fifties: 16, wickets: 0
    },
    odiStats: {
      matches: 264, runs: 10709, average: 48.68,
      strikeRate: 89.8, hundreds: 31, fifties: 59, wickets: 8
    },
    t20Stats: {
      matches: 159, runs: 4231, average: 32.05,
      strikeRate: 140.9, hundreds: 4, fifties: 22, wickets: 0
    },
  },
  {
    slug: 'steve-smith',
    name: 'Steve Smith',
    country: '🇦🇺 Australia',
    role: 'Right-hand Batsman',
    born: '2 June 1989, Sydney, Australia',
    batting: 'Right-handed',
    bowling: 'Right-arm leg-break',
    image: '🧑‍🏏',
    bio: 'Steve Smith is an Australian international cricketer, widely considered one of the best Test batsmen of his generation. Known for his unorthodox technique and exceptional concentration, he has dominated Test cricket for over a decade.',
    testStats: {
      matches: 104, runs: 9174, average: 57.34,
      strikeRate: 55.4, hundreds: 32, fifties: 39, wickets: 17
    },
    odiStats: {
      matches: 162, runs: 5282, average: 43.30,
      strikeRate: 86.6, hundreds: 12, fifties: 35, wickets: 31
    },
    t20Stats: {
      matches: 72, runs: 1595, average: 30.67,
      strikeRate: 127.4, hundreds: 0, fifties: 8, wickets: 0
    },
  },
  {
    slug: 'ben-stokes',
    name: 'Ben Stokes',
    country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',
    role: 'All-rounder',
    born: '4 June 1991, Christchurch, New Zealand',
    batting: 'Left-handed',
    bowling: 'Right-arm fast-medium',
    image: '🧑‍🏏',
    bio: 'Ben Stokes is an English international cricketer and the current captain of the England Test team. One of the finest all-rounders in cricket history, he is known for his match-winning performances with both bat and ball.',
    testStats: {
      matches: 112, runs: 6429, average: 35.67,
      strikeRate: 58.9, hundreds: 13, fifties: 42, wickets: 196
    },
    odiStats: {
      matches: 105, runs: 2924, average: 38.47,
      strikeRate: 95.5, hundreds: 3, fifties: 21, wickets: 74
    },
    t20Stats: {
      matches: 34, runs: 481, average: 22.90,
      strikeRate: 132.7, hundreds: 0, fifties: 2, wickets: 18
    },
  },
]

export function getPlayer(slug: string): Player | undefined {
  return players.find(p => p.slug === slug)
}
export type BattingEntry = {
  name: string
  dismissal: string
  runs: number
  balls: number
  fours: number
  sixes: number
  strikeRate: number
}

export type BowlingEntry = {
  name: string
  overs: number
  maidens: number
  runs: number
  wickets: number
  economy: number
}

export type Innings = {
  team: string
  total: string
  overs: string
  batting: BattingEntry[]
  bowling: BowlingEntry[]
}

export type Match = {
  slug: string
  title: string
  date: string
  venue: string
  format: string
  result: string
  innings1: Innings
  innings2: Innings
}

export const matches: Match[] = [
  {
    slug: 'ind-vs-aus-2024',
    title: 'India vs Australia',
    date: '19 November 2024',
    venue: 'Optus Stadium, Perth, Australia',
    format: 'Test — 1st Test, Day 5',
    result: 'India won by 295 runs',
    innings1: {
      team: '🇮🇳 India — 1st Innings',
      total: '150 all out',
      overs: '37.1 overs',
      batting: [
        { name: 'Rohit Sharma', dismissal: 'c Smith b Hazlewood', runs: 3, balls: 9, fours: 0, sixes: 0, strikeRate: 33.3 },
        { name: 'KL Rahul', dismissal: 'c Carey b Starc', runs: 26, balls: 54, fours: 3, sixes: 0, strikeRate: 48.1 },
        { name: 'Virat Kohli', dismissal: 'c Carey b Hazlewood', runs: 5, balls: 11, fours: 1, sixes: 0, strikeRate: 45.5 },
        { name: 'Yashasvi Jaiswal', dismissal: 'c Head b Cummins', runs: 0, balls: 5, fours: 0, sixes: 0, strikeRate: 0.0 },
        { name: 'Dhruv Jurel', dismissal: 'not out', runs: 37, balls: 80, fours: 4, sixes: 0, strikeRate: 46.3 },
        { name: 'Nitish Reddy', dismissal: 'c Carey b Starc', runs: 41, balls: 59, fours: 5, sixes: 1, strikeRate: 69.5 },
      ],
      bowling: [
        { name: 'Mitchell Starc', overs: 10, maidens: 2, runs: 36, wickets: 3, economy: 3.6 },
        { name: 'Josh Hazlewood', overs: 11, maidens: 3, runs: 29, wickets: 4, economy: 2.6 },
        { name: 'Pat Cummins', overs: 9.1, maidens: 1, runs: 41, wickets: 2, economy: 4.5 },
        { name: 'Nathan Lyon', overs: 7, maidens: 0, runs: 44, wickets: 1, economy: 6.3 },
      ],
    },
    innings2: {
      team: '🇦🇺 Australia — 1st Innings',
      total: '104 all out',
      overs: '26.4 overs',
      batting: [
        { name: 'Usman Khawaja', dismissal: 'c Jaiswal b Bumrah', runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0.0 },
        { name: 'Nathan McSweeney', dismissal: 'b Siraj', runs: 10, balls: 28, fours: 2, sixes: 0, strikeRate: 35.7 },
        { name: 'Steve Smith', dismissal: 'c Kohli b Bumrah', runs: 17, balls: 32, fours: 3, sixes: 0, strikeRate: 53.1 },
        { name: 'Travis Head', dismissal: 'c Rahul b Bumrah', runs: 0, balls: 4, fours: 0, sixes: 0, strikeRate: 0.0 },
        { name: 'Mitchell Marsh', dismissal: 'b Harshit Rana', runs: 47, balls: 67, fours: 6, sixes: 1, strikeRate: 70.1 },
        { name: 'Pat Cummins', dismissal: 'not out', runs: 11, balls: 19, fours: 1, sixes: 0, strikeRate: 57.9 },
      ],
      bowling: [
        { name: 'Jasprit Bumrah', overs: 9.4, maidens: 3, runs: 30, wickets: 5, economy: 3.1 },
        { name: 'Mohammed Siraj', overs: 8, maidens: 1, runs: 29, wickets: 2, economy: 3.6 },
        { name: 'Harshit Rana', overs: 6, maidens: 0, runs: 28, wickets: 2, economy: 4.7 },
        { name: 'Ravindra Jadeja', overs: 3, maidens: 0, runs: 17, wickets: 1, economy: 5.7 },
      ],
    },
  },
]

export function getMatch(slug: string): Match | undefined {
  return matches.find(m => m.slug === slug)
}