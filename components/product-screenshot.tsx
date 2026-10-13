import type { CSSProperties, ReactNode } from 'react';

type ScreenshotRegion = {
  sourceWidth: number;
  sourceHeight: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

type ProductScreenshotProps = {
  src: string;
  alt: string;
  caption?: ReactNode;
  width?: number;
  height?: number;
  region?: ScreenshotRegion;
  maxWidth?: CSSProperties['maxWidth'];
};

export function ProductScreenshot({
  src,
  alt,
  caption,
  width,
  height,
  region,
  maxWidth,
}: ProductScreenshotProps) {
  return (
    <figure className="not-prose my-6 w-full" style={{ maxWidth }}>
      <div
        className="relative overflow-hidden rounded-xl border border-fd-border bg-fd-muted"
        style={region ? { aspectRatio: `${region.width} / ${region.height}` } : undefined}
      >
        <img
          src={src}
          alt={alt}
          width={region?.sourceWidth ?? width}
          height={region?.sourceHeight ?? height}
          loading="lazy"
          decoding="async"
          className="m-0 block"
          style={
            region
              ? {
                  position: 'absolute',
                  width: `${(region.sourceWidth / region.width) * 100}%`,
                  maxWidth: 'none',
                  height: 'auto',
                  left: `${(-region.x / region.width) * 100}%`,
                  top: `${(-region.y / region.height) * 100}%`,
                }
              : { width: '100%', height: 'auto' }
          }
        />
      </div>
      <figcaption className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-fd-muted-foreground">
        {caption && <span>{caption}</span>}
        <a href={src} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
          Open full app screenshot
        </a>
      </figcaption>
    </figure>
  );
}
