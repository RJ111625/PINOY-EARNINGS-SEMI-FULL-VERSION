/*CMD
  command: Idk
  help: 
  need_reply: 
  auto_retry_time: 
  folder: IDK
  answer: 
  keyboard: 
  aliases: 
CMD*/




var button = [[{title:"🎙️Broadcast Message✉️",command:"msgbroadcast"},{title:"🎙️Broadcast Photo",command:"/brphoto"} , {title: "Pota ka",command:"main_menu"}]]

Bot.sendInlineKeyboard(button, "hi")

if(params==button)
  removeKeyboardButton("")


