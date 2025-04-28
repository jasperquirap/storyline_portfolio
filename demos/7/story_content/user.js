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
var newpin = player.GetVar("PIN");
if (newpin == "ACCESS DENIED"){
player.SetVar("PIN", "1");
}
else{
player.SetVar("PIN", newpin.concat("1"));}
}

window.Script2 = function()
{
  var player = GetPlayer();
var newpin = player.GetVar("PIN");
if (newpin == "ACCESS DENIED"){
player.SetVar("PIN", "2");
}
else{
player.SetVar("PIN", newpin.concat("2"));}
}

window.Script3 = function()
{
  var player = GetPlayer();
var newpin = player.GetVar("PIN");
if (newpin == "ACCESS DENIED"){
player.SetVar("PIN", "3");
}
else{
player.SetVar("PIN", newpin.concat("3"));}
}

window.Script4 = function()
{
  var player = GetPlayer();
var newpin = player.GetVar("PIN");
if (newpin == "ACCESS DENIED"){
player.SetVar("PIN", "4");
}
else{
player.SetVar("PIN", newpin.concat("4"));}
}

window.Script5 = function()
{
  var player = GetPlayer();
var newpin = player.GetVar("PIN");
if (newpin == "ACCESS DENIED"){
player.SetVar("PIN", "5");
}
else{
player.SetVar("PIN", newpin.concat("5"));}
}

window.Script6 = function()
{
  var player = GetPlayer();
var newpin = player.GetVar("PIN");
if (newpin == "ACCESS DENIED"){
player.SetVar("PIN", "6");
}
else{
player.SetVar("PIN", newpin.concat("6"));}
}

window.Script7 = function()
{
  var player = GetPlayer();
var newpin = player.GetVar("PIN");
if (newpin == "ACCESS DENIED"){
player.SetVar("PIN", "7");
}
else{
player.SetVar("PIN", newpin.concat("7"));}
}

window.Script8 = function()
{
  var player = GetPlayer();
var newpin = player.GetVar("PIN");
if (newpin == "ACCESS DENIED"){
player.SetVar("PIN", "8");
}
else{
player.SetVar("PIN", newpin.concat("8"));}
}

window.Script9 = function()
{
  var player = GetPlayer();
var newpin = player.GetVar("PIN");
if (newpin == "ACCESS DENIED"){
player.SetVar("PIN", "9");
}
else{
player.SetVar("PIN", newpin.concat("9"));}
}

window.Script10 = function()
{
  var player = GetPlayer();
var newpin = player.GetVar("PIN");
if (newpin == "ACCESS DENIED"){
player.SetVar("PIN", "0");
}
else{
player.SetVar("PIN", newpin.concat("0"));}
}

window.Script11 = function()
{
  var player = GetPlayer();
player.SetVar("PIN", "");
}

window.Script12 = function()
{
  var player = GetPlayer();
var jspin = player.GetVar("PIN");
if (jspin != "ACCESS DENIED")
{
player.SetVar("PIN", jspin.slice(0,-1));
}
else
{
player.SetVar("PIN", "");
}
}

};
