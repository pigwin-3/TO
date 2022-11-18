function game(game_id)
{

console.log(game_id);
var t0 = performance.now();

var Temp = '<div class="title">spillside</div>';
Temp += '<div class="top1">'
Temp += '<button class="btn2">spill nå</button>'
Temp += '<button class="btn2">øvelse</button>'
var t1 = performance.now();
Temp += '</div> <div class="bottom"> api response: no api request, page build: ' + (~~(t1 - t0)) + ' ms</div>';
document.getElementById("main").innerHTML = Temp;
}