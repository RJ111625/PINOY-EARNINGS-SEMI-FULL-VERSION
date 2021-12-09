/*CMD
  command: 🎙 Broadcast
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ADMIN PANELS
  answer: *⬆️SELECT AN OPTION⬆️*
  keyboard: 🔙Back
  aliases: 
CMD*/

var user = User.getProperty("status");
if ( user =="administrator" | user=="creator"){
var button = [[{title:"🎙️Broadcast Message🗨️✉️",command:"msgbroadcast"},{title:"🎙️Broadcast Photo",command:"/brphoto"}]]

Bot.sendInlineKeyboard(button,"*HELLO👋🏻\n\nPlease Choose Your Type Of Broadcasting*")
}else{
Bot.sendMessage("*❌ACCESS DENIED🔴*")
Bot.runCommand("main_menu")
}
