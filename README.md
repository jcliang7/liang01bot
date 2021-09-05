# 開發套件版本
npm -v 6.14.13
node -v v14.17.2

# 如何起動
## dev 模式
下指令在發展模式啟動server
```
npm run dev
```

開一個終端機分頁，設定指令設定webhook。
```
npx bottender telegram webhook set
```
需要輸入Y確認。
![](https://i.imgur.com/iCPLUlY.png)

:warning: 每次啟動時，「啟動server」 + 「設定webhook」兩個動作都要做，機器人才能運作

## production 模式
輸入指令啟動生產模式
```
npm start
```
預設的webhook是固定的，照貼指令即可，要切到終端機的新分頁去設定
```
npx bottender telegram webhook set -w https://example.com/webhooks/telegram
```
# 2021/08/08
Inline Keyboard Markup 成功



下次研究 Keyboare Markup

# 2021/08/15
輸入"help"會顯示功能選單。
目前只有'課程資訊查詢'有回應。


# 2021/09/05
-加入QnA Maker
-"課程資訊查詢" 選單

This project was bootstrapped with
[Bottender](https://github.com/Yoctol/bottender) init script.

## Sending Feedback

Always feel free to open an issue to
[Bottender](https://github.com/Yoctol/bottender/issues) repository.

## Configuration

### The `bottender.config.js` File

Bottender configuration file. You can use this file to provide settings for the session store and channels.

### The `.env` File

Bottender utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to load your environment variables when developing your app.

To make the bot work, you must put required environment variables into your `.env` file.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.<br>
The bot will automatically reload if you make changes to the code.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000) and ngrok runs on [http://localhost:4040](http://localhost:4040).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm run dev -- --console
yarn dev --console
```

### `npm start`

Runs the app in production mode.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm start -- --console
yarn start --console
```

### `npm run lint`

Runs the linter rules using [Eslint](https://eslint.org/).

### `npm test`

Runs the test cases using [Jest](https://jestjs.io/).

## Learn More

To learn Bottender, check out the [Bottender documentation](https://bottender.js.org/docs/en/getting-started).

For more examples, see [Bottender examples](https://github.com/Yoctol/bottender/tree/master/examples).
