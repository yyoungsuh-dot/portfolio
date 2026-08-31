import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import arrowDown from '../../assets/arrow-down.svg'
import ellipseGlow from '../../assets/Ellipse 73105.png'
import { PROJECTS } from '../../data/projects'
import styles from './Hero.module.css'

const GLOW_Y_START = 105 // % — center sits below the viewport, only the top half of the glow shows
const GLOW_Y_END = 50 // % — center lands at screen-center, timed to finish exactly as the thumbnails finish blooming in
const GLOW_RISE_END = 0.45 // scroll progress at which the farthest thumbnail (distance 2, enterStart 0.3 + 0.15) finishes appearing

const PROJECT_COUNT = PROJECTS.length
const INITIAL_INDEX = PROJECTS.findIndex((p) => p.slug === 'lay')
const SLOT_OFFSETS = [-2, -1, 0, 1, 2]
const TITLE_TEXT_START_BLUR = 1.8 // px — equivalent to the "30% blur" starting point, sharpening to 0 as it reveals
const TEXT_HIDE_MS = 300 // phase 0: title text + arrows fade out first, before the frame starts shrinking
const SHRINK_MS = 500 // phase 1: current pill shrinks to a plain circle (matches .projectItem transition duration)
const SWIPE_MS = 450 // phase 2: the row of circles swipes over by one slot (matches .sliding transition duration)
const GROW_MS = 500 // phase 3: the new center circle grows back into the expanded pill
const TEXT_SHOW_MS = 900 // phase 4: title text + arrows fade back in slowly, once fully grown

const clamp01 = (v) => Math.min(Math.max(v, 0), 1)
const phase = (p, start, end) => clamp01((p - start) / (end - start))
const clampNum = (v, min, max) => Math.min(Math.max(v, min), max)
const lerp = (a, b, t) => a + (b - a) * t
const mod = (n, m) => ((n % m) + m) % m

function ChevronIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

