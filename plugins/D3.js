const handler = async (m, {conn}) => {
  m.reply(global.Drive3);
};
handler.command = /^(Drive3|drive3)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Drive3 = `
〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕

*LINK* https://drive.google.com/drive/mobile/folders/15hjIAocSCZdK4v-nSgRb2Pp78rCMBMXY/1-PPXNyh0M51SusMSVPNF1d-Q7EkZUQDW/11ri1_tdrZP86PH8dWZZI2yFVPpH9PSgV?sort=13&direction=a
`;
