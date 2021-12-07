/*CMD
  command: CH1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban From Using The Bot ❌*");
Bot.runCommand("❌")
}else{
var use = options.result.status;
User.setProperty("status" , use, "string");
if (use=="member" | use =="administrator" | user=="creator"){
Bot.runCommand("Group2")
User.addToGroup("use")
}else{
if (use=="left"){
Bot.sendMessage("*❌ Must Join All Channel*")
Bot.runCommand("start2")
}}}
