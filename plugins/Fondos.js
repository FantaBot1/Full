const handler = async (m, {conn}) => {
  m.reply(global.Fondos);
};
handler.command = /^(Fondos|fondos|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Fondos = `
〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕

*LINK* https://mega.nz/folder/DOgQFbhC#zQPYN3J9776vxuclCkNAwg
`;
