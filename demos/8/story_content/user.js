window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();

var str = player.GetVar("Picked_Players");
var rev_str = str.split('').reverse().join('');

var char = '-';
// Instance number to find (4th instance)
var instance = 4;

// Initialize variables
var count = 0;
var index = -1;

// Loop through the string to find the fourth instance
for (let i = 0; i < rev_str.length; i++) {
    if (rev_str[i] === char) {
        count++;
        if (count === instance) {
            index = i;
            break;
        }
    }
}

rev_str = rev_str.slice(index+1);

str = rev_str.split('').reverse().join('');

player.SetVar("Picked_Players", str);
player.SetVar("Array_Test", index);
}

window.Script2 = function()
{
  var player = GetPlayer();
var picked_players = player.GetVar("Picked_Players");
var last_one = player.GetVar("Last_One");
var player_1;
var player_2;
var picker_1;
var picker_2;
var same_value;
var list_array = picked_players.split(",");
var last_player = player.GetVar("Last_Player");


if (last_one == 1<0)
{
picker_1 = Math.floor(Math.random() * 29) + 1;
picker_2 = Math.floor(Math.random() * 29) + 1;
same_value = picker_1 == picker_2;
player_1 = "-" + picker_1 + "-";
player_2 = "-" + picker_2 + "-";
player.SetVar("Test","Here1");

while (picked_players.includes(player_1) == 1>0 || picked_players.includes(player_2) == 1>0 || same_value == true)
{
picker_1 = Math.floor(Math.random() * 29) + 1;
picker_2 = Math.floor(Math.random() * 29) + 1;
player_1 = "-" + picker_1 + "-";
player_2 = "-" + picker_2 + "-";
same_value = picker_1 == picker_2;
player.SetVar("Test","Here2");
}

player.SetVar("Player_1", player_1);
player.SetVar("Player_2", player_2);

player.SetVar("Picker_1_Test", picker_1);
player.SetVar("Picker_2_Test", picker_2);

picked_players = picked_players + player_1 + "," + player_2;



list_array = picked_players.split(",");

picked_players = picked_players.concat(",");

player.SetVar("Array_Test", list_array.length);
player.SetVar("Test",list_array.toString());

player.SetVar("Picked_Players", picked_players);

player.SetVar("Player_1", picker_1);
player.SetVar("Player_2", picker_2);
}
if (last_one == 1>0)
{

if (last_player == 0)
{
picker_1 = Math.floor(Math.random() * 29) + 1;
player_1 = "-" + picker_1 + "-";
last_player = picker_1;
player.SetVar("Last_Player", last_player);
while (picked_players.includes(player_1) == 1>0)
{
picker_1 = Math.floor(Math.random() * 29) + 1;
player_1 = "-" + picker_1 + "-";
last_player = picker_1;
player.SetVar("Last_Player", last_player);
}
}

if (last_player != 0)
{
picker_1 = last_player;
}

picker_2 = Math.floor(Math.random() * 29) + 1;

same_value = picker_1 == picker_2;

while (same_value == true)
{
picker_2 = Math.floor(Math.random() * 29) + 1;
}

}
player.SetVar("Player_1", picker_1);
player.SetVar("Player_2", picker_2);

}

};
