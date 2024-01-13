const handler = async (m, {conn}) => {
  m.reply(global.Drive4);
};
handler.command = /^(Drive4|drive4)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Drive4 = `
〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕

*LINK* https://drive.google.com/drive/u/0/mobile/folders/1kWvht4sSR0ybvlZiI0SAIitCIrNgK_wA
`;
