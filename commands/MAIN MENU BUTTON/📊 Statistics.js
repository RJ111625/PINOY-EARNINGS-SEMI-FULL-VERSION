/*CMD
  command: ๐ Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: MAIN MENU BUTTON

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var use = Libs.ResourcesLib.anotherChatRes("user", "global")
var withdraw = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
Bot.sendMessage("*๐ Bot Live Statistics\n\n๐ฅ Users = "+use.value()+" Users\n\n๐คTotal Withdrawn = "+withdraw.value().toFixed(2)+" PHP\n\nโ Share And Support Us โ*")
