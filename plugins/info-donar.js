/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =` 〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕

  *Hola ${name} Deseas Donar :3*
  
*Yape : 976336831*
*Nombre Del Yape : Mary Luz*

*Yape : 926933818*
*Nombre Del Yape : Luis Alberto*

〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕
`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|donar|apoyar$/i;
export default handler;
