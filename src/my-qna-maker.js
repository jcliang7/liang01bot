const { fireDB } = require('./firebase');
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const invariant_1 = __importDefault(require("invariant"));
const RECOMMENDED_THRESHOLD = 50;

function base64ToString(inputStr) {
    let Buffer = require('buffer').Buffer;
    let buf = Buffer.from(inputStr, 'base64');
    let outStr = buf.toString();
    return outStr;
}

function isJsonObj(str) {
    try {
        //   console.log("try");
        JSON.parse(str)
    } catch (e) {
        //   isOkJson = 0;
        console.log("str is not a JSON String:\n" + e);
        return false;
    }
    return true;
}

module.exports = function qnaMaker({ resourceName, knowledgeBaseId, endpointKey, isTest, qnaId, scoreThreshold = RECOMMENDED_THRESHOLD, strictFilters, }) {
    invariant_1.default(typeof resourceName === 'string' && resourceName.length > 0, 'qna-maker: `resourceName` is a required parameter.');
    invariant_1.default(typeof knowledgeBaseId === 'string' && knowledgeBaseId.length > 0, 'qna-maker: `knowledgeBaseId` is a required parameter.');
    invariant_1.default(typeof endpointKey === 'string' && endpointKey.length > 0, 'qna-maker: `endpointKey` is a required parameter.');
    return function QnaMaker(context, { next }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!context.event.isText || !context.session) {
                return next;
            }
            const { data } = yield axios_1.default.post(`https://${resourceName}.azurewebsites.net/qnamaker/knowledgebases/${knowledgeBaseId}/generateAnswer`, {
                isTest,
                qnaId,
                question: context.event.text,
                scoreThreshold,
                strictFilters,
                top: 1,
                userId: context.session.user ? context.session.user.id : undefined,
            }, {
                headers: {
                    Authorization: `EndpointKey ${endpointKey}`,
                },
            });
            const topAnswer = data.answers[0];
            if (!topAnswer || (next && topAnswer.id === -1)) {
                context.setAsNotHandled();
                return next;
            }
            return function TopAnswer() {
                return __awaiter(this, void 0, void 0, function* () {
                    if (topAnswer.id !== -1) {
                        context.setIntent(`qna_${topAnswer.id}`);
                        context.setAsHandled();
                    }
                    else {
                        context.setAsNotHandled();
                    }



                    var isBase64 = require('is-base64');
                    if (isBase64(topAnswer.answer)) {
                        try {
                            yield context.sendText(base64ToString(topAnswer.answer), { parseMode: "html" });
                        } catch (error) {
                            yield context.sendText("Parse Html Error: " + error);
                            yield context.sendText("系統發生錯誤!!\n請您填寫回饋表單，幫助我們改善系統，謝謝。\nhttps://forms.gle/PMfMpt6coz8J6xbE8");
                            let errorDoc = {
                                error: error.toString(),
                                topAnswer: topAnswer
                            }

                            let timeInMs = Date.now().toString();
                            fireDB.collection("err").doc(timeInMs).set(errorDoc);
                        }
                    } else {
                        //if first char is '{'
                        //check if the str is a json str
                        let str = topAnswer.answer;
                        if (isJsonObj(str)) {
                            const replyMarkup = JSON.parse(str);
                            yield context.sendText(replyMarkup.myStr, { replyMarkup });
                        } else {
                            yield context.sendText(topAnswer.answer, { parseMode: "html" });
                        }
                    }
                });
            };
        });
    };
};
//# sourceMappingURL=index.js.map