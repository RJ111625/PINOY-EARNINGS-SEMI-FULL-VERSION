/*CMD
  command: Null0
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANELS

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if ( user =="administrator" | user=="creator"){
var button = [[{title:"🔄 Change Balance",command:"/abd"},{title:"🎙 Broadcast",command:"/broadcast"}],[{title:"💰Check User Balance",command:"/checkb"}],[{title:"🛑 Ban User",command:"/ban"},{title:"✅ Unban User",command:"/unban"}]]

Bot.sendInlineKeyboard(button,"*HELLO👋🏻\n\n♨️Welcome To The Admin Panel🧑🏻‍💻\n\n‼️Warning When Using This Panel Please Don't Send Any Other Command It May Spoil Your Work*")
}else{
Bot.sendMessage("*❌Wrong Command😅\n\nPress /menu to start*")
}
