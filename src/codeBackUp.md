# 一些測試用的程式碼。
官網中文 https://bottender.js.org/docs/zh-TW/channel-telegram-sending-messages
官網範例的code https://github.com/Yoctol/bottender/tree/master/examples

# 輸入 joke，機器人講笑話
```
  if (context.event.text === 'joke') {
    var jokes = [
      '猴子最討厭平行線，因為沒有\"香蕉\"。',
      '川普跌倒會變成...三普',
      '綠豆誰殺了誰？...牛奶(綠豆沙牛奶'
    ];
    var joke = jokes[Math.floor(Math.random() * jokes.length)];
    await context.sendText(joke);
  } else {
    //var answers = ['聊別的', '我聽不懂'];
    //var answer = answers[Math.floor(Math.random() * answers.length)];
    var answers = ['乖聊聊別的', '我不懂這個'];
    var answer = answers[Math.floor(Math.random() * answers.length)];
    await context.sendText(answer);
  }
```

# 套用 markdown 或 html
```
  var markdownText = `
  block?
  \`\`\`
  
  \#include \<stdio.h\>
  
  int maine\(\)\{
  \t printf\(\"hello whorld!\\n\"\);  
  \}
  \`\`\`
  `;

  var htlmText = `
  <b>bold</b>, <strong>bold</strong> <i>italic</i>, <em>italic</em>
  <a href="http://www.example.com/">inline URL</a>
  <a href="tg://user?id=123456789">inline mention of a user</a>
  <code>inline fixed-width code</code>
  <pre>pre-formatted fixed-width code block</pre>
`
  await context.sendMessage(markdownText, { parseMode: 'markdown' });
  await context.sendMessage(htlmText, { parseMode: 'html' });
```

# 回傳照片
```
await context.sendPhoto('https://i.imgur.com/OUVqBuw.png');
```