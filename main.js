// ==UserScript==
// @name       addlist
// @namespace  a
// @version    1
// @description  listinbutton
// @match      https://tweetdeck.twitter.com/
// @copyright 2020 @169z87mn
/* load AWS */
// @require https://sdk.amazonaws.com/js/aws-sdk-2.713.0.min.js
// ==/UserScript==
const AWS = require('aws-sdk');

(() => {
    alert("aa");
    let elements = document.getElementsByClassName("js-tweet-actions tweet-actions full-width");
    let div = document.createElement('<li class="tweet-action-item pull-left margin-r--10"><a class="js-reply-action tweet-action position-rel" href="#" rel="reply" _pageexpand_="4104176"><i class="icon icon-reply txt-center pull-left"></i><span class="pull-right icon-reply-toggle margin-l--2 margin-t--1 txt-size--12 js-reply-count reply-count"></span><span class="is-vishidden">Reply</span><span class="reply-triangle"></span></a></li>');
    elements.appendChild(div);
})

function doLambda(userId) {
    AWS.config.update({
        accessKeyId: "",
        secretAccessKey: "",
        region: "us-east-2"
    });

    let lambda = new AWS.Lambda();

    let payload = {
        "user_id": userId
    }
    payload = JSON.stringify(payload);

    let params = {
        FunctionName: 'addListForTweetDeck',
        InvocationType: "Event",
        Payload: payload
    };

    lambda.invoke(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
        }
        else {
            console.log(data);
        }
    });
}
