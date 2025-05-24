document.addEventListener("DOMContentLoaded",function(){var e,n=document.getElementById("web_bg");n&&(e=document.querySelector(".music-page")||window.location.pathname.includes("/music/")?"url(/img/music-bg.jpg)":document.querySelector(".banner").style.backgroundImage,n.style.cssText=`
      background-image: ${e};
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-size: cover;
    `,n=document.querySelector("#banner"))&&(n.style.backgroundImage="none",e=n.querySelector(".mask"))&&(e.style.backgroundColor="rgba(0,0,0,0)")});