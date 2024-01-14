$(()=>{

    function startClock(){
        let now = new Date();

        let hours = now.getHours() % 12;
        let minute = now.getMinutes();
        let second = now.getSeconds();
        let standard = 180;

        let hourDeg = (hours*30)+(minute*0.5) +standard;
        let minuteDeg = (minute*6)+(second * 0.1)+standard;
        let secondDeg = second * 6+standard;

        $(`main > .timeZone > .clock > .hours`).css({transform:`rotate(${hourDeg}deg)`});
        $(`main > .timeZone > .clock > .minute`).css({transform:`rotate(${minuteDeg}deg)`});
        $(`main > .timeZone > .clock > .second`).css({transform:`rotate(${secondDeg}deg)`});

    }

    setInterval(startClock,60);
})