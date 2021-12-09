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

function canRun(){
var widbalbethl = User.getProperty ("widbalbethl")
if(widbalbethl == "true"){
var be = User.getProperty("bethl");
var wa = Libs.ResourcesLib.userRes("withbal");
if(be > wa.value() ){
Bot.sendMessage("_❌Maximum Bet Amount Is 1 PHP💰._\n\n *You Have Only "+wa.value().toFixed(2)+" PHP.*\n\nYour Bet Amount: "+be+"")
Bot.runCommand("Dice High or Low🎲")

}else{
var wal = Libs.ResourcesLib.userRes("withbal")
if(wal.value() <1){Bot.sendMessage("*✋Stop! You have Only "+wal.value()+" PHP.\ You must have atleast 1 PHP to Continue*")
}else{
wa.add(-be)
Api.sendDice({ on_result: "ldice", emoji: "🎲" })

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
Bot.sendMessage("_❌Maximum Bet Amount Is 1 PHP._\n\n *You Have Only "+bal.value().toFixed(2)+" PHP.*\n\nYour Bet Amount: "+bet+"")
Bot.runCommand("Dice High or Low🎲")
}else{
var bal2 = Libs.ResourcesLib.userRes("withbal");
var bal = Libs.ResourcesLib.userRes("balance");
if(bal.value() < 1 ){
var button = [[{ title : "🤔 Continue?" , command : "balbet"}] , [{ title : "CANCEL❌" , command : "main_menu"}]]
Bot.sendInlineKeyboard(button ,"*✋Stop! You have Only "+bal.value()+" PHP.\n But You have "+bal2.value().toFixed(2)+" PHP in WITHDRAWABLE BAL. Do You want to continue?*")
}else{
bal.add(-bet)
Api.sendDice({ on_result: "ldice", emoji: "🎲" })
}}
