import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import pwBg from '../../assets/oneuinewspectrum-case-study/pw.png'
import styles from './PasswordGate.module.css'

const COPY = {
  ko: {
    title: '보안 프로젝트',
    body: '기밀 유지 계약에 따라 공개가 제한된 프로젝트입니다.',
    placeholder: '비밀번호',
    submit: '확인',
    error: '비밀번호가 올바르지 않습니다.',
  },
  en: {
    title: 'Confidential Project',
    body: 'This project is under an NDA, so access is restricted.',
    placeholder: 'Password',
    submit: 'Unlock',
    error: 'Incorrect password.',
  },
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.icon}>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function PasswordGate({ password, onUnlock }) {
  const { language } = useLanguage()
  const t = COPY[language]
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const langVars =
    language === 'en'
      ? { '--gate-lang-font': "'Space Grotesk', sans-serif", '--gate-lang-weight': 500 }
      : {}

  // The gate is a full-screen modal moment — lock the page behind it in place.
  useEffect(() => {
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value === password) {
      setError(false)
      onUnlock()
    } else {
      setError(true)
    }
  }

  return (
    <div className={styles.page} style={langVars}>
      <img src={pwBg} alt="" className={styles.bg} aria-hidden="true" />
      <div className={styles.card}>
        <div className={styles.iconRing}>
          <LockIcon />
        </div>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.body}>{t.body}</p>

        <form className={`${styles.form} ${value ? styles.formFilled : ''}`} onSubmit={handleSubmit}>
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              if (error) setError(false)
            }}
            placeholder={t.placeholder}
            className={styles.input}
            autoFocus
          />
          <button type="submit" className={styles.submit} tabIndex={value ? 0 : -1}>
            {t.submit}
          </button>
        </form>

        {error && <p className={styles.error}>{t.error}</p>}
      </div>
    </div>
  )
}

export default PasswordGate
