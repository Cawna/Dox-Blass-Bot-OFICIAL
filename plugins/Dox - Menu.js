import fs from 'fs'    
    let handler = async (m, { conn, usedPrefix }) => {    
    let pp = './src/Menu2.jpg'    
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]    
    let menu = ` 
 © 𝗗𝝮̶𝗫 𝗕𝗟𝗔𝗦𝗦 𝗕𝝮̶𝗧
 
 𝐋𝐈𝐃𝚵𝐑 ː  Cawna (Tiago)
   • ${taguser}  Acá la lista de todos los comandos.
 
 𠔉⃝ COMANDOS DE GRUPOS (💡) 
 ₊❏ ${usedPrefix}tagall
 
 𠔉⃝ COMANDOS DE DESCARGAS(🤖) 
 ₊❏ ${usedPrefix}play.mp3
 ₊❏ ${usedPrefix}play.mp4
 ₊❏ ${usedPrefix}pinterest 
 ₊❏ ${usedPrefix}instagram  
 
 𠔉⃝ COMANDOS DE CHATGPT(🤖) 
 ₊❏ ${usedPrefix}cawna
 ₊❏ ${usedPrefix}tiago
 ₊❏ ${usedPrefix}doxdibujar
 ₊❏ ${usedPrefix}delchatgpt
 
 𠔉⃝ COMANDO DE STICKERS(💰) 
 ₊❏ ${usedPrefix}Sticker
 ₊❏ ${usedPrefix}Sticker2

 𠔉⃝ COMANDOS DE CONVERTIDORES(💾) 
 ₊❏ ${usedPrefix}doxvideo
 ₊❏ ${usedPrefix}doximagen
 
    `.trim()    
    let buttons = [    
    { buttonId: '#creador', buttonText: { displayText: '© 𝗗𝝮̶𝗫 𝗕𝗟𝗔𝗦𝗦' }, type: 1 }]    
    let buttonMessage = {    
    image: fs.readFileSync('./src/admins.jpg'),    
    caption: menu.trim(),    
    mentions: [m.sender],    
    footer: `AVISO: El bot se encuentra en desarrollo, actualmente contamos con los comandos básicos.\n\n© CREADO POR TIAGO (CAWNA)`,    
    buttons: buttons,    
    headerType: 4,    
    contextInfo: {    
    mentionedJid: [m.sender],    
    externalAdReply: {    
    showAdAttribution: true,    
    mediaType: 'VIDEO',    
    mediaUrl: null,    
    title: '© 𝗗𝝮̶𝗫 𝗕𝗟𝗔𝗦𝗦 𝗕𝝮̶𝗧',    
    body: null,    
    thumbnail: fs.readFileSync('./src/Menu.jpg'),    
    sourceUrl: `https://api.whatsapp.com/send?phone=+51946352266`    
    }}}    
    conn.sendMessage(m.chat, buttonMessage, { quoted: m })    
    }    
    handler.command = /^(menu|comandos)$/i    
    handler.admin = false    
    handler.fail = null    
    export default handler