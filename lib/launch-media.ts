export type LaunchDemoId = 'native' | 'source' | 'agent' | 'montage';

export type ReviewedLaunchMedia = {
  silentMp4: string;
  poster: string;
  captions: string;
  gif?: string;
  screenshots: readonly string[];
  sourceCommit: string;
  appSha256: string;
  reviewedAt: string;
};

export type LaunchDemo = {
  id: LaunchDemoId;
  title: string;
  result: string;
  media: ReviewedLaunchMedia | null;
};

const mediaRoot = '/launch/alpha-1.0.0-20261012';

function recordedMedia(name: string, reviewedAt: string): ReviewedLaunchMedia {
  return {
    silentMp4: `${mediaRoot}/${name}-silent.mp4`,
    poster: `${mediaRoot}/${name}-poster.jpg`,
    captions: `${mediaRoot}/${name}.vtt`,
    gif: `${mediaRoot}/${name}.gif`,
    screenshots: [`${mediaRoot}/${name}-01.png`, `${mediaRoot}/${name}-02.png`],
    sourceCommit: '57d86330289153ead8a3bdbd114e1fa530a74e03',
    appSha256: '1679cbc87fa6bd2675aa50543c77915cb3c373c3ccf94d053c173fd7f4988baf',
    reviewedAt,
  };
}

export const launchDemos: LaunchDemo[] = [
  {
    id: 'native',
    title: 'Design in Fanta',
    result: 'Edit native layers imported from the original .fig sample, Undo and Redo, then inspect the reopened project and actual PNG export.',
    media: {
      ...recordedMedia('design-in-fanta', '2026-10-12T05:13:37Z'),
      screenshots: [`${mediaRoot}/design-in-fanta-01.png`, `${mediaRoot}/design-in-fanta-02.png`, `${mediaRoot}/design-in-fanta-03-png-preview.png`],
    },
  },
  {
    id: 'source',
    title: 'Your design is source',
    result: 'Follow a canvas edit into FNX and Git, save a valid Code edit, and see the canvas update. Captions identify the later Git checkpoint.',
    media: {
      ...recordedMedia('your-design-is-source', '2026-10-12T05:18:57.034685Z'),
      screenshots: [`${mediaRoot}/your-design-is-source-01.png`, `${mediaRoot}/your-design-is-source-02.png`, `${mediaRoot}/your-design-is-source-03-git.png`],
    },
  },
  {
    id: 'agent',
    title: 'An agent edits your design',
    result: 'An external Opus 5.5 agent edits one CTA through Fanta MCP. Inspect native layers and saved FNX, then Undo and Redo. Captions identify the later source-view recovery.',
    media: recordedMedia('agent-edits-your-design', '2026-10-12T05:13:37Z'),
  },
];

export const launchMontage: LaunchDemo = {
  id: 'montage',
  title: 'Fanta in 53 seconds',
  result: 'A quick look at native editing, source and Git, and one external Opus 5.5 edit through Fanta MCP. Captions identify the later checkpoints.',
  media: {
    silentMp4: `${mediaRoot}/fanta-launch-montage-silent.mp4`,
    poster: `${mediaRoot}/fanta-launch-montage-poster.jpg`,
    captions: `${mediaRoot}/fanta-launch-montage.vtt`,
    screenshots: [],
    sourceCommit: '57d86330289153ead8a3bdbd114e1fa530a74e03',
    appSha256: '1679cbc87fa6bd2675aa50543c77915cb3c373c3ccf94d053c173fd7f4988baf',
    reviewedAt: '2026-10-12T05:18:57.034685Z',
  },
};

export function reviewedMedia(demo: LaunchDemo): ReviewedLaunchMedia | null {
  const media = demo.media;
  if (!media || !/^[0-9a-f]{40}$/.test(media.sourceCommit) || !/^[0-9a-f]{64}$/.test(media.appSha256) || !Number.isFinite(Date.parse(media.reviewedAt))) return null;
  return media;
}
