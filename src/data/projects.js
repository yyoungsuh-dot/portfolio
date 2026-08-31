import projectTaskflow from '../assets/project-taskflow.png'
import projectDesk from '../assets/project-desk.png'
import projectLay from '../assets/project-lay.png'
import projectPhone from '../assets/project-phone.png'

// Only "lay" has real copy sourced from Figma (node 368:44235). The other three
// are placeholder titles/descriptions — replace with real project content.
export const PROJECTS = [
  {
    id: 'pitch',
    slug: 'pitch',
    img: projectDesk,
    title: 'pitch',
    desc: ['AI-powered OS interaction', 'for data productivity via side panel'],
  },
  {
    id: 'one-ui-new-spectrum',
    slug: 'one-ui-new-spectrum',
    img: projectTaskflow,
    title: 'One UI New Spectrum',
    desc: ['Next-generation premium visual interaction for home appliances,', 'visualizing natural physical properties'],
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
    img: projectPhone,
    title: 'React',
    desc: ['From a viewing experience to an engaging experience,', 'the interactive comments and viewing UX of video content platforms.'],
  },
]
