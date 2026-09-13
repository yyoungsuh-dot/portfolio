// Every media block is a still/clip from echo_case-study, in page order:
// hero -> Solution (x3 triple + x1 full-bleed) -> Scenario 1: Dispatch (x1)
// -> Scenario 2: Arrival (x2) -> Scenario 3: Transfer (x4) -> Scenario 4:
// Handover (x2).
//
// Reproduced from Figma (file wwLUcp45SyEFKXiEkWeWWE, node 538:49139), with
// section copy pasted in directly by the client rather than pulled via the
// Figma MCP (which hit its call-rate limit partway through this build).
import heroImage from '../../assets/echo_case-study/echo_0.jpg'
import solution1 from '../../assets/echo_case-study/echo_1-1.png'
import solution2 from '../../assets/echo_case-study/echo_1-2.png'
import solution3 from '../../assets/echo_case-study/echo_1-3.png'
import solutionFull from '../../assets/echo_case-study/echo_2.png'
import dispatchVideo from '../../assets/echo_case-study/echo_3.mp4'
import arrival1 from '../../assets/echo_case-study/echo_4.mp4'
import arrival2 from '../../assets/echo_case-study/echo_5.mp4'
import transfer1 from '../../assets/echo_case-study/echo_6.mp4'
import transfer2 from '../../assets/echo_case-study/echo_7.mp4'
import transfer3 from '../../assets/echo_case-study/echo_8.mp4'
import transfer4 from '../../assets/echo_case-study/echo_9.mp4'
import handover1 from '../../assets/echo_case-study/echo_10.mp4'
import handover2 from '../../assets/echo_case-study/echo_11.mp4'
import SectionIntro from './SectionIntro'
import { FullBleedImage, Media, TripleRow } from './MediaBlocks'
import { useLanguage } from '../../context/LanguageContext'
import { useReveal } from '../../hooks/useReveal'
import { useHeroBlur } from '../../hooks/useHeroBlur'
import reveal from '../../styles/reveal.module.css'
import styles from './LayCaseStudy.module.css'

const ZW = '​' // zero-width space — a visual blank line between paragraphs

// Already English in the design, shared across languages — same convention
// as the other case-study pages' META_COLUMNS.
const META_COLUMNS = [
  [
    { label: 'Assignment', lines: ['UX Design Graduation Exhibition Project'] },
    { label: 'Teams', lines: ['1 Industrial Designer', '1 UX Designer'] },
  ],
  [{ label: 'Role', lines: ['UX/UI Design', 'Prototyping', '3D VFX'] }],
  [{ label: 'Result', lines: ['Ewha Womans University', 'Graduation Exhibition'] }],
  [{ label: 'Year', lines: ['2022'] }],
]

