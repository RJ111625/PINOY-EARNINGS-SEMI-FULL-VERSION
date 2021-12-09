/*CMD
  command: onetime
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw Edit
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban❌*")
Bot.runCommand("❌")
}else{
var use = User.getProperty("status")
if (use == "retail"){
Bot.sendMessage("*Sorry But Retailler Cannot Withdraw*")
Bot.runCommand("main_menu")
}else{
let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban❌*")
Bot.runCommand("❌")

}else{
let balance = Libs.ResourcesLib.userRes("withbal")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("wallet")
if( wallet == undefined ){
Bot.sendMessage("_❌ Wallet Not set_")
Bot.runCommand("💼 Set Wallet")
}else{
if (balance.value() < 50){
Bot.sendMessage("_❌ Kailangang Magkaroon ng At Least 50 PHP Sa Iyong Withdrawable Balance!_")
}else{
Bot.sendMessage("*📤 Enter Amount To Withdraw *")
Bot.runCommand("Auto")
}
}}}}
