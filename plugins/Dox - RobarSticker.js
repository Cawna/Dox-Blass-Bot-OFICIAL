import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw 'Responda a un sticker que quieras ponerle un nombre de paquete y autor.\n\n Ejemplo: .robar Tiago|Cawna'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Responda a un sticker que quieras ponerle un nombre de paquete y autor.\n\n Ejemplo: .robar Tiago|Cawna'
let img = await m.quoted.download()
if (!img) throw 'Responda a un sticker que quieras ponerle un nombre de paquete y autor.\n\n Ejemplo: .robar Tiago|Cawna'
stiker = await addExif(img, packname || global.packname, author || global.author)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw 'Ocurrio un error.'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^take|robar|wm$/i
export default handler
