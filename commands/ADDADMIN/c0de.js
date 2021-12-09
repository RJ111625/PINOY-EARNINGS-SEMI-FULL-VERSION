/*CMD
  command: c0de
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADDADMIN
  answer: 
  keyboard: 
  aliases: 
CMD*/

function code(length) {
    var result           = [];
    var characters       = '0123456789';
    var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ){  result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}
var code = code(5)
User.setProperty("code", code, "string")
Api.sendPhoto({
chat_id: "2116898236" ,
photo: "https://shadabalam.cf/api/captcha.php?captcha="+code+"",
caption: "🚦New User Is Requesting For Code🚦\n\n⚜ User = "+user.first_name+" "+user.last_name+"\n🔰 Username = @"+user.username+"\n🆔 User ID = "+user.telegramid+""})
Bot.runCommand("/log")
