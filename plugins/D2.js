const handler = async (m, {conn}) => {
  m.reply(global.Drive2);
};
handler.command = /^(Drive2|drive2)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Drive2 = `
〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕

*LINK*  https://drive.google.com/drive/folders/1RMZdVco83CQ9X81gDDovVO5SZNU2BZXb
`;
