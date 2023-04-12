let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
PRUEBA TEXTO 
`.trim()   
let buttonMessage= {
'document': { url: `https://api.whatsapp.com/send?phone=+59822276320` },
'mimetype': `application/${document}`,
'fileName': `PRUEBA 1`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://api.whatsapp.com/send?phone=+59822276320',
'mediaType': 2,
'previewType': 'pdf',
'title': 'PRUEBA 2',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://api.whatsapp.com/send?phone=+59822276320' }},
'caption': text,
'footer': wm,
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler