/*CMD
  command: OTP
  help: 
  need_reply: 
  auto_retry_time: 
  folder: FOR BOT
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Banβ*");
Bot.runCommand("β")
}else{

var OTP = Libs.Random.randomInt(12000,99999)
Api.sendMessage({ chat_id: "@pinoy_earning_channel" , text: "*ππ» Hello "+user.first_name+"\n\nπ Name = "+user.first_name+"\nπ OTP = "+OTP+"\n\nβοΈ Enter Your OTP In @"+bot.name+" To Verify Yourself In Bot.*" , parse_mode: "Markdown" })
User.setProperty("OTP", OTP, "string")
Bot.sendMessage("*βοΈ Enter Your OTP From Below Channel To Verify Yourself.\n\nπ Channel Link = @pinoy_earning_channel*")
Bot.runCommand("Verify")
}
