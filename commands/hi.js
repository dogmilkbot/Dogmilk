  module.exports = {
  commands: 'hi',
  minArgs: 0,
  maxArgs: 0,
  callback: (message, arguments, text) => {
    message.reply('Hi!')
  },
}