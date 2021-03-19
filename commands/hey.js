module.exports = {
    commands: 'hi',
    callback: (message, arguments, text, commands) => {
      message.reply('hey!')
    },
  }