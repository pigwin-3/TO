function fax(truFal)
{
    //starts preformanse monitor
    var t0 = performance.now();
    //gets data from local storage
    const qn = localStorage.getItem('TheQN');
    //parces the json string (from practice.js)
    var qnn = (JSON.parse(qn))
    //checks if the awnser was correct or not
    if (truFal == qnn.trufal){
        //console.log ("correct")
        var classTruFal = ("trufax")
        var faltru = ("Riktig!")
    }
    else {
        //console.log("wrong")
        var classTruFal = ("falfax")
        var faltru = ("Feil")
    }
    var Temp = '<div class="top3">'
        Temp += '<div class="imgbox"><div class="img2" style="background-image: url(' + qnn.img + ');"><div class="imgsrc">Kjilde: ' + qnn.srcimg + '</div></div></div>'
        Temp += '<div class="fax"><div class="' + classTruFal + '">' + faltru + '</div><div class="text">' + qnn.fact + '</div></div>'
        Temp += '</div>'
        Temp += '<div class="low2">'
        //ser om det er noe data igjen
        const cont = localStorage.getItem('TheData');
        if (cont == 'undefined') {
            Temp += '<button class="btnnex">ferdig</button>'
        }
        else if (cont == undefined) {
            Temp += '<button class="btnnex">Ferdig</button>'
        }
        else {
            Temp += '<button class="btnnex">neste</button>'
        }
        Temp += '</div>'
    //stops preformanse timer
    var t1 = performance.now();
    //makes the bottem bar with preformanse and fact sorse
    Temp += '</div><!-- 1/2 1 = hovedside, katgori velging, spillsiden 2 = spørsmålet, sanheten --> <div class="bottom">fact sorse: ' + qnn.srcfact + ' ms page build: ' + (~~(t1 - t0)) + ' ms</div>';
    //inserts the html into the document
    document.getElementById("main").innerHTML = Temp;
    //removes TheQN from localstorage
    localStorage.removeItem('TheQN');
}