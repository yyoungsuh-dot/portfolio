import { useReveal } from '../../hooks/useReveal'
import reveal from '../../styles/reveal.module.css'
import styles from './MediaBlocks.module.css'

const VIDEO_SRC_RE = /\.(mp4|webm|mov)$/i

// Renders a <video> (autoplay/muted/loop, no controls) for video sources and
// an <img> otherwise, so callers can mix photos and clips through the same prop.
export function Media({ src, alt, className, style }) {
  if (VIDEO_SRC_RE.test(src)) {
    return (
      <video
        className={className}
        style={style}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controls={false}
        aria-label={alt || undefined}
      />
    )
  }
  return <img src={src} alt={alt || ''} className={className} style={style} />
}

// `noReveal` lets a parent (CaptionedImage) own the reveal instead, so the
// caption + image fade up together as one unit rather than the image
// re-triggering its own nested reveal.
export function FullBleedImage({ src, aspect, alt = '', noReveal = false }) {
  const [ref, inView] = useReveal()
  const className = noReveal
    ? styles.fullBleed
    : `${styles.fullBleed} ${reveal.reveal} ${inView ? reveal.revealIn : ''}`

  return (
    <div ref={noReveal ? undefined : ref} className={className}>
      <div className={styles.fullBleedInner} style={{ aspectRatio: aspect }}>
        <Media src={src} alt={alt} className={styles.img} />
      </div>
    </div>
  )
}

// Same full-bleed wrapper as FullBleedImage, but for a live, interactive
// embed (e.g. a deployed prototype) instead of a static image/video.
function EmbedFrame({ src, aspect, title }) {
  return (
    <div className={styles.fullBleedInner} style={{ aspectRatio: aspect }}>
      <iframe
        src={src}
        title={title}
        className={styles.embedFrame}
        loading="lazy"
        allow="clipboard-write"
      />
    </div>
  )
}

export function FullBleedEmbed({ src, aspect, title = '', caption = '' }) {
  const [ref, inView] = useReveal()

  if (!caption) {
    return (
      <div ref={ref} className={`${styles.fullBleed} ${reveal.reveal} ${inView ? reveal.revealIn : ''}`}>
        <EmbedFrame src={src} aspect={aspect} title={title} />
      </div>
    )
  }

  return (
    <div ref={ref} className={`${styles.captionedGroup} ${reveal.reveal} ${inView ? reveal.revealIn : ''}`}>
      <p className={styles.caption}>{caption}</p>
      <div className={styles.fullBleed}>
        <EmbedFrame src={src} aspect={aspect} title={title} />
      </div>
    </div>
  )
}

// A numbered sub-heading + paragraph(s), sitting alone at the heading offset
// (no separate label/heading columns) — used for Pitch's "1. Task Flow
// Thread" / "2. Data Preview" style groups, each followed by its own media.
export function GroupIntro({ number, title, children }) {
  const [ref, inView] = useReveal()
  return (
    <div ref={ref} className={`${styles.groupIntro} ${reveal.reveal} ${inView ? reveal.revealIn : ''}`}>
      <p>
        {number}. {title}
      </p>
      {children}
    </div>
  )
}

export function CaptionedImage({ caption, src, aspect, alt = '' }) {
  const [ref, inView] = useReveal()
  return (
    <div ref={ref} className={`${styles.captionedGroup} ${reveal.reveal} ${inView ? reveal.revealIn : ''}`}>
      {caption && <p className={styles.caption}>{caption}</p>}
      <FullBleedImage src={src} aspect={aspect} alt={alt} noReveal />
    </div>
  )
}

// `bare` rows (currently just Space Mapping) show each item at its own
// natural ratio — no forced crop box — so it scales cleanly at any width
// instead of being cover-cropped into an assumed aspect ratio.
//
// Multiple items reveal left-to-right, staggered via transitionDelay — each
// item watches its own scroll entry independently, but once the row is in
// view they fade up in sequence rather than all at once.
function TripleCell({ children, className, delay, aspect }) {
  const [ref, inView] = useReveal()
  return (
    <div
      ref={ref}
      className={`${className} ${reveal.reveal} ${inView ? reveal.revealIn : ''}`}
      style={{ transitionDelay: `${delay}ms`, aspectRatio: aspect }}
    >
      {children}
    </div>
  )
}

export function TripleRow({ items, aspect = '512 / 400', bare = false }) {
  return (
    <div className={bare ? styles.tripleRowBare : styles.tripleRow}>
      {items.map((item, index) => {
        const delay = index * 120
        if (bare) {
          return (
            <TripleCell key={`${item.src}-${index}`} className={styles.tripleCellNatural} delay={delay}>
              <Media src={item.src} alt={item.alt} className={styles.imgNatural} />
            </TripleCell>
          )
        }
        if (item.caption) {
          return (
            <TripleCell key={`${item.src}-${index}`} className={styles.tripleCellCaptioned} delay={delay}>
              <p className={styles.caption} style={{ padding: 0 }}>
                {item.caption}
              </p>
              <div className={styles.tripleCellBox} style={{ aspectRatio: aspect }}>
                <Media
                  src={item.src}
                  alt={item.alt}
                  className={styles.img}
                  style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                />
              </div>
            </TripleCell>
          )
        }
        return (
          <TripleCell key={`${item.src}-${index}`} className={styles.tripleCell} delay={delay} aspect={aspect}>
            <Media
              src={item.src}
              alt={item.alt}
              className={styles.img}
              style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
            />
          </TripleCell>
        )
      })}
    </div>
  )
}
