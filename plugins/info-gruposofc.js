const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕`.trim();
  const buttonMessage= {
    'document': {url: `https://chat.whatsapp.com/GONbZsHkAAi8KLmPp9e0iy`},
    'mimetype': `application/${document}`,
    'fileName': `〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://chat.whatsapp.com/GONbZsHkAAi8KLmPp9e0iy',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://chat.whatsapp.com/GONbZsHkAAi8KLmPp9e0iy'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
