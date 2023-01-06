setInterval(() =>{

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    
    let circleHours = document.getElementById('circleHours');
    let circleMinutes = document.getElementById('circleMinutes')
    let circleSeconds = document.getElementById('circleSeconds');
    
    let hi = document.querySelector('.hdot');
    let mi = document.querySelector('.mdot');
    let si = document.querySelector('.sdot');
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    // 0 before time
    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }
    
    hours.innerHTML = h + '</br><span>hours</span>';
    minutes.innerHTML = m + '</br><span>minutes</span>';
    seconds.innerHTML = s + '</br><span>seconds</span>';
    
    circleHours.style.strokeDashoffset = 445 - (445 * h) / 24;
    circleMinutes.style.strokeDashoffset= 445 - (445 * m) / 60;
    circleSeconds.style.strokeDashoffset= 445 - (445 * s) / 60;
    
    hi.style.transform = `rotate(${ (h * 15) - 2 }deg)`;
    mi.style.transform = `rotate(${ (m * 6) - 2 }deg)`;
    si.style.transform = `rotate(${ (s * 6) - 2 }deg)`;
    
    });

const makeVisible = document.querySelector('.makeVisibleBtn');
const invisible = document.querySelector('.hiddenContainer');

makeVisible.addEventListener ('click', () => {
    invisible.style.visibility = 'visible';
    makeVisible.remove();
});
    