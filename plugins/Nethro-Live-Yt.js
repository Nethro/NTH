const handler = async (m, {conn}) => {
  m.reply(global.LiveYt);
};
handler.command = /^(LiveYt)$/i;
export default handler;

global.LiveYt = `
¡Hola! Soy Nethro, tu streamer favorito de aventuras épicas y risas sin fin. Estoy en vivo ahora mismo: https://youtube.com/@nethrogaming, 

¡y me encantaría que te pasaras a saludar! Sumérgete en el mundo de Nethro Gaming, donde cada stream es una nueva aventura. ¡Te espero!
`;