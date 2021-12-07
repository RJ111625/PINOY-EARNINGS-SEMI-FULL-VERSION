/*CMD
  command: /log
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADDADMIN

  <<ANSWER
*📌PLEASE INPUT YOUR "RETAILLERS" CODE*

 Contact "📞Support" To get Your Code*
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var use = "retail"
// Automatic fix
var msg

// Automatic fix
var msg

// Automatic fix
var msg

// Automatic fix
var msg2

// Automatic fix
var msg2

// Automatic fix
var msg2

msg2 = "❌"
msg = "*❌CODE DENIED❌*.\n\n_Contact Admin For Help_"

if (message == User.getProperty("code")) {
  User.setProperty("status", use, "string")
  Bot.sendMessage("*Your A Retailler Now.🥳*")
  Bot.runCommand("menu")
} else {
  Bot.sendMessage(msg2)
  Bot.sendMessage(msg)
  Bot.runCommand("codeX")
}
