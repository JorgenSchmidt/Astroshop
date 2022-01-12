export default class OutsideLink {
    content: string;
    hrefto:  string;

    constructor(content: string, hrefto: string) {
        this.content = content
        this.hrefto  = hrefto
    }
}

export const OutsideLinksInfo = [
    new OutsideLink("GitHub",       "https://github.com/JorgenSchmidt"),
    new OutsideLink("YouTube",      "https://youtube.com"),
    new OutsideLink("VK",           "https://vk.com"),
    new OutsideLink("Twitter",      "https://twitter.com"),
    new OutsideLink("Facebook",     "https://facebook.com"),
    new OutsideLink("Instagram",    "https://instagram.com")
]