function loginbox(){
    alert("К сожалению,эта кнопка нужна лишь для выведения alert")
}

function setmindate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //т.к. Январь == 0
    var yyyy = today.getFullYear();
    if(dd<10){
    dd='0'+dd
    } 
    if(mm<10){
    mm='0'+mm
    } 

    today = yyyy+'-'+mm+'-'+dd;
    maxday = yyyy+'-'+mm+'-'+(dd+14)
    document.getElementById("dateinputs").setAttribute("min", today);
    document.getElementById("dateinputs").setAttribute("value", today)
    document.getElementById("dateinputs").setAttribute("max", maxday);
}

function ticket(){
    document.getElementById("gobox").innerHTML = "ОТПРАВЛЕНИЕ : " + (document.getElementById("gotext").value)
    document.getElementById("awaybox").innerHTML = "ПРИБЫТИЕ : " + (document.getElementById("awaytext").value)
    document.getElementById("datebox").innerHTML = "ДАТА : " + (document.getElementById("dateinputs").value)

    document.getElementById("ticketbox").animate([
        { transform: 'translate3D(-100px, 0, 0)', opacity: '0%' },
        { transform: 'translate3D(0, 0, 0)', opacity: '100%' }
    ], {
        duration: 2000,
        easing: "ease-out",
        fill: "forwards"
    })
}