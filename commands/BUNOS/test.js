/*CMD
  command: test
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUNOS
  answer: 
  keyboard: 
  aliases: 
CMD*/

function captcha(length) {
    var result           = [];
    var characters       = '0123456789';
    var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ){  result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}
var captcha = captcha(5)
User.setProperty("captcha", captcha, "string")
Api.sendPhoto({
photo: "https://shadabalam.cf/api/captcha.php?captcha="+captcha+"",
caption: "Enter The Captcha To Verify Yourself As Human" })
Bot.runCommand("tcheck")
