
//keyboard寫進一個變數裡
var replyKeyboard = {
  keybaoard: [
    [
      { text: '第一排之一' },
      { text: '第一排之二' }
    ],
    [
      { text: '第二排之一' },
      { text: '第二排之二' },
      { text: '第二排之三' }
    ]
  ]
};

const replyMarkup = {
  inlineKeyboard: [
    [
      {
        text: 'hi',
        url: 'https://www.example.com',
      },
      {
        text: 'yo',
        callbackData: 'yo',
      },
    ],
  ],
};
const replyMarkup2 = {
  keyboard: [
    [
      {
        text: 'hi',
      },
      {
        text: 'yo',
      },
    ],
  ],
};
module.exports = async function App(context) {
  await context.sendMessage('請選擇', { replyMarkup });
  //await context.sendText('I success!');
  // if (context.event.text === 'joke') {
  //   var jokes = [
  //     '猴子最討厭平行線，因為沒有\"香蕉\"。',
  //     '川普跌倒會變成...三普',
  //     '綠豆誰殺了誰？...牛奶(綠豆沙牛奶'
  //   ];
  //   var joke = jokes[Math.floor(Math.random() * jokes.length)];
  //   await context.sendText(joke);
  // } else {
  //   //var answers = ['聊別的', '我聽不懂'];
  //   //var answer = answers[Math.floor(Math.random() * answers.length)];
  //   var answers = ['乖聊聊別的', '我不懂這個'];
  //   var answer = answers[Math.floor(Math.random() * answers.length)];
  //   await context.sendText(answer);
  // }
};





// // 一般post的寫法
// axios.post('https://api.telegram.org/bot' + token  +'/sendMessage', {
//   chat_id: user_id,
//   text: '這是一個ReplyKeyboardMarkup測試',
//   reply_markup: {
//     keyboard: replyKeyboard,
//     resize_keyboard: true,
//     one_time_keyboard: false
//   }
// });
