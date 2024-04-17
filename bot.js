const { Client, Intents } = require('discord.js');
const { token } = require('./config.json'); // Make sure to create a config.json with your bot token

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);