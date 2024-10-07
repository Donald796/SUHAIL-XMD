const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348111175458";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_03_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEsXG4gICAgICAgIDEsXG4gICAgICAgIDEwLFxuICAgICAgICA2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAwLFxuICAgICAgICA5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAwLFxuICAgICAgICA2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDYzLFxuICAgICAgICA5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUzLFxuICAgICAgICA1OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMixcbiAgICAgICAgMjAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDYyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc2LFxuICAgICAgICA2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDksXG4gICAgICAgIDU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwOWo4R2FVYlZqWmJLcVVxWXh3Q09IcndqcDBwb3FyU3U0OEc4WnhiQ1dFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMTExNzU0NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRERkFCODkyRDk0N0VCODBDRDU2QUVFQTAwMjdCRUREXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODI1OTQwNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlZi0tUDZONFN0bVBSODF3MU5LVWVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhNGU4MGU0LThhN2ItNGEwNS05MzY4LTFhMWE5ZjFiMGVjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAxODEsXG4gICAgICA4LFxuICAgICAgMTUzLFxuICAgICAgMTgzLFxuICAgICAgNjAsXG4gICAgICAxMjgsXG4gICAgICAxMzUsXG4gICAgICA3NSxcbiAgICAgIDE1MyxcbiAgICAgIDUsXG4gICAgICAyNDcsXG4gICAgICAxOTMsXG4gICAgICAxMTUsXG4gICAgICAzNSxcbiAgICAgIDEzMyxcbiAgICAgIDEyLFxuICAgICAgMjUsXG4gICAgICAxMTMsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMTEzLFxuICAgICAgMjI2LFxuICAgICAgMTE0LFxuICAgICAgNjQsXG4gICAgICAxNjQsXG4gICAgICAxMzcsXG4gICAgICAxODMsXG4gICAgICAyMDYsXG4gICAgICAyNDgsXG4gICAgICAyMzcsXG4gICAgICA5LFxuICAgICAgMjE5LFxuICAgICAgNjIsXG4gICAgICAxNixcbiAgICAgIDM1LFxuICAgICAgMjcsXG4gICAgICA2NixcbiAgICAgIDY3LFxuICAgICAgODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFlHODFTN0dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMTExNzU0NTg6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNDg3OTI3MDQyMDcyOTo1MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNREVqUmtRd3NxTXVBWVlCQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFNdXlLbUhVYkh4c0JwNGNlRVZMLzc5SUtrYUhXanhxSS9uSlRhSmhMRmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSzRtbGFoWURMekNDcUxFcVl1Y2h4RmRTMnZOSzNRcXQyeFhKM2FDN2tJNXNWMjkrNkRMTEh5MFVIbkhkWTROSndlNGhmZDZpbWNyY3BkK21rNzJOREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiODFtbldMYzg2UFdabjZHYXVQMHZ2VHJOREFyMnFyc0VuNEVQbWJnYTdoME9OcXhKWEt1MVJxKzVneWE1RUxXa3UxRXZyOU5xaUs3NTFYQ0IrNGZGQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODExMTE3NTQ1ODo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MjU5Mzk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTm1KXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFObUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzOWJJbk1seVc3Myt4YUlNTHFmNVFzbyswSnEwS2xYV2loMjdtTUJ6QXhvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyNjUwNTU5LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI4MTIwMTUwMDkwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
