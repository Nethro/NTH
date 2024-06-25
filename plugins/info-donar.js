const handler = async (m, {conn}) => {
  m.reply(global.Donar);
};
handler.command = /^(Donar|Apoyar)$/i;
export default handler;

global.Donar = `
*Si Deseas Apoyar Al Staff De Proyecto X 🕷️*

*Yape , Paypal*

*Yape :* +51 991 619 710
*Paypal :* https://www.paypal.com/paypalme/PinguiService
`;