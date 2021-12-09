/*CMD
  command: High⬆️
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Games
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
var widbalbethl = User.getProperty ("widbalbethl")
if(widbalbethl == "true"){
var be = User.getProperty("bethl");
var wa = Libs.ResourcesLib.userRes("withbal");
if(bet > wa.value() ){
Bot.sendMessage("_❌Maximum Bet Amount Is 1 PHP._\n\ *You Have Only "+wa.value().toFixed(2)+" PHP.*\n\nYour Bet Amount: "+be+"")
Bot.runCommand("Dice High or Low🎲")

}else{
var wal = Libs.ResourcesLib.userRes("withbal")
if(wal.value() <1){Bot.sendMessage("*✋Stop! You have Only "+wal.value()+" PHP.\ You must have atleast 1 PHP to Continue*")
}else{
wa.add(-be)
Api.sendDice({ on_result: "hdice", emoji: "🎲" })

}
return
}
return
}
return true;
}
 if(!canRun()){ return }
var bet = User.getProperty("bethl");
var bal = Libs.ResourcesLib.userRes("balance");
if(bet > bal.value() ){
Bot.sendMessage("_❌Maximum Bet Amount Is 1 PHP._\n\ *You Have Only "+bal.value().toFixed(2)+" PHP.*\n\nYour Bet Amount: "+bet+"")
}else{
var bal = Libs.ResourcesLib.userRes("balance");
if(bal.value() <1){Bot.sendMessage("*✋Stop! You have Only "+bal.value()+" PHP.\ You must have atleast 1 PHP to Continue*")
}else{
bal.add(-bet)
Api.sendDice({ on_result: "hdice", emoji: "🎲" })
}}