const CONTENT = {
  ko: {
    overview: {
      subtitle: '구급 단계에서 골든아워(Golden Hour)\n확보를 위한 AR 고글',
      paragraphs: [
        '데스크 리서치를 통해 구급 단계에 지체되는 시간으로 골든아워(사고나 질병 발생 후 환자의 생사를 결정짓는 시간) 확보에 어려움이 있으며, 많은 사람들이 제대로 된 치료를 받기 전에 사망하고 있다는 것을 발견했습니다.',
        ZW,
        'Echo는 구급대원이 응급 상황에서 지체되는 시간을 약 10분 이상 단축하고, 골든아워를 확보하기 위한 AR 고글 솔루션입니다. 구급 단계를 4단계로 나누고, 단계별로 시간 지연을 발생시키는 문제를 분석했으며, 기술 흐름에 따라 2035년 미래를 가정한 단계별 정보, 처치, 통신 보조 시나리오를 제작했습니다.',
      ],
    },
    solution: {
      heading: ['구급대원의 업무 전 과정을', '보조하는 AR 고글'],
      paragraphs: [
        '안전을 위한 장비였던 고글에 구급대원 업무 전 과정을 보조하는 AR 기능을 탑재하여 구급 단계에 소요되는 시간을 단축하고자 합니다. 응급상황 구급대원에게 최적화된 제품과 PUI를 설계했습니다. 또한 정보의 우선순위와 긴급도를 나열하고, 배열에 따른 주목성을 고려해 UI를 설계했습니다.',
      ],
      captions: ['헤어밴드형 HMD', '후방 대용량 배터리', '아날로그 다이얼'],
    },
    dispatch: {
      heading: ['출동- 한 눈에 보는', '출동 정보 요약'],
      paragraphs: [
        '응급상황이 발생하면 고글을 착용하고, 다이얼을 돌려 출동단계로 전환 후 출동합니다. 간단한 키워드와 함께 종합상황실로부터 전달받은 출동 지령과 환자 정보, 출동 시간을 한눈에 파악할 수 있습니다.',
      ],
    },
    arrival: {
      heading: ['현장-정확한 위치 안내와', '처치 보조'],
      paragraphs: [
        'GPS를 기반으로 현장까지의 정확한 길을 안내합니다. 처치 보조 모드를 통해 올바른 처치를 돕고, 실시간 활력 징후를 보여 줍니다.',
      ],
    },
    transfer: {
      heading: ['이송-실시간 정보에 대한', '즉각적인 인지'],
      paragraphs: [
        '환자의 증상, 도착 예상 시간, 교통 정보를 보여 주어 처치 시 급정거 등으로부터의 위험을 방지합니다. AR 고글에 달린 카메라로 상황을 공유하며 지도받습니다. 실시간으로 상황 요원의 의료지도 내용이 자막으로 나오고, 키워드가 표시되어 놓치지 않을 수 있습니다.',
        ZW,
        '이송 시에는 운전 구급대원과 보호자도 골든아워 확보에 중요한 역할을 함에 따라, 구급차 내비게이션과 보호자용 대시보드를 추가로 제안했습니다.',
        '구급차 내비게이션에서는 병원의 실시간 상황과 출발 위치를 기반으로 병원과 경로를 추천하고, 자율주행 상황에서 도로 상황을 직접 제어할 수 있도록 했습니다.',
        '구급차 보호자 좌석 앞에 놓인 대시보드에서는 스크린에 버추얼 상담가가 환자 상태와 처치 중인 구급 과정에 대해 설명해 환자와 보호자가 이해하고 안정할 수 있도록 돕습니다.',
      ],
    },
    handover: {
      heading: ['인계- 자동으로 기록되는', '구급 일지'],
      paragraphs: [
        '진행한 구급 활동들이 구급 일지 양식에 맞춰 자동으로 입력되며, 구급대원의 확인 절차 이후 응급실 의료진에게 전달됩니다. 골든아워 내에 도착하여 환자를 살린 구급대원에게 heart saver가 부여됩니다.',
      ],
    },
  },
  en: {
    overview: {
      subtitle: 'An AR goggle for securing the\nGolden Hour during emergency response',
      paragraphs: [
        'Desk research revealed that time lost during emergency response stages makes it hard to secure the Golden Hour — the window that decides whether a patient lives or dies after an accident or medical event — and that many people die before they receive proper treatment.',
        ZW,
        "Echo is an AR goggle solution that cuts around 10 minutes or more of lost time for paramedics in emergency situations, helping secure the Golden Hour. We broke emergency response down into four stages, analyzed what causes delays at each one, and — assuming a 2035 near-future built on where the technology is heading — designed information, treatment-assist, and communication-assist scenarios for each stage.",
      ],
    },
    solution: {
      heading: ["An AR goggle that supports a", "paramedic's entire workflow"],
      paragraphs: [
        "We equipped goggles — once just safety gear — with AR features that support a paramedic's entire workflow, to shorten the time each stage of emergency response takes, designing a product and PUI optimized for paramedics in emergency situations. We also designed the UI around the priority and urgency of information and how its arrangement affects visibility.",
      ],
      captions: ['Headband-type HMD', 'Rear high-capacity battery', 'Analog dial'],
    },
    dispatch: {
      heading: ['Dispatch — dispatch info,', 'summarized at a glance'],
      paragraphs: [
        'When an emergency occurs, the paramedic puts on the goggles, turns the dial to switch into dispatch mode, and heads out. Simple keywords let them grasp the dispatch order, patient information, and dispatch time relayed from the situation room at a glance.',
      ],
    },
    arrival: {
      heading: ['Arrival — precise wayfinding and', 'treatment assistance'],
      paragraphs: [
        'GPS-based guidance gives an exact route to the scene. A treatment-assist mode helps ensure the right care is given, while showing real-time vital signs.',
      ],
    },
    transfer: {
      heading: ['Transfer — instant awareness of', 'real-time information'],
      paragraphs: [
        "Showing the patient's symptoms, estimated arrival time, and traffic information helps prevent risks such as sudden braking during treatment. A camera on the AR goggles shares the scene for remote medical guidance. Captions relay the on-call physician's guidance in real time, with keywords highlighted so nothing gets missed.",
        ZW,
        'Since the driving paramedic and the guardian also play an important role in securing the golden hour during transfer, we additionally proposed an ambulance navigation system and a guardian-facing dashboard.',
        "The ambulance navigation recommends a hospital and route based on hospitals' real-time status and the starting location, and lets the driver directly control road conditions in autonomous-driving situations.",
        "On the dashboard in front of the guardian's seat in the ambulance, a virtual counselor on screen explains the patient's condition and the ongoing emergency care, helping the patient and guardian understand and stay calm.",
      ],
    },
    handover: {
      heading: ['Handover — an emergency log,', 'recorded automatically'],
      paragraphs: [
        "The emergency care that was carried out is automatically entered into the emergency log format, and after the paramedic reviews it, it's handed off to the ER medical staff. A paramedic who saves a patient by arriving within the golden hour is awarded “Heart Saver.”",
      ],
    },
  },
}

