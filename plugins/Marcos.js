const handler = async (m, {conn}) => {
  m.reply(global.Marcos);
};
handler.command = /^(Marcos|marcos|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Marcos = `
〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕

*LINK* https://mega.nz/folder/TaxS1Y5Z#8RvWc7v5yA0j7CO850kyww
`;