function Hero() {
  const heroRef = useRef(null)
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX)
  const [localExpand, setLocalExpand] = useState(1) // click-driven expand state, used once scroll entrance is done
  const [showText, setShowText] = useState(true) // click-driven: only true once the pill has fully grown
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideOffset, setSlideOffset] = useState(0) // px — whole row swipes by one slot between shrink and swap
  const [sliding, setSliding] = useState(false)
  const interactive = progress >= 0.995

  useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const hero = heroRef.current
      if (!hero) return

      const scrollDistance = hero.offsetHeight - window.innerHeight
      const p = scrollDistance > 0 ? -hero.getBoundingClientRect().top / scrollDistance : 0
      setProgress(clamp01(p))
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // phase 1: background glow rises into view, reaching screen-center exactly
  // when all the thumbnail circles have finished blooming in
  const glowY = GLOW_Y_START + (GLOW_Y_END - GLOW_Y_START) * phase(progress, 0, GLOW_RISE_END)

  // phase 2: the contact/works row fades + blurs away first, same treatment as the title text below
  const infoLeave = phase(progress, 0.05, 0.22)
  const infoOpacity = 1 - infoLeave
  const infoStyle = {
    opacity: infoOpacity,
    filter: `blur(${8 * infoLeave}px)`,
    pointerEvents: infoOpacity < 0.02 ? 'none' : 'auto',
  }

  // phase 3: titles slide apart + blur out while the project circles bloom in from the center
  const textLeave = phase(progress, 0.2, 0.5)
  const titleTopStyle = {
    transform: `translateY(${-60 * textLeave}px)`,
    filter: `blur(${8 * textLeave}px)`,
    opacity: 1 - textLeave,
  }
  const titleBottomStyle = {
    transform: `translateY(${60 * textLeave}px)`,
    filter: `blur(${8 * textLeave}px)`,
    opacity: 1 - textLeave,
  }

  // phase 4 (scroll-driven): once the titles are gone, the center project expands.
  // Once the sequence has fully played (interactive), the same "expand" value is
  // instead driven by clicks on the arrows / side thumbnails (see goTo below).
  const scrollExpand = phase(progress, 0.5, 0.78)
  const scrollTextReveal = phase(progress, 0.8, 1)
  const expand = interactive ? localExpand : scrollExpand
  const textReveal = interactive ? (showText ? 1 : 0) : scrollTextReveal

  // as the center circle expands, the glow dims down to 20% so it doesn't fight the thumbnail
  const glowOpacity = 1 - 0.8 * expand

  const vw = typeof window !== 'undefined' ? window.innerWidth : 1440
  const baseSize = clampNum(vw * 0.22, 130, 300)
  const expandedWidth = clampNum(vw * 0.64, 320, 1000)
  const expandedHeight = clampNum(vw * 0.36, 240, 520)
  const gapBloom = clampNum(vw * 0.045, 20, 64)
  const bloomStep = baseSize + gapBloom
  const edgeOffset = vw / 2

  // Carousel navigation, seamless 5-step handoff:
  // 1. title text + arrows fade out first
  // 2. once they're gone, the current center shrinks to a plain circle (same
  //    size as the other thumbnails)
  // 3. once it's settled as a circle, the whole row swipes over by one slot
  // 4. the row then snaps back (no transition) while the active index advances
  //    by the same one slot — the content lines up exactly where the swipe left
  //    off, so step 3→4 reads as one continuous slide — and the new center
  //    circle grows back into the expanded pill
  // 5. once the pill has fully grown, title text + arrows fade/blur back in
  const goTo = (index) => {
    if (!interactive || isAnimating) return
    const dir = index > activeIndex ? 1 : -1
    setIsAnimating(true)
    setShowText(false)
    window.setTimeout(() => {
      setLocalExpand(0)
      window.setTimeout(() => {
        setSliding(true)
        setSlideOffset(-dir * bloomStep)
        window.setTimeout(() => {
          setSliding(false)
          setSlideOffset(0)
          setActiveIndex(mod(index, PROJECT_COUNT))
          requestAnimationFrame(() => {
            setLocalExpand(1)
            window.setTimeout(() => {
              setShowText(true)
              setIsAnimating(false)
            }, GROW_MS)
          })
        }, SWIPE_MS)
      }, SHRINK_MS)
    }, TEXT_HIDE_MS)
  }
  const goPrev = () => goTo(activeIndex - 1)
  const goNext = () => goTo(activeIndex + 1)

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.pinned}>
        <img
          src={ellipseGlow}
          alt=""
          className={styles.glow}
          style={{
            '--glow-y': `${glowY}%`,
            opacity: glowOpacity,
            transition: interactive ? 'opacity 0.5s ease' : undefined,
          }}
          aria-hidden="true"
        />

        <div className={styles.body}>
          <p className={styles.titleTop} style={titleTopStyle}>
            <span className={styles.line}>Designing</span>
            <span className={styles.line}>the next interaction</span>
            <span className={styles.line}>&amp; interface</span>
          </p>

          <div className={styles.middle}>
            <div className={styles.infoRow} style={infoStyle}>
              <div className={styles.infoCol}>
                <p className={styles.infoLabel}>Contact</p>
                <a href="mailto:yyoungsuh@gmail.com" className={styles.infoLink}>
                  yyoungsuh@gmail.com
                </a>
              </div>

              <div className={styles.arrowWrap}>
                <img src={arrowDown} alt="" className={styles.arrow} />
              </div>

              <div className={styles.infoCol}>
                <p className={styles.infoLabel}>Works</p>
                <div className={styles.infoText}>
                  <p>UX/UI</p>
                  <p>Interaction Design</p>
                  <p>Motion Design</p>
                </div>
              </div>
            </div>

            <div
              className={`${styles.projectsRow} ${interactive ? styles.animated : ''} ${sliding ? styles.sliding : ''}`}
              style={{ transform: `translateX(${slideOffset}px)` }}
            >
              {SLOT_OFFSETS.map((offset) => {
                const distance = Math.abs(offset)
                const isCenter = offset === 0
                const project = PROJECTS[mod(activeIndex + offset, PROJECT_COUNT)]
                const sign = Math.sign(offset)

                let x = 0
                let itemOpacity = 1
                if (distance === 1) {
                  x = sign * lerp(bloomStep, edgeOffset, expand)
                } else if (distance === 2) {
                  x = sign * lerp(bloomStep * 2, edgeOffset + baseSize, expand)
                  itemOpacity = 1 - expand
                }

                // bloom-in stagger, from center outward — only relevant during the initial scroll entrance
                const enterStart = 0.2 + distance * 0.05
                const enter = interactive ? 1 : phase(progress, enterStart, enterStart + 0.15)

                const width = isCenter ? lerp(baseSize, expandedWidth, expand) : baseSize
                const height = isCenter ? lerp(baseSize, expandedHeight, expand) : baseSize

                const textOpacity = isCenter ? textReveal : 0
                const clickable = interactive && !isAnimating && distance <= 1

                return (
                  <div
                    key={`${offset}`}
                    className={styles.projectItem}
                    role={clickable ? 'button' : undefined}
                    tabIndex={clickable ? 0 : -1}
                    onClick={
                      clickable
                        ? () => (isCenter ? navigate(`/works/${project.slug}`) : goTo(activeIndex + offset))
                        : undefined
                    }
                    onKeyDown={
                      clickable
                        ? (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              isCenter ? navigate(`/works/${project.slug}`) : goTo(activeIndex + offset)
                            }
                          }
                        : undefined
                    }
                    style={{
                      width,
                      height,
                      opacity: itemOpacity * enter,
                      transform: `translate(-50%, -50%) translateX(${x}px) scale(${0.4 + 0.6 * enter})`,
                      cursor: clickable ? 'pointer' : 'default',
                    }}
                  >
                    <img src={project.img} alt="" className={styles.projectImg} />
                    {isCenter && (
                      <>
                        <div
                          className={styles.textOverlay}
                          style={{
                            opacity: textOpacity,
                            transitionDuration: interactive
                              ? `${showText ? TEXT_SHOW_MS : TEXT_HIDE_MS}ms`
                              : undefined,
                            transitionProperty: interactive ? 'opacity' : undefined,
                            transitionTimingFunction: interactive ? 'ease' : undefined,
                          }}
                        />
                        <div
                          className={styles.titleText}
                          style={{
                            opacity: textOpacity,
                            filter: `blur(${(1 - textOpacity) * TITLE_TEXT_START_BLUR}px)`,
                            transitionDuration: interactive
                              ? `${showText ? TEXT_SHOW_MS : TEXT_HIDE_MS}ms`
                              : undefined,
                          }}
                        >
                          <p className={styles.titleTextHeading}>{project.title}</p>
                          <div className={styles.titleTextDesc}>
                            {project.desc.map((line) => (
                              <p key={line}>{line}</p>
                            ))}
                          </div>
                        </div>

                        <button
                          type="button"
                          className={`${styles.navArrow} ${styles.navArrowPrev}`}
                          style={{
                            opacity: textReveal,
                            pointerEvents: textReveal > 0.5 ? 'auto' : 'none',
                            transition: interactive
                              ? `opacity ${showText ? TEXT_SHOW_MS : TEXT_HIDE_MS}ms ease, transform 0.2s ease`
                              : undefined,
                          }}
                          onClick={(e) => {
                            e.stopPropagation()
                            goPrev()
                          }}
                          aria-label="Previous project"
                        >
                          <ChevronIcon direction="prev" />
                        </button>
                        <button
                          type="button"
                          className={`${styles.navArrow} ${styles.navArrowNext}`}
                          style={{
                            opacity: textReveal,
                            pointerEvents: textReveal > 0.5 ? 'auto' : 'none',
                            transition: interactive
                              ? `opacity ${showText ? TEXT_SHOW_MS : TEXT_HIDE_MS}ms ease, transform 0.2s ease`
                              : undefined,
                          }}
                          onClick={(e) => {
                            e.stopPropagation()
                            goNext()
                          }}
                          aria-label="Next project"
                        >
                          <ChevronIcon direction="next" />
                        </button>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <p className={styles.titleBottom} style={titleBottomStyle}>
            <span className={styles.line}>for future</span>
            <span className={`${styles.line} ${styles.gradientText}`}>lovable experiences</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
