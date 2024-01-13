const handler = async (m, {conn}) => {
  m.reply(global.Empresas);
};
handler.command = /^(Empresas|empresas)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Empresas = `
〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕

*LINK* https://mega.nz/folder/OeR3iKjZ#pgi4Ka5I5b6bMrgAGwVsNw
`;
