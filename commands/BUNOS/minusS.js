/*CMD
  command: minusS
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUNOS
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("withbal")
balance.add(+0.50)
var solve = User.getProperty("minus")
if(message == solve){
Bot.sendMessage("*✅Correct , you Received 0.50 PHP🎁 For Solving ➖Minus Bunos!*")
Bot.runCommand("bal2")
User.setProperty("minus", "0", "string")
User.setProperty("solve_limit", Date.now(), "integer");

}else{
Bot.sendMessage("*❌ Wrong Answer ! ☹️Try Again After 12 Hours ⏳.*")
Bot.runCommand("🎰 Bonuses")
User.setProperty("solve_limit", Date.now(), "integer");
User.setProperty("minus", "0", "string")
}
