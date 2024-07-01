//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0VSbUUxcDVvaGdBa3Nwc3lXRThLeTJBc1RoRkFaUGxKZXdkc05ZbUJuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnNGWkUwSXNGS3ovU240NGVnNlFuNWxCRC81aTZhejM4N2ZhZ0NhVmt3QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzT2tkdGlNS2lYNit4Y3FvMlgzTDdIaS9zdDlaME0zdnJFODdMSnJta21NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBbElFYk1RcXlTQ1NKb1dBN2czSEw0K2lrak9RVDlWSlJyRUUxQkNOTnhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIWU41NFg4RU5TOERVWGFGcHkwRGxOOGJiRGxNL1NDZHRFdU1wcHF3MTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis1bWQvNUYrNzMwUzY2b1N4NXpZUlFhb01TUEJtR3UzTXB4eEdTMGVzVTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdBSVBERjRRUktSeSt4K2NDZk5keEdyOHNpOUdFc003bEtkMlNTaldsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMi9FMlZpTU0wMTdEWHdrQ3ZwbTE3cWkyRUhOWC9tUHVmdHB1WjVnSDB6Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklWMFFJSW5pdktEYTNQWE1QSmM3bzZZUWxVRU53QUVXSEdGZmIxaUswTncwMXlLSkR0NUU1QVkwdTNMVWVlazU4azZoU0dxUVMrdXJwRGNrdXNOMWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6Ik56ZE84Tk9XS1RXNUlpYVVJVyswa2Q3eitqWUEvRGh5d3NlaWQ3ZHFISms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InU5WHZteWpqVFl5NGpMVmVqTHJMMHciLCJwaG9uZUlkIjoiMzk3YTBhZDgtMDAyZC00YjcwLTg1ZjAtYzZmNGQ3NWY2ZTU2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQcUJQeTd0MHVMSUN1TkxoUGlwSzVLbldYND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjYmprcUIxdEF3cHhxSFBYQlprV1NwRkh5bmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUhEVlQxOUgiLCJtZSI6eyJpZCI6IjI1NDc5ODUxNTA1Mjo5M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ+UHJpbmNlIHJvY2t5IHdyeSAswr/Cvz8/In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQaUpxZGdIRU42SWk3UUdHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2cnpKc3oyNjVwbjNha1JSak9oMUUwZXBCQTZUcXhJelNBWjdqcXVtclE4PSIsImFjY291bnRTaWduYXR1cmUiOiJNZ3NVUkMrYm5UemN5UVh1cW80ekY5Vyt4b3RLWDc3bkVTcmtZTkVhaWViYzZhYVJNTFoxODFLdXdkT1NadlIvM0ZUV1JFSG1zSUd5Q1E0bTZ6VGFCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia1R4bTA0Y2o5d3QrT3UrZU53azF0WnJPRjlUYmp1aGs2cWliN1R2MnhRbGlsZHF0NnZBcTRmdzByczNYck50ZWlWVTZ1WGdQMFZtbTcwZE5nVnJMaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTg1MTUwNTI6OTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjY4eWJNOXV1YVo5MnBFVVl6b2RSTkhxUVFPazZzU00wZ0dlNDZycHEwUCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTg0NTk5NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBOU4ifQ==
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0VSbUUxcDVvaGdBa3Nwc3lXRThLeTJBc1RoRkFaUGxKZXdkc05ZbUJuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnNGWkUwSXNGS3ovU240NGVnNlFuNWxCRC81aTZhejM4N2ZhZ0NhVmt3QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzT2tkdGlNS2lYNit4Y3FvMlgzTDdIaS9zdDlaME0zdnJFODdMSnJta21NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBbElFYk1RcXlTQ1NKb1dBN2czSEw0K2lrak9RVDlWSlJyRUUxQkNOTnhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIWU41NFg4RU5TOERVWGFGcHkwRGxOOGJiRGxNL1NDZHRFdU1wcHF3MTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis1bWQvNUYrNzMwUzY2b1N4NXpZUlFhb01TUEJtR3UzTXB4eEdTMGVzVTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdBSVBERjRRUktSeSt4K2NDZk5keEdyOHNpOUdFc003bEtkMlNTaldsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMi9FMlZpTU0wMTdEWHdrQ3ZwbTE3cWkyRUhOWC9tUHVmdHB1WjVnSDB6Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklWMFFJSW5pdktEYTNQWE1QSmM3bzZZUWxVRU53QUVXSEdGZmIxaUswTncwMXlLSkR0NUU1QVkwdTNMVWVlazU4azZoU0dxUVMrdXJwRGNrdXNOMWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6Ik56ZE84Tk9XS1RXNUlpYVVJVyswa2Q3eitqWUEvRGh5d3NlaWQ3ZHFISms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InU5WHZteWpqVFl5NGpMVmVqTHJMMHciLCJwaG9uZUlkIjoiMzk3YTBhZDgtMDAyZC00YjcwLTg1ZjAtYzZmNGQ3NWY2ZTU2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQcUJQeTd0MHVMSUN1TkxoUGlwSzVLbldYND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjYmprcUIxdEF3cHhxSFBYQlprV1NwRkh5bmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2Rl"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
