export type Player = {
  slug: string
  name: string
  country: string
  role: string
  born: string
  batting: string
  bowling: string
  imageUrl: string
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Virat_Kohli.jpg',
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Rohit_Sharma_2019.jpg/220px-Rohit_Sharma_2019.jpg',
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Steve_Smith_2019.jpg/220px-Steve_Smith_2019.jpg',
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ben_Stokes_2019.jpg/220px-Ben_Stokes_2019.jpg',
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
  {
    slug: 'jasprit-bumrah',
    name: 'Jasprit Bumrah',
    country: '🇮🇳 India',
    role: 'Right-arm Fast Bowler',
    born: '6 December 1993, Ahmedabad, India',
    batting: 'Right-handed',
    bowling: 'Right-arm fast',
imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Jasprit_Bumrah_2023.jpg/220px-Jasprit_Bumrah_2023.jpg',    bio: 'Jasprit Bumrah is an Indian international cricketer and the vice-captain of the Indian Test team. Regarded as one of the best bowlers in the world across all formats, he is known for his unorthodox action, deadly yorkers, and ability to bowl in any match situation.',
    testStats: {
      matches: 40, runs: 201, average: 8.37,
      strikeRate: 65.1, hundreds: 0, fifties: 0, wickets: 195
    },
    odiStats: {
      matches: 88, runs: 109, average: 6.81,
      strikeRate: 76.8, hundreds: 0, fifties: 0, wickets: 149
    },
    t20Stats: {
      matches: 75, runs: 34, average: 4.25,
      strikeRate: 70.8, hundreds: 0, fifties: 0, wickets: 89
    },
  },
  {
    slug: 'pat-cummins',
    name: 'Pat Cummins',
    country: '🇦🇺 Australia',
    role: 'Right-arm Fast Bowler',
    born: '8 May 1993, Westmead, Australia',
    batting: 'Right-handed',
    bowling: 'Right-arm fast',
imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Pat_Cummins_2023.jpg/220px-Pat_Cummins_2023.jpg',    bio: 'Pat Cummins is an Australian international cricketer and the captain of the Australian Test and ODI teams. One of the best fast bowlers in the world, he combines express pace with exceptional control and has led Australia to multiple ICC tournament victories.',
    testStats: {
      matches: 67, runs: 1445, average: 17.40,
      strikeRate: 60.2, hundreds: 0, fifties: 4, wickets: 282
    },
    odiStats: {
      matches: 105, runs: 736, average: 22.30,
      strikeRate: 103.5, hundreds: 0, fifties: 1, wickets: 177
    },
    t20Stats: {
      matches: 55, runs: 113, average: 14.12,
      strikeRate: 118.9, hundreds: 0, fifties: 0, wickets: 56
    },
  },
  {
    slug: 'babar-azam',
    name: 'Babar Azam',
    country: '🇵🇰 Pakistan',
    role: 'Right-hand Batsman',
    born: '15 October 1994, Lahore, Pakistan',
    batting: 'Right-handed',
    bowling: 'Right-arm off-break',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Babar_Azam_in_2022.jpg/220px-Babar_Azam_in_2022.jpg',  
  bio: 'Babar Azam is a Pakistani international cricketer and former captain of the Pakistan national team. Widely regarded as one of the best batsmen in the world, he is known for his elegant strokeplay and consistency across all formats.',
    testStats: {
      matches: 55, runs: 3898, average: 45.27,
      strikeRate: 50.9, hundreds: 9, fifties: 27, wickets: 0
    },
    odiStats: {
      matches: 123, runs: 5705, average: 57.62,
      strikeRate: 88.1, hundreds: 19, fifties: 35, wickets: 0
    },
    t20Stats: {
      matches: 123, runs: 4017, average: 41.40,
      strikeRate: 129.3, hundreds: 3, fifties: 35, wickets: 0
    },
  },
  {
    slug: 'kane-williamson',
    name: 'Kane Williamson',
    country: '🇳🇿 New Zealand',
    role: 'Right-hand Batsman',
    born: '8 August 1990, Tauranga, New Zealand',
    batting: 'Right-handed',
    bowling: 'Right-arm off-break',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Kane_Williamson_2018.jpg/220px-Kane_Williamson_2018.jpg',
    bio: 'Kane Williamson is a New Zealand international cricketer and former captain of the New Zealand national team. Considered one of the "Fab Four" of modern batting alongside Kohli, Smith and Root, he is renowned for his calm temperament and technically excellent batting.',
    testStats: {
      matches: 103, runs: 8320, average: 53.36,
      strikeRate: 51.8, hundreds: 32, fifties: 36, wickets: 37
    },
    odiStats: {
      matches: 166, runs: 7268, average: 48.78,
      strikeRate: 81.7, hundreds: 14, fifties: 55, wickets: 37
    },
    t20Stats: {
      matches: 109, runs: 3172, average: 36.45,
      strikeRate: 125.8, hundreds: 0, fifties: 22, wickets: 11
    },
  },
  {
    slug: 'joe-root',
    name: 'Joe Root',
    country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',
    role: 'Right-hand Batsman',
    born: '30 December 1990, Sheffield, England',
    batting: 'Right-handed',
    bowling: 'Right-arm off-break',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Joe_Root_2019.jpg/220px-Joe_Root_2019.jpg',
    bio: 'Joe Root is an English international cricketer and former captain of the England Test team. The highest run-scorer in England Test history, he is regarded as one of the finest batsmen of his generation and a key member of the "Fab Four".',
    testStats: {
      matches: 145, runs: 12972, average: 49.31,
      strikeRate: 55.7, hundreds: 34, fifties: 64, wickets: 57
    },
    odiStats: {
      matches: 162, runs: 6207, average: 49.66,
      strikeRate: 86.8, hundreds: 16, fifties: 39, wickets: 20
    },
    t20Stats: {
      matches: 32, runs: 893, average: 35.72,
      strikeRate: 125.6, hundreds: 0, fifties: 4, wickets: 5
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
  {
    slug: 'ind-vs-pak-ct-2025',
    title: 'India vs Pakistan',
    date: '23 February 2025',
    venue: 'Dubai International Cricket Stadium, UAE',
    format: 'Champions Trophy 2025 — Group Stage',
    result: 'India won by 6 wickets',
    innings1: {
      team: '🇵🇰 Pakistan — 1st Innings',
      total: '241 all out',
      overs: '49.4 overs',
      batting: [
        { name: 'Babar Azam', dismissal: 'c Kohli b Bumrah', runs: 18, balls: 30, fours: 2, sixes: 0, strikeRate: 60.0 },
        { name: 'Mohammad Rizwan', dismissal: 'c Rohit b Siraj', runs: 46, balls: 72, fours: 5, sixes: 0, strikeRate: 63.9 },
        { name: 'Fakhar Zaman', dismissal: 'b Hardik', runs: 81, balls: 100, fours: 8, sixes: 2, strikeRate: 81.0 },
        { name: 'Agha Salman', dismissal: 'c Jadeja b Kuldeep', runs: 52, balls: 68, fours: 4, sixes: 1, strikeRate: 76.5 },
        { name: 'Shadab Khan', dismissal: 'b Bumrah', runs: 17, balls: 22, fours: 1, sixes: 1, strikeRate: 77.3 },
        { name: 'Shaheen Afridi', dismissal: 'not out', runs: 11, balls: 14, fours: 1, sixes: 0, strikeRate: 78.6 },
      ],
      bowling: [
        { name: 'Jasprit Bumrah', overs: 10, maidens: 1, runs: 44, wickets: 3, economy: 4.4 },
        { name: 'Mohammed Siraj', overs: 9.4, maidens: 0, runs: 51, wickets: 2, economy: 5.3 },
        { name: 'Hardik Pandya', overs: 10, maidens: 0, runs: 47, wickets: 2, economy: 4.7 },
        { name: 'Kuldeep Yadav', overs: 10, maidens: 0, runs: 43, wickets: 2, economy: 4.3 },
        { name: 'Ravindra Jadeja', overs: 10, maidens: 0, runs: 53, wickets: 1, economy: 5.3 },
      ],
    },
    innings2: {
      team: '🇮🇳 India — 2nd Innings',
      total: '242/4',
      overs: '47.3 overs',
      batting: [
        { name: 'Rohit Sharma', dismissal: 'c Rizwan b Shaheen', runs: 41, balls: 55, fours: 5, sixes: 1, strikeRate: 74.5 },
        { name: 'Shubman Gill', dismissal: 'c Babar b Shadab', runs: 33, balls: 48, fours: 3, sixes: 0, strikeRate: 68.8 },
        { name: 'Virat Kohli', dismissal: 'not out', runs: 100, balls: 111, fours: 8, sixes: 2, strikeRate: 90.1 },
        { name: 'Shreyas Iyer', dismissal: 'c Fakhar b Naseem', runs: 37, balls: 43, fours: 4, sixes: 0, strikeRate: 86.0 },
        { name: 'Hardik Pandya', dismissal: 'not out', runs: 22, balls: 18, fours: 2, sixes: 1, strikeRate: 122.2 },
      ],
      bowling: [
        { name: 'Shaheen Afridi', overs: 10, maidens: 0, runs: 53, wickets: 1, economy: 5.3 },
        { name: 'Naseem Shah', overs: 9.3, maidens: 0, runs: 48, wickets: 1, economy: 5.1 },
        { name: 'Shadab Khan', overs: 10, maidens: 0, runs: 57, wickets: 1, economy: 5.7 },
        { name: 'Haris Rauf', overs: 10, maidens: 0, runs: 61, wickets: 1, economy: 6.1 },
        { name: 'Mohammad Nawaz', overs: 8, maidens: 0, runs: 41, wickets: 0, economy: 5.1 },
      ],
    },
  },
  {
    slug: 'eng-vs-aus-ashes-2023',
    title: 'England vs Australia',
    date: '16 June 2023',
    venue: "Edgbaston, Birmingham, England",
    format: 'The Ashes 2023 — 1st Test',
    result: 'England won by 2 wickets',
    innings1: {
      team: '🇦🇺 Australia — 1st Innings',
      total: '386 all out',
      overs: '103.3 overs',
      batting: [
        { name: 'Usman Khawaja', dismissal: 'c Duckett b Anderson', runs: 141, balls: 264, fours: 14, sixes: 0, strikeRate: 53.4 },
        { name: 'David Warner', dismissal: 'c Bairstow b Broad', runs: 36, balls: 58, fours: 5, sixes: 0, strikeRate: 62.1 },
        { name: 'Steve Smith', dismissal: 'c Root b Woakes', runs: 110, balls: 189, fours: 12, sixes: 1, strikeRate: 58.2 },
        { name: 'Travis Head', dismissal: 'b Stokes', runs: 35, balls: 44, fours: 4, sixes: 1, strikeRate: 79.5 },
        { name: 'Pat Cummins', dismissal: 'not out', runs: 36, balls: 47, fours: 3, sixes: 1, strikeRate: 76.6 },
      ],
      bowling: [
        { name: 'James Anderson', overs: 28, maidens: 5, runs: 94, wickets: 3, economy: 3.4 },
        { name: 'Stuart Broad', overs: 26.3, maidens: 3, runs: 97, wickets: 3, economy: 3.7 },
        { name: 'Ben Stokes', overs: 20, maidens: 2, runs: 71, wickets: 2, economy: 3.6 },
        { name: 'Chris Woakes', overs: 18, maidens: 2, runs: 76, wickets: 2, economy: 4.2 },
        { name: 'Moeen Ali', overs: 11, maidens: 0, runs: 48, wickets: 0, economy: 4.4 },
      ],
    },
    innings2: {
      team: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England — 2nd Innings',
      total: '327/8',
      overs: '76.4 overs',
      batting: [
        { name: 'Zak Crawley', dismissal: 'c Smith b Hazlewood', runs: 61, balls: 69, fours: 9, sixes: 0, strikeRate: 88.4 },
        { name: 'Ben Duckett', dismissal: 'c Carey b Starc', runs: 84, balls: 90, fours: 12, sixes: 1, strikeRate: 93.3 },
        { name: 'Joe Root', dismissal: 'c Head b Lyon', runs: 118, balls: 146, fours: 14, sixes: 2, strikeRate: 80.8 },
        { name: 'Ben Stokes', dismissal: 'not out', runs: 78, balls: 88, fours: 8, sixes: 3, strikeRate: 88.6 },
        { name: 'Jonny Bairstow', dismissal: 'c Carey b Cummins', runs: 10, balls: 18, fours: 1, sixes: 0, strikeRate: 55.6 },
      ],
      bowling: [
        { name: 'Pat Cummins', overs: 20, maidens: 2, runs: 89, wickets: 3, economy: 4.5 },
        { name: 'Mitchell Starc', overs: 18, maidens: 1, runs: 81, wickets: 2, economy: 4.5 },
        { name: 'Josh Hazlewood', overs: 16.4, maidens: 2, runs: 67, wickets: 2, economy: 4.0 },
        { name: 'Nathan Lyon', overs: 15, maidens: 0, runs: 68, wickets: 1, economy: 4.5 },
        { name: 'Cameron Green', overs: 7, maidens: 0, runs: 35, wickets: 0, economy: 5.0 },
      ],
    },
  },
]

export function getMatch(slug: string): Match | undefined {
  return matches.find(m => m.slug === slug)
}