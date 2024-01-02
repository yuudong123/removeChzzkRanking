// ==UserScript==
// @name         후원랭킹 지우기
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ㅈㄱㄴ
// @author       역붕이
// @match        https://chzzk.naver.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function removeRankingDivafsdfsd() {
    var targetElement = document.querySelector("div.live_chatting_ranking_container__RVHvS");
    if (targetElement) {
      targetElement.style.display = "none";
    }
  }

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        removeRankingDivafsdfsd();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
