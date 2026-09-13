import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { PROJECTS } from '../../data/projects'
import LayCaseStudy from './LayCaseStudy'
import ReactCaseStudy from './ReactCaseStudy'
import PitchCaseStudy from './PitchCaseStudy'
import OneUiNewSpectrumCaseStudy from './OneUiNewSpectrumCaseStudy'
import OurhourCaseStudy from './OurhourCaseStudy'
import EchoCaseStudy from './EchoCaseStudy'
import PasswordGate from './PasswordGate'
import styles from './ProjectDetail.module.css'

// Slugs that sit behind a password gate (NDA'd work) and the password each
// unlocks with. Nothing is persisted — the gate re-prompts on every visit,
// including a refresh and re-entering the page after navigating away.
const PROTECTED = {
  'one-ui-new-spectrum': '260914',
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)
  const protectedPassword = PROTECTED[slug]
  const [unlocked, setUnlocked] = useState(false)

  // Land on the top of every case-study page instead of wherever the
  // previous page's scroll position happened to be.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Re-lock whenever the slug changes, so navigating away and back through
  // the SPA (not just a hard refresh) shows the gate again.
  useEffect(() => {
    setUnlocked(false)
  }, [slug])

  if (!project) {
    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.notFound}>
          <p>Project not found.</p>
          <Link to="/" className={styles.backLink}>
            ← Back home
          </Link>
        </div>
      </div>
    )
  }

  if (protectedPassword && !unlocked) {
    return (
      <div className={styles.page}>
        <Header />
        <PasswordGate password={protectedPassword} onUnlock={() => setUnlocked(true)} />
      </div>
    )
  }

  // Full case-study copy only exists for "lay" (Figma node 368:44218) and
  // "react" (Figma node 394:7709) so far.
  if (project.slug === 'lay') {
    return (
      <div className={styles.page}>
        <Header />
        <LayCaseStudy />
      </div>
    )
  }

  if (project.slug === 'react') {
    return (
      <div className={styles.page}>
        <Header />
        <ReactCaseStudy />
      </div>
    )
  }

  if (project.slug === 'pitch') {
    return (
      <div className={styles.page}>
        <Header />
        <PitchCaseStudy />
      </div>
    )
  }

  if (project.slug === 'one-ui-new-spectrum') {
    return (
      <div className={styles.page}>
        <Header />
        <OneUiNewSpectrumCaseStudy />
      </div>
    )
  }

  if (project.slug === 'ourhour') {
    return (
      <div className={styles.page}>
        <Header />
        <OurhourCaseStudy />
      </div>
    )
  }

  if (project.slug === 'echo') {
    return (
      <div className={styles.page}>
        <Header />
        <EchoCaseStudy />
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <img src={project.img} alt="" className={styles.heroImg} />
      </section>
      <section className={styles.placeholder}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.placeholderText}>
          This case study page hasn't been designed in Figma yet — check back soon.
        </p>
        <Link to="/" className={styles.backLink}>
          ← Back home
        </Link>
      </section>
    </div>
  )
}

export default ProjectDetail
