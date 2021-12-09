/*CMD
  command: Chgroup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var use = options.result.status;
User.setProperty("status" , use, "string");
if (use=="member" | use =="administrator" | use=="creator"){
Bot.runCommand("main_menu")
User.addToGroup("use")
}
if (use=="left"){
Bot.sendMessage("*❌ Must Join All Channel*")
Bot.runCommand("start2")
}
