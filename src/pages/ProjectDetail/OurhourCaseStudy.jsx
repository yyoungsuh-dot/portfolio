// Every media block is a clip/still/GIF from ourhour_case-study, in page
// order: hero -> Problem (x3 triple) -> Insight (x1) -> Solution (x1, the
// only user-driven video, with a scrubber + play button and no autoplay)
// -> Brand Identity (x2) -> Features / WORRY-FREE (x3 captioned) -> Features
// / BONDING (x3 captioned) -> Features / EVERY (x3 captioned) -> Vision
// (x1) -> Brand Application (x3).
//
// Reproduced from Figma (file wwLUcp45SyEFKXiEkWeWWE, node 248:26215).
import heroVideo from '../../assets/ourhour_case-study/ourhour_0.mp4'
import problem1 from '../../assets/ourhour_case-study/ourhour_1-1.gif'
import problem2 from '../../assets/ourhour_case-study/ourhour_1-2.gif'
import problem3 from '../../assets/ourhour_case-study/ourhour_1-3.gif'
import insightGif from '../../assets/ourhour_case-study/ourhour_2.gif'
import solutionVideo from '../../assets/ourhour_case-study/ourhour_3.mp4'
import brandIdentity1 from '../../assets/ourhour_case-study/ourhour_4.mp4'
import brandIdentity2 from '../../assets/ourhour_case-study/ourhour_5.mp4'
import worryFree1 from '../../assets/ourhour_case-study/ourhour_6.png'
import worryFree2 from '../../assets/ourhour_case-study/ourhour_7.mp4'
import worryFree3 from '../../assets/ourhour_case-study/ourhour_8.mp4'
import bonding1 from '../../assets/ourhour_case-study/ourhour_9.mp4'
import bonding2 from '../../assets/ourhour_case-study/ourhour_10.png'
import bonding3 from '../../assets/ourhour_case-study/ourhour_11.png'
import every1 from '../../assets/ourhour_case-study/ourhour_12.png'
import every2 from '../../assets/ourhour_case-study/ourhour_13.png'
import every3 from '../../assets/ourhour_case-study/ourhour_14.png'
import visionImg from '../../assets/ourhour_case-study/ourhour_15.png'
import brandApp1 from '../../assets/ourhour_case-study/ourhour_16.png'
import brandApp2 from '../../assets/ourhour_case-study/ourhour_17.png'
import brandApp3 from '../../assets/ourhour_case-study/ourhout_18.mp4'
import SectionIntro from './SectionIntro'
import { CaptionedImage, FullBleedImage, FullBleedVideo, Media, TripleRow } from './MediaBlocks'
import { useLanguage } from '../../context/LanguageContext'
import { useReveal } from '../../hooks/useReveal'
import { useHeroBlur } from '../../hooks/useHeroBlur'
import reveal from '../../styles/reveal.module.css'
import styles from './LayCaseStudy.module.css'

// metaColumns are already English in the design, so they're shared across
// languages.
const META_COLUMNS = [
  [
    { label: 'Assignment', lines: ['Side Project'] },
    { label: 'Teams', lines: ['3 Industrial Designers', '1 Brand Designer'] },
  ],
  [{ label: 'Role', lines: ['UX Research', 'Branding', 'Storytelling', 'Presentation'] }],
  [
    {
      label: 'Result',
      lines: [
        'IDEA Awards GOLD',
        'Korea Design Exhibition President',
        'Taiwan International Design Competition Gold',
        'Spark Design Awards Gold',
        'International Busan Design Award Gold',
      ],
    },
  ],
  [{ label: 'Year', lines: ['2024'] }],
]

const ZW = '​' // zero-width space — a visual blank line between paragraphs

