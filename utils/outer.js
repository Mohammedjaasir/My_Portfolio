import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Mohammed Jaasir,',
    decrypTexts: [
        'A Software Developer',
        'AI Engineer',
        'I love to build the projects',
        'A Problem Solver',
        'A Python Expertise',
    ],
    desciption: `Trailblazing AI Engineer transforming possibilities into reality with expertise in deep learning, computer vision, and NLP. Crafting intelligent solutions for autonomous systems and smart cities, redefining the future one innovation at a time.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:jaasirjaasir76@gmail.com?subject=Hello')
    }
}

export default outer
