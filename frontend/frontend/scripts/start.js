var t0 = performance.now();
fetch('http://localhost:3000/cat')
    .then((response) => response.json())
    .then(
        
        data => {
            let api = data.pop();
            console.log('fetched from api ' + api + ' ms');
            console.log(data);
            if (data.length > 0) {

            var Temp = '<div class="title">Feilinfo</div><div class="top1">';
            data.forEach((itemData) => {
                Temp += '<div class="box">';
                Temp += '<div class="box-1n3">' + itemData.Name + '</div>';
                Temp += '<div class="box-info">' + itemData.about + '</div>';
                Temp += '<div class="box-1n3"><button class="btn" id="' + itemData.ID + '">velg</button> </div>';
                Temp += '</div>'
            });
            var t1 = performance.now();
            Temp += '</div><!-- 1/2 1 = hovedside, katgori velging, spillsiden 2 = spørsmålet, sanheten --> <div class="bottom"> api response: ' + (~~api) + ' ms page build: ' + (~~(t1 - t0)) + ' ms</div>';
            document.getElementById("main").innerHTML = Temp;
            }
        }
    );