const CONTENT = {
  ko: {
    overview: {
      subtitle: '지체 장애 부모를 위한\n베이비 시트 모듈 결합형 휠체어',
      paragraphs: [
        '지체 장애 부모는 자녀와 외출하기 위해 휠체어와 유아차, 두 모빌리티를 동시에 조작해야 합니다. 부피가 크고 조작 방향이 제한적인 두 제품을 함께 조작하는 것은 행복해야 할 이들의 이동 경험을 불편하고 위험하게 만들 뿐만 아니라, 자녀와의 상호작용까지 어렵게 합니다. OURHOUR는 이러한 물리적 제약을 오히려 이들만의 특별한 상호작용으로 재해석해, 휠체어와 베이비 시트 모듈을 결합한 모빌리티로 더 안전한 주행과 가까운 상호작용을 가능하게 합니다.',
      ],
    },
    problem: {
      heading: ['지체 장애 부모의', '부정적 외출 경험'],
      paragraphs: [
        '휠체어를 이용하는 지체 장애 부모와 유아차를 이용하는 어린 자녀의 외출에는 수많은 물리적 제약이 따릅니다. 휠체어와 유아차를 동시에 조작하기 어렵고, 두 제품이 차지하는 큰 부피로 인해 좁은 길이나 통로에서의 이동도 쉽지 않습니다. 또한 안전한 이동을 위해 주변 환경에 지속적으로 주의를 기울여야 하기에 아이와의 상호작용 역시 제한됩니다. 아이를 유아차에서 자동차 등 다른 모빌리티로 옮기는 과정 또한 많은 힘이 필요하며 안전사고의 위험이 따릅니다.',
      ],
      captions: ['조작의 어려움', '상호 작용의 어려움', '아이 이동의 어려움'],
    },
    insight: {
      heading: ['함께, 더 가까이', '— 특별한 상호작용'],
      paragraphs: [
        '지체 장애 부모 가정의 일상을 관찰한 결과, 휠체어를 이용하는 부모가 아이를 가장 가까운 무릎 위에 두고 자연스럽게 교감하는 모습을 발견했습니다. 이에 이들의 물리적 제약을 단순히 해결해야 할 불편함으로 바라보는 대신, 부모와 자녀를 더욱 가까이 연결하는 새로운 상호작용의 기회로 재해석했습니다.',
      ],
    },
    solution: {
      heading: ['베이비 시트 모듈', '결합 방식의 휠체어'],
      paragraphs: [
        '부모와 아이가 무릎 위에서 가장 가까이 교감하는 모습에서 착안해, 휠체어에 베이비 시트 모듈을 로봇 암으로 결합한 모빌리티를 설계했습니다. 두 제품을 하나로 결합해 전체 부피를 줄이고 안전한 주행을 가능하게 했으며, 베이비 시트의 자유로운 위치 조절을 통해 부모와 자녀가 더욱 다양한 방식으로 상호작용할 수 있도록 했습니다. 또한 다른 제품에도 결합할 수 있는 모듈식 구성으로, 보호자의 변화와 아이의 성장에 따라 지속적으로 활용할 수 있도록 설계했습니다.',
      ],
    },
    brandIdentity: {
      heading: ['두 모빌리티의 결합과', '시간을 표현한 아이덴티티'],
      paragraphs: [
        "부모의 휠체어와 자녀의 유아차 바퀴를 상징하는 두 개의 원형 모티프를 결합해, 두 사람이 함께 '우리만의 시간을 만들어간다'는 의미를 표현했습니다. 심볼은 부모가 자녀를 품은 모습인 동시에 시계의 형태로 디자인했습니다. 또한 제품의 핵심 가치를 OUR [ ___ ] HOUR의 카피 구조로 확장해 브랜드 스토리를 일관된 메시지로 전달하고자 했습니다.",
      ],
    },
    worryFree: {
      heading: ['OUR [WORRY-FREE] HOUR', '안전을 위한 설계'],
      paragraphs: [
        "1. 컴팩트한 사이즈 — 두 제품의 결합으로 기존 휠체어 + 유아차(최소 1500mm)에서 폭을 최소 480mm 이상 줄였습니다. 일반 통행로 유효폭(1500mm) 대비 작은 부피로 안전하게 이동할 수 있습니다.",
        '2. 안전한 운행 — 옴니휠을 사용하여 작은 회전 반경과 안정적인 코너링을 제공하며, 경사로 자동 브레이크 시스템으로 안전한 운행을 돕습니다.',
        "3. 간편한 결합 방식 — 베이비 시트는 암 위에 올린 후 한 번의 '딸깍'으로 쉽고 간편하게 고정할 수 있습니다.",
      ],
      captions: ['컴팩트한 사이즈', '안전한 운행', '간편한 결합 방식'],
    },
    bonding: {
      heading: ['OUR [BONDING] HOUR', '자녀와의 더 자유로운 상호작용'],
      paragraphs: [
        '1. 사랑스러운 눈맞춤 — 베이비 시트는 360도 회전이 가능해, 서로 눈을 마주치며 교감할 수도, 아이가 원하는 곳을 바라보게 할 수도 있습니다.',
        '2. 친밀한 거리 — 휠체어와 유아차의 결합을 통해 부모와 자녀 사이의 물리적 거리뿐 아니라 심리적 거리 또한 가까워집니다.',
        '3. 자연스러운 위치 조절 — pHRI(Physical Human-Robot Interaction) 기술을 적용하여, 작은 힘으로도 쉽게 베이비 시트의 위치를 조절할 수 있습니다.',
      ],
      captions: ['사랑스러운 눈맞춤', '친밀한 거리', '자연스러운 위치 조절'],
    },
    every: {
      heading: ['OUR [EVERY] HOUR', '어디서나 이어지는 이동'],
      paragraphs: [
        '1. 휠체어와 함께 — 아워아워의 베이비 시트는 부모의 이동 수단인 휠체어 암에 결합합니다. 이를 통해 지체 장애를 가진 사용자는 어디로든 아이와 함께 안전하게 이동할 수 있습니다.',
        '2. 유아차와 함께 — 단독 유아차가 필요할 경우에는 유아차 모듈에 장착합니다.',
        '3. 카시트와 함께 — 차량에 탑승해 이동할 경우에는 카시트에 결합할 수 있습니다.',
      ],
      captions: ['휠체어와 함께', '유아차와 함께', '카시트와 함께'],
    },
    vision: {
      heading: ['세상 모든 부모의', '편안한 이동 경험'],
      paragraphs: [
        'OURHOUR는 장애를 가진 부모가 직면하는 어려움 자체보다, 부모와 자녀가 만들어가는 고유한 사랑과 상호작용 방식에 주목한 제품입니다. 이러한 관점과 디자인 솔루션을 통해 장애 유무와 관계없이 세상 모든 부모가 더욱 편안하게 이동하고, 자녀와 가까이 교감할 수 있는 육아 경험을 기대합니다.',
      ],
    },
    brandApplication: {
      heading: ['브랜드 어플리케이션'],
      paragraphs: [
        'OURHOUR가 추구하는 가치와 브랜드 스토리를 다양한 접점에서 일관되게 전달할 수 있도록 브랜드 어플리케이션을 함께 제작했습니다.',
      ],
    },
  },
  en: {
    overview: {
      subtitle: 'A wheelchair with a combined baby-seat module,\nfor parents with physical disabilities',
      paragraphs: [
        'To go out with their child, parents with physical disabilities have to operate two mobility devices at once — a wheelchair and a stroller. Handling two bulky products with limited steering makes a journey that should be joyful uncomfortable and unsafe, and it gets in the way of interacting with their child. OURHOUR reframes these physical constraints as a form of interaction unique to these families: a mobility device that combines a wheelchair with a baby-seat module, enabling safer driving and closer interaction.',
      ],
    },
    problem: {
      heading: ['The difficult outings of',' parents with disabilities and their young children'],
      paragraphs: [
        'Outings for a parent with a physical disability using a wheelchair and a young child in a stroller come with countless physical constraints. It is hard to operate a wheelchair and a stroller at the same time, and the sheer size of the two products makes narrow streets and passages difficult to navigate. Because safe movement demands constant attention to the surroundings, interaction with the child is limited as well. Moving the child from the stroller into another mobility device such as a car also takes considerable effort and carries a risk of accidents.',
      ],
      captions: ['Hard to operate', 'Hard to interact', 'Hard to transfer the child'],
    },
    insight: {
      heading: ['Together, closer', '— a special interaction'],
      paragraphs: [
        "Observing the daily life of families with a parent with a physical disability, we found that wheelchair-using parents naturally bond with their child by keeping them right on their lap — the closest possible spot. So instead of seeing their physical constraints merely as an inconvenience to be fixed, we reframed them as an opportunity for a new kind of interaction that connects parent and child even more closely.",
      ],
    },
    solution: {
      heading: ['A safer, closer wheelchair through a combined baby-seat module'],
      paragraphs: [
        "Inspired by how parent and child bond most closely on the lap, we designed a mobility device that joins a baby-seat module to a wheelchair via a robotic arm. Combining the two products into one reduces the overall footprint and enables safe driving, while free positioning of the baby seat lets parent and child interact in a wider variety of ways. A modular design that can also attach to other products means it keeps being useful as the caregiver's situation changes and the child grows.",
      ],
    },
    brandIdentity: {
      heading: ['An identity expressing the union of two mobilities, and time'],
      paragraphs: [
        "Two circular motifs — one for the parent's wheelchair wheel, one for the child's stroller wheel — are combined to express the idea that the two of them are 'making our own time' together. The symbol reads at once as a parent holding a child and as the form of a clock. We also extended the product's core value into the copy structure OUR [ ___ ] HOUR, so the brand story is delivered as one consistent message.",
      ],
    },
    worryFree: {
      heading: ['OUR [WORRY-FREE] HOUR', 'designed for safety'],
      paragraphs: [
        '1. Compact size — combining the two products cuts the width by at least 480 mm from a conventional wheelchair-plus-stroller setup (at least 1,500 mm). Its smaller footprint moves safely even against the effective width of a standard walkway (1,500 mm).',
        '2. Safe driving — omni wheels give a small turning radius and stable cornering, and an automatic ramp-brake system supports safe operation.',
        '3. Easy attachment — set the baby seat onto the arm and lock it in place easily with a single click.',
      ],
      captions: ['Compact size', 'Safe driving', 'Easy attachment'],
    },
    bonding: {
      heading: ['OUR [BONDING] HOUR', 'freer interaction with your child'],
      paragraphs: [
        "1. Loving eye contact — the baby seat rotates a full 360°, so parent and child can meet each other's eyes, or the child can face whatever they want to look at.",
        '2. Intimate distance — joining the wheelchair and stroller closes not only the physical distance between parent and child but the emotional distance too.',
        '3. Natural repositioning — pHRI (Physical Human-Robot Interaction) technology lets you reposition the baby seat easily with very little force.',
      ],
      captions: ['Loving eye contact', 'Intimate distance', 'Natural repositioning'],
    },
    every: {
      heading: ['OUR [EVERY] HOUR', 'mobility that carries on anywhere'],
      paragraphs: [
        "1. With the wheelchair — OURHOUR's baby seat attaches to the arm of the parent's wheelchair, so a user with a physical disability can travel anywhere safely with their child.",
        '2. With the stroller — when a standalone stroller is needed, it mounts onto the stroller module.',
        '3. With the car seat — for traveling by car, it attaches to the car seat.',
      ],
      captions: ['With the wheelchair', 'With the stroller', 'With the car seat'],
    },
    vision: {
      heading: ['A comfortable journey', 'for every parent'],
      paragraphs: [
        'OURHOUR focuses less on the difficulties a parent with a disability faces and more on the unique love and ways of interacting that a parent and child build together. Through this perspective and design solution, we look forward to a parenting experience where every parent — with or without a disability — can move more comfortably and bond closely with their child.',
      ],
    },
    brandApplication: {
      heading: ['Brand application'],
      paragraphs: [
        "We also produced a set of brand applications so that OURHOUR's values and brand story are delivered consistently across a range of touchpoints.",
      ],
    },
  },
}

