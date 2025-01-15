import { openLink } from "./methods";

const contact = {
    label: `Get in touch`,
    heading: `Let’s Work Together`,
    description: `I’m open for new opportunities – especially ambitious or large projects. However, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!.`,
    buttons: [
        {
            label: 'Say Hello',
            onClick: () => openLink('mailto:jaasirjaasir76@gmail.com?subject=Hello')
        },
        {
            label: 'Follow on GitHub',
            onClick: () => openLink('https://github.com/Mohammedjaasir')
        }
    ],
    designAndBuiltBy: 'Designed & Built By Mohammed Jaasir',
    handleBuiltByClick: () => openLink('https://github.com/Mohammedjaasir')
};

export default contact;
