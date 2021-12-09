/*CMD
  command: 🎲DICE GAMES🎮
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Games
  answer: *🎲DICE GAMES🎮*
  keyboard: ROLL A DICE🎲,Dice High or Low🎲,\n🔙Back To Games
  aliases: cancel✖️
CMD*/

User.setProperty("widbalbethl", "false", "string");

var balance = Libs.ResourcesLib.userRes("withbal");
var bal = Libs.ResourcesLib.userRes("balance");
if(bal < 1 | balance <1){Bot.sendMessage("*✋Stop! You have Only "+bal+" PHP.\ You must have atleast 1 PHP to Continue*")
Bot.runCommand("🎮Games🎮")
}else{
return
}
