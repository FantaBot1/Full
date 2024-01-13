const handler = async (m, {conn}) => {
  m.reply(global.Degradados);
};
handler.command = /^(Degradados|degradados)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Degradados = `
〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕

*LINK* https://mega.nz/folder/LaI0HBJa#7_EDAma5WSTqMjEFDPvWyw
`;
