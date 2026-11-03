// Portfolio categories. Accents are shades of the site's blue palette.
// Files live in /public/media:
//   video → <slug>.mp4 + <slug>.jpg (poster)
//   image → <slug>.jpg (full) + <slug>-sm.jpg (thumbnail)

export const chapters = [
  {
    id: 'clip-studio-paint',
    numeral: 'I',
    title: 'Clip Studio Paint',
    craft: 'Key Animation · Second Key · Effects',
    lede: 'Animated in Clip Studio Paint: rough keys, clean second keys ready for inbetweening, and effects-driven action with smears and impact frames.',
    accent: '#8fb4ec',
    accent2: '#5f8fd6',
    emblem: 'film',
    layout: 'grid',
  },
  {
    id: 'character-design',
    numeral: 'II',
    title: 'Character Design',
    craft: 'Illustration · Line Art · Colour',
    lede: 'Character illustration from clean line art to finished colour, lighting and effects.',
    accent: '#a9bdf2',
    accent2: '#7c93dc',
    emblem: 'palette',
    layout: 'gallery',
  },
  {
    id: 'comic-book',
    numeral: 'III',
    title: 'Comic Book',
    craft: 'Paneling · Expressions · Storytelling',
    lede: 'Paneling, pacing and expression — stories told one page at a time.',
    accent: '#9fd0f0',
    accent2: '#5e9fcf',
    emblem: 'book',
    layout: 'book',
  },
  {
    id: 'opentoonz',
    numeral: 'IV',
    title: 'OpenToonz',
    craft: 'Full Colour Animation · Action · Sound',
    lede: 'Animated in OpenToonz: full-colour scenes with character acting, an action sequence broken down cut by cut, and line-to-colour process recordings, all with sound.',
    accent: '#7fc4e6',
    accent2: '#4f86c6',
    emblem: 'reel',
    layout: 'grid',
  },
  {
    id: 'other',
    numeral: 'V',
    title: 'Other Works',
    craft: 'Chibi Animation · Motion Illustration',
    lede: 'Chibi animation with key poses, and motion illustration for vertical formats.',
    accent: '#b7cdf0',
    accent2: '#6f8fd0',
    emblem: 'moon',
    layout: 'mixed',
  },
]

