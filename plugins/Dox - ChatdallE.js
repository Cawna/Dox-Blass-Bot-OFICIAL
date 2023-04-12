let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Ingresa lo que quieres que dibuje.`
try {
m.reply('Espere en lo que terminó su dibujo.')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `Error.`
}}
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'doxdibujar']
export default handler
