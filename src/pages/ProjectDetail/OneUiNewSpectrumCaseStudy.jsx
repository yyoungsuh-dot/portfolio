// Every media block is a clip/still from oneuinewspectrum-case-study, in page
// order: hero -> UI Direction (x3 triple + 1 single) -> Color System (x2
// single) -> Interaction Concept (x3 triple) -> Oven (x2) -> Washer (x1) ->
// Cooktop (x1) -> A/C (x1) -> Fridge (x1).
//
// Reproduced from Figma (file eUMOIh7EEfuXSRrfI1R9Lt, node 2001:3617, via the
// token-based Figma MCP) through Overview, UI Direction, Color System,
// Interaction Concept, and all five per-appliance sections.
import heroVideo from '../../assets/oneuinewspectrum-case-study/oneui_0.mp4'
import heroPoster from '../../assets/thumbnails/one-ui-new-spectrum.jpg'
import prioritizeCoreTaskImg from '../../assets/oneuinewspectrum-case-study/oneui_1-1.png'
import minimizeActionsImg from '../../assets/oneuinewspectrum-case-study/oneui_1-2.png'
import ensureInstantVisibilityImg from '../../assets/oneuinewspectrum-case-study/oneui_1-3.png'
import seamlessTransitionImg from '../../assets/oneuinewspectrum-case-study/oneui_2.png'
import colorSystemVideo from '../../assets/oneuinewspectrum-case-study/oneui_3.mp4'
import media4 from '../../assets/oneuinewspectrum-case-study/oneui_4.png'
import media5a from '../../assets/oneuinewspectrum-case-study/oneui_5-1.mp4'
import media5b from '../../assets/oneuinewspectrum-case-study/oneui_5-2.mp4'
import media5c from '../../assets/oneuinewspectrum-case-study/oneui_5-3.mp4'
import ovenVideo1 from '../../assets/oneuinewspectrum-case-study/oneui_6.mp4'
import ovenVideo2 from '../../assets/oneuinewspectrum-case-study/oneui_7.mp4'
import washerVideo from '../../assets/oneuinewspectrum-case-study/oneui_8.mp4'
import cooktopVideo from '../../assets/oneuinewspectrum-case-study/oneui_9.mp4'
import acVideo from '../../assets/oneuinewspectrum-case-study/oneui_10.mp4'
import fridgeVideo from '../../assets/oneuinewspectrum-case-study/oneui_11.mp4'
import SectionIntro from './SectionIntro'
import { FullBleedImage, Media, TripleRow } from './MediaBlocks'
import { useLanguage } from '../../context/LanguageContext'
import { useReveal } from '../../hooks/useReveal'
import { useHeroBlur } from '../../hooks/useHeroBlur'
import reveal from '../../styles/reveal.module.css'
import styles from './LayCaseStudy.module.css'

// metaColumns are already English in the design, so they're shared across
// languages — everything else is translated per language below.
const META_COLUMNS = [
  [
    { label: 'Assignment', lines: ['Newtype Imageworks hands-on project', '(Client: Samsung Electronics)'] },
    { label: 'Teams', lines: ['UX Team', 'MX Team', 'BX Team'] },
  ],
  [{ label: 'Role', lines: ['UX/UI Design', 'Interaction Design', 'Prototyping'] }],
  [{ label: 'Result', lines: ['Samsung Electronics', 'CDO reported'] }],
  [{ label: 'Year', lines: ['2026'] }],
]

