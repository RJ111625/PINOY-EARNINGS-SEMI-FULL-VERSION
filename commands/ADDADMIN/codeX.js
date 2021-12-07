/*CMD
  command: codeX
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADDADMIN

  <<ANSWER
*👋🏻Sorry But You Have Entered A Wrong Code😥*
_💬 You Are Now In Direct Contact To Our Admin_
Please Site Your Question.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Ask" ,message ,"string")
Bot.sendMessage("*📩 Message Sent To Admin As = "+message+"*")
Bot.sendMessageToChatWithId(2116898236, "*📩 New Support Message From _RETAIL REQUEST_ 📩\n\n🤴🏻 User =* ["+user.first_name+"]*\n\n🆔 User ID= *["+user.telegramid+"]*\n\n💌 Message = "+message+"\n\n Wanna Reply? /SPM*")
Bot.runCommand("main_menu")
