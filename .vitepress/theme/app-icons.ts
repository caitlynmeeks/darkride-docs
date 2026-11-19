// The app grid's line icons (mary's team/mary/brand/app-switcher/app-grid.html, the same as darkride.ai's): 24 x 24,
// drawn in the text colour with a 1.7 stroke. Kept as shapes rather than markup, so nothing is put into the page as
// HTML. An icon the list names but this file doesn't have shows as a plain dot.
export type Shape = [tag: 'path' | 'circle' | 'ellipse', attrs: Record<string, string>]

export const DOTS: Shape[] = [5.5, 12, 18.5].flatMap((cy) =>
  [5.5, 12, 18.5].map((cx): Shape => ['circle', { cx: String(cx), cy: String(cy), r: '1.9' }]),
)

export const ICONS: Record<string, Shape[]> = {
  home: [['path', { d: 'M4 10.8 12 4l8 6.8V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z' }]],
  explore: [
    ['circle', { cx: '12', cy: '12', r: '8.5' }],
    ['path', { d: 'M15.6 8.4 13.4 13.4 8.4 15.6 10.6 10.6z' }],
  ],
  chat: [
    [
      'path',
      { d: 'M5.5 5h13A1.5 1.5 0 0 1 20 6.5v8a1.5 1.5 0 0 1-1.5 1.5H11l-4.5 3.6V16h-1A1.5 1.5 0 0 1 4 14.5v-8A1.5 1.5 0 0 1 5.5 5z' },
    ],
  ],
  worlds: [
    ['circle', { cx: '12', cy: '12', r: '8.5' }],
    ['ellipse', { cx: '12', cy: '12', rx: '3.7', ry: '8.5' }],
    ['path', { d: 'M3.8 9.3h16.4M3.8 14.7h16.4' }],
  ],
  files: [['path', { d: 'M4 7.5A1.5 1.5 0 0 1 5.5 6h4l2 2.2h7A1.5 1.5 0 0 1 20 9.7v8.8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5z' }]],
  spark: [
    ['path', { d: 'M11 3.5c.5 4.6 1.9 6 6.5 6.5-4.6.5-6 1.9-6.5 6.5-.5-4.6-1.9-6-6.5-6.5 4.6-.5 6-1.9 6.5-6.5z' }],
    ['path', { d: 'M17.5 14.5c.25 2 .9 2.75 2.9 3-2 .25-2.65.9-2.9 2.9-.25-2-.9-2.65-2.9-2.9 2-.25 2.65-1 2.9-3z' }],
  ],
  docs: [
    ['path', { d: 'M5 6a2 2 0 0 1 2-2h11v13H7a2 2 0 0 0-2 2z' }],
    ['path', { d: 'M5 19a2 2 0 0 0 2 2h11v-4' }],
    ['path', { d: 'M9 8h5' }],
  ],
  download: [['path', { d: 'M12 4v10.5M7.8 10.5 12 14.7l4.2-4.2M5 16.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5' }]],
  admin: [
    ['path', { d: 'M4.5 7h15M4.5 12h15M4.5 17h15' }],
    ['circle', { cx: '9', cy: '7', r: '2', fill: 'var(--dr-fill)' }],
    ['circle', { cx: '15.5', cy: '12', r: '2', fill: 'var(--dr-fill)' }],
    ['circle', { cx: '8', cy: '17', r: '2', fill: 'var(--dr-fill)' }],
  ],
}

export const DOT: Shape[] = [['circle', { cx: '12', cy: '12', r: '3', fill: 'currentColor' }]]
