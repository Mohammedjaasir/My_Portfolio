export function scrollTo(id) {
    const element = global.document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Element with id "${id}" not found.`);
    }
}

export function openLink(link, target = "_blank") {
    window.open(link, target);
}