const CONTENT = {
  ko: {
    overview: {
      subtitle: '자연적 물성을 시각화한\nCE 제품군 차세대 프리미엄 비주얼 인터랙션',
      paragraphs: [
        '삼성전자 디자인경영센터와 함께 One UI의 스펙트럼 다각화를 목표로, CE 제품군(오븐, 세탁기, 쿡탑, 에어컨, 냉장고)의 차세대 프리미엄 비주얼 인터랙션을 제안하는 프로젝트에 참여했습니다. UX 분석과 경쟁사 프리미엄 라인업 벤치마킹을 바탕으로 기존의 복잡했던 UI 구조를 필수 정보 위주로 재설계했습니다.',
        '​',
        '또한 직관적인 사용성과 함께 가전제품 고유의 특수성을 사용자가 자연스럽게 인지할 수 있도록 물, 불, 바람 등의 자연적 물성을 비주얼 메타포로 활용한 인터랙션 콘셉트를 발굴했습니다. 특히 프로토타이핑과 생성형 영상 AI를 적극 도입해 뎁스 구분 없는 심리스한 인터랙션과 다양한 자연적 움직임을 실험하며, 모션 인터랙션 구현 과정에 기여했습니다.',
      ],
    },
    uiDirection: {
      heading: ['가전에 최적화된', 'UI 재설계'],
      paragraphs: [
        '기존 삼성 CE 제품군의 UX를 분석한 결과, 효율성을 위해 모바일 구조와 컴포넌트를 그대로 가져오면서 각 제품의 핵심 기능은 안으로 숨겨졌으며, 제품별 사용 환경과 맥락에 최적화된 인터랙션을 구현하는 데 한계가 있었습니다.',
        '​',
        '타사 프리미엄 제품군 중심의 리서치를 진행하여, 공간에 녹아드는 미니멀한 설계와 핵심정보 위주의 시인성을 기준으로 UI 디렉션을 정의했습니다. 이에 따라 복잡한 메뉴 구조를 간소화했고, 상위 메뉴는 가로 캐러셀로, 세부 제어는 캐러셀 메뉴에서 바로 세로 Wheel Picker로 조작할 수 있도록 UI를 설계함으로써 뎁스를 낮췄습니다. 와이어프레임 기반 다수의 프로토타입 테스트를 통해 전환 시에 공통 요소를 유지하고, 크기, 위치 변화 등의 자연스러운 트랜지션을 통해 화면간의 뎁스 구분이 느껴지지 않는 심리스한 인터랙션을 구현했습니다.',
      ],
      captions: ['Prioritize Core Task', 'Minimize Actions', 'Ensure Instant Visibility'],
    },
    colorSystem: {
      heading: ['가전과 가까운 자연에서', '모티프를 얻은 컬러 시스템'],
      paragraph:
        '단순한 기능 구분을 넘어, 제품의 상태와 에너지감을 직관적으로 전달하고자 했습니다. 물, 불, 바람을 활용하는 가전의 특수성에 따라, 자연에서 모티프를 얻은 시각 언어를 적용했습니다. 이를 바탕으로 제품별 역할과 사용 맥락을 명확히 반영한 컬러 스펙트럼을 구축했습니다.',
    },
    interactionConcept: {
      heading: ['자연의 물성을', '시각화한 인터랙션'],
      paragraph:
        '자연의 물성과 물리적 움직임의 모티프를 모션 인터랙션에 적용하여, 사용자의 손 끝에서 컬러가 퍼져나가고, 변화하는 감각적인 조작감과 기기가 아닌 물, 불, 바람을 직접 조작하는듯한 직관적인 통제감을 제공하고자 했습니다. 생성형 영상 AI로 다양한 자연적 움직임을 테스트해본 후, 조작 단계별로 일관된 인터랙션 규칙을 적용했고, 모션팀과 함께 구현하였습니다.',
    },
    oven: {
      heading: ['열의 불규칙한 움직임을', '시각화한 오븐'],
      paragraph:
        '열감의 컬러 스펙트럼과 불규칙한 움직임을 시각화하여 기기의 에너지감을 전달하고, 기기의 진행 상태와 더불어 높은 온도에 대한 경고를 직관적으로 파악할 수 있도록 했습니다. 화면을 가득 채우는 컬러 스펙트럼과 마이크로 인터랙션을 통한 명확한 물리적 조작감, 확대된 정보를 통해 작은 글자나 숫자를 해독해야 하는 번거로움을 없애고, 감각으로서의 정보를 제공하고자 했습니다. 온도와 시간을 한 화면에서 캐러셀로 조작할 수 있도록 했고, 홈-조작-진행까지 뎁스 구분 없이 매끄럽게 이어지는 심리스한 인터랙션을 적용했습니다.',
    },
    washer: {
      heading: ['물의 유동적인 움직임을', '시각화한 세탁기'],
      paragraph:
        '물의 컬러 스펙트럼과 유동적인 움직임을 시각화하여 기기의 활력감을 전달하고자 했습니다. 온도, 린스, 스핀을 한 화면에서 Wheel Picker로 조작하는 카드형 UI를 통해 최대한 뎁스를 간소화했습니다. 카드는 명확한 형태의 모바일형 컴포넌트가 아닌 부드러운 경계의 컨테이너 안에서 확장되는 컬러 스펙트럼의 움직임으로 구분하였습니다.',
    },
    cooktop: {
      heading: ['불의 발광을', '시각화한 쿡탑'],
      paragraph:
        '실제 온도에 따른 불꽃의 컬러 스펙트럼을 시각화하여 화구와의 일체감을 주고, 가열되고 있는 위치 안내 및 높은 온도에 대한 경고를 직관적으로 파악할 수 있도록 했습니다. 기존의 Stepper에서 Wheel Picker로 조작 UI를 변경해 다른 기기와의 인터랙션 통일감을 주었고, 직접 화구 옆에서 손가락을 올리고 내리며 온도를 제어하는 직관적인 조작감을 제공하고자 했습니다.',
    },
    ac: {
      heading: ['바람의 속도감을', '시각화한 에어컨'],
      paragraph:
        '바람의 밀도에 따른 컬러 스펙트럼과 바람결을 시각화하여 온도, 속도 등의 증감을 직관적으로 보여주고자 했습니다. 단계별 조작이 아닌, 슬라이더를 통한 섬세한 조작이 가능하도록 설계하여, 조작의 손맛과 통제감을 강화하고자 했습니다.',
    },
    fridge: {
      heading: ['제품의 공간감과 얼음의 냉기를', '시각화한 냉장고'],
      paragraph:
        '얼음의 컬러 스펙트럼과 서리와 같은 텍스처 표현, 온도가 낮아짐에 따라 가장자리부터 얼어붙는 움직임을 시각화하여 기기의 에너지감과 신선함을 직관적으로 전달하고자 했습니다. 실제 냉장고를 2D 디지털 트윈 그래픽으로 표현하고, 각 칸을 직접 터치하면 확대되어 온도를 조절할 수 있는 심리스한 인터랙션을 적용했습니다.',
    },
  },
  en: {
    overview: {
      subtitle: 'A next-generation premium visual interaction for CE products,\nvisualizing natural physical properties',
      paragraphs: [
        "I took part in a project with Samsung Electronics' Design Management Center to diversify the One UI spectrum, proposing a next-generation premium visual interaction for the CE product lineup (oven, washer, cooktop, air conditioner, refrigerator). Based on UX analysis and benchmarking of competitors' premium lineups, we redesigned the previously complex UI structure around essential information.",
        '​',
        "We also uncovered an interaction concept that uses natural physical properties — water, fire, wind — as visual metaphors, so users can naturally sense each appliance's own characteristics alongside intuitive usability. In particular, I actively introduced prototyping and generative video AI to experiment with seamless, depth-free interactions and a range of natural motion, contributing to the motion-interaction implementation process.",
      ],
    },
    uiDirection: {
      heading: ['UI redesigned', 'for appliances'],
      paragraphs: [
        "Analyzing the UX of Samsung's existing CE lineup, we found that mobile structures and components had been carried over as-is for efficiency, which buried each product's core functions and limited how well the interaction could be optimized to each product's usage environment and context.",
        '​',
        "We researched competitors' premium lineups and defined a UI direction around a minimal design that blends into the space and visibility centered on essential information. We simplified the complex menu structure and redesigned essential information into a more spacious layout, so users could recognize information at a glance from a distance and operate the device comfortably without any separate learning process. We also lowered the depth of the UI by designing top-level menus as a horizontal carousel, with detailed controls operable directly from the carousel menu via a vertical Wheel Picker. Through numerous wireframe-based prototype tests, we kept common elements consistent across transitions and, through natural transitions in size and position, achieved a seamless interaction where the depth between screens is never felt.",
      ],
      captions: ['Prioritize Core Task', 'Minimize Actions', 'Ensure Instant Visibility'],
    },
    colorSystem: {
      heading: ['A color system inspired', 'by nature, close to appliances'],
      paragraph:
        'Beyond simple functional distinction, we wanted to intuitively convey each product\'s state and sense of energy. Given the special nature of appliances that use water, fire, and wind, we applied a visual language drawn from nature. Building on this, we constructed a color spectrum that clearly reflects each product\'s role and context of use.',
    },
    interactionConcept: {
      heading: ['An interaction that', 'visualizes natural properties'],
      paragraph:
        "We applied motifs from nature's physical properties and physical motion to the motion interaction, aiming to give a sense of color spreading and changing from the user's fingertips, and an intuitive sense of control as if directly manipulating water, fire, or wind rather than a device. After testing a range of natural motion with generative video AI, we applied consistent interaction rules across each step of operation and implemented it together with the motion team.",
    },
    oven: {
      heading: ['Oven, visualizing', "heat's irregular motion"],
      paragraph:
        "We visualized heat's color spectrum and irregular motion to convey the device's sense of energy, letting users intuitively grasp its progress along with any high-temperature warnings. By filling the screen with a color spectrum, giving clear physical feedback through micro-interactions, and enlarging information, we removed the hassle of deciphering small text or numbers and aimed to deliver information as a sensation. Temperature and time can be controlled on one screen via a carousel, and we applied a seamless interaction that flows smoothly from home to control to progress with no sense of depth.",
    },
    washer: {
      heading: ['Washer, visualizing', "water's fluid motion"],
      paragraph:
        "We visualized water's color spectrum and fluid motion to convey the device's sense of vitality. A card-style UI lets you control temperature, rinse, and spin on one screen via a Wheel Picker, minimizing depth as much as possible. Rather than a clearly bounded mobile-style component, each card is distinguished by the motion of an expanding color spectrum within a softly bordered container.",
    },
    cooktop: {
      heading: ['Cooktop, visualizing', "fire's glow"],
      paragraph:
        "We visualized the flame's color spectrum based on actual temperature to create a sense of unity with the burner, letting users intuitively grasp which area is heating and any high-temperature warnings. We changed the control UI from a Stepper to a Wheel Picker for consistency with the other appliances, and aimed to provide an intuitive sense of control — as if raising and lowering a finger right beside the burner to adjust the heat.",
    },
    ac: {
      heading: ['A/C, visualizing', "wind's sense of speed"],
      paragraph:
        "We visualized a color spectrum based on wind density and the motion of the airflow to intuitively show increases and decreases in temperature and speed. Rather than step-based control, we designed for fine-grained control via a slider, to strengthen the tactile feel and sense of control.",
    },
    fridge: {
      heading: ["Fridge, visualizing", "the product's space and ice's chill"],
      paragraph:
        "We visualized ice's color spectrum, a frost-like texture, and a freezing motion that spreads from the edges as the temperature drops, to intuitively convey the device's sense of energy and freshness. We rendered the actual refrigerator as a 2D digital-twin graphic, applying a seamless interaction where touching a compartment enlarges it so its temperature can be adjusted directly.",
    },
  },
}

