function practiceSum()
{
    //starts preformanse monitor
    var t0 = performance.now();
    //checks if the awnser was correct or not
    var Temp = '<div class="top4">'
        Temp += '<div class="title">goofy ahhh</div>'
        Temp += '<div class="text">Det fins mange type poteter for eksempel: søt potet, vanlig potet, skabb potet og Hitler potet. -ikkepedia</div>'
        Temp += '<div class="result">'
        console.log('ahh')
        Temp += '</div>'
        Temp += '</div>'
        Temp += '<div class="low2"><button class="btnfin" onClick="start()">hovedside</button></div>'
        var t1 = performance.now();
        //makes the bottem bar with preformanse
        Temp += '</div><div class="bottom">ms page build: ' + (~~(t1 - t0)) + ' ms</div>';
        document.getElementById("main").innerHTML = Temp;
        localStorage.clear();
}