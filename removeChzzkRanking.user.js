// ==UserScript==
// @name         후원랭킹 지우기
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ㅈㄱㄴ
// @author       역붕이
// @match        https://chzzk.naver.com/live/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', ()=>{
        setTimeout(removeRankingDivafsdfsd, 1000)
    })

    function removeRankingDivafsdfsd() {
        var targetElement = document.querySelector('div.live_chatting_ranking_container__RVHvS');
        if (targetElement) {
            targetElement.remove();
        }
    }
})();
