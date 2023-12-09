import { reactive } from 'vue'

const decodeHtmlEntities = (input: string) => input.replace(/&[a-z]+;|&#[0-9]+;/g, (match) => ({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" }[match] || match));

export function parseXml(xmlString: string) {

    const items = xmlString.match(/<entry>([\s\S]*?)<\/entry>/g)
    return items?.map(item => {
        const title = decodeHtmlEntities(item.match(/<title>([\s\S]*?)<\/title>/)?.[1] as string)
        const link = item.match(/<link>([\s\S]*?)<\/link>/)?.[1]
        const description = decodeHtmlEntities(item.match(/<description>([\s\S]*?)<\/description>/)?.[1] as string)
        const image = item.match(/<image>([\s\S]*?)<\/image>/)?.[1] as string
        const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]
        return { title, link, pubDate: new Date(pubDate as string), description, image }
    }).sort((a, b) => Number(b.pubDate) - Number(a.pubDate)).slice(0, 6)
}

export const useMenu = reactive({
    isOpenMenu: false,
    toggle() {
        this.isOpenMenu = !this.isOpenMenu
    }
})

export const useDarkMode = reactive({
    isDark: false,
    toggle() {
        this.isDark = !this.isDark
        localStorage.setItem("theme", this.isDark ? "dark" : "light")
    },
    loadUserTheme() {
        this.isDark = localStorage.getItem("theme") == "dark"
        console.log(this.isDark)
    }

})

