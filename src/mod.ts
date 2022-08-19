import { configs } from "../configs.ts";
import { Client, Message, Intents } from "./deps.ts";

const client = new Client();
const token = Deno.env.get('DISCORD_TOKEN');
console.log(configs.token)

client.on('messageCreate', (msg: Message): void => {
    const content = msg.content;
    if (!content) return;
    if (content === "!ping") msg.reply("helloooo " + msg.author.nickMention);
})

client.connect(token, Intents.None)