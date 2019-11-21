import en from './lang/en/words.json'
import zh_CN from './lang/zh_CN/words.json'
const config = {
  langList: ['en', 'zh_CN'],
  words: { en, zh_CN },
  font: {
    textArea: '16px',
    mdBody: '16px'
  },
  toolbars: {
    undo:false,
    redo:false,
    bold: true,
    del: true,
    underline: true,
    italic: true,
    quote: true,
    bookmark: true,
    superscript: true,
    subscript: true,
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    h5: true,
    h6: true,
    alignLeft: true,
    alignCenter: true,
    alignRight: true,
    ol: true,
    ul: true,
    hr: true,
    link: true,
    inlineCode: true,
    code: true,
    image:true,
    table:true,
    time:false,
    clear:false,
    fullscreen: true,
    preview: true
  }
}
export default config