function OneUiNewSpectrumCaseStudy() {
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
        <Media src={heroVideo} className={styles.heroImg} eager poster={heroPoster} />
      </section>

      <section className={styles.overview}>
        <div
          ref={overviewRef}
          className={`${styles.overviewRow} ${reveal.reveal} ${overviewInView ? reveal.revealIn : ''}`}
        >
          <p className={styles.overviewLabel}>Overview</p>
          <div className={styles.overviewContent}>
            <h1 className={styles.title} style={{ lineHeight: 1 }}>
              One UI
              <br />
              New
              <br />
              Spectrum
            </h1>
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
          <SectionIntro label="UI Direction" headingLines={t.uiDirection.heading}>
            {t.uiDirection.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <TripleRow
              aspect="1024 / 970"
              items={[
                { src: prioritizeCoreTaskImg, caption: t.uiDirection.captions[0] },
                { src: minimizeActionsImg, caption: t.uiDirection.captions[1] },
                { src: ensureInstantVisibilityImg, caption: t.uiDirection.captions[2] },
              ]}
            />
            <FullBleedImage src={seamlessTransitionImg} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label="Color System" headingLines={t.colorSystem.heading}>
            <p>{t.colorSystem.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={colorSystemVideo} aspect="1568 / 588" />
            <FullBleedImage src={media4} aspect="1568 / 706" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label={<>Interaction<br />Concept</>} headingLines={t.interactionConcept.heading}>
            <p>{t.interactionConcept.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <TripleRow
              aspect="1024 / 600"
              items={[
                { src: media5a, caption: 'Control - Spreading' },
                { src: media5b, caption: 'Progress - Flowing' },
                { src: media5c, caption: 'Complete - Diffusing' },
              ]}
            />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label={<>Interaction<br />- Oven</>} headingLines={t.oven.heading}>
            <p>{t.oven.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={ovenVideo1} aspect="1568 / 882" />
            <FullBleedImage src={ovenVideo2} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label={<>Interaction<br />- Washer</>} headingLines={t.washer.heading}>
            <p>{t.washer.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={washerVideo} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label={<>Interaction<br />- Cooktop</>} headingLines={t.cooktop.heading}>
            <p>{t.cooktop.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={cooktopVideo} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label={<>Interaction<br />- A/C</>} headingLines={t.ac.heading}>
            <p>{t.ac.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={acVideo} aspect="1568 / 882" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionIntro label={<>Interaction<br />- Fridge</>} headingLines={t.fridge.heading}>
            <p>{t.fridge.paragraph}</p>
          </SectionIntro>

          <div className={styles.sectionMedia}>
            <FullBleedImage src={fridgeVideo} aspect="1568 / 882" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default OneUiNewSpectrumCaseStudy
