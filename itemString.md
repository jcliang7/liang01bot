# Help

## Object

```javascript
{"myStr":"請選擇您想要查詢的項目：","keyboard":[
      [
        {
          text: '語法解說',
          //學生輸入關鍵字，機器人提供程式語法的使用說明及範例程式碼。
        },
        {
          text: '課程資訊查詢',
          //課程相關說明與規定、老師助教聯絡資訊、實體與非同步課程時間等基本資料查詢。
        },
        {
          text: ' ',
          //常見問題解答： 提供一些基本範例，以及相關的解題思維
        }
      ],
      [
        {
          text:'每週動動腦',
          //原本：作業相關查詢：查詢作業及分數等基本資料。
        },
        {
          text:'作業參考答案',
          //對於已過期的程式作業，提供解題思維及相關的參考答案。
        },
        {
          text:'使用者回饋',
          //讓使用者回饋使用心得、使用建議及系統錯誤。
        }

      ]
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false}
```

## Json String

{"myStr":"請選擇您想要查詢的項目：","keyboard":[[{"text":"語法解說"},{"text":"課程資訊查詢"},{"text":" "}],[{"text":"每週動動腦"},{"text":"作業參考答案"},{"text":"使用者回饋"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# 作業參考答案

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '全部題目' }],

      [{ text: '110-1' }, { text: '110-2' }],

      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
};

```

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"全部題目"}],[{"text":"110-1"},{"text":"110-2"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# 110-1

## Objedt

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '全部題目' }],

      [{ text: 'U01' }, { text: 'U02' }, { text: 'U03' }],

      [{ text: 'U04' }, { text: 'U05' }, { text: 'U06' }],
      
      [{ text: 'U07' }, { text: 'U08' }, { text: 'U09' }],

      [{text:'U10'}, {text:' '}, {text:' '}],

      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };

```

## JSON String

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"全部題目"}],[{"text":"U01"},{"text":"U02"},{"text":"U03"}],[{"text":"U04"},{"text":"U05"},{"text":"U06"}],[{"text":"U07"},{"text":"U08"},{"text":"U09"}],[{"text":"U10"},{"text":" "},{"text":" "}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# 全部題目

## Object

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '基本輸出' }, { text: '印出字串' }, { text: '字串輸出' }],

      [{ text: '長方體體積' }, { text: '大寫換小寫' }, { text: '圓柱表面積' }, { text: '整數除法' }],

      [{ text: '三數排序' }, { text: '四數排序' }, { text: '判斷及調整成績' }, { text: '判斷月份' }],
      
      [{ text: '數字平方和' }, { text:'求數字和' }, { text:'質數判別' }, { text:'九九乘法表(單排)' }],
      
      [{ text: '求兩數和 (N次)'}, { text: '求兩數和 (非零)' }, { text: '求兩數和 (檔尾)' }, { text: '求兩個數的最大公因數' }, { text: '求位數和' }],
         [{ text: '倒印數列'}, { text: '找最大值及索引' }, { text: '向量內積' }],
       [{ text: '印字串及其長度'}, { text: '字串大小寫個數' }, { text: '數列兩兩對調' }, { text: '矩陣轉置' }, { text: '矩陣旋轉' }],
        [{ text: '1+(1+2)+(1+2+3)+...'}, { text: '印三角形函數' }, { text: '陣列平均值' }, { text: '3n+1 問題' }],
        [{ text: '費氏數列'}, { text: '爬樓梯' }, { text: '河內塔問題1' }, { text: '河內塔問題2' }],
        [{text: '開燈問題'}, {text:'生成元'}, {text:'鍵盤移位'}, {text:'蛇形填數'}],
        [{ text: '排序（10數，大到小）'}, { text: '排序(Ｎ個數)' }, { text: '反數相加' }, { text: '得分' }],
        [{ text: '成績指標'}, { text: '排序 (10數，特殊規則）' }, { text: '書本的位置' }],
        [{ text: '線段交集'}, { text: '資料排序'}],
        [{text: '幾A幾B'}, {text: '第k小的排列'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```



## JSON String

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"基本輸出"},{"text":"印出字串"},{"text":"字串輸出"}],[{"text":"長方體體積"},{"text":"大寫換小寫"},{"text":"圓柱表面積"},{"text":"整數除法"}],[{"text":"三數排序"},{"text":"四數排序"},{"text":"判斷及調整成績"},{"text":"判斷月份"}],[{"text":"數字平方和"},{"text":"求數字和"},{"text":"質數判別"},{"text":"九九乘法表(單排)"}],[{"text":"求兩數和 (N次)"},{"text":"求兩數和 (非零)"},{"text":"求兩數和 (檔尾)"},{"text":"求兩個數的最大公因數"},{"text":"求位數和"}],[{"text":"倒印數列"},{"text":"找最大值及索引"},{"text":"向量內積"}],[{"text":"印字串及其長度"},{"text":"字串大小寫個數"},{"text":"數列兩兩對調"},{"text":"矩陣轉置"},{"text":"矩陣旋轉"}],[{"text":"1+(1+2)+(1+2+3)+..."},{"text":"印三角形函數"},{"text":"陣列平均值"},{"text":"3n+1 問題"}],[{"text":"費氏數列"},{"text":"爬樓梯"},{"text":"河內塔問題1"},{"text":"河內塔問題2"}],[{"text":"開燈問題"},{"text":"生成元"},{"text":"鍵盤移位"},{"text":"蛇形填數"}],[{"text":"排序（10數，大到小）"},{"text":"排序(Ｎ個數)"},{"text":"反數相加"},{"text":"得分"}],[{"text":"成績指標"},{"text":"排序 (10數，特殊規則）"},{"text":"書本的位置"}],[{"text":"線段交集"},{"text":"資料排序"}],[{"text":"幾A幾B"},{"text":"第k小的排列"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# U01

## Object

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '基本輸出' }, { text: '印出字串' }],
      [{ text: '字串輸出' }, { text: ' ' }],
      [{text: '作業參考答案'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```





## JSON String

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"基本輸出"},{"text":"印出字串"}],[{"text":"字串輸出"},{"text":" "}],[{"text":"作業參考答案"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}



# U02

## Object

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '長方體體積' }, { text: '大寫換小寫' }],
      [{ text: '圓柱表面積' }, { text: '整數除法' }],
      [{text: '作業參考答案'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```



## JSON String

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"基本輸出"},{"text":"印出字串"},{"text":"字串輸出"}],[{"text":"作業參考答案"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}



# U03

## Object

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '三數排序' }, { text: '四數排序' },],
      [{ text: '判斷及調整成績' }, { text: '判斷月份' }],
      [{text: '作業參考答案'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```



## JSON String

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"三數排序"},{"text":"四數排序"}],[{"text":"判斷及調整成績"},{"text":"判斷月份"}],[{"text":"作業參考答案"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}



# U04

## Object

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
  
      [{ text: '數字平方和' }, { text:'求數字和' }],
      [{ text:'質數判別' }, { text:'九九乘法表(單排)' }],
      [{text: '作業參考答案'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```



## JSON String

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"數字平方和"},{"text":"求數字和"}],[{"text":"質數判別"},{"text":"九九乘法表(單排)"}],[{"text":"作業參考答案"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}



# U05

## Object

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '求兩數和 (N次)'}, { text: '求兩數和 (非零)' }],
      [{ text: '求兩數和 (檔尾)' }, { text: '求兩個數的最大公因數' }],
      [{ text: '求位數和' }, { text: ' ' }],
      // [{text:'btn'},{text:'btn'}, {text:'btn'}, {text:'btn'}],
      [{text: '作業參考答案'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```



## JSON String

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"求兩數和 (N次)"},{"text":"求兩數和 (非零)"}],[{"text":"求兩數和 (檔尾)"},{"text":"求兩個數的最大公因數"}],[{"text":"求位數和"},{"text":" "}],[{"text":"作業參考答案"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}



# U06

## Object

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '倒印數列'}, { text: '找最大值及索引' }],
      [{ text: '向量內積' }, { text: ' ' }],
      // [{text:'btn'},{text:'btn'}, {text:'btn'}, {text:'btn'}],
      [{text: '作業參考答案'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```



## JSON String

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"倒印數列"},{"text":"找最大值及索引"}],[{"text":"向量內積"},{"text":" "}],[{"text":"作業參考答案"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}



# U07

## Object

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '印字串及其長度'}, { text: '字串大小寫個數' }],
      [{ text: '數列兩兩對調' }, { text: '矩陣轉置' }],
      [{ text: '矩陣旋轉' }, { text: ' ' }],
      // [{text:'btn'},{text:'btn'}, {text:'btn'}, {text:'btn'}],
      [{text: '作業參考答案'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```

## JSON String

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"印字串及其長度"},{"text":"字串大小寫個數"}],[{"text":"數列兩兩對調"},{"text":"矩陣轉置"}],[{"text":"矩陣旋轉"},{"text":" "}],[{"text":"作業參考答案"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}



# U08

## Object

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '1+(1+2)+(1+2+3)+...'}, { text: '印三角形函數' }],
      [{ text: '陣列平均值' }, { text: '3n+1 問題' }],
      // [{text:'btn'},{text:'btn'}, {text:'btn'}, {text:'btn'}],
      [{text: '作業參考答案'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```

## JSON String

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"1+(1+2)+(1+2+3)+..."},{"text":"印三角形函數"}],[{"text":"陣列平均值"},{"text":"3n+1 問題"}],[{"text":"作業參考答案"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}



# U09

## Object

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '費氏數列'}, { text: '爬樓梯' }],
      [{ text: '河內塔問題1' }, { text: '河內塔問題2' }],
      // [{text:'btn'},{text:'btn'}, {text:'btn'}, {text:'btn'}],
      [{text: '作業參考答案'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```



## JSON String

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"費氏數列"},{"text":"爬樓梯"}],[{"text":"河內塔問題1"},{"text":"河內塔問題2"}],[{"text":"作業參考答案"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# U10

## Object

```
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '開燈問題' }, { text: '生成元' }],
      [{ text: '鍵盤移位' }, { text: '蛇形填數' }],
      [{text: '作業參考答案'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
  let str = JSON.stringify(replyMarkup);
  await context.sendText(str, { replyMarkup });
};
```

## JSON String

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"開燈問題"},{"text":"生成元"}],[{"text":"鍵盤移位"},{"text":"蛇形填數"}],[{"text":"作業參考答案"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# 110-2

## Objedt

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"全部題目"}],[{"text":"UU01"},{"text":"UU02"},{"text":"UU03"}],[{"text":"UU04"},{"text":"UU05"},{"text":"UU06"}],[{"text":"UU07"},{"text":"UU08"},{"text":"UU09"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# UU01

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '基本輸出'}, { text: '長方體體積' }],
      [{ text: '整數除法' }, { text: '判斷大小月' }],
      [{ text: '數字平方和' }, { text: '求兩數和(檔尾)' }],
      // [{text:'btn'},{text:'btn'}, {text:'btn'}, {text:'btn'}],
      [{text: '回110-2'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"基本輸出"},{"text":"長方體體積"}],[{"text":"整數除法"},{"text":"判斷大小月"}],[{"text":"數字平方和"},{"text":"求兩數和(檔尾)"}],[{"text":"回110-2"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# UU02

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '倒印數列'}, { text: '向量內積' }],
      [{ text: '印字串及其長度' }, { text: '數列兩兩對調' }],
      [{ text: '字串大小寫個數' }, { text: '矩陣轉置' }],
      // [{text:'btn'},{text:'btn'}, {text:'btn'}, {text:'btn'}],
      [{text: '回110-2'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"倒印數列"},{"text":"向量內積"}],[{"text":"印字串及其長度"},{"text":"數列兩兩對調"}],[{"text":"字串大小寫個數"},{"text":"矩陣轉置"}],[{"text":"回110-2"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# UU03

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '印三角形函數'}, { text: '陣列平均值' }],
      [{ text: '爬樓梯' }, { text: '河內塔問題1' }],
      //[{ text: '字串大小寫個數' }, { text: '矩陣轉置' }],
      // [{text:'btn'},{text:'btn'}, {text:'btn'}, {text:'btn'}],
      [{text: '回110-2'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"印三角形函數"},{"text":"陣列平均值"}],[{"text":"爬樓梯"},{"text":"河內塔問題1"}],[{"text":"回110-2"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# UU04

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '排序（10數，大到小）'}, { text: '排序(Ｎ個數)' }],
      [{ text: '反數相加' }, { text: '得分' }],
      //[{ text: '字串大小寫個數' }, { text: '矩陣轉置' }],
      // [{text:'btn'},{text:'btn'}, {text:'btn'}, {text:'btn'}],
      [{text: '回110-2'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"排序（10數，大到小）"},{"text":"排序(Ｎ個數)"}],[{"text":"反數相加"},{"text":"得分"}],[{"text":"回110-2"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# UU05

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '成績指標'}, { text: '排序 (10數，特殊規則）' }],
      [{ text: '書本的位置' }, { text: ' ' }],
      //[{ text: '字串大小寫個數' }, { text: '矩陣轉置' }],
      // [{text:'btn'},{text:'btn'}, {text:'btn'}, {text:'btn'}],
      [{text: '回110-2'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"成績指標"},{"text":"排序 (10數，特殊規則）"}],[{"text":"書本的位置"},{"text":" "}],[{"text":"回110-2"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# UU06

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '七進位'}, { text: '十六進位' }],
      [{ text: '蝸牛爬牆' }, { text: ' ' }],
      //[{ text: '字串大小寫個數' }, { text: '矩陣轉置' }],
      // [{text:'btn'},{text:'btn'}, {text:'btn'}, {text:'btn'}],
      [{text: '回110-2'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"七進位"},{"text":"十六進位"}],[{"text":"蝸牛爬牆"},{"text":" "}],[{"text":"回110-2"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# UU07

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '整數排序'}],
      [{text: '回110-2'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"整數排序"}],[{"text":"回110-2"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# UU08

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '線段交集'}, { text: '資料排序'}],
      [{text: '回110-2'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"線段交集"},{"text":"資料排序"}],[{"text":"回110-2"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}

# UU09

```javascript
{
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '幾A幾B'}, { text: '第k小的排列'}],
      [{text: '回110-2'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
```

{"myStr":"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:","keyboard":[[{"text":"幾A幾B"},{"text":"第k小的排列"}],[{"text":"回110-2"}],[{"text":"回主選單"}]],"resizeKeyboard":true,"oneTimeKeyboard":true,"selective":false}