export const works = [
  /* ── I · Clip Studio Paint ── */
  {
    slug: 'wind-cleaving-blade',
    chapter: 'clip-studio-paint',
    type: 'video',
    fps: 30, frames: 29, width: 2560, height: 1440, audio: false,
  },
  {
    slug: 'starlit-resolve',
    chapter: 'clip-studio-paint',
    type: 'video',
    fps: 30, frames: 30, width: 2560, height: 1440, audio: false,
  },
  {
    slug: 'laughter-in-the-wind',
    chapter: 'clip-studio-paint',
    type: 'video',
    fps: 30, frames: 32, width: 1920, height: 1080, audio: false,
  },
  {
    slug: 'peekaboo-prince',
    chapter: 'clip-studio-paint',
    type: 'video',
    fps: 30, frames: 61, width: 1920, height: 1080, audio: true,
  },
  {
    slug: 'emerald-ribbon',
    chapter: 'clip-studio-paint',
    type: 'video',
    fps: 30, frames: 29, width: 1080, height: 1080, audio: false,
  },
  {
    slug: 'hello-across-the-street',
    chapter: 'clip-studio-paint',
    type: 'video',
    fps: 30, frames: 158, width: 1760, height: 1250, audio: false,
  },
  {
    slug: 'the-reaching-hand',
    chapter: 'clip-studio-paint',
    type: 'video',
    fps: 30, frames: 75, width: 1762, height: 1256, audio: false,
  },
  {
    slug: 'nightbloom-first-key',
    chapter: 'clip-studio-paint',
    type: 'video',
    fps: 24, frames: 147, width: 1920, height: 1080, audio: true,
  },
  {
    slug: 'nightbloom-second-key',
    chapter: 'clip-studio-paint',
    type: 'video',
    fps: 30, frames: 184, width: 1920, height: 1080, audio: false,
  },

  /* ── II · Character Design ── */
  {
    slug: 'crimson-invitation',
    chapter: 'character-design',
    type: 'image',
    compareWith: 'crimson-invitation-lines',
    width: 2817, height: 4180,
  },
  {
    slug: 'crimson-invitation-lines',
    chapter: 'character-design',
    type: 'image',
    hidden: true,
    width: 2817, height: 4180,
  },
  {
    slug: 'starlight-gaze',
    chapter: 'character-design',
    type: 'image',
    width: 1254, height: 1254,
  },
  {
    slug: 'pastel-peace',
    chapter: 'character-design',
    type: 'image',
    width: 1733, height: 1972,
  },
  {
    slug: 'electric-resolve',
    chapter: 'character-design',
    type: 'image',
    width: 1472, height: 832,
  },
  {
    slug: 'midnight-blue',
    chapter: 'character-design',
    type: 'image',
    width: 894, height: 1500,
  },
  {
    slug: 'beret-breeze',
    chapter: 'character-design',
    type: 'image',
    width: 1080, height: 1500,
  },
  {
    slug: 'doorway-shock',
    chapter: 'character-design',
    type: 'image',
    width: 901, height: 1186,
  },

  /* ── III · Comic Book ── */
  {
    slug: 'movie-night-lines',
    chapter: 'comic-book',
    type: 'image',
    width: 612, height: 792,
  },
  {
    slug: 'movie-night-colour',
    chapter: 'comic-book',
    type: 'image',
    width: 612, height: 792,
  },

  /* ── IV · OpenToonz ── */
  {
    slug: 'titans-of-the-park',
    chapter: 'opentoonz',
    type: 'video',
    fps: 30, frames: 392, width: 1920, height: 1080, audio: true,
  },
  {
    slug: 'tears-of-the-tide-princess',
    chapter: 'opentoonz',
    type: 'video',
    fps: 8, frames: 46, width: 1920, height: 1080, audio: true,
  },
  {
    slug: 'the-princess-turns-away',
    chapter: 'opentoonz',
    type: 'video',
    fps: 8, frames: 33, width: 1920, height: 1080, audio: true,
  },
  {
    slug: 'quiet-gaze',
    chapter: 'opentoonz',
    type: 'video',
    fps: 30, frames: 686, width: 1706, height: 1080, audio: true,
  },
  {
    slug: 'street-duo',
    chapter: 'opentoonz',
    type: 'video',
    fps: 30, frames: 449, width: 1920, height: 1080, audio: true,
  },
  {
    slug: 'clash-of-crowns',
    chapter: 'opentoonz',
    type: 'video',
    keys: ['clash-of-crowns-a', 'clash-of-crowns-b', 'clash-of-crowns-c', 'clash-of-crowns-d', 'clash-of-crowns-e', 'clash-of-crowns-f'],
    fps: 30, frames: 470, width: 1920, height: 1080, audio: true,
  },
  { slug: 'clash-of-crowns-a', chapter: 'opentoonz', type: 'video', part: true, fps: 30, frames: 79, width: 1920, height: 1080, audio: true },
  { slug: 'clash-of-crowns-b', chapter: 'opentoonz', type: 'video', part: true, fps: 30, frames: 45, width: 1920, height: 1080, audio: true },
  { slug: 'clash-of-crowns-c', chapter: 'opentoonz', type: 'video', part: true, fps: 30, frames: 60, width: 1920, height: 1080, audio: true },
  { slug: 'clash-of-crowns-d', chapter: 'opentoonz', type: 'video', part: true, fps: 30, frames: 139, width: 1920, height: 1080, audio: true },
  { slug: 'clash-of-crowns-e', chapter: 'opentoonz', type: 'video', part: true, fps: 30, frames: 97, width: 1920, height: 1080, audio: true },
  { slug: 'clash-of-crowns-f', chapter: 'opentoonz', type: 'video', part: true, fps: 30, frames: 52, width: 1920, height: 1080, audio: true },

  /* ── V · Other Works ── */
  {
    slug: 'a-rose-for-you',
    chapter: 'other',
    type: 'video',
    keys: ['a-rose-for-you-key-1', 'a-rose-for-you-key-2', 'a-rose-for-you-key-3'],
    fps: 30, frames: 49, width: 1224, height: 806, audio: false,
  },
  {
    slug: 'lucky-find',
    chapter: 'other',
    type: 'video',
    keys: ['lucky-find-key-1'],
    fps: 30, frames: 35, width: 520, height: 448, audio: false,
  },
  {
    slug: 'shadow-oath',
    chapter: 'other',
    type: 'video',
    fps: 30, frames: 238, width: 1080, height: 1870, audio: true,
  },
  { slug: 'a-rose-for-you-key-1', chapter: 'other', type: 'image', hidden: true, width: 1224, height: 807 },
  { slug: 'a-rose-for-you-key-2', chapter: 'other', type: 'image', hidden: true, width: 1224, height: 807 },
  { slug: 'a-rose-for-you-key-3', chapter: 'other', type: 'image', hidden: true, width: 1224, height: 807 },
  { slug: 'lucky-find-key-1', chapter: 'other', type: 'image', hidden: true, width: 520, height: 448 },
]

