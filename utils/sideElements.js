import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/Mohammedjaasir',
        'instagram': 'https://www.instagram.com/jaax_19_/?hl=en',
        'twitter': 'https://x.com/Jaax_19',
        'linkedin': 'https://www.linkedin.com/in/jaax/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'jaasirjaasir76@gmail.com',
        onClick: () => openLink('mailto:jaasirjaasir76@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements