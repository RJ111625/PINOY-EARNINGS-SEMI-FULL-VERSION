/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: MAIN MENU BUTTON

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: menu, main, menu, /menu, ๐go backโฉ๏ธ
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*You're Banโ*")
Bot.runCommand("โ")
}else{
var use = User.getProperty("status")
if (use=="left")
Bot.runCommand("start2")
var use = User.getProperty("status");
if (use=="creator"){
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
if(request.data){
Api.deleteMessage({
message_id : request.message.message_id
})
}
Bot.sendKeyboard("๐ฐ Balance,๐ Statistics,\n๐ฅ Referral,๐ง๐ปโ๐ปAdmin,","*๐๏ธ๐ฐ๐ฝ๐ถ ๐ธ๐๐พ๐ฝ๐ถ ๏ผก๏ผค๏ผญ๏ผฉ๏ผฎ ๐ผ๐ด๐ฝ๐๐๏ธ*")
}else{

if ( use=="member" | use=="administrator")
Bot.sendKeyboard("๐ฐ Balance,๐ Statistics,\n๐ฅ Referral,๐ฐ Bonuses,\n๐ผ Set Wallet,๐ Support", "*๐๏ธ๐ฐ๐ฝ๐ถ ๐ธ๐๐พ๐ฝ๐ถ ๐ผ๐ด๐ฝ๐๐๏ธ*")
}
{
if (use=="retail")
Bot.sendKeyboard("๐ฐ Balance,๐ Statistics,\n๐ฅ Referral,๐ฐ Bonuses,๐Contact Admin", "*๐ฦฆะฦฌฦฦิผิผะฦฆ Mะฦฦฒ*๐")
}
}
