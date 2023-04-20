import {commandHandler} from "../index"
import {Message} from "discord.js"

export const cmd:commandHandler={
    name:"ping",
    description:"sine",
    aliases:[""],
    exec:(message:Message,args:string[])=>{
      message.reply("ong!")
    }
  }