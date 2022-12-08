function sumGame()
{
    var timeID = JSON.parse(localStorage.getItem('timeID'));

    console.log(timeID.id)
    fetch(api + "/time/get/" + timeID.id)
        .then((response) => response.json())
        .then(           
            data => {
                data = data.pop();
                console.log(data)
                var Temp = '<div class="top4">'
                    Temp += '<div class="title">goofy ahhh</div>'
                    Temp += '<div class="text"></div>'
                    Temp += '<div class="result">'
                    document.getElementById("main").innerHTML = Temp + '</div></div><div class="bottom">bunnen</div>';
                    for (let count = 0; count < 10; count++) {
                        console.log(count)
                        Temp += '<div class="sumuary"><div class="summary_txtbox"><div class="sumuary_txt_big">';
                        Temp += count
                        Temp += '</div><div class="summary_txt_trufal"><div class="sumuary_txt">var:<br>'
                        Temp += count
                        Temp += '</div><div class="sumuary_txt">du svarte:<br>'
                        Temp += count
                        Temp += '</div></div><div class="sumuary_txt_sml">spørsmål id: '
                        eval('var ' + 'tem ' + '= ' + data.con + count + ';');
                        Temp += tem
                        Temp += '</div></div>'
                        Temp += '<img src="icon/cor'
                        Temp += count
                        Temp += '.svg" alt="checkmark" width="10%"></div>'
                        document.getElementById("main").innerHTML = Temp;
                    }
                    Temp += '</div>'
                    Temp += '</div>'
                    Temp += '<div class="low2"><button class="btnfin" onClick="start()">hovedside</button></div>'
                    Temp += '</div><div class="bottom">ms page build: ' + /*(~~(t1 - t0)) +*/ ' ms</div>';
                    document.getElementById("main").innerHTML = Temp;
            }
        )
        
}