// A before / after pair for the Process comparison. Pieces carry no titles or captions on purpose.
export const mirrorPair = {
  before: 'nightbloom-first-key',
  after: 'nightbloom-second-key',
}

export const media = (slug) => {
  const w = workBySlug[slug]
  if (w && w.type === 'image') {
    return { src: `/media/${slug}.jpg`, poster: `/media/${slug}-sm.jpg` }
  }
  return { src: `/media/${slug}.mp4`, poster: `/media/${slug}.jpg` }
}

export const workBySlug = Object.fromEntries(works.map((w) => [w.slug, w]))
export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c]))
export const visibleWorks = works.filter((w) => !w.hidden)
export const worksIn = (chapterId) => visibleWorks.filter((w) => w.chapter === chapterId)
// Clips marked `part` are cut from a longer piece, so their frames are already counted.
export const totalFrames = works.reduce((sum, w) => sum + (w.part ? 0 : w.frames || 0), 0)
export const imageCount = visibleWorks.filter((w) => w.type === 'image').length + works.filter((w) => w.compareWith).length
export const videoCount = visibleWorks.filter((w) => w.type === 'video').length

// Characters from the work, shown together in the footer. fx / fy is the face, z the zoom.
export const cast = [
  { slug: 'crimson-invitation', fx: 46, fy: 12, z: 2.6 },
  { slug: 'pastel-peace', fx: 44, fy: 24, z: 2.2 },
  { slug: 'tears-of-the-tide-princess', fx: 22, fy: 40, z: 2.2 },
  { slug: 'starlight-gaze', fx: 58, fy: 52, z: 1.4 },
  { slug: 'electric-resolve', fx: 38, fy: 26, z: 2.6 },
  { slug: 'midnight-blue', fx: 46, fy: 11, z: 3.2 },
  { slug: 'peekaboo-prince', fx: 62, fy: 24, z: 2.6 },
  { slug: 'the-princess-turns-away', fx: 50, fy: 44, z: 1.5 },
  { slug: 'a-rose-for-you', fx: 66, fy: 42, z: 2.8 },
  { slug: 'lucky-find', fx: 60, fy: 36, z: 2.2 },
  { slug: 'movie-night-colour', fx: 51, fy: 37, z: 3.2 },
  { slug: 'shadow-oath', fx: 50, fy: 20, z: 2.2 },
]
