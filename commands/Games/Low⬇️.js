/*CMD
  command: Low⬇️
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Games
  answer: 
  keyboard: 
  aliases: 
CMD*/

var bal = Libs.ResourcesLib.userRes("balance");
if(bal.value() <1){Bot.sendMessage("*✋Stop! You have Only "+bal.value()+" PHP.\ You must have atleast 1 PHP to Continue*")
}else{
Api.sendDice({ on_result: "ldice", emoji: "🎲" })
}

