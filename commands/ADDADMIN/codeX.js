/*CMD
  command: codeX
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADDADMIN

  <<ANSWER
*ππ»Sorry But You Have Entered A Wrong Codeπ₯*
_π¬ You Are Now In Direct Contact To Our Admin_
Please Site Your Question.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Ask" ,message ,"string")
Bot.sendMessage("*π© Message Sent To Admin As = "+message+"*")
Bot.sendMessageToChatWithId(2116898236, "*π© New Support Message From _RETAIL REQUEST_ π©\n\nπ€΄π» User =* ["+user.first_name+"]*\n\nπ User ID= *["+user.telegramid+"]*\n\nπ Message = "+message+"\n\n Wanna Reply? /SPM*")
Bot.runCommand("main_menu")
