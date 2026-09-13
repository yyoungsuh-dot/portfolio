import projectPitch from '../assets/thumbnails/pitch.jpg'
import projectOneUi from '../assets/thumbnails/one-ui-new-spectrum.jpg'
import projectLay from '../assets/thumbnails/lay.jpg'
import projectReact from '../assets/thumbnails/react.jpg'
import projectOurhour from '../assets/thumbnails/ourhour.jpg'
import projectEcho from '../assets/thumbnails/echo.jpg'

// Only "lay" has real copy sourced from Figma (node 368:44235). The other three
// are placeholder titles/descriptions — replace with real project content.
// Each thumbnail is the first frame of that project's case-study hero video
// (extracted via ffmpeg), so the carousel circle matches what plays at the
// top of the detail page it leads into.
export const PROJECTS = [
  {
    id: 'one-ui-new-spectrum',
    slug: 'one-ui-new-spectrum',
    img: projectOneUi,
    title: 'One UI New Spectrum',
    desc: ['Next-generation premium visual interaction for home appliances,', 'visualizing natural physical properties'],
  },
  {
    id: 'pitch',
    slug: 'pitch',
    img: projectPitch,
    title: 'pitch',
    desc: ['AI-powered OS interaction', 'for data productivity via side panel'],
  },
  {
    id: 'lay',
    slug: 'lay',
    img: projectLay,
    title: 'Lay',
    desc: ['AI-powered beam projector UX', 'connecting physical environments and digital layers'],
  },
  {
    id: 'react',
    slug: 'react',
    img: projectReact,
    title: 'React',
    desc: ['From a viewing experience to an engaging experience,', 'the interactive comments and viewing UX of video content platforms.'],
  },
  {
    id: 'ourhour',
    slug: 'ourhour',
    img: projectOurhour,
    title: 'Ourhour',
    desc: ['Wheelchair that combines baby seat modules', 'for parents with physical disabilities'],
  },
  {
    id: 'echo',
    slug: 'echo',
    img: projectEcho,
    title: 'Echo',
    desc: ['Future AR goggle scenario for securing', 'the golden hour in emergency'],
  },
]
