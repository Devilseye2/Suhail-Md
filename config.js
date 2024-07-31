const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://nick_user:33yEdMERVFfYu6BCIIfote3f6KGLT48w@dpg-cql58j3v2p9s738bvh00-a.oregon-postgres.render.com/nick"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254101684952";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_33_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDk0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDczLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0LFxuICAgICAgICA2MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwLFxuICAgICAgICA3NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAzNixcbiAgICAgICAgNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxODksXG4gICAgICAgIDkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDgyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICA3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDczLFxuICAgICAgICA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkcTRuOWE3WUNVdENDVEs0SzRRNDFoblMzSWhSWTZjQmc3MkZIbnFTZXBnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYSDAxX1puSFNobXk3ME40cTN0aGZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ3ZTlmM2U4LTFmOGEtNGMzMy1hM2NkLTRiOTRlZDk4NDg1OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDE5NixcbiAgICAgIDE2MixcbiAgICAgIDIyMCxcbiAgICAgIDI4LFxuICAgICAgMTM0LFxuICAgICAgMTEwLFxuICAgICAgMTUyLFxuICAgICAgMTAzLFxuICAgICAgNSxcbiAgICAgIDE1NixcbiAgICAgIDEwMSxcbiAgICAgIDE5NyxcbiAgICAgIDE2MCxcbiAgICAgIDQ2LFxuICAgICAgMjQ0LFxuICAgICAgMTM5LFxuICAgICAgNzcsXG4gICAgICAxMTUsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICA2NSxcbiAgICAgIDQ0LFxuICAgICAgMTQxLFxuICAgICAgMTQyLFxuICAgICAgMTAzLFxuICAgICAgMTM4LFxuICAgICAgMjM3LFxuICAgICAgNzMsXG4gICAgICAyMjYsXG4gICAgICAyMTYsXG4gICAgICAzOSxcbiAgICAgIDI5LFxuICAgICAgMzgsXG4gICAgICAxMTYsXG4gICAgICA3NixcbiAgICAgIDUzLFxuICAgICAgNTYsXG4gICAgICAyMTEsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJONlBGM1BYSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTAxNjg0OTUyOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2ITNoU1SLURPT03jgI9CzZzNoWXjg4TjgIzjgI1cIixcbiAgICBcImxpZFwiOiBcIjg1ODAxMTQ4OTAzNjU4OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09idzVka0JFTzJHcXJVR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMG1pUmc5eFk0UHVkYTJmcEhiKzdBMS9KL0pTUzhUdFE5c1I3UnVFN1NSND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDYlFaYUIySnpWZVNmMWg2azY4RkZIM0RicXA2QzMzOU8zZmdJR0lBeitHMldSWFRUL0RtR2NIMlZHb2MrZGxlZ25QdEh6bmJDcE9FeW9tL29LeGhEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOeGNMR0tHRC9hVU9ZNTVZcmhvcnAycDRmQXk5aVBVMDFlQnE5RXJldHhTenY1UWxvdFJ1bkNTTTNGUWNaRUpteWdhblM5UVdWOTkxYWxQQ3NRQndnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMDE2ODQ5NTI6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDUwODAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnhJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGeEkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtcUh6b3lNVWZCQXRzaWQ4SHhrZ08xT09Td3NlRXBlYnZQb2NWUzdQbldRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ1Njc1MTIwNixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIyMjcyNDY1MDkzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "༄👾ᵐʳ-ᵈᵒᵒᵐ☠️᭄✿KING࿐",
  packname: process.env.PACK_NAME || "༄👾ᵐʳ-ᵈᵒᵒᵐ☠️᭄✿KING࿐",
  botname : process.env.BOT_NAME  || "༄ᵐʳ-ᵈᵒᵒᵐ᭄✿KING࿐-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "༄ᵐʳ-ᵈᵒᵒᵐ᭄✿KING࿐",


  errorChat : process.env.ERROR_CHAT || "FuCK YOU HUMAN",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
