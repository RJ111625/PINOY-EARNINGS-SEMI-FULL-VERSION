/*CMD
  command: 🧑🏻‍💻Admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANELS
  answer: 
  keyboard: 
  aliases: 🔙back
CMD*/

var user = User.getProperty("status");
if ( user =="administrator" | user=="creator"){Bot.sendKeyboard("🔄 Change Balance,🎙 Broadcast,\n💰Check User Balance\n,🛑 Ban/Unban User☑️,🤖Maintainance🚫\n,🔙Go Back↩️","*HELLO👋🏻\n\n♨️Welcome To The Admin Panel🧑🏻‍💻\n\n‼️Warning When Using This Panel Please Don't Send Any Other Command It May Spoil Your Work*")
}else{
Bot.sendMessage("*❌Wrong Command😅\n\nPress /menu to start*")
}