function OurhourCaseStudy() {
  const { language } = useLanguage()
  const t = CONTENT[language]
  const heroBlur = useHeroBlur()
  const [overviewRef, overviewInView] = useReveal()
  const [metaRef, metaInView] = useReveal()
  const langVars =
    language === 'en'
      ? {
          '--detail-lang-font': "'Space Grotesk', sans-serif",
          '--detail-lang-weight': 400,
          '--detail-lang-lh': 1.4,
          '--detail-lang-ls-24': '-0.07em',
          '--detail-lang-ls-16': '-0.06em',
        }
      : {}

  return (
    <div style={langVars}>
      <section className={styles.hero} style={{ filter: `blur(${heroBlur}px)` }}>
        <Media src={heroVideo} className={styles.heroImg} />
      </section>

      <section className={styles.overview}>
        <div
          ref={overviewRef}
          className={`${styles.overviewRow} ${reveal.reveal} ${overviewInView ? reveal.revealIn : ''}`}
        >
          <p className={styles.overviewLabel}>Overview</p>
          <div className={styles.overviewContent}>
            <h1 className={styles.title}>Ourhour</h1>
            <div className={styles.description}>
              <p className={styles.subtitle}>{t.overview.subtitle}</p>
              <div className={styles.paragraphs}>
                {t.overview.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={metaRef} className={styles.metaRow}>
          {META_COLUMNS.map((column, i) => (
            <div
              key={column[0].label}
              className={`${styles.metaColumn} ${reveal.reveal} ${metaInView ? reveal.revealIn : ''}`}
              style={{ transitionDelay: `${120 + i * 150}ms` }}
            >
              {column.map((item) => (
                <div key={item.label} className={styles.metaItem}>
                  <p className={styles.metaLabel}>{item.label}</p>
                  <div className={styles.metaValue}>
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider}>
        <div className={styles.dividerLine} />
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <SectionIntro label="Problem" headingLines={t.problem.heading}>
            {t.problem.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <TripleRow
              aspect="512 / 321"
              items={[
                { src: problem1, caption: t.problem.captions[0] },
                { src: problem2, caption: t.problem.captions[1] },
                { src: problem3, caption: t.problem.captions[2] },
              ]}
            />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Insight" headingLines={t.insight.heading}>
            {t.insight.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={insightGif} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Solution" headingLines={t.solution.heading}>
            {t.solution.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedVideo src={solutionVideo} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Brand Identity" headingLines={t.brandIdentity.heading}>
            {t.brandIdentity.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={brandIdentity1} aspect="1568 / 882" />
            <FullBleedImage src={brandIdentity2} aspect="1568 / 784" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Features" headingLines={t.worryFree.heading}>
            {t.worryFree.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <CaptionedImage caption={t.worryFree.captions[0]} src={worryFree1} aspect="1568 / 637" />
            <CaptionedImage caption={t.worryFree.captions[1]} src={worryFree2} aspect="1568 / 880" />
            <CaptionedImage caption={t.worryFree.captions[2]} src={worryFree3} aspect="1568 / 880" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Features" headingLines={t.bonding.heading}>
            {t.bonding.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <CaptionedImage caption={t.bonding.captions[0]} src={bonding1} aspect="1568 / 880" />
            <CaptionedImage caption={t.bonding.captions[1]} src={bonding2} aspect="1568 / 882" />
            <CaptionedImage caption={t.bonding.captions[2]} src={bonding3} aspect="1568 / 880" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Features" headingLines={t.every.heading}>
            {t.every.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <CaptionedImage caption={t.every.captions[0]} src={every1} aspect="1568 / 1025" />
            <CaptionedImage caption={t.every.captions[1]} src={every2} aspect="1568 / 1025" />
            <CaptionedImage caption={t.every.captions[2]} src={every3} aspect="1568 / 1025" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Vision" headingLines={t.vision.heading}>
            {t.vision.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={visionImg} aspect="1568 / 880" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Brand Application" headingLines={t.brandApplication.heading}>
            {t.brandApplication.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={brandApp1} aspect="1568 / 738" />
            <FullBleedImage src={brandApp2} aspect="1568 / 738" />
            <FullBleedImage src={brandApp3} aspect="1568 / 882" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default OurhourCaseStudy
