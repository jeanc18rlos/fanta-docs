'use client';

import { useEffect, useRef, useState } from 'react';
import { launchDemos, launchMontage, reviewedMedia, type LaunchDemo } from '@/lib/launch-media';

function Demo({ demo }: { demo: LaunchDemo }) {
  const media = reviewedMedia(demo);
  const container = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const element = container.current;
    const mountedVideo = video.current;
    if (!element || !media) return;
    const pause = () => mountedVideo?.pause();
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) pause();
    }, { threshold: 0.1 });
    const visibility = () => { if (document.hidden) pause(); };
    observer.observe(element);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', visibility);
      pause();
    };
  }, [media]);

  return (
    <section ref={container} id={`demo-${demo.id}`} className="not-prose my-6 scroll-mt-24 overflow-hidden rounded-xl border border-fd-border bg-fd-card p-4">
      <h2 className="text-lg font-semibold">{demo.title}</h2>
      <p className="mt-2 text-sm text-fd-muted-foreground">{demo.result}</p>
      {media ? (
        <>
          <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-lg bg-black">
            <video
              ref={video}
              poster={media.poster}
              controls={started}
              muted
              playsInline
              preload="none"
              className="h-full w-full object-contain [&::cue]:text-[length:clamp(14px,1.1vw,22px)]"
              aria-label={`${demo.title}, silent with captions`}
              onLoadedMetadata={() => {
                if (video.current) for (const track of video.current.textTracks) {
                  if (track.kind === 'captions') track.mode = 'showing';
                }
              }}
              onError={() => setError('Playback is unavailable. Open the silent MP4 below or try again later.')}
            >
              <track kind="captions" src={started ? media.captions : undefined} srcLang="en" label="English captions" default onLoad={(event) => { event.currentTarget.track.mode = 'showing'; }} />
            </video>
            {!started && <button type="button" className="absolute inset-0 grid place-items-center bg-black/15 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-[-4px]" onClick={() => {
              const element = video.current;
              if (!element) return;
              element.src = media.silentMp4;
              element.muted = true;
              element.load();
              setStarted(true);
              element.play().catch(() => setError('Playback did not start. Use the video controls or open the MP4.'));
            }}>Play silent demo with captions</button>}
          </div>
          <a className="mt-3 inline-block text-sm underline" href={media.silentMp4}>Open silent MP4</a>
          {error && <p role="alert" className="mt-3 text-sm text-amber-700 dark:text-amber-300">{error}</p>}
          {(media.screenshots.length > 0 || media.gif) && <details className="mt-4">
            <summary className="cursor-pointer text-sm">Screenshots and one action</summary>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {media.screenshots.map((source, index) => <a href={source} key={source}><img src={source} alt={`${demo.title}, workflow checkpoint ${index + 1}`} loading="lazy" className="w-full rounded-lg border border-fd-border" /></a>)}
            </div>
            {media.gif && <a href={media.gif} className="mt-3 inline-block text-sm underline">Open the silent action GIF</a>}
          </details>}
        </>
      ) : (
        <p className="mt-4 text-sm text-fd-muted-foreground">Reviewed release footage will appear here when available. <a className="underline" href="https://www.fantaisa.net/#demo">See the current demo status</a>.</p>
      )}
    </section>
  );
}

export function LaunchDemos() {
  return <div><Demo demo={launchMontage} />{launchDemos.map(demo => <Demo key={demo.id} demo={demo} />)}</div>;
}
