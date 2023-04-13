let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `¿A quien deseas quitarle los permisos para que no pueda usarme?`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('Ohhhhh, el usuario ya no podra usarme, fue baneado exitosamente.')    }
handler.command = /^banuser$/i
handler.rowner = true
export default handler