function EchoCaseStudy() {
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
        <Media src={heroImage} className={styles.heroImg} />
      </section>

      <section className={styles.overview}>
        <div
          ref={overviewRef}
          className={`${styles.overviewRow} ${reveal.reveal} ${overviewInView ? reveal.revealIn : ''}`}
        >
          <p className={styles.overviewLabel}>Overview</p>
          <div className={styles.overviewContent}>
            <h1 className={styles.title}>Echo</h1>
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
          <SectionIntro label="Solution" headingLines={t.solution.heading}>
            {t.solution.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <TripleRow
              aspect="512 / 321"
              items={[
                { src: solution1, caption: t.solution.captions[0] },
                { src: solution2, caption: t.solution.captions[1] },
                { src: solution3, caption: t.solution.captions[2] },
              ]}
            />
            <FullBleedImage src={solutionFull} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro
            label={
              <>
                Scenario
                <br />
                -1. Dispatch
              </>
            }
            headingLines={t.dispatch.heading}
          >
            {t.dispatch.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={dispatchVideo} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro
            label={
              <>
                Scenario
                <br />
                -2. Arrival
              </>
            }
            headingLines={t.arrival.heading}
          >
            {t.arrival.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={arrival1} aspect="1568 / 882" />
            <FullBleedImage src={arrival2} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro
            label={
              <>
                Scenario
                <br />
                -3. Transfer
              </>
            }
            headingLines={t.transfer.heading}
          >
            {t.transfer.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={transfer1} aspect="1568 / 882" />
            <FullBleedImage src={transfer2} aspect="1568 / 882" />
            <FullBleedImage src={transfer3} aspect="1568 / 882" />
            <FullBleedImage src={transfer4} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro
            label={
              <>
                Scenario
                <br />
                -4. Handover
              </>
            }
            headingLines={t.handover.heading}
          >
            {t.handover.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={handover1} aspect="1568 / 882" />
            <FullBleedImage src={handover2} aspect="1568 / 882" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default EchoCaseStudy
