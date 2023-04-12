import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `Recuerda responder un sticker.`
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw `Responde a un sticker.`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')
}
await conn.sendFile(m.chat, out, 'error.mp4', '© 𝗗𝝮̶𝗫 𝗕𝗟𝗔𝗦𝗦 𝗕𝝮̶𝗧', m, 0, { thumbnail: out })
}
handler.help = ['doxvideo']
handler.tags = ['sticker']
handler.command = ['povideo', 'tomp4', 'doxvideo', 'togif']
export default handler
