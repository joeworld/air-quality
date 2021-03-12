import englishJson from './english.json'
import hindiJson from './hindi.json'

const getJsonData = (lang) => {
    if(lang === 'hindi') return hindiJson
    if(lang === 'english') return englishJson
}
export default getJsonData;