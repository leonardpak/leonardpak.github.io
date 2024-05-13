for(var i = 0; i < 2612; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('DragDirection', '');

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

SetGlobalVariableValue('MainScreenXLeftLimit', '-220');

SetGlobalVariableValue('MainScreenXRightLimit', '270');

	MoveWidgetTo('u2606', GetNum('-50'), GetNum('0'),'none',500);

}

if ((GetGlobalVariableValue('DragDirection')) == ('')) {

SetGlobalVariableValue('ContentMenuYPosition', '0');

SetGlobalVariableValue('ContentMenuYLimit', '-210');

SetWidgetSelected('u156');
}

if ((GetGlobalVariableValue('DragDirection')) == ('')) {

SetWidgetSelected('u2497');
SetWidgetSelected('u2512');
SetGlobalVariableValue('FWDashCardsYPosition', '-70');

SetGlobalVariableValue('FWDashCardsYLimit', '-360');

	MoveWidgetTo('u2172', GetNum('0'), GetNum('-70'),'none',500);
function waitu62244d141cfe4bb884bffb2eb28ce7511() {

	SetPanelState('u2171', 'pd1u2171','none','',500,'none','',500);

	SetPanelState('u2558', 'pd1u2558','none','',500,'none','',500);
function waitufe64d3aea369436b8d765603051be04f1() {

	SetPanelState('u2181', 'pd1u2181','none','',500,'none','',500);
function waituf957e0cfb1fb4807a93c0e25f2b67b4c1() {

	SetPanelState('u2194', 'pd1u2194','none','',500,'none','',500);
function waitu54fdb8db52fa4ed8994821a2f18eb23c1() {

	SetPanelState('u2253', 'pd1u2253','none','',500,'none','',500);
function waitud4fdc0f499914168b31e853d19cae1fd1() {

	SetPanelState('u2312', 'pd1u2312','none','',500,'none','',500);
function waitu28be9fc1eaaa430aa05d3bb77b3913501() {

	SetPanelState('u2371', 'pd1u2371','none','',500,'none','',500);
function waituf0c7aabe6d47489e8115bb213360a2fc1() {

	SetPanelState('u2430', 'pd1u2430','none','',500,'none','',500);
}
setTimeout(waituf0c7aabe6d47489e8115bb213360a2fc1, 500);
}
setTimeout(waitu28be9fc1eaaa430aa05d3bb77b3913501, 500);
}
setTimeout(waitud4fdc0f499914168b31e853d19cae1fd1, 500);
}
setTimeout(waitu54fdb8db52fa4ed8994821a2f18eb23c1, 500);
}
setTimeout(waituf957e0cfb1fb4807a93c0e25f2b67b4c1, 500);
}
setTimeout(waitufe64d3aea369436b8d765603051be04f1, 700);
}
setTimeout(waitu62244d141cfe4bb884bffb2eb28ce7511, 3500);

}

if ((GetGlobalVariableValue('DragDirection')) == ('')) {

SetGlobalVariableValue('FWDetailCurrentTimeView', '+24h');

SetGlobalVariableValue('FWDetailCurrentField', 'Homestead');

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

SetGlobalVariableValue('FWDetailCardsXLimit', '-576');

SetGlobalVariableValue('FWDetailCardsSelectorY', '52');

SetGlobalVariableValue('FWDetailDataYPosition', '0');

SetGlobalVariableValue('FWDetailDataYLimit', '-174');

SetGlobalVariableValue('FWDetailDataForecastX', '-223');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetGlobalVariableValue('FWDetailDataXLimit', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

}

});

if (bIE) document.getElementById('u151').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u151'); });
else {
    document.getElementById('u151').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u151'); }, true);
    document.getElementById('u151').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u151'); }, true);
}

widgetIdToDragFunction['u151'] = function() {
var e = windowEvent;

if ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '')) && ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == ('')))) {

SetGlobalVariableValue('DragDirection', 'x');

}
else
if ((('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == (''))) {

SetGlobalVariableValue('DragDirection', 'y');

}

if (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Tools'))) {

	BringToFront("u171");

	BringToFront("u169");

	BringToFront("u2586");

	MoveWidgetBy('u171',widgetDragInfo.xDelta,0,'none',500);

	MoveWidgetBy('u2586',widgetDragInfo.xDelta,0,'none',500);

	MoveWidgetBy('u169',widgetDragInfo.xDelta,0,'none',500);

SetGlobalVariableValue('MainScreenXPosition', '' + (GetNum(GetGlobalVariableValue('MainScreenXPosition')) + GetNum(GetGlobalVariableValue('DragX'))) + '');

}

if (((GetGlobalVariableValue('MainScreenXPosition')) < Number('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + '')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Tools'))) {

	MoveWidgetTo('u171', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('50'),'none',500);

	MoveWidgetTo('u169', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u2586', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('0'),'none',500);

SetGlobalVariableValue('MainScreenXPosition', '' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + '');

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) > Number('0')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Tools'))) {

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'none',500);

SetGlobalVariableValue('MainScreenXPosition', '0');

}

}

widgetIdToDragDropFunction['u151'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') > Number('25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Tools'))))) {

	SendToBack("u169");

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waitu5718e65a2f274e2abb15f345c0e57daf1() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u151','hidden','none',500);
}
setTimeout(waitu5718e65a2f274e2abb15f345c0e57daf1, 350);

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) >= Number('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + '')) && (((GetGlobalVariableValue('MainScreenXPosition')) < Number('' + (GetGlobalVariableValue('MainScreenXLeftLimit') / 2) + '')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Tools')))) {

	MoveWidgetTo('u169', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('0'),'swing',350);
function waitu56427b3deef545c6a5176206118835621() {

SetGlobalVariableValue('MainScreenXPosition', '' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + '');
}
setTimeout(waitu56427b3deef545c6a5176206118835621, 350);

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) >= Number('' + (GetGlobalVariableValue('MainScreenXLeftLimit') / 2) + '')) && (((GetGlobalVariableValue('MainScreenXPosition')) <= Number('0')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Tools')))) {

	SendToBack("u169");

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waitu222cf850be224a60b8f7e37053c82a091() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u151','hidden','none',500);
}
setTimeout(waitu222cf850be224a60b8f7e37053c82a091, 350);

}

if (true) {

SetGlobalVariableValue('DragDirection', '');

}

}

if (bIE) document.getElementById('u2172').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u2172'); });
else {
    document.getElementById('u2172').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u2172'); }, true);
    document.getElementById('u2172').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u2172'); }, true);
}

widgetIdToDragFunction['u2172'] = function() {
var e = windowEvent;

if ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '')) && ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == ('')))) {

SetGlobalVariableValue('DragDirection', 'x');

}
else
if ((('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == (''))) {

SetGlobalVariableValue('DragDirection', 'y');

}

if ((GetGlobalVariableValue('DragDirection')) == ('y')) {

	MoveWidgetBy('u2172',0,widgetDragInfo.yDelta,'none',500);

SetGlobalVariableValue('FWDashCardsYPosition', '' + (GetNum(GetGlobalVariableValue('FWDashCardsYPosition')) + GetNum(GetGlobalVariableValue('DragY'))) + '');

}

if ((GetGlobalVariableValue('FWDashCardsYPosition')) < Number('' + (GetGlobalVariableValue('FWDashCardsYLimit')) + '')) {

	MoveWidgetTo('u2172', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDashCardsYLimit')) + ''),'none',500);

SetGlobalVariableValue('FWDashCardsYPosition', '' + (GetGlobalVariableValue('FWDashCardsYLimit')) + '');

}
else
if ((GetGlobalVariableValue('FWDashCardsYPosition')) > Number('0')) {

	MoveWidgetTo('u2172', GetNum('0'), GetNum('0'),'none',500);

SetGlobalVariableValue('FWDashCardsYPosition', '0');

}

if (((GetGlobalVariableValue('FWDashCardsYPosition')) > Number('-70')) && ((GetGlobalVariableValue('FWDashCardsYPosition')) <= Number('-25'))) {

	SetPanelState('u2173', 'pd0u2173','fade','',250,'fade','',250);

}
else
if ((GetGlobalVariableValue('FWDashCardsYPosition')) > Number('-25')) {

	SetPanelState('u2173', 'pd1u2173','fade','',250,'fade','',250);

}

}

widgetIdToDragDropFunction['u2172'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('FWDashCardsYPosition')) > Number('-70')) && ((GetGlobalVariableValue('FWDashCardsYPosition')) <= Number('-25'))) {

	MoveWidgetTo('u2172', GetNum('0'), GetNum('-70'),'swing',300);

SetGlobalVariableValue('FWDashCardsYPosition', '-70');

}
else
if ((GetGlobalVariableValue('FWDashCardsYPosition')) > Number('-25')) {

	SetPanelState('u2173', 'pd2u2173','fade','',250,'fade','',250);

	SetPanelState('u2181', 'pd0u2181','none','',500,'none','',500);

	SetPanelState('u2194', 'pd0u2194','none','',500,'none','',500);

	SetPanelState('u2253', 'pd0u2253','none','',500,'none','',500);

	SetPanelState('u2312', 'pd0u2312','none','',500,'none','',500);

	SetPanelState('u2371', 'pd0u2371','none','',500,'none','',500);

	SetPanelState('u2430', 'pd0u2430','none','',500,'none','',500);
function waitud8105f8bb8db421baffa56c775f3371f1() {

	MoveWidgetTo('u2172', GetNum('0'), GetNum('-70'),'swing',300);

SetGlobalVariableValue('FWDashCardsYPosition', '-70');
function waitue49bb2265b574621acc8859828fe524e1() {

	SetPanelState('u2173', 'pd0u2173','none','',500,'none','',500);
function waituedcf8eee9a0649599e651e7e4e54f44d1() {

	SetPanelState('u2181', 'pd1u2181','none','',500,'none','',500);
function waitu8c17e387a4904545b66cf079a57938471() {

	SetPanelState('u2194', 'pd1u2194','none','',500,'none','',500);
function waitu9590c967c1ff476c90f360f91cd2da781() {

	SetPanelState('u2253', 'pd1u2253','none','',500,'none','',500);
function waitu7979d7bb8e20474fbf3160267716be411() {

	SetPanelState('u2312', 'pd1u2312','none','',500,'none','',500);
function waitub5a2ec6e754344a78865440f07c66cdf1() {

	SetPanelState('u2371', 'pd1u2371','none','',500,'none','',500);
function waitucc7d3880c17b4bfb95c25d42e418ce261() {

	SetPanelState('u2430', 'pd1u2430','none','',500,'none','',500);
}
setTimeout(waitucc7d3880c17b4bfb95c25d42e418ce261, 500);
}
setTimeout(waitub5a2ec6e754344a78865440f07c66cdf1, 500);
}
setTimeout(waitu7979d7bb8e20474fbf3160267716be411, 500);
}
setTimeout(waitu9590c967c1ff476c90f360f91cd2da781, 500);
}
setTimeout(waitu8c17e387a4904545b66cf079a57938471, 500);
}
setTimeout(waituedcf8eee9a0649599e651e7e4e54f44d1, 300);
}
setTimeout(waitue49bb2265b574621acc8859828fe524e1, 250);
}
setTimeout(waitud8105f8bb8db421baffa56c775f3371f1, 1000);

}

if (true) {

SetGlobalVariableValue('DragDirection', '');

}

}

if (bIE) document.getElementById('u1157').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u1157'); });
else {
    document.getElementById('u1157').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u1157'); }, true);
    document.getElementById('u1157').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u1157'); }, true);
}

widgetIdToDragFunction['u1157'] = function() {
var e = windowEvent;

if ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '')) && ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == ('')))) {

SetGlobalVariableValue('DragDirection', 'x');

}
else
if ((('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == (''))) {

SetGlobalVariableValue('DragDirection', 'y');

}

if ((GetGlobalVariableValue('DragDirection')) == ('x')) {

	MoveWidgetBy('u175',widgetDragInfo.xDelta,0,'none',500);

SetGlobalVariableValue('FWDetailCardsXPosition', '' + (GetNum(GetGlobalVariableValue('FWDetailCardsXPosition')) + GetNum(GetGlobalVariableValue('DragX'))) + '');

}

if ((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('' + (GetGlobalVariableValue('FWDetailCardsXLimit')) + '')) {

	MoveWidgetTo('u175', GetNum('' + (GetGlobalVariableValue('FWDetailCardsXLimit')) + ''), GetNum('0'),'none',500);

SetGlobalVariableValue('FWDetailCardsXPosition', '' + (GetGlobalVariableValue('FWDetailCardsXLimit')) + '');

}
else
if ((GetGlobalVariableValue('FWDetailCardsXPosition')) > Number('0')) {

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'none',500);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

}

}

widgetIdToDragDropFunction['u1157'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('0')) && (((GetGlobalVariableValue('FWDetailCardsXPosition')) > Number('-288')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') < Number('-25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('FWDetailCurrentField')) == ('Homestead')))))) {

	MoveWidgetTo('u175', GetNum('-288'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-288');

SetGlobalVariableValue('FWDetailCurrentField', 'Dads Farm');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('0')) && (((GetGlobalVariableValue('FWDetailCardsXPosition')) > Number('-288')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') > Number('25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('FWDetailCurrentField')) == ('Dads Farm')))))) {

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

SetGlobalVariableValue('FWDetailCurrentField', 'Homestead');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('-288')) && (((GetGlobalVariableValue('FWDetailCardsXPosition')) >= Number('-576')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') < Number('-25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('FWDetailCurrentField')) == ('Dads Farm')))))) {

	MoveWidgetTo('u175', GetNum('-576'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-576');

SetGlobalVariableValue('FWDetailCurrentField', 'Airport');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('-288')) && (((GetGlobalVariableValue('FWDetailCardsXPosition')) >= Number('-576')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') > Number('25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('FWDetailCurrentField')) == ('Airport')))))) {

	MoveWidgetTo('u175', GetNum('-288'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-288');

SetGlobalVariableValue('FWDetailCurrentField', 'Dads Farm');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('128')) && ((GetGlobalVariableValue('FWDetailCardsXPosition')) > Number('-160'))) {

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

SetGlobalVariableValue('FWDetailCurrentField', 'Homestead');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('-160')) && ((GetGlobalVariableValue('FWDetailCardsXPosition')) >= Number('-448'))) {

	MoveWidgetTo('u175', GetNum('-288'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-288');

SetGlobalVariableValue('FWDetailCurrentField', 'Dads Farm');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('-448')) && ((GetGlobalVariableValue('FWDetailCardsXPosition')) >= Number('-736'))) {

	MoveWidgetTo('u175', GetNum('-576'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-576');

SetGlobalVariableValue('FWDetailCurrentField', 'Airport');

}

if (true) {

SetGlobalVariableValue('DragDirection', '');

}

}

if (bIE) document.getElementById('u169').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u169'); });
else {
    document.getElementById('u169').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u169'); }, true);
    document.getElementById('u169').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u169'); }, true);
}

widgetIdToDragFunction['u169'] = function() {
var e = windowEvent;

if ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '')) && ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == ('')))) {

SetGlobalVariableValue('DragDirection', 'x');

}
else
if ((('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == (''))) {

SetGlobalVariableValue('DragDirection', 'y');

}

if (((GetGlobalVariableValue('DragDirection')) == ('x')) && (((GetGlobalVariableValue('RevealedMenu')) == ('Content')) && ((GetPanelState('u110')) == ('pd0u110')))) {

	BringToFront("u171");

	BringToFront("u169");

	BringToFront("u2586");

	MoveWidgetBy('u171',widgetDragInfo.xDelta,0,'none',500);

	MoveWidgetBy('u2586',widgetDragInfo.xDelta,0,'none',500);

	MoveWidgetBy('u169',widgetDragInfo.xDelta,0,'none',500);

SetGlobalVariableValue('MainScreenXPosition', '' + (GetNum(GetGlobalVariableValue('MainScreenXPosition')) + GetNum(GetGlobalVariableValue('DragX'))) + '');

}
else
if (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Tools'))) {

	BringToFront("u171");

	BringToFront("u169");

	BringToFront("u2586");

	MoveWidgetBy('u171',widgetDragInfo.xDelta,0,'none',500);

	MoveWidgetBy('u2586',widgetDragInfo.xDelta,0,'none',500);

	MoveWidgetBy('u169',widgetDragInfo.xDelta,0,'none',500);

SetGlobalVariableValue('MainScreenXPosition', '' + (GetNum(GetGlobalVariableValue('MainScreenXPosition')) + GetNum(GetGlobalVariableValue('DragX'))) + '');

}

if (((GetGlobalVariableValue('MainScreenXPosition')) < Number('0')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Content'))) {

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'none',500);

SetGlobalVariableValue('MainScreenXPosition', '0');

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) > Number('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + '')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Content'))) {

	MoveWidgetTo('u171', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('50'),'none',500);

	MoveWidgetTo('u169', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u2586', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('0'),'none',500);

SetGlobalVariableValue('MainScreenXPosition', '' + (GetGlobalVariableValue('MainScreenXRightLimit')) + '');

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) < Number('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + '')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Tools'))) {

	MoveWidgetTo('u171', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('50'),'none',500);

	MoveWidgetTo('u169', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u2586', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('0'),'none',500);

SetGlobalVariableValue('MainScreenXPosition', '' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + '');

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) > Number('0')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Tools'))) {

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'none',500);

SetGlobalVariableValue('MainScreenXPosition', '0');

}

}

widgetIdToDragDropFunction['u169'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('DragDirection')) == ('x')) && (((GetPanelState('u110')) == ('pd0u110')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') < Number('-25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Content')))))) {

	SendToBack("u169");

	SendToBack("u110");

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waitu0d3899a478d6441dbd60ad25ed75ed8f1() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u0','hidden','none',500);

	MoveWidgetTo('u110', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('280'),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('310'),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '0');
}
setTimeout(waitu0d3899a478d6441dbd60ad25ed75ed8f1, 350);

}
else
if (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') > Number('25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Tools'))))) {

	SendToBack("u169");

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waitu7e0d52ddfaef425ebb05d30dbb74c4161() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u151','hidden','none',500);
}
setTimeout(waitu7e0d52ddfaef425ebb05d30dbb74c4161, 350);

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) >= Number('' + (GetGlobalVariableValue('MainScreenXRightLimit') / 2) + '')) && (((GetGlobalVariableValue('MainScreenXPosition')) < Number('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + '')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Content')))) {

	MoveWidgetTo('u169', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('0'),'swing',350);
function waitu9491971ab64946dcbb7e49b58dc545881() {

SetGlobalVariableValue('MainScreenXPosition', '' + (GetGlobalVariableValue('MainScreenXRightLimit')) + '');

	BringToFront("u110");
}
setTimeout(waitu9491971ab64946dcbb7e49b58dc545881, 350);

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) >= Number('0')) && (((GetGlobalVariableValue('MainScreenXPosition')) < Number('' + (GetGlobalVariableValue('MainScreenXRightLimit') / 2) + '')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Content')))) {

	SendToBack("u169");

	SendToBack("u110");

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waitu968c90331a9341b8969ca2fa9807ca6c1() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u0','hidden','none',500);

	MoveWidgetTo('u110', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('280'),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('310'),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '0');
}
setTimeout(waitu968c90331a9341b8969ca2fa9807ca6c1, 350);

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) >= Number('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + '')) && (((GetGlobalVariableValue('MainScreenXPosition')) < Number('' + (GetGlobalVariableValue('MainScreenXLeftLimit') / 2) + '')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Tools')))) {

	MoveWidgetTo('u169', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('0'),'swing',350);
function waitu2dce7aae32834f59abe2b04bba6d337d1() {

SetGlobalVariableValue('MainScreenXPosition', '' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + '');
}
setTimeout(waitu2dce7aae32834f59abe2b04bba6d337d1, 350);

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) >= Number('' + (GetGlobalVariableValue('MainScreenXLeftLimit') / 2) + '')) && (((GetGlobalVariableValue('MainScreenXPosition')) <= Number('0')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Tools')))) {

	SendToBack("u169");

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waitu7f197265a34b466a87fa323d86de4a001() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u151','hidden','none',500);
}
setTimeout(waitu7f197265a34b466a87fa323d86de4a001, 350);

}

if (true) {

SetGlobalVariableValue('DragDirection', '');

}

}

if (bIE) document.getElementById('u1239').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u1239'); });
else {
    document.getElementById('u1239').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u1239'); }, true);
    document.getElementById('u1239').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u1239'); }, true);
}

widgetIdToStartDragFunction['u1239'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('FWDetailDataXPosition')) <= Number('0')) && ((GetGlobalVariableValue('FWDetailDataXPosition')) > Number('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''))) {

SetGlobalVariableValue('FWDetailDataDragPrimer', 'Past');

}
else
if ((GetGlobalVariableValue('FWDetailDataXPosition')) <= Number('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '')) {

SetGlobalVariableValue('FWDetailDataDragPrimer', 'Forecast');

}

}

widgetIdToDragFunction['u1239'] = function() {
var e = windowEvent;

if ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '')) && ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == ('')))) {

SetGlobalVariableValue('DragDirection', 'x');

}
else
if ((('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == (''))) {

SetGlobalVariableValue('DragDirection', 'y');

}

if (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((GetPanelState('u259')) == ('pd0u259'))) {

	MoveWidgetBy('u1240',widgetDragInfo.xDelta,0,'none',500);

	MoveWidgetBy('u1230',widgetDragInfo.xDelta,0,'none',500);

	MoveWidgetBy('u1198',widgetDragInfo.xDelta,0,'none',500);

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetNum(GetGlobalVariableValue('FWDetailDataXPosition')) + GetNum(GetGlobalVariableValue('DragX'))) + '');

}
else
if ((GetGlobalVariableValue('DragDirection')) == ('y')) {

	MoveWidgetBy('u259',0,widgetDragInfo.yDelta,'none',500);

	MoveWidgetBy('u1240',0,widgetDragInfo.yDelta,'none',500);

SetGlobalVariableValue('FWDetailDataYPosition', '' + (GetNum(GetGlobalVariableValue('FWDetailDataYPosition')) + GetNum(GetGlobalVariableValue('DragY'))) + '');

}

if ((GetGlobalVariableValue('FWDetailDataYPosition')) < Number('' + (GetGlobalVariableValue('FWDetailDataYLimit')) + '')) {

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataXPosition')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYLimit')) + ''),'none',500);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataXPosition')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYLimit')) + ''),'none',500);

SetGlobalVariableValue('FWDetailDataYPosition', '' + (GetGlobalVariableValue('FWDetailDataYLimit')) + '');

}

if ((GetGlobalVariableValue('FWDetailDataYPosition')) > Number('0')) {

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataXPosition')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataXPosition')) + ''), GetNum('0'),'none',500);

SetGlobalVariableValue('FWDetailDataYPosition', '0');

}

if ((GetGlobalVariableValue('FWDetailDataXPosition')) < Number('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + '')) {

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataXLimit')) + '');

}

if ((GetGlobalVariableValue('FWDetailDataXPosition')) > Number('0')) {

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

SetGlobalVariableValue('FWDetailDataXPosition', '0');

}

}

widgetIdToDragDropFunction['u1239'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('FWDetailDataXPosition')) >= Number('0')) && (((GetGlobalVariableValue('FWDetailDataDragPrimer')) == ('Past')) && (((GetPanelState('u259')) == ('pd0u259')) && (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') > Number('100')) && (('' + (GetGlobalVariableValue('DragX')) + '') > Number('0'))))))) {

	MoveWidgetTo('u200', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',500);

	SetPanelState('u259', 'pd1u259','none','',700,'none','',700);

	SetPanelState('u249', 'pd1u249','none','',700,'none','',700);

	SetPanelState('u217', 'pd1u217','none','',700,'none','',700);

	SetPanelState('u1198', 'pd1u1198','fade','',500,'fade','',500);

	SetPanelState('u1230', 'pd1u1230','fade','',500,'fade','',500);

	SetPanelState('u1240', 'pd1u1240','fade','',500,'fade','',500);

SetGlobalVariableValue('FWDetailCurrentTimeView', '-7d');

SetGlobalVariableValue('FWDetailDataXPosition', '0');

SetWidgetSelected('u192');
SetWidgetSelected('u1173');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

	SetPanelState('u200', 'pd1u200','none','',300,'none','',300);

	SetPanelState('u1181', 'pd1u1181','fade','',300,'fade','',300);

}
else
if (((GetGlobalVariableValue('FWDetailDataXPosition')) <= Number('0')) && (((GetGlobalVariableValue('FWDetailDataDragPrimer')) == ('Past')) && (((GetPanelState('u259')) == ('pd1u259')) && (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') > Number('100')) && (('' + (GetGlobalVariableValue('DragX')) + '') < Number('0'))))))) {

	MoveWidgetTo('u200', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',500);

	SetPanelState('u259', 'pd0u259','none','',700,'none','',700);

	SetPanelState('u249', 'pd0u249','none','',700,'none','',700);

	SetPanelState('u217', 'pd0u217','none','',700,'none','',700);

	SetPanelState('u1198', 'pd0u1198','fade','',500,'fade','',500);

	SetPanelState('u1230', 'pd0u1230','fade','',500,'fade','',500);

	SetPanelState('u1240', 'pd0u1240','fade','',500,'fade','',500);

SetGlobalVariableValue('FWDetailCurrentTimeView', '-24h');

SetGlobalVariableValue('FWDetailDataXPosition', '0');

SetWidgetSelected('u194');
SetWidgetSelected('u1175');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

	SetPanelState('u200', 'pd0u200','none','',300,'none','',300);

	SetPanelState('u1181', 'pd0u1181','fade','',300,'fade','',300);

}
else
if (((GetGlobalVariableValue('FWDetailDataXPosition')) <= Number('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '')) && (((GetGlobalVariableValue('FWDetailDataDragPrimer')) == ('Forecast')) && (((GetPanelState('u259')) == ('pd0u259')) && (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') > Number('100')) && (('' + (GetGlobalVariableValue('DragX')) + '') < Number('0'))))))) {

	MoveWidgetTo('u200', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',500);

	SetPanelState('u259', 'pd1u259','none','',700,'none','',700);

	SetPanelState('u249', 'pd1u249','none','',700,'none','',700);

	SetPanelState('u217', 'pd1u217','none','',700,'none','',700);

	SetPanelState('u1240', 'pd1u1240','fade','',500,'fade','',500);

	SetPanelState('u1230', 'pd1u1230','fade','',500,'fade','',500);

	SetPanelState('u1198', 'pd1u1198','fade','',500,'fade','',500);

SetGlobalVariableValue('FWDetailCurrentTimeView', '+7d');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetWidgetSelected('u198');
SetWidgetSelected('u1179');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+7days</span></p>');

	SetPanelState('u200', 'pd1u200','none','',300,'none','',300);

	SetPanelState('u1181', 'pd1u1181','fade','',300,'fade','',300);

}
else
if (((GetGlobalVariableValue('FWDetailDataXPosition')) >= Number('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '')) && (((GetGlobalVariableValue('FWDetailDataDragPrimer')) == ('Forecast')) && (((GetPanelState('u259')) == ('pd1u259')) && (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') > Number('100')) && (('' + (GetGlobalVariableValue('DragX')) + '') > Number('0'))))))) {

	MoveWidgetTo('u200', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',500);

	SetPanelState('u259', 'pd0u259','none','',500,'none','',500);

	SetPanelState('u249', 'pd0u249','none','',500,'none','',500);

	SetPanelState('u217', 'pd0u217','none','',500,'none','',500);

	SetPanelState('u1240', 'pd0u1240','fade','',500,'fade','',500);

	SetPanelState('u1230', 'pd0u1230','fade','',500,'fade','',500);

	SetPanelState('u1198', 'pd0u1198','fade','',500,'fade','',500);

SetGlobalVariableValue('FWDetailCurrentTimeView', '+24h');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetWidgetSelected('u196');
SetWidgetSelected('u1177');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

	SetPanelState('u200', 'pd0u200','none','',300,'none','',300);

	SetPanelState('u1181', 'pd0u1181','fade','',300,'fade','',300);

}
else
if ((('' + (GetGlobalVariableValue('TotalDragX')) + '') < Number('-25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && (((GetPanelState('u259')) == ('pd0u259')) && ((GetGlobalVariableValue('FWDetailDataDragPrimer')) == ('Past'))))) {

	MoveWidgetTo('u200', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',300);

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',700);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',700);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',700);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',300);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',300);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',300);

	SetPanelState('u885', 'pd0u885','none','',700,'none','',700);

	SetPanelState('u848', 'pd0u848','none','',700,'none','',700);

	SetPanelState('u434', 'pd0u434','none','',700,'none','',700);

	SetPanelState('u401', 'pd0u401','none','',700,'none','',700);

	SetPanelState('u1853', 'pd0u1853','fade','',300,'fade','',300);

	SetPanelState('u1845', 'pd0u1845','fade','',300,'fade','',300);

	SetPanelState('u1398', 'pd0u1398','none','',700,'none','',700);

	SetPanelState('u1353', 'pd0u1353','none','',700,'none','',700);

SetGlobalVariableValue('FWDetailCurrentTimeView', '+24h');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetWidgetSelected('u196');
SetWidgetSelected('u1177');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

}
else
if ((('' + (GetGlobalVariableValue('TotalDragX')) + '') > Number('25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && (((GetPanelState('u259')) == ('pd0u259')) && ((GetGlobalVariableValue('FWDetailDataDragPrimer')) == ('Forecast'))))) {

	MoveWidgetTo('u200', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',300);

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',700);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'none',700);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'none',700);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'easeInCubic',300);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'easeInCubic',300);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',300);

	SetPanelState('u885', 'pd1u885','none','',700,'none','',700);

	SetPanelState('u848', 'pd1u848','none','',700,'none','',700);

	SetPanelState('u434', 'pd1u434','none','',700,'none','',700);

	SetPanelState('u401', 'pd1u401','none','',700,'none','',700);

	SetPanelState('u1853', 'pd1u1853','fade','',300,'fade','',300);

	SetPanelState('u1845', 'pd1u1845','fade','',300,'fade','',300);

	SetPanelState('u1398', 'pd1u1398','none','',700,'none','',700);

	SetPanelState('u1353', 'pd1u1353','none','',700,'none','',700);

SetGlobalVariableValue('FWDetailCurrentTimeView', '-24h');

SetGlobalVariableValue('FWDetailDataXPosition', '0');

SetWidgetSelected('u194');
SetWidgetSelected('u1175');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

}
else
if (((GetGlobalVariableValue('FWDetailDataXPosition')) <= Number('111')) && (((GetGlobalVariableValue('FWDetailDataXPosition')) >= Number('-111')) && ((GetPanelState('u259')) == ('pd0u259')))) {

	MoveWidgetTo('u200', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',500);

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',700);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'none',700);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'none',700);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',500);

	SetPanelState('u885', 'pd1u885','none','',700,'none','',700);

	SetPanelState('u848', 'pd1u848','none','',700,'none','',700);

	SetPanelState('u434', 'pd1u434','none','',700,'none','',700);

	SetPanelState('u401', 'pd1u401','none','',700,'none','',700);

	SetPanelState('u1853', 'pd1u1853','fade','',500,'fade','',500);

	SetPanelState('u1845', 'pd1u1845','fade','',500,'fade','',500);

	SetPanelState('u1398', 'pd1u1398','none','',700,'none','',700);

	SetPanelState('u1353', 'pd1u1353','none','',700,'none','',700);

SetGlobalVariableValue('FWDetailCurrentTimeView', '-24h');

SetGlobalVariableValue('FWDetailDataXPosition', '0');

SetWidgetSelected('u194');
SetWidgetSelected('u1175');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

}
else
if (((GetGlobalVariableValue('FWDetailDataXPosition')) < Number('-112')) && (((GetGlobalVariableValue('FWDetailDataXPosition')) >= Number('-334')) && ((GetPanelState('u259')) == ('pd0u259')))) {

	MoveWidgetTo('u200', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',500);

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',700);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',700);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',700);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',500);

	SetPanelState('u885', 'pd0u885','none','',700,'none','',700);

	SetPanelState('u848', 'pd0u848','none','',700,'none','',700);

	SetPanelState('u434', 'pd0u434','none','',700,'none','',700);

	SetPanelState('u401', 'pd0u401','none','',700,'none','',700);

	SetPanelState('u1853', 'pd0u1853','fade','',500,'fade','',500);

	SetPanelState('u1845', 'pd0u1845','fade','',500,'fade','',500);

	SetPanelState('u1398', 'pd0u1398','none','',700,'none','',700);

	SetPanelState('u1353', 'pd0u1353','none','',700,'none','',700);

SetGlobalVariableValue('FWDetailCurrentTimeView', '+24h');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetWidgetSelected('u196');
SetWidgetSelected('u1177');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

}

if (true) {

SetGlobalVariableValue('DragDirection', '');

SetGlobalVariableValue('FWDetailDataDragPrimer', '');

}

}

if (bIE) document.getElementById('u176').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u176'); });
else {
    document.getElementById('u176').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u176'); }, true);
    document.getElementById('u176').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u176'); }, true);
}

widgetIdToDragFunction['u176'] = function() {
var e = windowEvent;

if ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '')) && ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == ('')))) {

SetGlobalVariableValue('DragDirection', 'x');

}
else
if ((('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == (''))) {

SetGlobalVariableValue('DragDirection', 'y');

}

if ((GetGlobalVariableValue('DragDirection')) == ('x')) {

	MoveWidgetBy('u175',widgetDragInfo.xDelta,0,'none',500);

SetGlobalVariableValue('FWDetailCardsXPosition', '' + (GetNum(GetGlobalVariableValue('FWDetailCardsXPosition')) + GetNum(GetGlobalVariableValue('DragX'))) + '');

}

if ((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('' + (GetGlobalVariableValue('FWDetailCardsXLimit')) + '')) {

	MoveWidgetTo('u175', GetNum('' + (GetGlobalVariableValue('FWDetailCardsXLimit')) + ''), GetNum('0'),'none',500);

SetGlobalVariableValue('FWDetailCardsXPosition', '' + (GetGlobalVariableValue('FWDetailCardsXLimit')) + '');

}
else
if ((GetGlobalVariableValue('FWDetailCardsXPosition')) > Number('0')) {

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'none',500);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

}

}

widgetIdToDragDropFunction['u176'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('0')) && (((GetGlobalVariableValue('FWDetailCardsXPosition')) > Number('-288')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') < Number('-25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('FWDetailCurrentField')) == ('Homestead')))))) {

	MoveWidgetTo('u175', GetNum('-288'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-288');

SetGlobalVariableValue('FWDetailCurrentField', 'Dads Farm');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('0')) && (((GetGlobalVariableValue('FWDetailCardsXPosition')) > Number('-288')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') > Number('25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('FWDetailCurrentField')) == ('Dads Farm')))))) {

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

SetGlobalVariableValue('FWDetailCurrentField', 'Homestead');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('-288')) && (((GetGlobalVariableValue('FWDetailCardsXPosition')) >= Number('-576')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') < Number('-25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('FWDetailCurrentField')) == ('Dads Farm')))))) {

	MoveWidgetTo('u175', GetNum('-576'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-576');

SetGlobalVariableValue('FWDetailCurrentField', 'Airport');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('-288')) && (((GetGlobalVariableValue('FWDetailCardsXPosition')) >= Number('-576')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') > Number('25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('FWDetailCurrentField')) == ('Airport')))))) {

	MoveWidgetTo('u175', GetNum('-288'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-288');

SetGlobalVariableValue('FWDetailCurrentField', 'Dads Farm');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('128')) && ((GetGlobalVariableValue('FWDetailCardsXPosition')) > Number('-160'))) {

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

SetGlobalVariableValue('FWDetailCurrentField', 'Homestead');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('-160')) && ((GetGlobalVariableValue('FWDetailCardsXPosition')) >= Number('-448'))) {

	MoveWidgetTo('u175', GetNum('-288'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-288');

SetGlobalVariableValue('FWDetailCurrentField', 'Dads Farm');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('-448')) && ((GetGlobalVariableValue('FWDetailCardsXPosition')) >= Number('-736'))) {

	MoveWidgetTo('u175', GetNum('-576'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-576');

SetGlobalVariableValue('FWDetailCurrentField', 'Airport');

}

if (true) {

SetGlobalVariableValue('DragDirection', '');

}

}

if (bIE) document.getElementById('u0').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u0'); });
else {
    document.getElementById('u0').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u0'); }, true);
    document.getElementById('u0').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u0'); }, true);
}

widgetIdToDragFunction['u0'] = function() {
var e = windowEvent;

if ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '')) && ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == ('')))) {

SetGlobalVariableValue('DragDirection', 'x');

}
else
if ((('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == (''))) {

SetGlobalVariableValue('DragDirection', 'y');

}

if (((GetGlobalVariableValue('DragDirection')) == ('x')) && (((GetGlobalVariableValue('RevealedMenu')) == ('Content')) && ((GetPanelState('u110')) == ('pd0u110')))) {

	BringToFront("u171");

	BringToFront("u169");

	BringToFront("u2586");

	MoveWidgetBy('u171',widgetDragInfo.xDelta,0,'none',500);

	MoveWidgetBy('u2586',widgetDragInfo.xDelta,0,'none',500);

	MoveWidgetBy('u169',widgetDragInfo.xDelta,0,'none',500);

SetGlobalVariableValue('MainScreenXPosition', '' + (GetNum(GetGlobalVariableValue('MainScreenXPosition')) + GetNum(GetGlobalVariableValue('DragX'))) + '');

}
else
if (((GetGlobalVariableValue('DragDirection')) == ('y')) && (((GetGlobalVariableValue('ContentMenuYPosition')) <= Number('0')) && (((GetGlobalVariableValue('ContentMenuYPosition')) > Number('-50')) && ((GetPanelState('u110')) == ('pd0u110'))))) {

	MoveWidgetTo('u110', GetNum('0'), GetNum('' + (GetGlobalVariableValue('ContentMenuYPosition')) + ''),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('' + (GetNum(GetGlobalVariableValue('ContentMenuYPosition')) + 50) + ''),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('' + (GetNum(GetGlobalVariableValue('ContentMenuYPosition')) + 80) + ''),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('' + (GetNum(GetGlobalVariableValue('ContentMenuYPosition')) + 280) + ''),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('' + (GetNum(GetGlobalVariableValue('ContentMenuYPosition')) + 310) + ''),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '' + (GetNum(GetGlobalVariableValue('ContentMenuYPosition')) + GetNum(GetGlobalVariableValue('DragY'))) + '');

}
else
if (((GetGlobalVariableValue('DragDirection')) == ('y')) && (((GetGlobalVariableValue('ContentMenuYPosition')) <= Number('-50')) && ((GetGlobalVariableValue('ContentMenuYPosition')) > Number('-250')))) {

	MoveWidgetTo('u110', GetNum('0'), GetNum('' + (GetGlobalVariableValue('ContentMenuYPosition')) + ''),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('' + (GetNum(GetGlobalVariableValue('ContentMenuYPosition')) + 80) + ''),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('' + (GetNum(GetGlobalVariableValue('ContentMenuYPosition')) + 280) + ''),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('' + (GetNum(GetGlobalVariableValue('ContentMenuYPosition')) + 310) + ''),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '' + (GetNum(GetGlobalVariableValue('ContentMenuYPosition')) + GetNum(GetGlobalVariableValue('DragY'))) + '');

}

if (((GetGlobalVariableValue('MainScreenXPosition')) < Number('0')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Content'))) {

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'none',500);

SetGlobalVariableValue('MainScreenXPosition', '0');

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) > Number('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + '')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Content'))) {

	MoveWidgetTo('u171', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('50'),'none',500);

	MoveWidgetTo('u169', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u2586', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('0'),'none',500);

SetGlobalVariableValue('MainScreenXPosition', '' + (GetGlobalVariableValue('MainScreenXRightLimit')) + '');

}

if ((GetGlobalVariableValue('ContentMenuYPosition')) < Number('' + (GetGlobalVariableValue('ContentMenuYLimit')) + '')) {

	MoveWidgetTo('u110', GetNum('0'), GetNum('' + (GetGlobalVariableValue('ContentMenuYLimit')) + ''),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('' + (GetNum(GetGlobalVariableValue('ContentMenuYLimit')) + 80) + ''),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('' + (GetNum(GetGlobalVariableValue('ContentMenuYLimit')) + 280) + ''),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('' + (GetNum(GetGlobalVariableValue('ContentMenuYLimit')) + 310) + ''),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '' + (GetGlobalVariableValue('ContentMenuYLimit')) + '');

}
else
if ((GetGlobalVariableValue('ContentMenuYPosition')) > Number('0')) {

	MoveWidgetTo('u110', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('280'),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('310'),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '0');

}

}

widgetIdToDragDropFunction['u0'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('DragDirection')) == ('x')) && (((GetPanelState('u110')) == ('pd0u110')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') < Number('-25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Content')))))) {

	SendToBack("u169");

	SendToBack("u110");

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waitu477e2c002bf14954a899699c11da8fb31() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u0','hidden','none',500);

	MoveWidgetTo('u110', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('280'),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('310'),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '0');
}
setTimeout(waitu477e2c002bf14954a899699c11da8fb31, 350);

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) >= Number('' + (GetGlobalVariableValue('MainScreenXRightLimit') / 2) + '')) && (((GetGlobalVariableValue('MainScreenXPosition')) < Number('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + '')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Content')))) {

	MoveWidgetTo('u169', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('0'),'swing',350);
function waitu014bbcd11edb4296bf51b899a666c6e61() {

SetGlobalVariableValue('MainScreenXPosition', '' + (GetGlobalVariableValue('MainScreenXRightLimit')) + '');

	BringToFront("u110");
}
setTimeout(waitu014bbcd11edb4296bf51b899a666c6e61, 350);

}
else
if (((GetGlobalVariableValue('MainScreenXPosition')) >= Number('0')) && (((GetGlobalVariableValue('MainScreenXPosition')) < Number('' + (GetGlobalVariableValue('MainScreenXRightLimit') / 2) + '')) && ((GetGlobalVariableValue('RevealedMenu')) == ('Content')))) {

	SendToBack("u169");

	SendToBack("u110");

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waituf25163aa24d54e9e8c951521f204d4631() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u0','hidden','none',500);

	MoveWidgetTo('u110', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('280'),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('310'),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '0');
}
setTimeout(waituf25163aa24d54e9e8c951521f204d4631, 350);

}

if (true) {

SetGlobalVariableValue('DragDirection', '');

}

}

if (bIE) document.getElementById('u2154').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u2154'); });
else {
    document.getElementById('u2154').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u2154'); }, true);
    document.getElementById('u2154').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u2154'); }, true);
}

widgetIdToDragFunction['u2154'] = function() {
var e = windowEvent;

if ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '')) && ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == ('')))) {

SetGlobalVariableValue('DragDirection', 'x');

}
else
if ((('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == (''))) {

SetGlobalVariableValue('DragDirection', 'y');

}

if ((GetGlobalVariableValue('DragDirection')) == ('x')) {

	MoveWidgetBy('u175',widgetDragInfo.xDelta,0,'none',500);

SetGlobalVariableValue('FWDetailCardsXPosition', '' + (GetNum(GetGlobalVariableValue('FWDetailCardsXPosition')) + GetNum(GetGlobalVariableValue('DragX'))) + '');

}

if ((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('' + (GetGlobalVariableValue('FWDetailCardsXLimit')) + '')) {

	MoveWidgetTo('u175', GetNum('' + (GetGlobalVariableValue('FWDetailCardsXLimit')) + ''), GetNum('0'),'none',500);

SetGlobalVariableValue('FWDetailCardsXPosition', '' + (GetGlobalVariableValue('FWDetailCardsXLimit')) + '');

}
else
if ((GetGlobalVariableValue('FWDetailCardsXPosition')) > Number('0')) {

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'none',500);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

}

}

widgetIdToDragDropFunction['u2154'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('0')) && (((GetGlobalVariableValue('FWDetailCardsXPosition')) > Number('-288')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') < Number('-25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('FWDetailCurrentField')) == ('Homestead')))))) {

	MoveWidgetTo('u175', GetNum('-288'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-288');

SetGlobalVariableValue('FWDetailCurrentField', 'Dads Farm');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('0')) && (((GetGlobalVariableValue('FWDetailCardsXPosition')) > Number('-288')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') > Number('25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('FWDetailCurrentField')) == ('Dads Farm')))))) {

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

SetGlobalVariableValue('FWDetailCurrentField', 'Homestead');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('-288')) && (((GetGlobalVariableValue('FWDetailCardsXPosition')) >= Number('-576')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') < Number('-25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('FWDetailCurrentField')) == ('Dads Farm')))))) {

	MoveWidgetTo('u175', GetNum('-576'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-576');

SetGlobalVariableValue('FWDetailCurrentField', 'Airport');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('-288')) && (((GetGlobalVariableValue('FWDetailCardsXPosition')) >= Number('-576')) && ((('' + (GetGlobalVariableValue('TotalDragX')) + '') > Number('25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && ((GetGlobalVariableValue('FWDetailCurrentField')) == ('Airport')))))) {

	MoveWidgetTo('u175', GetNum('-288'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-288');

SetGlobalVariableValue('FWDetailCurrentField', 'Dads Farm');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('128')) && ((GetGlobalVariableValue('FWDetailCardsXPosition')) > Number('-160'))) {

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

SetGlobalVariableValue('FWDetailCurrentField', 'Homestead');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('-160')) && ((GetGlobalVariableValue('FWDetailCardsXPosition')) >= Number('-448'))) {

	MoveWidgetTo('u175', GetNum('-288'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-288');

SetGlobalVariableValue('FWDetailCurrentField', 'Dads Farm');

}
else
if (((GetGlobalVariableValue('FWDetailCardsXPosition')) < Number('-448')) && ((GetGlobalVariableValue('FWDetailCardsXPosition')) >= Number('-736'))) {

	MoveWidgetTo('u175', GetNum('-576'), GetNum('0'),'swing',300);

SetGlobalVariableValue('FWDetailCardsXPosition', '-576');

SetGlobalVariableValue('FWDetailCurrentField', 'Airport');

}

if (true) {

SetGlobalVariableValue('DragDirection', '');

}

}

if (bIE) document.getElementById('u258').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u258'); });
else {
    document.getElementById('u258').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u258'); }, true);
    document.getElementById('u258').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u258'); }, true);
}

widgetIdToStartDragFunction['u258'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('FWDetailDataXPosition')) <= Number('0')) && ((GetGlobalVariableValue('FWDetailDataXPosition')) > Number('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''))) {

SetGlobalVariableValue('FWDetailDataDragPrimer', 'Past');

}
else
if ((GetGlobalVariableValue('FWDetailDataXPosition')) <= Number('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '')) {

SetGlobalVariableValue('FWDetailDataDragPrimer', 'Forecast');

}

}

widgetIdToDragFunction['u258'] = function() {
var e = windowEvent;

if ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '')) && ((('' + (GetGlobalVariableValue('TotalDragX') * GetGlobalVariableValue('TotalDragX')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == ('')))) {

SetGlobalVariableValue('DragDirection', 'x');

}
else
if ((('' + (GetGlobalVariableValue('TotalDragY') * GetGlobalVariableValue('TotalDragY')) + '') > Number('36')) && ((GetGlobalVariableValue('DragDirection')) == (''))) {

SetGlobalVariableValue('DragDirection', 'y');

}

if (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((GetPanelState('u259')) == ('pd0u259'))) {

	MoveWidgetBy('u259',widgetDragInfo.xDelta,0,'none',500);

	MoveWidgetBy('u249',widgetDragInfo.xDelta,0,'none',500);

	MoveWidgetBy('u217',widgetDragInfo.xDelta,0,'none',500);

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetNum(GetGlobalVariableValue('FWDetailDataXPosition')) + GetNum(GetGlobalVariableValue('DragX'))) + '');

}
else
if ((GetGlobalVariableValue('DragDirection')) == ('y')) {

	MoveWidgetBy('u259',0,widgetDragInfo.yDelta,'none',500);

	MoveWidgetBy('u1240',0,widgetDragInfo.yDelta,'none',500);

SetGlobalVariableValue('FWDetailDataYPosition', '' + (GetNum(GetGlobalVariableValue('FWDetailDataYPosition')) + GetNum(GetGlobalVariableValue('DragY'))) + '');

}

if ((GetGlobalVariableValue('FWDetailDataYPosition')) < Number('' + (GetGlobalVariableValue('FWDetailDataYLimit')) + '')) {

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataXPosition')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYLimit')) + ''),'none',500);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataXPosition')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYLimit')) + ''),'none',500);

SetGlobalVariableValue('FWDetailDataYPosition', '' + (GetGlobalVariableValue('FWDetailDataYLimit')) + '');

}

if ((GetGlobalVariableValue('FWDetailDataYPosition')) > Number('0')) {

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataXPosition')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataXPosition')) + ''), GetNum('0'),'none',500);

SetGlobalVariableValue('FWDetailDataYPosition', '0');

}

if ((GetGlobalVariableValue('FWDetailDataXPosition')) < Number('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + '')) {

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataXLimit')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataXLimit')) + '');

}

if ((GetGlobalVariableValue('FWDetailDataXPosition')) > Number('0')) {

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

SetGlobalVariableValue('FWDetailDataXPosition', '0');

}

}

widgetIdToDragDropFunction['u258'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('FWDetailDataXPosition')) >= Number('0')) && (((GetGlobalVariableValue('FWDetailDataDragPrimer')) == ('Past')) && (((GetPanelState('u259')) == ('pd0u259')) && (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') > Number('100')) && (('' + (GetGlobalVariableValue('DragX')) + '') > Number('0'))))))) {

	MoveWidgetTo('u200', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',500);

	MoveWidgetTo('u1181', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	SetPanelState('u259', 'pd1u259','fade','',500,'fade','',500);

	SetPanelState('u249', 'pd1u249','fade','',500,'fade','',500);

	SetPanelState('u217', 'pd1u217','fade','',500,'fade','',500);

	SetPanelState('u1198', 'pd1u1198','none','',700,'none','',700);

	SetPanelState('u1230', 'pd1u1230','none','',700,'none','',700);

	SetPanelState('u1240', 'pd1u1240','none','',700,'none','',700);

SetGlobalVariableValue('FWDetailCurrentTimeView', '-7d');

SetGlobalVariableValue('FWDetailDataXPosition', '0');

SetWidgetSelected('u192');
SetWidgetSelected('u1173');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

	SetPanelState('u200', 'pd1u200','fade','',300,'fade','',300);

	SetPanelState('u1181', 'pd1u1181','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('FWDetailDataXPosition')) <= Number('0')) && (((GetGlobalVariableValue('FWDetailDataDragPrimer')) == ('Past')) && (((GetPanelState('u259')) == ('pd1u259')) && (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') > Number('100')) && (('' + (GetGlobalVariableValue('DragX')) + '') < Number('0'))))))) {

	MoveWidgetTo('u200', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',500);

	MoveWidgetTo('u1181', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	SetPanelState('u259', 'pd0u259','fade','',500,'fade','',500);

	SetPanelState('u249', 'pd0u249','fade','',500,'fade','',500);

	SetPanelState('u217', 'pd0u217','fade','',500,'fade','',500);

	SetPanelState('u1198', 'pd0u1198','none','',700,'none','',700);

	SetPanelState('u1230', 'pd0u1230','none','',700,'none','',700);

	SetPanelState('u1240', 'pd0u1240','none','',700,'none','',700);

SetGlobalVariableValue('FWDetailCurrentTimeView', '-24h');

SetGlobalVariableValue('FWDetailDataXPosition', '0');

SetWidgetSelected('u194');
SetWidgetSelected('u1175');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

	SetPanelState('u200', 'pd0u200','fade','',300,'fade','',300);

	SetPanelState('u1181', 'pd0u1181','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('FWDetailDataXPosition')) <= Number('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '')) && (((GetGlobalVariableValue('FWDetailDataDragPrimer')) == ('Forecast')) && (((GetPanelState('u259')) == ('pd0u259')) && (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') > Number('100')) && (('' + (GetGlobalVariableValue('DragX')) + '') < Number('0'))))))) {

	MoveWidgetTo('u200', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',500);

	MoveWidgetTo('u1181', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	SetPanelState('u259', 'pd1u259','fade','',500,'fade','',500);

	SetPanelState('u249', 'pd1u249','fade','',500,'fade','',500);

	SetPanelState('u217', 'pd1u217','fade','',500,'fade','',500);

	SetPanelState('u1240', 'pd1u1240','none','',700,'none','',700);

	SetPanelState('u1230', 'pd1u1230','none','',700,'none','',700);

	SetPanelState('u1198', 'pd1u1198','none','',700,'none','',700);

SetGlobalVariableValue('FWDetailCurrentTimeView', '+7d');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetWidgetSelected('u198');
SetWidgetSelected('u1179');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+7days</span></p>');

	SetPanelState('u200', 'pd1u200','fade','',300,'fade','',300);

	SetPanelState('u1181', 'pd1u1181','none','',300,'none','',300);

}
else
if (((GetGlobalVariableValue('FWDetailDataXPosition')) >= Number('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '')) && (((GetGlobalVariableValue('FWDetailDataDragPrimer')) == ('Forecast')) && (((GetPanelState('u259')) == ('pd1u259')) && (((GetGlobalVariableValue('DragDirection')) == ('x')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') > Number('100')) && (('' + (GetGlobalVariableValue('DragX')) + '') > Number('0'))))))) {

	MoveWidgetTo('u200', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',500);

	MoveWidgetTo('u1181', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	SetPanelState('u259', 'pd0u259','fade','',500,'fade','',500);

	SetPanelState('u249', 'pd0u249','fade','',500,'fade','',500);

	SetPanelState('u217', 'pd0u217','fade','',500,'fade','',500);

	SetPanelState('u1240', 'pd0u1240','none','',500,'none','',500);

	SetPanelState('u1230', 'pd0u1230','none','',500,'none','',500);

	SetPanelState('u1198', 'pd0u1198','none','',500,'none','',500);

SetGlobalVariableValue('FWDetailCurrentTimeView', '+24h');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetWidgetSelected('u196');
SetWidgetSelected('u1177');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

	SetPanelState('u200', 'pd0u200','fade','',300,'fade','',300);

	SetPanelState('u1181', 'pd0u1181','none','',300,'none','',300);

}
else
if ((('' + (GetGlobalVariableValue('TotalDragX')) + '') < Number('-25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && (((GetPanelState('u259')) == ('pd0u259')) && ((GetGlobalVariableValue('FWDetailDataDragPrimer')) == ('Past'))))) {

	MoveWidgetTo('u200', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'swing',300);

	MoveWidgetTo('u1181', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',300);

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'swing',300);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'swing',300);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'swing',300);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',300);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',300);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',300);

	SetPanelState('u885', 'pd0u885','fade','',300,'fade','',300);

	SetPanelState('u848', 'pd0u848','fade','',300,'fade','',300);

	SetPanelState('u434', 'pd0u434','none','',300,'none','',300);

	SetPanelState('u401', 'pd0u401','none','',300,'none','',300);

	SetPanelState('u1853', 'pd0u1853','none','',700,'none','',700);

	SetPanelState('u1845', 'pd0u1845','none','',700,'none','',700);

	SetPanelState('u1398', 'pd0u1398','none','',700,'none','',700);

	SetPanelState('u1353', 'pd0u1353','none','',500,'none','',500);

SetGlobalVariableValue('FWDetailCurrentTimeView', '+24h');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetWidgetSelected('u196');
SetWidgetSelected('u1177');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

}
else
if ((('' + (GetGlobalVariableValue('TotalDragX')) + '') > Number('25')) && ((('' + (GetGlobalVariableValue('DragTime')) + '') < Number('500')) && (((GetPanelState('u259')) == ('pd0u259')) && ((GetGlobalVariableValue('FWDetailDataDragPrimer')) == ('Forecast'))))) {

	MoveWidgetTo('u200', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'swing',300);

	MoveWidgetTo('u1181', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',300);

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'swing',300);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'swing',300);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'swing',300);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'none',300);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'none',300);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',300);

	SetPanelState('u885', 'pd1u885','fade','',300,'fade','',300);

	SetPanelState('u848', 'pd1u848','fade','',300,'fade','',300);

	SetPanelState('u434', 'pd1u434','none','',300,'none','',300);

	SetPanelState('u401', 'pd1u401','none','',300,'none','',300);

	SetPanelState('u1853', 'pd1u1853','none','',300,'none','',300);

	SetPanelState('u1845', 'pd1u1845','none','',300,'none','',300);

	SetPanelState('u1398', 'pd1u1398','none','',300,'none','',300);

	SetPanelState('u1353', 'pd1u1353','none','',500,'none','',500);

SetGlobalVariableValue('FWDetailCurrentTimeView', '-24h');

SetGlobalVariableValue('FWDetailDataXPosition', '0');

SetWidgetSelected('u194');
SetWidgetSelected('u1175');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

}
else
if (((GetGlobalVariableValue('FWDetailDataXPosition')) <= Number('111')) && (((GetGlobalVariableValue('FWDetailDataXPosition')) >= Number('-111')) && ((GetPanelState('u259')) == ('pd0u259')))) {

	MoveWidgetTo('u200', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'swing',500);

	MoveWidgetTo('u1181', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',300);

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'swing',500);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'swing',500);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'swing',500);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'none',300);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'none',300);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',300);

	SetPanelState('u885', 'pd1u885','fade','',500,'fade','',500);

	SetPanelState('u848', 'pd1u848','fade','',500,'fade','',500);

	SetPanelState('u434', 'pd1u434','none','',300,'none','',300);

	SetPanelState('u401', 'pd1u401','none','',300,'none','',300);

	SetPanelState('u1853', 'pd1u1853','none','',300,'none','',300);

	SetPanelState('u1845', 'pd1u1845','none','',300,'none','',300);

	SetPanelState('u1398', 'pd1u1398','none','',300,'none','',300);

	SetPanelState('u1353', 'pd1u1353','none','',500,'none','',500);

SetGlobalVariableValue('FWDetailCurrentTimeView', '-24h');

SetGlobalVariableValue('FWDetailDataXPosition', '0');

SetWidgetSelected('u194');
SetWidgetSelected('u1175');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

}
else
if (((GetGlobalVariableValue('FWDetailDataXPosition')) < Number('-112')) && (((GetGlobalVariableValue('FWDetailDataXPosition')) >= Number('-334')) && ((GetPanelState('u259')) == ('pd0u259')))) {

	MoveWidgetTo('u200', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'swing',500);

	MoveWidgetTo('u1181', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',300);

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'swing',500);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'swing',500);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'swing',500);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',300);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',300);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',300);

	SetPanelState('u885', 'pd0u885','fade','',500,'fade','',500);

	SetPanelState('u848', 'pd0u848','fade','',500,'fade','',500);

	SetPanelState('u434', 'pd0u434','none','',300,'none','',300);

	SetPanelState('u401', 'pd0u401','none','',300,'none','',300);

	SetPanelState('u1853', 'pd0u1853','none','',700,'none','',700);

	SetPanelState('u1845', 'pd0u1845','none','',700,'none','',700);

	SetPanelState('u1398', 'pd0u1398','none','',700,'none','',700);

	SetPanelState('u1353', 'pd0u1353','none','',500,'none','',500);

SetGlobalVariableValue('FWDetailCurrentTimeView', '+24h');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetWidgetSelected('u196');
SetWidgetSelected('u1177');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

}

if (true) {

SetGlobalVariableValue('DragDirection', '');

SetGlobalVariableValue('FWDetailDataDragPrimer', '');

}

}
gv_vAlignTable['u963'] = 'top';gv_vAlignTable['u964'] = 'top';gv_vAlignTable['u966'] = 'center';gv_vAlignTable['u968'] = 'center';gv_vAlignTable['u1711'] = 'center';gv_vAlignTable['u2215'] = 'center';gv_vAlignTable['u1715'] = 'center';gv_vAlignTable['u1717'] = 'center';gv_vAlignTable['u1719'] = 'center';gv_vAlignTable['u970'] = 'center';gv_vAlignTable['u972'] = 'center';gv_vAlignTable['u974'] = 'center';gv_vAlignTable['u976'] = 'center';gv_vAlignTable['u977'] = 'top';gv_vAlignTable['u978'] = 'top';gv_vAlignTable['u1721'] = 'center';gv_vAlignTable['u2226'] = 'center';gv_vAlignTable['u1725'] = 'top';gv_vAlignTable['u1726'] = 'top';gv_vAlignTable['u1727'] = 'top';gv_vAlignTable['u1728'] = 'top';gv_vAlignTable['u1729'] = 'top';gv_vAlignTable['u980'] = 'top';gv_vAlignTable['u981'] = 'top';gv_vAlignTable['u982'] = 'top';gv_vAlignTable['u983'] = 'top';gv_vAlignTable['u984'] = 'top';gv_vAlignTable['u985'] = 'top';gv_vAlignTable['u986'] = 'top';gv_vAlignTable['u987'] = 'top';gv_vAlignTable['u1730'] = 'top';gv_vAlignTable['u1731'] = 'top';gv_vAlignTable['u1732'] = 'top';gv_vAlignTable['u2235'] = 'top';gv_vAlignTable['u1734'] = 'top';gv_vAlignTable['u1735'] = 'top';gv_vAlignTable['u1736'] = 'top';gv_vAlignTable['u1737'] = 'top';gv_vAlignTable['u1738'] = 'top';gv_vAlignTable['u1739'] = 'top';gv_vAlignTable['u990'] = 'top';gv_vAlignTable['u991'] = 'top';gv_vAlignTable['u992'] = 'top';gv_vAlignTable['u993'] = 'top';gv_vAlignTable['u994'] = 'top';gv_vAlignTable['u995'] = 'top';gv_vAlignTable['u996'] = 'top';gv_vAlignTable['u997'] = 'top';gv_vAlignTable['u1740'] = 'top';gv_vAlignTable['u1741'] = 'top';gv_vAlignTable['u1742'] = 'top';gv_vAlignTable['u2245'] = 'top';gv_vAlignTable['u1745'] = 'top';gv_vAlignTable['u1746'] = 'top';gv_vAlignTable['u1747'] = 'top';gv_vAlignTable['u1748'] = 'top';gv_vAlignTable['u1749'] = 'top';gv_vAlignTable['u1600'] = 'top';gv_vAlignTable['u1601'] = 'top';gv_vAlignTable['u1602'] = 'top';gv_vAlignTable['u1603'] = 'top';gv_vAlignTable['u1604'] = 'top';gv_vAlignTable['u1605'] = 'top';gv_vAlignTable['u1606'] = 'top';gv_vAlignTable['u1607'] = 'top';gv_vAlignTable['u2250'] = 'top';gv_vAlignTable['u1751'] = 'center';gv_vAlignTable['u1752'] = 'top';gv_vAlignTable['u2255'] = 'center';gv_vAlignTable['u2257'] = 'center';gv_vAlignTable['u1756'] = 'top';gv_vAlignTable['u1757'] = 'top';gv_vAlignTable['u1758'] = 'top';gv_vAlignTable['u1759'] = 'top';gv_vAlignTable['u1611'] = 'center';gv_vAlignTable['u1613'] = 'top';gv_vAlignTable['u1614'] = 'top';gv_vAlignTable['u1616'] = 'center';gv_vAlignTable['u2260'] = 'top';gv_vAlignTable['u1760'] = 'top';gv_vAlignTable['u1761'] = 'top';gv_vAlignTable['u1762'] = 'top';gv_vAlignTable['u1763'] = 'top';gv_vAlignTable['u2266'] = 'top';gv_vAlignTable['u2267'] = 'top';gv_vAlignTable['u1766'] = 'top';gv_vAlignTable['u1767'] = 'top';gv_vAlignTable['u1769'] = 'center';gv_vAlignTable['u1620'] = 'top';gv_vAlignTable['u1621'] = 'top';gv_vAlignTable['u1622'] = 'top';gv_vAlignTable['u1623'] = 'top';gv_vAlignTable['u1626'] = 'center';gv_vAlignTable['u2270'] = 'top';gv_vAlignTable['u2271'] = 'top';gv_vAlignTable['u1771'] = 'center';gv_vAlignTable['u2276'] = 'center';gv_vAlignTable['u1777'] = 'center';gv_vAlignTable['u1779'] = 'center';gv_vAlignTable['u1503'] = 'top';gv_vAlignTable['u1504'] = 'top';gv_vAlignTable['u1505'] = 'top';gv_vAlignTable['u1506'] = 'top';gv_vAlignTable['u1507'] = 'top';gv_vAlignTable['u1631'] = 'center';gv_vAlignTable['u1633'] = 'center';gv_vAlignTable['u1635'] = 'center';gv_vAlignTable['u1636'] = 'top';gv_vAlignTable['u2280'] = 'center';gv_vAlignTable['u2281'] = 'top';gv_vAlignTable['u1781'] = 'center';gv_vAlignTable['u2285'] = 'center';gv_vAlignTable['u2286'] = 'top';gv_vAlignTable['u2287'] = 'top';gv_vAlignTable['u1787'] = 'center';gv_vAlignTable['u1788'] = 'top';gv_vAlignTable['u1789'] = 'top';gv_vAlignTable['u1640'] = 'top';gv_vAlignTable['u1641'] = 'top';gv_vAlignTable['u1642'] = 'top';gv_vAlignTable['u1643'] = 'top';gv_vAlignTable['u1644'] = 'top';gv_vAlignTable['u1645'] = 'top';gv_vAlignTable['u2290'] = 'top';gv_vAlignTable['u2291'] = 'top';gv_vAlignTable['u1790'] = 'top';gv_vAlignTable['u1791'] = 'top';gv_vAlignTable['u1792'] = 'top';gv_vAlignTable['u2295'] = 'top';u2296.tabIndex = 0;

u2296.style.cursor = 'pointer';
$axure.eventManager.click('u2296', function(e) {

if (true) {

	SetPanelState('u2253', 'pd2u2253','none','',500,'none','',500);

	MoveWidgetTo('u175', GetNum('-288'), GetNum('0'),'none',1000);

SetGlobalVariableValue('FWDetailCardsXPosition', '-288');

SetGlobalVariableValue('FWDetailCurrentField', 'Dads Farm');
function waitu44401633fb8b47ce8cf6db9b8f4f88631() {

	SetPanelState('u2600', 'pd1u2600','fade','',600,'none','',600);

	SetPanelState('u2590', 'pd1u2590','fade','',400,'none','',400);

	SetPanelState('u2592', 'pd1u2592','none','',400,'fade','',400);

	SetPanelState('u171', 'pd1u171','swing','left',600,'swing','left',600);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',600);
function waitu383f21f4421d48088b347e8976fd171d1() {

	SetPanelState('u2606', 'pd1u2606','none','',400,'fade','',400);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',400);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',400);
function waitubc17ff6f94a24020a47d6d4ba52d913c1() {

	SetPanelState('u2253', 'pd1u2253','none','',500,'none','',500);
}
setTimeout(waitubc17ff6f94a24020a47d6d4ba52d913c1, 450);
}
setTimeout(waitu383f21f4421d48088b347e8976fd171d1, 150);
}
setTimeout(waitu44401633fb8b47ce8cf6db9b8f4f88631, 100);

}

if (((GetWidgetVisibility('u1152')) == (true)) || ((GetWidgetVisibility('u2149')) == (true))) {
function waitu1ed07f26228e4640b451f93f69dcf7e51() {

	MoveWidgetBy('u175', GetNum('-80'), GetNum('0'),'linear',380);
function waitu238fbe6effc842e185822d30b29e59be1() {

	MoveWidgetBy('u175', GetNum('80'), GetNum('0'),'easeInCubic',320);
function waitue4a21196b26143c29f2541cc5de00b561() {

	SetPanelVisibility('u1152','hidden','none',500);

	SetPanelVisibility('u2149','hidden','none',500);

	SetPanelVisibility('u216','','none',500);

	SetPanelVisibility('u248','','none',500);

	SetPanelVisibility('u258','','none',500);

	SetPanelVisibility('u1197','','none',500);

	SetPanelVisibility('u1229','','none',500);

	SetPanelVisibility('u1239','','none',500);
}
setTimeout(waitue4a21196b26143c29f2541cc5de00b561, 1500);
}
setTimeout(waitu238fbe6effc842e185822d30b29e59be1, 570);
}
setTimeout(waitu1ed07f26228e4640b451f93f69dcf7e51, 520);

}
});
gv_vAlignTable['u1796'] = 'center';gv_vAlignTable['u1799'] = 'center';gv_vAlignTable['u300'] = 'top';gv_vAlignTable['u301'] = 'top';gv_vAlignTable['u302'] = 'top';gv_vAlignTable['u303'] = 'top';gv_vAlignTable['u304'] = 'top';gv_vAlignTable['u305'] = 'top';gv_vAlignTable['u306'] = 'top';gv_vAlignTable['u307'] = 'top';gv_vAlignTable['u308'] = 'top';gv_vAlignTable['u309'] = 'top';gv_vAlignTable['u1536'] = 'top';gv_vAlignTable['u1537'] = 'top';gv_vAlignTable['u1667'] = 'top';gv_vAlignTable['u310'] = 'top';gv_vAlignTable['u311'] = 'top';gv_vAlignTable['u312'] = 'top';gv_vAlignTable['u313'] = 'top';gv_vAlignTable['u314'] = 'top';gv_vAlignTable['u316'] = 'center';gv_vAlignTable['u318'] = 'center';gv_vAlignTable['u1545'] = 'top';gv_vAlignTable['u1546'] = 'top';gv_vAlignTable['u1671'] = 'center';gv_vAlignTable['u1672'] = 'top';gv_vAlignTable['u1673'] = 'top';gv_vAlignTable['u1674'] = 'top';gv_vAlignTable['u1675'] = 'top';gv_vAlignTable['u1676'] = 'top';gv_vAlignTable['u320'] = 'top';gv_vAlignTable['u321'] = 'top';gv_vAlignTable['u323'] = 'center';gv_vAlignTable['u325'] = 'center';gv_vAlignTable['u327'] = 'center';gv_vAlignTable['u329'] = 'center';gv_vAlignTable['u1554'] = 'top';gv_vAlignTable['u1555'] = 'top';gv_vAlignTable['u1556'] = 'top';gv_vAlignTable['u1557'] = 'top';u1687.tabIndex = 0;

u1687.style.cursor = 'pointer';
$axure.eventManager.click('u1687', function(e) {

if (true) {

	SetPanelStateNext('u262',true,'none','',500,'none','',500);

	SetPanelStateNext('u704',true,'none','',500,'none','',500);

	SetPanelStateNext('u1695',true,'none','',500,'none','',500);

	SetPanelStateNext('u1243',true,'fade','',300,'fade','',200);

}
});
gv_vAlignTable['u330'] = 'top';gv_vAlignTable['u332'] = 'center';gv_vAlignTable['u334'] = 'center';gv_vAlignTable['u336'] = 'center';gv_vAlignTable['u338'] = 'center';u1690.tabIndex = 0;

u1690.style.cursor = 'pointer';
$axure.eventManager.click('u1690', function(e) {

if (true) {

	SetPanelStateNext('u485',true,'none','',500,'none','',500);

	SetPanelStateNext('u939',true,'none','',500,'none','',500);

	SetPanelStateNext('u1935',true,'none','',500,'none','',500);

	SetPanelStateNext('u1476',true,'fade','',300,'fade','',200);

}
});
u1691.tabIndex = 0;

u1691.style.cursor = 'pointer';
$axure.eventManager.click('u1691', function(e) {

if (true) {

	SetPanelStateNext('u580',true,'none','',500,'none','',500);

	SetPanelStateNext('u1033',true,'none','',500,'none','',500);

	SetPanelStateNext('u2029',true,'none','',500,'none','',500);

	SetPanelStateNext('u1571',true,'fade','',300,'fade','',200);

}
});
u1692.tabIndex = 0;

u1692.style.cursor = 'pointer';
$axure.eventManager.click('u1692', function(e) {

if (true) {

	SetPanelStateNext('u633',true,'none','',500,'none','',500);

	SetPanelStateNext('u1086',true,'none','',500,'none','',500);

	SetPanelStateNext('u2082',true,'none','',500,'none','',500);

	SetPanelStateNext('u1624',true,'fade','',300,'fade','',200);

}
});
gv_vAlignTable['u1694'] = 'center';gv_vAlignTable['u340'] = 'center';gv_vAlignTable['u342'] = 'center';gv_vAlignTable['u343'] = 'top';gv_vAlignTable['u344'] = 'top';gv_vAlignTable['u345'] = 'top';gv_vAlignTable['u346'] = 'top';gv_vAlignTable['u347'] = 'top';gv_vAlignTable['u348'] = 'top';gv_vAlignTable['u349'] = 'top';gv_vAlignTable['u350'] = 'top';gv_vAlignTable['u351'] = 'top';gv_vAlignTable['u352'] = 'top';gv_vAlignTable['u353'] = 'top';gv_vAlignTable['u354'] = 'top';gv_vAlignTable['u355'] = 'top';gv_vAlignTable['u357'] = 'center';gv_vAlignTable['u1100'] = 'top';gv_vAlignTable['u1101'] = 'top';gv_vAlignTable['u1102'] = 'top';gv_vAlignTable['u1103'] = 'top';gv_vAlignTable['u1104'] = 'top';gv_vAlignTable['u1105'] = 'top';gv_vAlignTable['u1106'] = 'top';gv_vAlignTable['u1108'] = 'center';gv_vAlignTable['u361'] = 'center';gv_vAlignTable['u363'] = 'center';gv_vAlignTable['u365'] = 'center';gv_vAlignTable['u367'] = 'center';gv_vAlignTable['u1110'] = 'top';gv_vAlignTable['u1111'] = 'top';gv_vAlignTable['u1112'] = 'top';gv_vAlignTable['u1113'] = 'top';gv_vAlignTable['u1114'] = 'top';gv_vAlignTable['u1115'] = 'top';gv_vAlignTable['u1116'] = 'top';gv_vAlignTable['u1117'] = 'top';gv_vAlignTable['u1118'] = 'top';gv_vAlignTable['u1119'] = 'top';gv_vAlignTable['u371'] = 'center';gv_vAlignTable['u373'] = 'center';gv_vAlignTable['u375'] = 'center';gv_vAlignTable['u377'] = 'top';gv_vAlignTable['u1120'] = 'top';gv_vAlignTable['u1121'] = 'top';gv_vAlignTable['u1122'] = 'top';gv_vAlignTable['u1123'] = 'top';gv_vAlignTable['u1124'] = 'top';gv_vAlignTable['u1126'] = 'center';gv_vAlignTable['u1128'] = 'top';gv_vAlignTable['u1129'] = 'top';gv_vAlignTable['u380'] = 'top';gv_vAlignTable['u381'] = 'top';gv_vAlignTable['u382'] = 'top';gv_vAlignTable['u383'] = 'top';gv_vAlignTable['u384'] = 'top';gv_vAlignTable['u385'] = 'top';gv_vAlignTable['u386'] = 'top';gv_vAlignTable['u387'] = 'top';gv_vAlignTable['u388'] = 'top';gv_vAlignTable['u389'] = 'top';gv_vAlignTable['u1133'] = 'center';gv_vAlignTable['u1134'] = 'top';gv_vAlignTable['u1135'] = 'top';gv_vAlignTable['u1136'] = 'top';gv_vAlignTable['u1137'] = 'top';gv_vAlignTable['u1138'] = 'top';u1139.tabIndex = 0;

u1139.style.cursor = 'pointer';
$axure.eventManager.click('u1139', function(e) {

if (true) {

	SetPanelStateNext('u359',true,'none','',500,'none','',500);

	SetPanelStateNext('u801',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u1797',true,'none','',500,'none','',500);

	SetPanelStateNext('u1345',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u390'] = 'top';gv_vAlignTable['u391'] = 'top';gv_vAlignTable['u392'] = 'top';gv_vAlignTable['u393'] = 'top';gv_vAlignTable['u394'] = 'top';gv_vAlignTable['u395'] = 'top';gv_vAlignTable['u396'] = 'top';gv_vAlignTable['u397'] = 'top';gv_vAlignTable['u398'] = 'top';gv_vAlignTable['u399'] = 'top';u1142.tabIndex = 0;

u1142.style.cursor = 'pointer';
$axure.eventManager.click('u1142', function(e) {

if (true) {

	SetPanelStateNext('u580',true,'none','',500,'none','',500);

	SetPanelStateNext('u1033',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u2029',true,'none','',500,'none','',500);

	SetPanelStateNext('u1571',true,'none','',500,'none','',500);

}
});
u1143.tabIndex = 0;

u1143.style.cursor = 'pointer';
$axure.eventManager.click('u1143', function(e) {

if (true) {

	SetPanelStateNext('u633',true,'none','',500,'none','',500);

	SetPanelStateNext('u1086',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u2082',true,'none','',500,'none','',500);

	SetPanelStateNext('u1624',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u1154'] = 'center';gv_vAlignTable['u1156'] = 'center';document.getElementById('u1158_img').tabIndex = 0;

u1158.style.cursor = 'pointer';
$axure.eventManager.click('u1158', function(e) {

if (true) {
function waitud04f197d1d404edaa1b835a265f4d7fe1() {

	SetPanelState('u171', 'pd1u171','swing','left',700,'swing','left',700);

	SetPanelState('u2600', 'pd1u2600','fade','',450,'fade','',450);

	SetPanelState('u2590', 'pd1u2590','fade','',450,'fade','',450);

	SetPanelState('u2592', 'pd1u2592','fade','',450,'fade','',450);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',700);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',700);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',700);
function waitu76b800802a0f43b289092c7d581d10b81() {

	SetPanelState('u2606', 'pd1u2606','fade','',450,'fade','',450);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',450);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',450);
}
setTimeout(waitu76b800802a0f43b289092c7d581d10b81, 150);
}
setTimeout(waitud04f197d1d404edaa1b835a265f4d7fe1, 200);

}
});
gv_vAlignTable['u1159'] = 'center';gv_vAlignTable['u592'] = 'top';gv_vAlignTable['u593'] = 'top';document.getElementById('u1160_img').tabIndex = 0;

u1160.style.cursor = 'pointer';
$axure.eventManager.click('u1160', function(e) {

if (true) {
function waitu34fe0c9f073c44a2b5d2d7b640bbb3981() {

	SetPanelState('u171', 'pd1u171','swing','left',700,'swing','left',700);

	SetPanelState('u2600', 'pd1u2600','fade','',450,'fade','',450);

	SetPanelState('u2590', 'pd1u2590','fade','',450,'fade','',450);

	SetPanelState('u2592', 'pd1u2592','fade','',450,'fade','',450);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',700);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',700);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',700);
function waitu21a51a3a48d6484585f09419e52d88c81() {

	SetPanelState('u2606', 'pd1u2606','fade','',450,'fade','',450);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',450);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',450);
}
setTimeout(waitu21a51a3a48d6484585f09419e52d88c81, 150);
}
setTimeout(waitu34fe0c9f073c44a2b5d2d7b640bbb3981, 200);

}
});
gv_vAlignTable['u1161'] = 'center';gv_vAlignTable['u1162'] = 'top';gv_vAlignTable['u1163'] = 'top';gv_vAlignTable['u1164'] = 'top';gv_vAlignTable['u1166'] = 'center';gv_vAlignTable['u1168'] = 'center';gv_vAlignTable['u1170'] = 'center';gv_vAlignTable['u1174'] = 'center';gv_vAlignTable['u1176'] = 'center';gv_vAlignTable['u1178'] = 'center';gv_vAlignTable['u1180'] = 'center';gv_vAlignTable['u1183'] = 'center';gv_vAlignTable['u1185'] = 'center';gv_vAlignTable['u1186'] = 'top';gv_vAlignTable['u1187'] = 'top';gv_vAlignTable['u1188'] = 'top';gv_vAlignTable['u1189'] = 'top';gv_vAlignTable['u1191'] = 'top';gv_vAlignTable['u1192'] = 'top';u1193.tabIndex = 0;

u1193.style.cursor = 'pointer';
$axure.eventManager.click('u1193', function(e) {

if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('+7d')) {

	MoveWidgetTo('u200', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',700);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'none',700);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'none',700);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',700);

	SetPanelState('u885', 'pd1u885','none','',700,'none','',700);

	SetPanelState('u848', 'pd1u848','none','',700,'none','',700);

	SetPanelState('u434', 'pd1u434','none','',700,'none','',700);

	SetPanelState('u401', 'pd1u401','none','',700,'none','',700);

	SetPanelState('u1853', 'pd1u1853','none','',700,'none','',700);

	SetPanelState('u1845', 'pd1u1845','none','',700,'none','',700);

	SetPanelState('u1398', 'pd1u1398','fade','',700,'fade','',700);

	SetPanelState('u1353', 'pd1u1353','fade','',700,'fade','',700);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('-24h')) {

	MoveWidgetTo('u200', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	SetPanelState('u259', 'pd1u259','none','',700,'none','',700);

	SetPanelState('u249', 'pd1u249','none','',700,'none','',700);

	SetPanelState('u217', 'pd1u217','none','',700,'none','',700);

	SetPanelState('u1198', 'pd1u1198','fade','',700,'fade','',700);

	SetPanelState('u1230', 'pd1u1230','fade','',700,'fade','',700);

	SetPanelState('u1240', 'pd1u1240','fade','',700,'fade','',700);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('+24h')) {

	MoveWidgetTo('u200', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',1100);

	MoveWidgetTo('u1181', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'linear',1100);

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',500);

	SetPanelState('u885', 'pd1u885','none','',500,'none','',500);

	SetPanelState('u848', 'pd1u848','none','',500,'none','',500);

	SetPanelState('u434', 'pd1u434','none','',500,'none','',500);

	SetPanelState('u401', 'pd1u401','none','',500,'none','',500);

	SetPanelState('u1853', 'pd1u1853','fade','',500,'fade','',500);

	SetPanelState('u1845', 'pd1u1845','fade','',500,'fade','',500);

	SetPanelState('u1398', 'pd1u1398','none','',500,'none','',500);

	SetPanelState('u1353', 'pd1u1353','none','',500,'none','',500);
function waitua6dfe07b827e4e08846ad11aee64ab5a1() {

	SetPanelState('u259', 'pd1u259','none','',500,'none','',500);

	SetPanelState('u249', 'pd1u249','none','',500,'none','',500);

	SetPanelState('u217', 'pd1u217','none','',500,'none','',500);

	SetPanelState('u1198', 'pd1u1198','fade','',500,'fade','',500);

	SetPanelState('u1230', 'pd1u1230','fade','',500,'fade','',500);

	SetPanelState('u1240', 'pd1u1240','fade','',500,'fade','',500);
}
setTimeout(waitua6dfe07b827e4e08846ad11aee64ab5a1, 600);

}

if (true) {

SetGlobalVariableValue('FWDetailCurrentTimeView', '-7d');

SetGlobalVariableValue('FWDetailDataXPosition', '0');

SetWidgetSelected('u192');
SetWidgetSelected('u1173');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

	SetPanelState('u200', 'pd1u200','none','',300,'none','',300);

	SetPanelState('u1181', 'pd1u1181','fade','',300,'fade','',300);

}
});
u1194.tabIndex = 0;

u1194.style.cursor = 'pointer';
$axure.eventManager.click('u1194', function(e) {

if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('+24h')) {

	MoveWidgetTo('u200', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',700);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'none',700);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'none',700);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',700);

	SetPanelState('u885', 'pd1u885','none','',700,'none','',700);

	SetPanelState('u848', 'pd1u848','none','',700,'none','',700);

	SetPanelState('u434', 'pd1u434','none','',700,'none','',700);

	SetPanelState('u401', 'pd1u401','none','',700,'none','',700);

	SetPanelState('u1853', 'pd1u1853','fade','',700,'fade','',700);

	SetPanelState('u1845', 'pd1u1845','fade','',700,'fade','',700);

	SetPanelState('u1398', 'pd1u1398','none','',700,'none','',700);

	SetPanelState('u1353', 'pd1u1353','none','',700,'none','',700);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('-7d')) {

	MoveWidgetTo('u200', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	SetPanelState('u259', 'pd0u259','none','',700,'none','',700);

	SetPanelState('u249', 'pd0u249','none','',700,'none','',700);

	SetPanelState('u217', 'pd0u217','none','',700,'none','',700);

	SetPanelState('u1198', 'pd0u1198','fade','',700,'fade','',700);

	SetPanelState('u1230', 'pd0u1230','fade','',700,'fade','',700);

	SetPanelState('u1240', 'pd0u1240','fade','',700,'fade','',700);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('+7d')) {

	MoveWidgetTo('u200', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',1100);

	MoveWidgetTo('u1181', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'linear',1100);

	SetPanelState('u259', 'pd0u259','none','',500,'none','',500);

	SetPanelState('u249', 'pd0u249','none','',500,'none','',500);

	SetPanelState('u217', 'pd0u217','none','',500,'none','',500);

	SetPanelState('u1240', 'pd0u1240','fade','',500,'fade','',500);

	SetPanelState('u1230', 'pd0u1230','fade','',500,'fade','',500);

	SetPanelState('u1198', 'pd0u1198','fade','',500,'fade','',500);
function waituc402654154dc400bae76cbdabfd5176b1() {

	SetPanelState('u885', 'pd1u885','none','',500,'none','',500);

	SetPanelState('u848', 'pd1u848','none','',500,'none','',500);

	SetPanelState('u434', 'pd1u434','none','',500,'none','',500);

	SetPanelState('u401', 'pd1u401','none','',500,'none','',500);

	SetPanelState('u1853', 'pd1u1853','fade','',500,'fade','',500);

	SetPanelState('u1845', 'pd1u1845','fade','',500,'fade','',500);

	SetPanelState('u1398', 'pd1u1398','none','',500,'none','',500);

	SetPanelState('u1353', 'pd1u1353','none','',500,'none','',500);

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',500);
}
setTimeout(waituc402654154dc400bae76cbdabfd5176b1, 600);

}

if (true) {

SetGlobalVariableValue('FWDetailCurrentTimeView', '-24h');

SetGlobalVariableValue('FWDetailDataXPosition', '0');

SetWidgetSelected('u194');
SetWidgetSelected('u1175');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

	SetPanelState('u200', 'pd0u200','none','',300,'none','',300);

	SetPanelState('u1181', 'pd0u1181','fade','',300,'fade','',300);

}
});
u1195.tabIndex = 0;

u1195.style.cursor = 'pointer';
$axure.eventManager.click('u1195', function(e) {

if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('-24h')) {

	MoveWidgetTo('u200', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',700);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',700);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',700);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',700);

	SetPanelState('u885', 'pd0u885','none','',700,'none','',700);

	SetPanelState('u848', 'pd0u848','none','',700,'none','',700);

	SetPanelState('u434', 'pd0u434','none','',700,'none','',700);

	SetPanelState('u401', 'pd0u401','none','',700,'none','',700);

	SetPanelState('u1853', 'pd0u1853','fade','',700,'fade','',700);

	SetPanelState('u1845', 'pd0u1845','fade','',700,'fade','',700);

	SetPanelState('u1398', 'pd0u1398','none','',700,'none','',700);

	SetPanelState('u1353', 'pd0u1353','none','',700,'none','',700);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('+7d')) {

	MoveWidgetTo('u200', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	SetPanelState('u259', 'pd0u259','none','',500,'none','',500);

	SetPanelState('u249', 'pd0u249','none','',500,'none','',500);

	SetPanelState('u217', 'pd0u217','none','',500,'none','',500);

	SetPanelState('u1240', 'pd0u1240','fade','',500,'fade','',500);

	SetPanelState('u1230', 'pd0u1230','fade','',500,'fade','',500);

	SetPanelState('u1198', 'pd0u1198','fade','',500,'fade','',500);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('-7d')) {

	MoveWidgetTo('u200', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',1100);

	MoveWidgetTo('u1181', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'linear',1100);

	SetPanelState('u259', 'pd0u259','none','',500,'none','',500);

	SetPanelState('u249', 'pd0u249','none','',500,'none','',500);

	SetPanelState('u217', 'pd0u217','none','',500,'none','',500);

	SetPanelState('u1198', 'pd0u1198','fade','',500,'fade','',500);

	SetPanelState('u1230', 'pd0u1230','fade','',500,'fade','',500);

	SetPanelState('u1240', 'pd0u1240','fade','',500,'fade','',500);
function waitu94d07f2c767849a48affa44a2b9cabdb1() {

	SetPanelState('u885', 'pd0u885','none','',500,'none','',500);

	SetPanelState('u848', 'pd0u848','none','',500,'none','',500);

	SetPanelState('u434', 'pd0u434','none','',500,'none','',500);

	SetPanelState('u401', 'pd0u401','none','',500,'none','',500);

	SetPanelState('u1853', 'pd0u1853','fade','',500,'fade','',500);

	SetPanelState('u1845', 'pd0u1845','fade','',500,'fade','',500);

	SetPanelState('u1398', 'pd0u1398','none','',500,'none','',500);

	SetPanelState('u1353', 'pd0u1353','none','',500,'none','',500);

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',500);
}
setTimeout(waitu94d07f2c767849a48affa44a2b9cabdb1, 600);

}

if (true) {

SetGlobalVariableValue('FWDetailCurrentTimeView', '+24h');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetWidgetSelected('u196');
SetWidgetSelected('u1177');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

	SetPanelState('u200', 'pd0u200','none','',300,'none','',300);

	SetPanelState('u1181', 'pd0u1181','fade','',300,'fade','',300);

}
});
u1196.tabIndex = 0;

u1196.style.cursor = 'pointer';
$axure.eventManager.click('u1196', function(e) {

if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('-7d')) {

	MoveWidgetTo('u200', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',700);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',700);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',700);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',700);

	SetPanelState('u885', 'pd0u885','none','',700,'none','',700);

	SetPanelState('u848', 'pd0u848','none','',700,'none','',700);

	SetPanelState('u434', 'pd0u434','none','',700,'none','',700);

	SetPanelState('u401', 'pd0u401','none','',700,'none','',700);

	SetPanelState('u1853', 'pd0u1853','none','',700,'none','',700);

	SetPanelState('u1845', 'pd0u1845','none','',700,'none','',700);

	SetPanelState('u1398', 'pd0u1398','fade','',700,'fade','',700);

	SetPanelState('u1353', 'pd0u1353','fade','',700,'fade','',700);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('+24h')) {

	MoveWidgetTo('u200', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u1181', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	SetPanelState('u259', 'pd1u259','none','',700,'none','',700);

	SetPanelState('u249', 'pd1u249','none','',700,'none','',700);

	SetPanelState('u217', 'pd1u217','none','',700,'none','',700);

	SetPanelState('u1240', 'pd1u1240','fade','',700,'fade','',700);

	SetPanelState('u1230', 'pd1u1230','fade','',700,'fade','',700);

	SetPanelState('u1198', 'pd1u1198','fade','',700,'fade','',700);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('-24h')) {

	MoveWidgetTo('u200', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',1100);

	MoveWidgetTo('u1181', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'linear',1100);

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',500);

	SetPanelState('u885', 'pd0u885','none','',500,'none','',500);

	SetPanelState('u848', 'pd0u848','none','',500,'none','',500);

	SetPanelState('u434', 'pd0u434','none','',500,'none','',500);

	SetPanelState('u401', 'pd0u401','none','',500,'none','',500);

	SetPanelState('u1853', 'pd0u1853','fade','',500,'fade','',500);

	SetPanelState('u1845', 'pd0u1845','fade','',500,'fade','',500);

	SetPanelState('u1398', 'pd0u1398','none','',500,'none','',500);

	SetPanelState('u1353', 'pd0u1353','none','',500,'none','',500);
function waitu53ea98499f584390885e83aab44a2b171() {

	SetPanelState('u259', 'pd1u259','none','',500,'none','',500);

	SetPanelState('u249', 'pd1u249','none','',500,'none','',500);

	SetPanelState('u217', 'pd1u217','none','',500,'none','',500);

	SetPanelState('u1240', 'pd1u1240','fade','',500,'fade','',500);

	SetPanelState('u1230', 'pd1u1230','fade','',500,'fade','',500);

	SetPanelState('u1198', 'pd1u1198','fade','',500,'fade','',500);
}
setTimeout(waitu53ea98499f584390885e83aab44a2b171, 600);

}

if (true) {

SetGlobalVariableValue('FWDetailCurrentTimeView', '+7d');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetWidgetSelected('u198');
SetWidgetSelected('u1179');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+7days</span></p>');

	SetPanelState('u200', 'pd1u200','none','',300,'none','',300);

	SetPanelState('u1181', 'pd1u1181','fade','',300,'fade','',300);

}
});
gv_vAlignTable['u2100'] = 'top';gv_vAlignTable['u2101'] = 'top';gv_vAlignTable['u2102'] = 'top';gv_vAlignTable['u2103'] = 'top';gv_vAlignTable['u2110'] = 'top';gv_vAlignTable['u2111'] = 'top';gv_vAlignTable['u2112'] = 'top';gv_vAlignTable['u2113'] = 'top';gv_vAlignTable['u2300'] = 'center';gv_vAlignTable['u1801'] = 'center';gv_vAlignTable['u2304'] = 'top';gv_vAlignTable['u2306'] = 'center';gv_vAlignTable['u2308'] = 'center';gv_vAlignTable['u2309'] = 'top';gv_vAlignTable['u1809'] = 'center';gv_vAlignTable['u2120'] = 'top';gv_vAlignTable['u2122'] = 'center';gv_vAlignTable['u2311'] = 'center';gv_vAlignTable['u2314'] = 'center';gv_vAlignTable['u2316'] = 'center';gv_vAlignTable['u2317'] = 'top';gv_vAlignTable['u2318'] = 'top';gv_vAlignTable['u2319'] = 'top';gv_vAlignTable['u1818'] = 'center';gv_vAlignTable['u1819'] = 'top';gv_vAlignTable['u2130'] = 'top';gv_vAlignTable['u2131'] = 'top';gv_vAlignTable['u2132'] = 'top';gv_vAlignTable['u2321'] = 'center';gv_vAlignTable['u2322'] = 'top';gv_vAlignTable['u2323'] = 'top';gv_vAlignTable['u2324'] = 'top';gv_vAlignTable['u2325'] = 'top';gv_vAlignTable['u2326'] = 'top';gv_vAlignTable['u2327'] = 'top';gv_vAlignTable['u2328'] = 'top';gv_vAlignTable['u1827'] = 'top';gv_vAlignTable['u1828'] = 'top';gv_vAlignTable['u1829'] = 'top';gv_vAlignTable['u2330'] = 'top';gv_vAlignTable['u2331'] = 'top';gv_vAlignTable['u2333'] = 'center';gv_vAlignTable['u2335'] = 'center';gv_vAlignTable['u2337'] = 'center';gv_vAlignTable['u2339'] = 'center';gv_vAlignTable['u1838'] = 'top';gv_vAlignTable['u1839'] = 'top';gv_vAlignTable['u2340'] = 'top';gv_vAlignTable['u2341'] = 'top';gv_vAlignTable['u2342'] = 'top';gv_vAlignTable['u2344'] = 'center';gv_vAlignTable['u2345'] = 'top';gv_vAlignTable['u2346'] = 'top';gv_vAlignTable['u2347'] = 'top';gv_vAlignTable['u1846'] = 'top';gv_vAlignTable['u1847'] = 'top';gv_vAlignTable['u1849'] = 'center';gv_vAlignTable['u2350'] = 'top';gv_vAlignTable['u2351'] = 'top';gv_vAlignTable['u2352'] = 'top';gv_vAlignTable['u2353'] = 'top';gv_vAlignTable['u2354'] = 'top';gv_vAlignTable['u1854'] = 'top';gv_vAlignTable['u1855'] = 'top';gv_vAlignTable['u2359'] = 'center';gv_vAlignTable['u1858'] = 'top';gv_vAlignTable['u1859'] = 'top';gv_vAlignTable['u1703'] = 'center';gv_vAlignTable['u2361'] = 'center';gv_vAlignTable['u2362'] = 'top';gv_vAlignTable['u2363'] = 'top';gv_vAlignTable['u1862'] = 'top';gv_vAlignTable['u2365'] = 'center';gv_vAlignTable['u2367'] = 'center';gv_vAlignTable['u2368'] = 'top';gv_vAlignTable['u1868'] = 'top';gv_vAlignTable['u1869'] = 'top';gv_vAlignTable['u1713'] = 'center';gv_vAlignTable['u2370'] = 'center';gv_vAlignTable['u2373'] = 'center';gv_vAlignTable['u2375'] = 'center';gv_vAlignTable['u2376'] = 'top';gv_vAlignTable['u2377'] = 'top';gv_vAlignTable['u2378'] = 'top';gv_vAlignTable['u1879'] = 'center';gv_vAlignTable['u1723'] = 'center';gv_vAlignTable['u2380'] = 'center';gv_vAlignTable['u2381'] = 'top';gv_vAlignTable['u2382'] = 'top';gv_vAlignTable['u2383'] = 'top';gv_vAlignTable['u2384'] = 'top';gv_vAlignTable['u2385'] = 'top';gv_vAlignTable['u2386'] = 'top';gv_vAlignTable['u2387'] = 'top';gv_vAlignTable['u2388'] = 'top';gv_vAlignTable['u2389'] = 'top';gv_vAlignTable['u2199'] = 'top';gv_vAlignTable['u1733'] = 'top';gv_vAlignTable['u2390'] = 'top';gv_vAlignTable['u2392'] = 'center';gv_vAlignTable['u2394'] = 'center';gv_vAlignTable['u2396'] = 'center';gv_vAlignTable['u2398'] = 'center';gv_vAlignTable['u2399'] = 'top';gv_vAlignTable['u1899'] = 'center';gv_vAlignTable['u1743'] = 'top';gv_vAlignTable['u1744'] = 'top';gv_vAlignTable['u400'] = 'top';gv_vAlignTable['u402'] = 'top';gv_vAlignTable['u403'] = 'top';gv_vAlignTable['u405'] = 'center';gv_vAlignTable['u407'] = 'center';gv_vAlignTable['u409'] = 'top';gv_vAlignTable['u1754'] = 'center';gv_vAlignTable['u410'] = 'top';gv_vAlignTable['u412'] = 'center';gv_vAlignTable['u413'] = 'top';gv_vAlignTable['u414'] = 'top';gv_vAlignTable['u415'] = 'top';gv_vAlignTable['u416'] = 'top';gv_vAlignTable['u417'] = 'top';gv_vAlignTable['u418'] = 'top';gv_vAlignTable['u419'] = 'top';gv_vAlignTable['u1764'] = 'top';gv_vAlignTable['u1765'] = 'top';gv_vAlignTable['u420'] = 'top';gv_vAlignTable['u421'] = 'top';gv_vAlignTable['u422'] = 'top';gv_vAlignTable['u423'] = 'top';gv_vAlignTable['u424'] = 'top';gv_vAlignTable['u426'] = 'center';gv_vAlignTable['u428'] = 'center';gv_vAlignTable['u1637'] = 'top';gv_vAlignTable['u1773'] = 'center';gv_vAlignTable['u1775'] = 'center';gv_vAlignTable['u1000'] = 'top';gv_vAlignTable['u1001'] = 'top';gv_vAlignTable['u430'] = 'center';gv_vAlignTable['u432'] = 'center';gv_vAlignTable['u433'] = 'top';gv_vAlignTable['u435'] = 'top';gv_vAlignTable['u436'] = 'top';gv_vAlignTable['u438'] = 'center';gv_vAlignTable['u1646'] = 'top';gv_vAlignTable['u1783'] = 'center';gv_vAlignTable['u1785'] = 'center';gv_vAlignTable['u1011'] = 'center';gv_vAlignTable['u441'] = 'center';gv_vAlignTable['u443'] = 'top';gv_vAlignTable['u444'] = 'top';gv_vAlignTable['u445'] = 'top';gv_vAlignTable['u447'] = 'center';gv_vAlignTable['u449'] = 'center';gv_vAlignTable['u1794'] = 'center';gv_vAlignTable['u1020'] = 'top';gv_vAlignTable['u1021'] = 'top';gv_vAlignTable['u453'] = 'center';gv_vAlignTable['u455'] = 'center';gv_vAlignTable['u457'] = 'center';gv_vAlignTable['u1200'] = 'center';gv_vAlignTable['u1201'] = 'top';gv_vAlignTable['u1202'] = 'top';gv_vAlignTable['u1203'] = 'top';gv_vAlignTable['u1204'] = 'top';gv_vAlignTable['u1205'] = 'top';gv_vAlignTable['u1206'] = 'top';gv_vAlignTable['u1207'] = 'top';gv_vAlignTable['u1208'] = 'top';gv_vAlignTable['u1209'] = 'top';gv_vAlignTable['u460'] = 'top';gv_vAlignTable['u461'] = 'top';gv_vAlignTable['u1030'] = 'top';gv_vAlignTable['u464'] = 'top';gv_vAlignTable['u465'] = 'top';gv_vAlignTable['u467'] = 'center';gv_vAlignTable['u1210'] = 'top';gv_vAlignTable['u1211'] = 'top';gv_vAlignTable['u1212'] = 'top';gv_vAlignTable['u1214'] = 'top';gv_vAlignTable['u1215'] = 'top';gv_vAlignTable['u1216'] = 'top';gv_vAlignTable['u1217'] = 'top';gv_vAlignTable['u1218'] = 'top';gv_vAlignTable['u1219'] = 'top';gv_vAlignTable['u470'] = 'top';gv_vAlignTable['u471'] = 'top';gv_vAlignTable['u472'] = 'top';gv_vAlignTable['u473'] = 'top';gv_vAlignTable['u1041'] = 'center';gv_vAlignTable['u476'] = 'top';gv_vAlignTable['u477'] = 'top';gv_vAlignTable['u1221'] = 'center';gv_vAlignTable['u1222'] = 'top';gv_vAlignTable['u1223'] = 'top';gv_vAlignTable['u1224'] = 'top';gv_vAlignTable['u1225'] = 'top';gv_vAlignTable['u1226'] = 'top';gv_vAlignTable['u1227'] = 'top';gv_vAlignTable['u2239'] = 'center';gv_vAlignTable['u480'] = 'top';gv_vAlignTable['u481'] = 'top';gv_vAlignTable['u482'] = 'top';gv_vAlignTable['u483'] = 'top';gv_vAlignTable['u1131'] = 'center';gv_vAlignTable['u487'] = 'center';gv_vAlignTable['u1232'] = 'center';gv_vAlignTable['u1234'] = 'center';gv_vAlignTable['u1236'] = 'center';gv_vAlignTable['u1238'] = 'center';gv_vAlignTable['u491'] = 'center';gv_vAlignTable['u493'] = 'center';gv_vAlignTable['u495'] = 'center';gv_vAlignTable['u1242'] = 'center';gv_vAlignTable['u1245'] = 'center';gv_vAlignTable['u1247'] = 'top';gv_vAlignTable['u1248'] = 'top';gv_vAlignTable['u1249'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u1250'] = 'top';gv_vAlignTable['u1251'] = 'top';gv_vAlignTable['u1252'] = 'top';gv_vAlignTable['u1253'] = 'top';gv_vAlignTable['u1254'] = 'top';gv_vAlignTable['u1255'] = 'top';gv_vAlignTable['u1256'] = 'top';gv_vAlignTable['u1257'] = 'top';gv_vAlignTable['u1258'] = 'top';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u1260'] = 'center';gv_vAlignTable['u1262'] = 'center';gv_vAlignTable['u1264'] = 'center';gv_vAlignTable['u1266'] = 'center';gv_vAlignTable['u1268'] = 'center';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u36'] = 'center';u37.tabIndex = 0;

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if ((GetPanelState('u171')) == ('pd0u171')) {

SetWidgetSelected('u2');
	SetPanelState('u2312', 'pd2u2312','none','',500,'none','',500);

	MoveWidgetTo('u175', GetNum('-576'), GetNum('0'),'none',1000);

SetGlobalVariableValue('FWDetailCardsXPosition', '-576');

SetGlobalVariableValue('FWDetailCurrentField', 'Airport');
function waitud64aa3a07b004e79ae3ae6db2a1d3aae1() {

	SetPanelState('u2600', 'pd1u2600','fade','',600,'none','',600);

	SetPanelState('u2590', 'pd1u2590','fade','',400,'none','',400);

	SetPanelState('u2592', 'pd1u2592','none','',400,'fade','',400);

	SetPanelState('u171', 'pd1u171','swing','left',600,'swing','left',600);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',600);
function waitue580753a1d1548baa83a0430bd5bd1b31() {

	SetPanelState('u2606', 'pd1u2606','none','',400,'fade','',400);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',400);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',400);
function waitu8ae27b8663b64f51905813128182051b1() {

SetWidgetNotSelected('u2');
	SetPanelState('u2312', 'pd1u2312','none','',500,'none','',500);
}
setTimeout(waitu8ae27b8663b64f51905813128182051b1, 450);
}
setTimeout(waitue580753a1d1548baa83a0430bd5bd1b31, 150);
}
setTimeout(waitud64aa3a07b004e79ae3ae6db2a1d3aae1, 550);

}
else
if ((GetPanelState('u171')) == ('pd1u171')) {

SetWidgetSelected('u2');function waitu534e669a4cae4a26ab2982e694112b941() {

	MoveWidgetTo('u175', GetNum('-576'), GetNum('0'),'swing',1100);

SetGlobalVariableValue('FWDetailCardsXPosition', '-576');

SetGlobalVariableValue('FWDetailCurrentField', 'Airport');
function waituf913597045f94780895d19ff8a24b9031() {

SetWidgetNotSelected('u2');}
setTimeout(waituf913597045f94780895d19ff8a24b9031, 350);
}
setTimeout(waitu534e669a4cae4a26ab2982e694112b941, 150);

}

if (((GetWidgetVisibility('u1152')) == (true)) || ((GetWidgetVisibility('u2149')) == (true))) {
function waitudef77ed7511048e48bb6e004daf632121() {

	MoveWidgetBy('u175', GetNum('-80'), GetNum('0'),'linear',380);
function waitu99148d14cf3c4511bf97037dd90a11231() {

	MoveWidgetBy('u175', GetNum('80'), GetNum('0'),'easeInCubic',320);
function waitu631d23e81f6e4737b5f723ba5bae48f51() {

	SetPanelVisibility('u1152','hidden','none',500);

	SetPanelVisibility('u2149','hidden','none',500);

	SetPanelVisibility('u216','','none',500);

	SetPanelVisibility('u248','','none',500);

	SetPanelVisibility('u258','','none',500);

	SetPanelVisibility('u1197','','none',500);

	SetPanelVisibility('u1229','','none',500);

	SetPanelVisibility('u1239','','none',500);
}
setTimeout(waitu631d23e81f6e4737b5f723ba5bae48f51, 1500);
}
setTimeout(waitu99148d14cf3c4511bf97037dd90a11231, 570);
}
setTimeout(waitudef77ed7511048e48bb6e004daf632121, 970);

}

if ((GetGlobalVariableValue('RevealedMenu')) == ('Content')) {

	SendToBack("u169");

	SendToBack("u110");
function waitu174c97986dc64f3d87961a3dbbde78271() {

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waitu3c573647d93344cc9b75bf7742f655791() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u0','hidden','none',500);

	MoveWidgetTo('u110', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('280'),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('310'),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '0');
}
setTimeout(waitu3c573647d93344cc9b75bf7742f655791, 350);
}
setTimeout(waitu174c97986dc64f3d87961a3dbbde78271, 150);

}
});
u38.tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if ((GetPanelState('u171')) == ('pd0u171')) {

SetWidgetSelected('u23');
	SetPanelState('u2194', 'pd2u2194','none','',500,'none','',500);

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'none',1000);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

SetGlobalVariableValue('FWDetailCurrentField', 'Homestead');
function waitua94157889e724e8586c664559ed81b381() {

	SetPanelState('u2600', 'pd1u2600','fade','',600,'none','',600);

	SetPanelState('u2590', 'pd1u2590','fade','',400,'none','',400);

	SetPanelState('u2592', 'pd1u2592','none','',400,'fade','',400);

	SetPanelState('u171', 'pd1u171','swing','left',600,'swing','left',600);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',600);
function waitu76efbfc4e2d14d978e27e5dfe51c86041() {

	SetPanelState('u2606', 'pd1u2606','none','',400,'fade','',400);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',400);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',400);
function waitudb1fffa7ae4c43188c37a2e30ed162791() {

SetWidgetNotSelected('u23');
	SetPanelState('u2194', 'pd1u2194','none','',500,'none','',500);
}
setTimeout(waitudb1fffa7ae4c43188c37a2e30ed162791, 450);
}
setTimeout(waitu76efbfc4e2d14d978e27e5dfe51c86041, 150);
}
setTimeout(waitua94157889e724e8586c664559ed81b381, 550);

}
else
if ((GetPanelState('u171')) == ('pd1u171')) {

SetWidgetSelected('u23');function waituac15da6bc4394ce3a18dbeea67a0216d1() {

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'swing',1100);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

SetGlobalVariableValue('FWDetailCurrentField', 'Homestead');
function waitu9d943287ffd34efea3be6324bc4177e71() {

SetWidgetNotSelected('u23');}
setTimeout(waitu9d943287ffd34efea3be6324bc4177e71, 350);
}
setTimeout(waituac15da6bc4394ce3a18dbeea67a0216d1, 150);

}

if (((GetWidgetVisibility('u1152')) == (true)) || ((GetWidgetVisibility('u2149')) == (true))) {
function waituf71e70492df9492b8dc550e705d084fb1() {

	MoveWidgetBy('u175', GetNum('-80'), GetNum('0'),'linear',380);
function waituc103bc8cc39648f3b222325e787f33b31() {

	MoveWidgetBy('u175', GetNum('80'), GetNum('0'),'easeInCubic',320);
function waitu1a23ac19a5f14561bd40aadbc5c8802a1() {

	SetPanelVisibility('u1152','hidden','none',500);

	SetPanelVisibility('u2149','hidden','none',500);

	SetPanelVisibility('u216','','none',500);

	SetPanelVisibility('u248','','none',500);

	SetPanelVisibility('u258','','none',500);

	SetPanelVisibility('u1197','','none',500);

	SetPanelVisibility('u1229','','none',500);

	SetPanelVisibility('u1239','','none',500);
}
setTimeout(waitu1a23ac19a5f14561bd40aadbc5c8802a1, 1500);
}
setTimeout(waituc103bc8cc39648f3b222325e787f33b31, 570);
}
setTimeout(waituf71e70492df9492b8dc550e705d084fb1, 970);

}

if ((GetGlobalVariableValue('RevealedMenu')) == ('Content')) {

	SendToBack("u169");

	SendToBack("u110");
function waitu8796a424dee745409b9bc35b6a77774c1() {

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waituad84098597174fd88e544fc268f28f281() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u0','hidden','none',500);

	MoveWidgetTo('u110', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('280'),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('310'),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '0');
}
setTimeout(waituad84098597174fd88e544fc268f28f281, 350);
}
setTimeout(waitu8796a424dee745409b9bc35b6a77774c1, 150);

}
});
u39.tabIndex = 0;

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if ((GetPanelState('u171')) == ('pd0u171')) {

SetWidgetSelected('u9');
	SetPanelState('u2253', 'pd2u2253','none','',500,'none','',500);

	MoveWidgetTo('u175', GetNum('-288'), GetNum('0'),'none',1000);

SetGlobalVariableValue('FWDetailCardsXPosition', '-288');

SetGlobalVariableValue('FWDetailCurrentField', 'Dads Farm');
function waitufd587e13647945d88d2cc0821c09da3c1() {

	SetPanelState('u2600', 'pd1u2600','fade','',600,'none','',600);

	SetPanelState('u2590', 'pd1u2590','fade','',400,'none','',400);

	SetPanelState('u2592', 'pd1u2592','none','',400,'fade','',400);

	SetPanelState('u171', 'pd1u171','swing','left',600,'swing','left',600);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',600);
function waitu1b45cb919d5b44f78a4f261fbdddb2a61() {

	SetPanelState('u2606', 'pd1u2606','none','',400,'fade','',400);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',400);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',400);
function waitua315ece7c07641bdbc69e6a680da90be1() {

SetWidgetNotSelected('u9');
	SetPanelState('u2253', 'pd1u2253','none','',500,'none','',500);
}
setTimeout(waitua315ece7c07641bdbc69e6a680da90be1, 450);
}
setTimeout(waitu1b45cb919d5b44f78a4f261fbdddb2a61, 150);
}
setTimeout(waitufd587e13647945d88d2cc0821c09da3c1, 550);

}
else
if ((GetPanelState('u171')) == ('pd1u171')) {

SetWidgetSelected('u2');function waitu7101e99d480c43f38e66161c70bb67df1() {

	MoveWidgetTo('u175', GetNum('-288'), GetNum('0'),'swing',1100);

SetGlobalVariableValue('FWDetailCardsXPosition', '-288');

SetGlobalVariableValue('FWDetailCurrentField', 'Dads Farm');
function waitu50e045e7aff04f69bab34e52d5cbf5c91() {

SetWidgetNotSelected('u2');}
setTimeout(waitu50e045e7aff04f69bab34e52d5cbf5c91, 350);
}
setTimeout(waitu7101e99d480c43f38e66161c70bb67df1, 150);

}

if (((GetWidgetVisibility('u1152')) == (true)) || ((GetWidgetVisibility('u2149')) == (true))) {
function waitucca60ed2c74244359014cbd8cc1b340a1() {

	MoveWidgetBy('u175', GetNum('-80'), GetNum('0'),'linear',380);
function waitue0dc515d59c444489f02a7f461ef1ac21() {

	MoveWidgetBy('u175', GetNum('80'), GetNum('0'),'easeInCubic',320);
function waitu75d70d71b8f142e2b1cf7d5d140cd29e1() {

	SetPanelVisibility('u1152','hidden','none',500);

	SetPanelVisibility('u2149','hidden','none',500);

	SetPanelVisibility('u216','','none',500);

	SetPanelVisibility('u248','','none',500);

	SetPanelVisibility('u258','','none',500);

	SetPanelVisibility('u1197','','none',500);

	SetPanelVisibility('u1229','','none',500);

	SetPanelVisibility('u1239','','none',500);
}
setTimeout(waitu75d70d71b8f142e2b1cf7d5d140cd29e1, 1500);
}
setTimeout(waitue0dc515d59c444489f02a7f461ef1ac21, 570);
}
setTimeout(waitucca60ed2c74244359014cbd8cc1b340a1, 970);

}

if ((GetGlobalVariableValue('RevealedMenu')) == ('Content')) {

	SendToBack("u169");

	SendToBack("u110");
function waitu3b798093e7b144919daabcd2c80447501() {

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waitu3b8065cb61c94129b2c9c3b15f6efb261() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u0','hidden','none',500);

	MoveWidgetTo('u110', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('280'),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('310'),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '0');
}
setTimeout(waitu3b8065cb61c94129b2c9c3b15f6efb261, 350);
}
setTimeout(waitu3b798093e7b144919daabcd2c80447501, 150);

}
});
gv_vAlignTable['u1270'] = 'center';gv_vAlignTable['u1272'] = 'center';gv_vAlignTable['u1274'] = 'center';gv_vAlignTable['u1276'] = 'center';gv_vAlignTable['u1278'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u1280'] = 'center';gv_vAlignTable['u1282'] = 'center';gv_vAlignTable['u1284'] = 'center';gv_vAlignTable['u1286'] = 'top';gv_vAlignTable['u1287'] = 'top';gv_vAlignTable['u1288'] = 'top';gv_vAlignTable['u1289'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u1291'] = 'center';gv_vAlignTable['u1292'] = 'top';gv_vAlignTable['u1293'] = 'top';gv_vAlignTable['u1294'] = 'top';gv_vAlignTable['u1295'] = 'top';gv_vAlignTable['u1296'] = 'top';gv_vAlignTable['u1297'] = 'top';gv_vAlignTable['u1298'] = 'top';gv_vAlignTable['u1299'] = 'top';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u2000'] = 'center';gv_vAlignTable['u2002'] = 'center';gv_vAlignTable['u80'] = 'top';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u84'] = 'center';gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u2153'] = 'center';document.getElementById('u2155_img').tabIndex = 0;

u2155.style.cursor = 'pointer';
$axure.eventManager.click('u2155', function(e) {

if (true) {
function waitu75b7e23bc5fe4ddb88dc02d1bc87c71e1() {

	SetPanelState('u171', 'pd1u171','swing','left',700,'swing','left',700);

	SetPanelState('u2600', 'pd1u2600','fade','',450,'fade','',450);

	SetPanelState('u2590', 'pd1u2590','fade','',450,'fade','',450);

	SetPanelState('u2592', 'pd1u2592','fade','',450,'fade','',450);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',700);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',700);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',700);
function waitu8fdf7434ee2349ff8aeb854481b683281() {

	SetPanelState('u2606', 'pd1u2606','fade','',450,'fade','',450);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',450);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',450);
}
setTimeout(waitu8fdf7434ee2349ff8aeb854481b683281, 150);
}
setTimeout(waitu75b7e23bc5fe4ddb88dc02d1bc87c71e1, 200);

}
});
gv_vAlignTable['u2156'] = 'center';document.getElementById('u2157_img').tabIndex = 0;

u2157.style.cursor = 'pointer';
$axure.eventManager.click('u2157', function(e) {

if (true) {
function waitud5f14a9350294296aeb14c2cc01930051() {

	SetPanelState('u171', 'pd1u171','swing','left',700,'swing','left',700);

	SetPanelState('u2600', 'pd1u2600','fade','',450,'fade','',450);

	SetPanelState('u2590', 'pd1u2590','fade','',450,'fade','',450);

	SetPanelState('u2592', 'pd1u2592','fade','',450,'fade','',450);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',700);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',700);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',700);
function waitu429ac57adbff4f519fa71bb776cca0131() {

	SetPanelState('u2606', 'pd1u2606','fade','',450,'fade','',450);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',450);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',450);
}
setTimeout(waitu429ac57adbff4f519fa71bb776cca0131, 150);
}
setTimeout(waitud5f14a9350294296aeb14c2cc01930051, 200);

}
});
gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u94'] = 'top';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u2021'] = 'top';gv_vAlignTable['u2160'] = 'top';gv_vAlignTable['u2163'] = 'center';gv_vAlignTable['u2031'] = 'center';gv_vAlignTable['u2200'] = 'top';gv_vAlignTable['u2201'] = 'top';gv_vAlignTable['u2203'] = 'center';gv_vAlignTable['u2204'] = 'top';gv_vAlignTable['u2400'] = 'top';gv_vAlignTable['u2208'] = 'top';gv_vAlignTable['u2403'] = 'center';gv_vAlignTable['u2405'] = 'top';gv_vAlignTable['u2406'] = 'top';gv_vAlignTable['u2407'] = 'top';gv_vAlignTable['u2408'] = 'top';gv_vAlignTable['u2409'] = 'top';gv_vAlignTable['u1909'] = 'center';gv_vAlignTable['u2210'] = 'top';gv_vAlignTable['u2211'] = 'top';gv_vAlignTable['u2212'] = 'top';gv_vAlignTable['u2213'] = 'top';gv_vAlignTable['u2410'] = 'top';gv_vAlignTable['u2217'] = 'center';gv_vAlignTable['u1910'] = 'top';gv_vAlignTable['u2413'] = 'top';u2414.tabIndex = 0;

u2414.style.cursor = 'pointer';
$axure.eventManager.click('u2414', function(e) {

if (true) {

	SetPanelState('u2371', 'pd2u2371','none','',500,'none','',500);
function waitu9c353237087f46e49ce3f8392f619feb1() {

	SetPanelState('u2600', 'pd1u2600','fade','',600,'none','',600);

	SetPanelState('u2590', 'pd1u2590','fade','',400,'none','',400);

	SetPanelState('u2592', 'pd1u2592','none','',400,'fade','',400);

	SetPanelState('u171', 'pd1u171','swing','left',600,'swing','left',600);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',600);
function waitu32817a8829324e67bf188342be9fc9c51() {

	SetPanelState('u2606', 'pd1u2606','none','',400,'fade','',400);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',400);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',400);
function waitu462b61e0ec824646925d39dfd233e8c31() {

	SetPanelState('u2371', 'pd1u2371','none','',500,'none','',500);
}
setTimeout(waitu462b61e0ec824646925d39dfd233e8c31, 450);
}
setTimeout(waitu32817a8829324e67bf188342be9fc9c51, 150);
}
setTimeout(waitu9c353237087f46e49ce3f8392f619feb1, 100);

}

if (((GetWidgetVisibility('u1152')) == (true)) || ((GetWidgetVisibility('u2149')) == (true))) {
function waitu0a0afd9456e146e9a826136c5fde4b401() {

	MoveWidgetBy('u175', GetNum('-80'), GetNum('0'),'linear',380);
function waitu6afbac3b544947f381c77f30adce441f1() {

	MoveWidgetBy('u175', GetNum('80'), GetNum('0'),'easeInCubic',320);
function waitu0ca61c1f0c764ceea696aab9ba1379591() {

	SetPanelVisibility('u1152','hidden','none',500);

	SetPanelVisibility('u2149','hidden','none',500);

	SetPanelVisibility('u216','','none',500);

	SetPanelVisibility('u248','','none',500);

	SetPanelVisibility('u258','','none',500);

	SetPanelVisibility('u1197','','none',500);

	SetPanelVisibility('u1229','','none',500);

	SetPanelVisibility('u1239','','none',500);
}
setTimeout(waitu0ca61c1f0c764ceea696aab9ba1379591, 1500);
}
setTimeout(waitu6afbac3b544947f381c77f30adce441f1, 570);
}
setTimeout(waitu0a0afd9456e146e9a826136c5fde4b401, 520);

}
});
gv_vAlignTable['u2416'] = 'center';gv_vAlignTable['u2418'] = 'center';gv_vAlignTable['u1919'] = 'top';gv_vAlignTable['u2221'] = 'center';gv_vAlignTable['u2222'] = 'top';gv_vAlignTable['u2223'] = 'top';gv_vAlignTable['u2224'] = 'top';gv_vAlignTable['u2420'] = 'center';gv_vAlignTable['u2421'] = 'top';gv_vAlignTable['u2422'] = 'top';gv_vAlignTable['u2424'] = 'center';gv_vAlignTable['u2426'] = 'center';gv_vAlignTable['u2427'] = 'top';gv_vAlignTable['u2429'] = 'center';gv_vAlignTable['u1928'] = 'top';gv_vAlignTable['u1929'] = 'top';gv_vAlignTable['u2230'] = 'top';gv_vAlignTable['u2231'] = 'top';gv_vAlignTable['u2232'] = 'top';gv_vAlignTable['u2233'] = 'top';gv_vAlignTable['u1930'] = 'top';gv_vAlignTable['u1931'] = 'top';gv_vAlignTable['u2434'] = 'center';gv_vAlignTable['u2435'] = 'top';gv_vAlignTable['u2436'] = 'top';gv_vAlignTable['u2437'] = 'top';gv_vAlignTable['u2439'] = 'center';gv_vAlignTable['u1939'] = 'center';gv_vAlignTable['u2241'] = 'center';gv_vAlignTable['u2440'] = 'top';gv_vAlignTable['u2441'] = 'top';gv_vAlignTable['u1941'] = 'center';gv_vAlignTable['u2445'] = 'top';gv_vAlignTable['u2446'] = 'top';gv_vAlignTable['u2447'] = 'top';gv_vAlignTable['u1946'] = 'center';gv_vAlignTable['u2449'] = 'top';gv_vAlignTable['u1948'] = 'top';gv_vAlignTable['u1949'] = 'top';gv_vAlignTable['u2451'] = 'center';gv_vAlignTable['u1950'] = 'top';gv_vAlignTable['u1951'] = 'top';gv_vAlignTable['u1952'] = 'top';gv_vAlignTable['u2455'] = 'center';gv_vAlignTable['u2457'] = 'center';gv_vAlignTable['u2458'] = 'top';gv_vAlignTable['u2459'] = 'top';gv_vAlignTable['u1958'] = 'top';gv_vAlignTable['u1959'] = 'top';gv_vAlignTable['u2460'] = 'top';gv_vAlignTable['u1960'] = 'top';gv_vAlignTable['u1962'] = 'center';gv_vAlignTable['u2465'] = 'top';gv_vAlignTable['u2466'] = 'top';gv_vAlignTable['u2467'] = 'top';gv_vAlignTable['u2468'] = 'top';gv_vAlignTable['u1968'] = 'center';gv_vAlignTable['u1803'] = 'center';gv_vAlignTable['u1805'] = 'center';gv_vAlignTable['u1807'] = 'center';gv_vAlignTable['u2470'] = 'top';gv_vAlignTable['u2471'] = 'top';gv_vAlignTable['u1970'] = 'center';u2473.tabIndex = 0;

u2473.style.cursor = 'pointer';
$axure.eventManager.click('u2473', function(e) {

if (true) {

	SetPanelState('u2430', 'pd2u2430','none','',500,'none','',500);
function waitu7111f87ca7ec4dc993c5f289a54f05e81() {

	SetPanelState('u2600', 'pd1u2600','fade','',600,'none','',600);

	SetPanelState('u2590', 'pd1u2590','fade','',400,'none','',400);

	SetPanelState('u2592', 'pd1u2592','none','',400,'fade','',400);

	SetPanelState('u171', 'pd1u171','swing','left',600,'swing','left',600);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',600);
function waitu48ecfc3faa27498ea855c9a39768a2e91() {

	SetPanelState('u2606', 'pd1u2606','none','',400,'fade','',400);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',400);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',400);
function waitue890c9f33da3457e983c9d3a8513d44c1() {

	SetPanelState('u2430', 'pd1u2430','none','',500,'none','',500);
}
setTimeout(waitue890c9f33da3457e983c9d3a8513d44c1, 450);
}
setTimeout(waitu48ecfc3faa27498ea855c9a39768a2e91, 150);
}
setTimeout(waitu7111f87ca7ec4dc993c5f289a54f05e81, 100);

}

if (((GetWidgetVisibility('u1152')) == (true)) || ((GetWidgetVisibility('u2149')) == (true))) {
function waitudfb831d8bdde45688f8e80edd5da5aef1() {

	MoveWidgetBy('u175', GetNum('-80'), GetNum('0'),'linear',380);
function waitu34460d10d41e4eda82dbd71fb997669b1() {

	MoveWidgetBy('u175', GetNum('80'), GetNum('0'),'easeInCubic',320);
function waitu9a19ef38f02d4efa87a4f2959012880a1() {

	SetPanelVisibility('u1152','hidden','none',500);

	SetPanelVisibility('u2149','hidden','none',500);

	SetPanelVisibility('u216','','none',500);

	SetPanelVisibility('u248','','none',500);

	SetPanelVisibility('u258','','none',500);

	SetPanelVisibility('u1197','','none',500);

	SetPanelVisibility('u1229','','none',500);

	SetPanelVisibility('u1239','','none',500);
}
setTimeout(waitu9a19ef38f02d4efa87a4f2959012880a1, 1500);
}
setTimeout(waitu34460d10d41e4eda82dbd71fb997669b1, 570);
}
setTimeout(waitudfb831d8bdde45688f8e80edd5da5aef1, 520);

}
});
gv_vAlignTable['u2475'] = 'center';gv_vAlignTable['u2477'] = 'center';gv_vAlignTable['u2479'] = 'center';gv_vAlignTable['u1978'] = 'top';gv_vAlignTable['u1979'] = 'top';gv_vAlignTable['u1811'] = 'center';gv_vAlignTable['u1813'] = 'center';gv_vAlignTable['u1816'] = 'center';gv_vAlignTable['u2480'] = 'top';gv_vAlignTable['u2481'] = 'top';gv_vAlignTable['u1981'] = 'top';gv_vAlignTable['u1982'] = 'top';gv_vAlignTable['u2485'] = 'center';gv_vAlignTable['u2486'] = 'top';gv_vAlignTable['u2488'] = 'center';gv_vAlignTable['u1988'] = 'top';gv_vAlignTable['u1989'] = 'top';gv_vAlignTable['u1820'] = 'top';gv_vAlignTable['u1821'] = 'top';gv_vAlignTable['u1822'] = 'top';gv_vAlignTable['u1823'] = 'top';gv_vAlignTable['u1824'] = 'top';gv_vAlignTable['u1825'] = 'top';gv_vAlignTable['u1826'] = 'top';gv_vAlignTable['u2490'] = 'center';gv_vAlignTable['u1990'] = 'top';gv_vAlignTable['u1991'] = 'top';gv_vAlignTable['u1992'] = 'top';gv_vAlignTable['u2495'] = 'center';gv_vAlignTable['u2496'] = 'top';HookClick('u2497', false);
gv_vAlignTable['u2498'] = 'center';HookClick('u2499', false);
gv_vAlignTable['u1998'] = 'top';gv_vAlignTable['u1830'] = 'top';gv_vAlignTable['u1831'] = 'top';gv_vAlignTable['u1832'] = 'top';gv_vAlignTable['u1833'] = 'top';gv_vAlignTable['u1834'] = 'top';gv_vAlignTable['u1835'] = 'top';gv_vAlignTable['u1836'] = 'top';gv_vAlignTable['u1837'] = 'top';gv_vAlignTable['u500'] = 'center';gv_vAlignTable['u502'] = 'center';gv_vAlignTable['u504'] = 'center';gv_vAlignTable['u506'] = 'center';gv_vAlignTable['u508'] = 'center';gv_vAlignTable['u509'] = 'top';gv_vAlignTable['u1840'] = 'top';gv_vAlignTable['u1841'] = 'top';gv_vAlignTable['u1842'] = 'top';gv_vAlignTable['u1843'] = 'top';gv_vAlignTable['u1844'] = 'top';gv_vAlignTable['u510'] = 'top';gv_vAlignTable['u511'] = 'top';gv_vAlignTable['u512'] = 'top';gv_vAlignTable['u513'] = 'top';gv_vAlignTable['u514'] = 'top';gv_vAlignTable['u515'] = 'top';gv_vAlignTable['u516'] = 'top';gv_vAlignTable['u517'] = 'top';gv_vAlignTable['u518'] = 'top';gv_vAlignTable['u519'] = 'top';gv_vAlignTable['u1851'] = 'center';gv_vAlignTable['u1857'] = 'center';gv_vAlignTable['u520'] = 'top';gv_vAlignTable['u521'] = 'top';gv_vAlignTable['u522'] = 'top';gv_vAlignTable['u523'] = 'top';gv_vAlignTable['u524'] = 'top';gv_vAlignTable['u525'] = 'top';gv_vAlignTable['u526'] = 'top';gv_vAlignTable['u527'] = 'top';gv_vAlignTable['u528'] = 'top';gv_vAlignTable['u529'] = 'top';gv_vAlignTable['u1861'] = 'center';gv_vAlignTable['u1863'] = 'top';gv_vAlignTable['u1864'] = 'top';gv_vAlignTable['u1865'] = 'top';gv_vAlignTable['u1866'] = 'top';gv_vAlignTable['u1867'] = 'top';gv_vAlignTable['u530'] = 'top';gv_vAlignTable['u531'] = 'top';gv_vAlignTable['u532'] = 'top';gv_vAlignTable['u533'] = 'top';gv_vAlignTable['u534'] = 'top';gv_vAlignTable['u535'] = 'top';gv_vAlignTable['u536'] = 'top';gv_vAlignTable['u537'] = 'top';gv_vAlignTable['u538'] = 'top';gv_vAlignTable['u539'] = 'top';gv_vAlignTable['u1870'] = 'top';gv_vAlignTable['u1871'] = 'top';gv_vAlignTable['u1872'] = 'top';gv_vAlignTable['u1873'] = 'top';gv_vAlignTable['u1875'] = 'center';gv_vAlignTable['u1877'] = 'center';gv_vAlignTable['u540'] = 'top';gv_vAlignTable['u541'] = 'top';gv_vAlignTable['u542'] = 'top';gv_vAlignTable['u543'] = 'top';gv_vAlignTable['u544'] = 'top';gv_vAlignTable['u545'] = 'top';gv_vAlignTable['u546'] = 'top';gv_vAlignTable['u547'] = 'top';gv_vAlignTable['u548'] = 'top';gv_vAlignTable['u1881'] = 'center';gv_vAlignTable['u1883'] = 'center';gv_vAlignTable['u1885'] = 'center';gv_vAlignTable['u1886'] = 'top';gv_vAlignTable['u550'] = 'center';gv_vAlignTable['u552'] = 'center';gv_vAlignTable['u554'] = 'top';gv_vAlignTable['u555'] = 'top';gv_vAlignTable['u557'] = 'center';gv_vAlignTable['u559'] = 'center';gv_vAlignTable['u1302'] = 'center';gv_vAlignTable['u1305'] = 'center';gv_vAlignTable['u1307'] = 'center';gv_vAlignTable['u1309'] = 'center';gv_vAlignTable['u1891'] = 'center';gv_vAlignTable['u1893'] = 'top';gv_vAlignTable['u1894'] = 'top';gv_vAlignTable['u1895'] = 'top';gv_vAlignTable['u1897'] = 'center';gv_vAlignTable['u560'] = 'top';gv_vAlignTable['u561'] = 'top';gv_vAlignTable['u562'] = 'top';gv_vAlignTable['u563'] = 'top';gv_vAlignTable['u564'] = 'top';gv_vAlignTable['u565'] = 'top';gv_vAlignTable['u566'] = 'top';gv_vAlignTable['u567'] = 'top';gv_vAlignTable['u568'] = 'top';gv_vAlignTable['u569'] = 'top';gv_vAlignTable['u1313'] = 'center';gv_vAlignTable['u1315'] = 'center';gv_vAlignTable['u1317'] = 'center';gv_vAlignTable['u1319'] = 'center';gv_vAlignTable['u570'] = 'top';gv_vAlignTable['u571'] = 'top';gv_vAlignTable['u572'] = 'top';gv_vAlignTable['u573'] = 'top';gv_vAlignTable['u575'] = 'center';gv_vAlignTable['u576'] = 'top';gv_vAlignTable['u577'] = 'top';gv_vAlignTable['u578'] = 'top';gv_vAlignTable['u579'] = 'top';gv_vAlignTable['u1323'] = 'center';gv_vAlignTable['u1325'] = 'center';gv_vAlignTable['u1326'] = 'top';gv_vAlignTable['u1327'] = 'top';gv_vAlignTable['u1328'] = 'top';gv_vAlignTable['u1329'] = 'top';gv_vAlignTable['u582'] = 'center';gv_vAlignTable['u584'] = 'center';gv_vAlignTable['u586'] = 'center';gv_vAlignTable['u588'] = 'center';gv_vAlignTable['u1332'] = 'top';gv_vAlignTable['u1333'] = 'top';gv_vAlignTable['u1334'] = 'top';gv_vAlignTable['u1335'] = 'top';gv_vAlignTable['u1336'] = 'top';gv_vAlignTable['u1337'] = 'top';gv_vAlignTable['u1338'] = 'top';gv_vAlignTable['u1339'] = 'top';gv_vAlignTable['u590'] = 'center';u1140.tabIndex = 0;

u1140.style.cursor = 'pointer';
$axure.eventManager.click('u1140', function(e) {

if (true) {

	SetPanelStateNext('u439',true,'none','',500,'none','',500);

	SetPanelStateNext('u893',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u1889',true,'none','',500,'none','',500);

	SetPanelStateNext('u1430',true,'none','',500,'none','',500);

}
});
u1141.tabIndex = 0;

u1141.style.cursor = 'pointer';
$axure.eventManager.click('u1141', function(e) {

if (true) {

	SetPanelStateNext('u485',true,'none','',500,'none','',500);

	SetPanelStateNext('u939',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u1935',true,'none','',500,'none','',500);

	SetPanelStateNext('u1476',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u594'] = 'top';gv_vAlignTable['u595'] = 'top';gv_vAlignTable['u596'] = 'top';gv_vAlignTable['u597'] = 'top';gv_vAlignTable['u598'] = 'top';gv_vAlignTable['u599'] = 'top';gv_vAlignTable['u1343'] = 'center';gv_vAlignTable['u1344'] = 'top';gv_vAlignTable['u1347'] = 'center';gv_vAlignTable['u1349'] = 'center';gv_vAlignTable['u767'] = 'center';gv_vAlignTable['u769'] = 'center';gv_vAlignTable['u1354'] = 'top';gv_vAlignTable['u1355'] = 'top';gv_vAlignTable['u1357'] = 'center';gv_vAlignTable['u1359'] = 'center';gv_vAlignTable['u776'] = 'top';gv_vAlignTable['u778'] = 'center';gv_vAlignTable['u1363'] = 'center';gv_vAlignTable['u1365'] = 'center';gv_vAlignTable['u1367'] = 'center';gv_vAlignTable['u1369'] = 'center';gv_vAlignTable['u786'] = 'top';gv_vAlignTable['u1371'] = 'top';gv_vAlignTable['u788'] = 'top';gv_vAlignTable['u789'] = 'top';gv_vAlignTable['u1374'] = 'top';gv_vAlignTable['u1375'] = 'top';gv_vAlignTable['u1376'] = 'top';gv_vAlignTable['u1377'] = 'top';gv_vAlignTable['u1378'] = 'top';gv_vAlignTable['u1379'] = 'top';gv_vAlignTable['u796'] = 'top';gv_vAlignTable['u1381'] = 'top';gv_vAlignTable['u797'] = 'top';gv_vAlignTable['u798'] = 'top';gv_vAlignTable['u1385'] = 'top';gv_vAlignTable['u1386'] = 'top';gv_vAlignTable['u1387'] = 'top';gv_vAlignTable['u1388'] = 'top';gv_vAlignTable['u1389'] = 'top';gv_vAlignTable['u1390'] = 'top';gv_vAlignTable['u1391'] = 'top';gv_vAlignTable['u1392'] = 'top';gv_vAlignTable['u1393'] = 'top';gv_vAlignTable['u1394'] = 'top';gv_vAlignTable['u1285'] = 'top';gv_vAlignTable['u1396'] = 'center';gv_vAlignTable['u1399'] = 'top';gv_vAlignTable['u959'] = 'top';gv_vAlignTable['u979'] = 'top';gv_vAlignTable['u988'] = 'top';gv_vAlignTable['u989'] = 'top';gv_vAlignTable['u2500'] = 'center';HookClick('u2501', false);
gv_vAlignTable['u2502'] = 'center';HookClick('u2503', false);
gv_vAlignTable['u2504'] = 'center';gv_vAlignTable['u2505'] = 'top';HookClick('u2506', false);
gv_vAlignTable['u2507'] = 'center';gv_vAlignTable['u2508'] = 'top';gv_vAlignTable['u2302'] = 'center';gv_vAlignTable['u2303'] = 'top';gv_vAlignTable['u2133'] = 'top';HookClick('u2512', false);
gv_vAlignTable['u2513'] = 'center';gv_vAlignTable['u2514'] = 'top';gv_vAlignTable['u2516'] = 'center';HookClick('u2517', false);
gv_vAlignTable['u2518'] = 'center';u2143.tabIndex = 0;

u2143.style.cursor = 'pointer';
$axure.eventManager.click('u2143', function(e) {

if (true) {

	SetPanelStateNext('u262',true,'none','',500,'none','',500);

	SetPanelStateNext('u704',true,'none','',500,'none','',500);

	SetPanelStateNext('u1695',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u1243',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u2520'] = 'center';HookClick('u2525', false);
gv_vAlignTable['u2526'] = 'center';u2527.tabIndex = 0;

u2527.style.cursor = 'pointer';
$axure.eventManager.click('u2527', function(e) {

if (true) {

SetWidgetSelected('u2497');
}
});
u2528.tabIndex = 0;

u2528.style.cursor = 'pointer';
$axure.eventManager.click('u2528', function(e) {

if (true) {

SetWidgetSelected('u2501');
}
});
u2529.tabIndex = 0;

u2529.style.cursor = 'pointer';
$axure.eventManager.click('u2529', function(e) {

if (true) {

SetWidgetSelected('u2503');
}
});
u2530.tabIndex = 0;

u2530.style.cursor = 'pointer';
$axure.eventManager.click('u2530', function(e) {

if (true) {

SetWidgetSelected('u2499');
}
});
u2531.tabIndex = 0;

u2531.style.cursor = 'pointer';
$axure.eventManager.click('u2531', function(e) {

if (true) {

SetWidgetSelected('u2506');
}
});
u2532.tabIndex = 0;

u2532.style.cursor = 'pointer';
$axure.eventManager.click('u2532', function(e) {

if (true) {

SetWidgetSelected('u2512');
}
});
gv_vAlignTable['u2329'] = 'top';HookClick('u2534', false);
gv_vAlignTable['u2535'] = 'center';u2536.tabIndex = 0;

u2536.style.cursor = 'pointer';
$axure.eventManager.click('u2536', function(e) {

if (true) {

SetWidgetSelected('u2534');function waitu8ba43a8a5aaa41d4a0eecf8c585cfabd1() {

	MoveWidgetBy('u2493', GetNum('0'), GetNum('-349'),'swing',500);

	MoveWidgetBy('u2558', GetNum('0'), GetNum('-349'),'swing',500);
function waitu15c9785d7cf041a781763844b81daada1() {

	SetPanelState('u2558', 'pd1u2558','fade','',400,'fade','',400);

	SetPanelState('u2594', 'pd0u2594','none','',500,'fade','',300);

	SetPanelState('u2600', 'pd0u2600','none','',500,'fade','',300);

SetWidgetNotSelected('u2534');}
setTimeout(waitu15c9785d7cf041a781763844b81daada1, 300);
}
setTimeout(waitu8ba43a8a5aaa41d4a0eecf8c585cfabd1, 150);

}
});
u2537.tabIndex = 0;

u2537.style.cursor = 'pointer';
$axure.eventManager.click('u2537', function(e) {

if (true) {

SetWidgetSelected('u2525');function waitu0d9433cac9814bd99b0399ef9d212d9d1() {

	SetPanelState('u2171', 'pd0u2171','none','',500,'none','',500);

	SetPanelState('u2558', 'pd0u2558','fade','',400,'fade','',400);

SetGlobalVariableValue('FWDashCardsYPosition', '-70');

	MoveWidgetBy('u2493', GetNum('0'), GetNum('-349'),'swing',500);

	MoveWidgetBy('u2558', GetNum('0'), GetNum('-349'),'swing',500);

	MoveWidgetTo('u2172', GetNum('0'), GetNum('-70'),'none',500);
function waituc23bd06a2d3a47798281ef57bf104b6d1() {

	SetPanelState('u2594', 'pd0u2594','none','',500,'fade','',300);

	SetPanelState('u2600', 'pd0u2600','none','',500,'fade','',300);
function waituf10f3b22790443cd8bfc065e69160e591() {

SetWidgetNotSelected('u2525');
	SetPanelState('u2171', 'pd1u2171','none','',500,'none','',500);

	SetPanelState('u2558', 'pd1u2558','none','',500,'none','',500);
}
setTimeout(waituf10f3b22790443cd8bfc065e69160e591, 1000);
}
setTimeout(waituc23bd06a2d3a47798281ef57bf104b6d1, 300);
}
setTimeout(waitu0d9433cac9814bd99b0399ef9d212d9d1, 150);

}
});
gv_vAlignTable['u2538'] = 'top';gv_vAlignTable['u2540'] = 'center';gv_vAlignTable['u2541'] = 'top';gv_vAlignTable['u2542'] = 'top';gv_vAlignTable['u2543'] = 'top';HookClick('u2550', false);
gv_vAlignTable['u2551'] = 'center';u2552.tabIndex = 0;

u2552.style.cursor = 'pointer';
$axure.eventManager.click('u2552', function(e) {

if (true) {

SetWidgetSelected('u2550');function waitua666e45c21334e7ea2780c4673e2b44c1() {

	SetPanelState('u2171', 'pd0u2171','none','',500,'none','',500);

	SetPanelState('u2558', 'pd0u2558','fade','',400,'fade','',400);

SetGlobalVariableValue('FWDashCardsYPosition', '-70');

	MoveWidgetBy('u2493', GetNum('0'), GetNum('-349'),'swing',500);

	MoveWidgetBy('u2558', GetNum('0'), GetNum('-349'),'swing',500);

	MoveWidgetTo('u2172', GetNum('0'), GetNum('-70'),'none',500);

SetWidgetNotSelected('u2550');function waitue412fdd4f00c4b78af1ae5e1856b63201() {

	SetPanelState('u2594', 'pd0u2594','none','',500,'fade','',300);

	SetPanelState('u2600', 'pd0u2600','none','',500,'fade','',300);
function waitubf1a3750b736497db27969fe608828531() {

	SetPanelState('u2171', 'pd1u2171','none','',500,'none','',500);

	SetPanelState('u2558', 'pd1u2558','none','',500,'none','',500);
}
setTimeout(waitubf1a3750b736497db27969fe608828531, 1000);
}
setTimeout(waitue412fdd4f00c4b78af1ae5e1856b63201, 300);
}
setTimeout(waitua666e45c21334e7ea2780c4673e2b44c1, 150);

}
});
HookClick('u2553', false);
gv_vAlignTable['u2348'] = 'top';gv_vAlignTable['u2349'] = 'top';gv_vAlignTable['u2556'] = 'top';gv_vAlignTable['u2560'] = 'center';gv_vAlignTable['u2561'] = 'top';u2355.tabIndex = 0;

u2355.style.cursor = 'pointer';
$axure.eventManager.click('u2355', function(e) {

if (true) {

	SetPanelState('u2312', 'pd2u2312','none','',500,'none','',500);

	MoveWidgetTo('u175', GetNum('-576'), GetNum('0'),'none',1000);

SetGlobalVariableValue('FWDetailCardsXPosition', '-576');

SetGlobalVariableValue('FWDetailCurrentField', 'Airport');
function waitu65ba68ebabeb4ed0a8502623cd8f9f441() {

	SetPanelState('u2600', 'pd1u2600','fade','',600,'none','',600);

	SetPanelState('u2590', 'pd1u2590','fade','',400,'none','',400);

	SetPanelState('u2592', 'pd1u2592','none','',400,'fade','',400);

	SetPanelState('u171', 'pd1u171','swing','left',600,'swing','left',600);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',600);
function waitu8d1ea8c3cef242d5a4d6f0914a6b13941() {

	SetPanelState('u2606', 'pd1u2606','none','',400,'fade','',400);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',400);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',400);
function waitu5d8f9d4668374ebaa6e55fa9fee593911() {

	SetPanelState('u2312', 'pd1u2312','none','',500,'none','',500);
}
setTimeout(waitu5d8f9d4668374ebaa6e55fa9fee593911, 450);
}
setTimeout(waitu8d1ea8c3cef242d5a4d6f0914a6b13941, 150);
}
setTimeout(waitu65ba68ebabeb4ed0a8502623cd8f9f441, 100);

}

if (((GetWidgetVisibility('u1152')) == (true)) || ((GetWidgetVisibility('u2149')) == (true))) {
function waitu6301aa5f1e674497aec33444828730df1() {

	MoveWidgetBy('u175', GetNum('-80'), GetNum('0'),'linear',380);
function waitu116ba6e6a3f3414b8d2c508e1059d9a41() {

	MoveWidgetBy('u175', GetNum('80'), GetNum('0'),'easeInCubic',320);
function waitub63dfc61505d4f3d8e1c49d1a05949cd1() {

	SetPanelVisibility('u1152','hidden','none',500);

	SetPanelVisibility('u2149','hidden','none',500);

	SetPanelVisibility('u216','','none',500);

	SetPanelVisibility('u248','','none',500);

	SetPanelVisibility('u258','','none',500);

	SetPanelVisibility('u1197','','none',500);

	SetPanelVisibility('u1229','','none',500);

	SetPanelVisibility('u1239','','none',500);
}
setTimeout(waitub63dfc61505d4f3d8e1c49d1a05949cd1, 1500);
}
setTimeout(waitu116ba6e6a3f3414b8d2c508e1059d9a41, 570);
}
setTimeout(waitu6301aa5f1e674497aec33444828730df1, 520);

}
});
gv_vAlignTable['u2357'] = 'center';HookClick('u2565', false);
gv_vAlignTable['u2566'] = 'center';HookClick('u2567', false);
gv_vAlignTable['u2568'] = 'center';gv_vAlignTable['u2569'] = 'top';gv_vAlignTable['u2571'] = 'center';gv_vAlignTable['u2573'] = 'top';u2574.tabIndex = 0;

u2574.style.cursor = 'pointer';
$axure.eventManager.click('u2574', function(e) {

if (true) {

SetWidgetSelected('u2565');function waitud82f70c115744eb8a1be58d6ccd59f491() {

	SetPanelState('u2493', 'pd0u2493','none','',500,'none','',500);

	MoveWidgetBy('u2558', GetNum('0'), GetNum('349'),'swing',500);

	MoveWidgetBy('u2493', GetNum('0'), GetNum('349'),'swing',500);

	SetPanelState('u2558', 'pd2u2558','fade','',400,'fade','',400);

	SetPanelState('u2594', 'pd1u2594','fade','',300,'none','',500);

	SetPanelState('u2600', 'pd1u2600','fade','',300,'none','',500);
function waitu6a5c3f59aff84edf9d42556457f8d8e71() {

SetWidgetNotSelected('u2565');}
setTimeout(waitu6a5c3f59aff84edf9d42556457f8d8e71, 500);
}
setTimeout(waitud82f70c115744eb8a1be58d6ccd59f491, 150);

}
});
u2575.tabIndex = 0;

u2575.style.cursor = 'pointer';
$axure.eventManager.click('u2575', function(e) {

if (true) {

SetWidgetSelected('u2567');function waitu766c99b01f484d35ac3fa3c3ce3561c01() {

	SetPanelState('u2493', 'pd1u2493','none','',500,'none','',500);

	MoveWidgetBy('u2493', GetNum('0'), GetNum('349'),'swing',500);

	MoveWidgetBy('u2558', GetNum('0'), GetNum('349'),'swing',500);

	SetPanelState('u2558', 'pd2u2558','fade','',400,'fade','',400);

	SetPanelState('u2594', 'pd1u2594','fade','',300,'none','',500);

	SetPanelState('u2600', 'pd1u2600','fade','',300,'none','',500);
function waitue5115d2678be4b07aadfa632357240701() {

SetWidgetNotSelected('u2567');}
setTimeout(waitue5115d2678be4b07aadfa632357240701, 500);
}
setTimeout(waitu766c99b01f484d35ac3fa3c3ce3561c01, 150);

}
});
gv_vAlignTable['u2577'] = 'center';HookClick('u2578', false);
gv_vAlignTable['u2579'] = 'center';gv_vAlignTable['u2198'] = 'center';gv_vAlignTable['u1901'] = 'center';gv_vAlignTable['u1903'] = 'center';gv_vAlignTable['u1905'] = 'center';gv_vAlignTable['u1907'] = 'center';HookClick('u2580', false);
gv_vAlignTable['u2581'] = 'center';gv_vAlignTable['u2583'] = 'center';gv_vAlignTable['u2584'] = 'top';gv_vAlignTable['u2585'] = 'top';gv_vAlignTable['u2588'] = 'center';gv_vAlignTable['u2589'] = 'top';gv_vAlignTable['u1911'] = 'top';gv_vAlignTable['u1912'] = 'top';gv_vAlignTable['u1913'] = 'top';gv_vAlignTable['u1914'] = 'top';gv_vAlignTable['u1915'] = 'top';gv_vAlignTable['u1917'] = 'center';gv_vAlignTable['u2591'] = 'top';gv_vAlignTable['u2593'] = 'top';gv_vAlignTable['u2596'] = 'center';gv_vAlignTable['u2598'] = 'center';u2599.tabIndex = 0;

u2599.style.cursor = 'pointer';
$axure.eventManager.click('u2599', function(e) {

if ((GetGlobalVariableValue('RevealedMenu')) == ('')) {

SetWidgetSelected('u2595');function waitu609532dec3ca4f14bdc16c8b8c0d91661() {

SetGlobalVariableValue('RevealedMenu', 'Content');

	SetPanelVisibility('u0','','none',500);

	BringToFront("u169");

	MoveWidgetTo('u169', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('' + (GetGlobalVariableValue('MainScreenXRightLimit')) + ''), GetNum('0'),'swing',350);

SetGlobalVariableValue('MainScreenXPosition', '' + (GetGlobalVariableValue('MainScreenXRightLimit')) + '');
function waitud6521b255bdb42e39e837c7cb7067e031() {

SetWidgetNotSelected('u2595');
	BringToFront("u110");
}
setTimeout(waitud6521b255bdb42e39e837c7cb7067e031, 350);
}
setTimeout(waitu609532dec3ca4f14bdc16c8b8c0d91661, 100);

}
});
gv_vAlignTable['u1920'] = 'top';gv_vAlignTable['u1921'] = 'top';gv_vAlignTable['u1922'] = 'top';gv_vAlignTable['u1923'] = 'top';gv_vAlignTable['u1924'] = 'top';gv_vAlignTable['u1925'] = 'top';gv_vAlignTable['u1926'] = 'top';gv_vAlignTable['u1927'] = 'top';gv_vAlignTable['u600'] = 'top';gv_vAlignTable['u601'] = 'top';gv_vAlignTable['u602'] = 'top';gv_vAlignTable['u603'] = 'top';gv_vAlignTable['u604'] = 'top';gv_vAlignTable['u605'] = 'top';gv_vAlignTable['u606'] = 'top';gv_vAlignTable['u607'] = 'top';gv_vAlignTable['u608'] = 'top';gv_vAlignTable['u609'] = 'top';gv_vAlignTable['u1932'] = 'top';gv_vAlignTable['u1933'] = 'top';gv_vAlignTable['u1934'] = 'top';gv_vAlignTable['u1937'] = 'center';gv_vAlignTable['u610'] = 'top';gv_vAlignTable['u611'] = 'top';gv_vAlignTable['u612'] = 'top';gv_vAlignTable['u613'] = 'top';gv_vAlignTable['u614'] = 'top';gv_vAlignTable['u615'] = 'top';gv_vAlignTable['u616'] = 'top';gv_vAlignTable['u617'] = 'top';gv_vAlignTable['u618'] = 'top';gv_vAlignTable['u1944'] = 'center';gv_vAlignTable['u1947'] = 'top';gv_vAlignTable['u620'] = 'center';gv_vAlignTable['u622'] = 'top';gv_vAlignTable['u623'] = 'top';gv_vAlignTable['u625'] = 'center';gv_vAlignTable['u627'] = 'center';gv_vAlignTable['u628'] = 'top';gv_vAlignTable['u629'] = 'top';gv_vAlignTable['u1953'] = 'top';gv_vAlignTable['u1954'] = 'top';gv_vAlignTable['u1955'] = 'top';gv_vAlignTable['u1956'] = 'top';gv_vAlignTable['u1957'] = 'top';gv_vAlignTable['u630'] = 'top';gv_vAlignTable['u631'] = 'top';gv_vAlignTable['u632'] = 'top';gv_vAlignTable['u635'] = 'center';gv_vAlignTable['u637'] = 'center';gv_vAlignTable['u639'] = 'center';gv_vAlignTable['u1964'] = 'center';gv_vAlignTable['u1966'] = 'center';gv_vAlignTable['u641'] = 'center';gv_vAlignTable['u643'] = 'center';gv_vAlignTable['u645'] = 'top';gv_vAlignTable['u646'] = 'top';gv_vAlignTable['u647'] = 'top';gv_vAlignTable['u648'] = 'top';gv_vAlignTable['u649'] = 'top';gv_vAlignTable['u1972'] = 'center';gv_vAlignTable['u1973'] = 'top';gv_vAlignTable['u1974'] = 'top';gv_vAlignTable['u1975'] = 'top';gv_vAlignTable['u1976'] = 'top';gv_vAlignTable['u1977'] = 'top';gv_vAlignTable['u650'] = 'top';gv_vAlignTable['u651'] = 'top';gv_vAlignTable['u652'] = 'top';gv_vAlignTable['u653'] = 'top';gv_vAlignTable['u654'] = 'top';gv_vAlignTable['u655'] = 'top';gv_vAlignTable['u656'] = 'top';gv_vAlignTable['u657'] = 'top';gv_vAlignTable['u658'] = 'top';gv_vAlignTable['u659'] = 'top';gv_vAlignTable['u1402'] = 'center';gv_vAlignTable['u1404'] = 'center';gv_vAlignTable['u1406'] = 'center';gv_vAlignTable['u1980'] = 'top';gv_vAlignTable['u1983'] = 'top';gv_vAlignTable['u1984'] = 'top';gv_vAlignTable['u1985'] = 'top';gv_vAlignTable['u1986'] = 'top';gv_vAlignTable['u1987'] = 'top';gv_vAlignTable['u660'] = 'top';gv_vAlignTable['u661'] = 'top';gv_vAlignTable['u662'] = 'top';gv_vAlignTable['u663'] = 'top';gv_vAlignTable['u664'] = 'top';gv_vAlignTable['u665'] = 'top';gv_vAlignTable['u666'] = 'top';gv_vAlignTable['u667'] = 'top';gv_vAlignTable['u668'] = 'top';gv_vAlignTable['u669'] = 'top';gv_vAlignTable['u1412'] = 'top';gv_vAlignTable['u1413'] = 'top';gv_vAlignTable['u1414'] = 'top';gv_vAlignTable['u1415'] = 'top';gv_vAlignTable['u1416'] = 'top';gv_vAlignTable['u1417'] = 'top';gv_vAlignTable['u1418'] = 'top';gv_vAlignTable['u1419'] = 'top';gv_vAlignTable['u1993'] = 'top';gv_vAlignTable['u1994'] = 'top';gv_vAlignTable['u1995'] = 'top';gv_vAlignTable['u1996'] = 'top';gv_vAlignTable['u1997'] = 'top';gv_vAlignTable['u1300'] = 'top';gv_vAlignTable['u670'] = 'top';gv_vAlignTable['u671'] = 'top';gv_vAlignTable['u673'] = 'center';gv_vAlignTable['u675'] = 'top';gv_vAlignTable['u676'] = 'top';gv_vAlignTable['u678'] = 'center';gv_vAlignTable['u1422'] = 'top';gv_vAlignTable['u1423'] = 'top';gv_vAlignTable['u1424'] = 'top';gv_vAlignTable['u1425'] = 'top';gv_vAlignTable['u1427'] = 'center';gv_vAlignTable['u1429'] = 'center';gv_vAlignTable['u680'] = 'center';gv_vAlignTable['u681'] = 'top';gv_vAlignTable['u682'] = 'top';gv_vAlignTable['u683'] = 'top';gv_vAlignTable['u684'] = 'top';gv_vAlignTable['u685'] = 'top';gv_vAlignTable['u1432'] = 'center';gv_vAlignTable['u1434'] = 'top';gv_vAlignTable['u1435'] = 'top';gv_vAlignTable['u1436'] = 'top';gv_vAlignTable['u1438'] = 'center';u696.tabIndex = 0;

u696.style.cursor = 'pointer';
$axure.eventManager.click('u696', function(e) {

if (true) {

	SetPanelStateNext('u262',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u704',true,'none','',500,'none','',500);

	SetPanelStateNext('u1695',true,'none','',500,'none','',500);

	SetPanelStateNext('u1243',true,'none','',500,'none','',500);

}
});
u697.tabIndex = 0;

u697.style.cursor = 'pointer';
$axure.eventManager.click('u697', function(e) {

if (true) {

	SetPanelStateNext('u359',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u801',true,'none','',500,'none','',500);

	SetPanelStateNext('u1797',true,'none','',500,'none','',500);

	SetPanelStateNext('u1345',true,'none','',500,'none','',500);

}
});
u698.tabIndex = 0;

u698.style.cursor = 'pointer';
$axure.eventManager.click('u698', function(e) {

if (true) {

	SetPanelStateNext('u439',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u893',true,'none','',500,'none','',500);

	SetPanelStateNext('u1889',true,'none','',500,'none','',500);

	SetPanelStateNext('u1430',true,'none','',500,'none','',500);

}
});
u699.tabIndex = 0;

u699.style.cursor = 'pointer';
$axure.eventManager.click('u699', function(e) {

if (true) {

	SetPanelStateNext('u485',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u939',true,'none','',500,'none','',500);

	SetPanelStateNext('u1935',true,'none','',500,'none','',500);

	SetPanelStateNext('u1476',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u1442'] = 'center';gv_vAlignTable['u1444'] = 'center';gv_vAlignTable['u1446'] = 'center';gv_vAlignTable['u1448'] = 'center';gv_vAlignTable['u1330'] = 'top';gv_vAlignTable['u1331'] = 'top';gv_vAlignTable['u1450'] = 'center';gv_vAlignTable['u1451'] = 'top';gv_vAlignTable['u1452'] = 'top';gv_vAlignTable['u1453'] = 'top';gv_vAlignTable['u1454'] = 'top';gv_vAlignTable['u1455'] = 'top';gv_vAlignTable['u1456'] = 'top';gv_vAlignTable['u1458'] = 'center';gv_vAlignTable['u1340'] = 'top';gv_vAlignTable['u1341'] = 'top';gv_vAlignTable['u1460'] = 'top';gv_vAlignTable['u1461'] = 'top';gv_vAlignTable['u1462'] = 'top';gv_vAlignTable['u1463'] = 'top';gv_vAlignTable['u1464'] = 'top';gv_vAlignTable['u1465'] = 'top';gv_vAlignTable['u1466'] = 'top';gv_vAlignTable['u1467'] = 'top';gv_vAlignTable['u1468'] = 'top';gv_vAlignTable['u1469'] = 'top';gv_vAlignTable['u1351'] = 'center';gv_vAlignTable['u1470'] = 'top';gv_vAlignTable['u1471'] = 'top';gv_vAlignTable['u1472'] = 'top';gv_vAlignTable['u1473'] = 'top';gv_vAlignTable['u1474'] = 'top';gv_vAlignTable['u1475'] = 'top';gv_vAlignTable['u1478'] = 'center';gv_vAlignTable['u1361'] = 'center';gv_vAlignTable['u1480'] = 'center';gv_vAlignTable['u1482'] = 'center';gv_vAlignTable['u1484'] = 'center';gv_vAlignTable['u1486'] = 'center';gv_vAlignTable['u1489'] = 'center';gv_vAlignTable['u1370'] = 'top';gv_vAlignTable['u1372'] = 'top';gv_vAlignTable['u1373'] = 'top';gv_vAlignTable['u1493'] = 'center';gv_vAlignTable['u1495'] = 'center';gv_vAlignTable['u1497'] = 'center';gv_vAlignTable['u1499'] = 'center';gv_vAlignTable['u1380'] = 'top';gv_vAlignTable['u1382'] = 'top';gv_vAlignTable['u1383'] = 'top';gv_vAlignTable['u1384'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u2207'] = 'top';gv_vAlignTable['u2209'] = 'top';gv_vAlignTable['u2602'] = 'center';gv_vAlignTable['u2604'] = 'center';u2605.tabIndex = 0;

u2605.style.cursor = 'pointer';
$axure.eventManager.click('u2605', function(e) {

if ((GetGlobalVariableValue('RevealedMenu')) == ('')) {

SetWidgetSelected('u2601');function waitu3149450fb6764ff9b9afc926fcf9b8d71() {

SetGlobalVariableValue('RevealedMenu', 'Tools');

	SetPanelVisibility('u151','','none',500);

	BringToFront("u169");

	MoveWidgetTo('u169', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + ''), GetNum('0'),'swing',350);

SetGlobalVariableValue('MainScreenXPosition', '' + (GetGlobalVariableValue('MainScreenXLeftLimit')) + '');
function waitu4416bc576237470089a14db90fac25231() {

SetWidgetNotSelected('u2601');}
setTimeout(waitu4416bc576237470089a14db90fac25231, 350);
}
setTimeout(waitu3149450fb6764ff9b9afc926fcf9b8d71, 100);

}
});
gv_vAlignTable['u2608'] = 'center';gv_vAlignTable['u2219'] = 'center';gv_vAlignTable['u2610'] = 'center';u2611.tabIndex = 0;

u2611.style.cursor = 'pointer';
$axure.eventManager.click('u2611', function(e) {

if ((GetPanelState('u171')) == ('pd1u171')) {

SetWidgetSelected('u2607');function waitua8c82c4630d5407c8f1c50534612bae21() {

	SetPanelState('u2600', 'pd0u2600','none','',400,'fade','',400);

	SetPanelState('u2590', 'pd0u2590','none','',400,'fade','',400);

	SetPanelState('u2592', 'pd0u2592','fade','',400,'none','',400);

	SetPanelState('u171', 'pd0u171','swing','right',600,'swing','right',600);

	MoveWidgetBy('u2600', GetNum('320'), GetNum('0'),'swing',600);

	MoveWidgetBy('u2590', GetNum('320'), GetNum('0'),'swing',600);

	MoveWidgetBy('u2592', GetNum('320'), GetNum('0'),'easeOutCubic',600);
function waitu882a4233aa1440df981c5432dfe3a66f1() {

	SetPanelState('u2606', 'pd0u2606','fade','',400,'none','',400);

	MoveWidgetBy('u2606', GetNum('-50'), GetNum('0'),'swing',400);

	MoveWidgetBy('u2594', GetNum('-42'), GetNum('0'),'swing',400);

SetWidgetNotSelected('u2607');}
setTimeout(waitu882a4233aa1440df981c5432dfe3a66f1, 150);
}
setTimeout(waitua8c82c4630d5407c8f1c50534612bae21, 100);

}
});
gv_vAlignTable['u2401'] = 'top';gv_vAlignTable['u2404'] = 'top';gv_vAlignTable['u451'] = 'center';gv_vAlignTable['u2229'] = 'top';gv_vAlignTable['u459'] = 'center';gv_vAlignTable['u2411'] = 'top';gv_vAlignTable['u2412'] = 'top';gv_vAlignTable['u2234'] = 'top';gv_vAlignTable['u2236'] = 'top';u2237.tabIndex = 0;

u2237.style.cursor = 'pointer';
$axure.eventManager.click('u2237', function(e) {

if (true) {

	SetPanelState('u2194', 'pd2u2194','none','',500,'none','',500);

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'none',1000);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

SetGlobalVariableValue('FWDetailCurrentField', 'Homestead');
function waitu036f3133cae542cdb0efb5b27deadb731() {

	SetPanelState('u2600', 'pd1u2600','fade','',600,'none','',600);

	SetPanelState('u2590', 'pd1u2590','fade','',400,'none','',400);

	SetPanelState('u2592', 'pd1u2592','none','',400,'fade','',400);

	SetPanelState('u171', 'pd1u171','swing','left',600,'swing','left',600);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',600);
function waitu17f9c17da06a4ea8a1dd332c9f5323de1() {

	SetPanelState('u2606', 'pd1u2606','none','',400,'fade','',400);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',400);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',400);
function waitub3fc1ab98eee48d782124779bbe0997d1() {

	SetPanelState('u2194', 'pd1u2194','none','',500,'none','',500);
}
setTimeout(waitub3fc1ab98eee48d782124779bbe0997d1, 450);
}
setTimeout(waitu17f9c17da06a4ea8a1dd332c9f5323de1, 150);
}
setTimeout(waitu036f3133cae542cdb0efb5b27deadb731, 100);

}

if (((GetWidgetVisibility('u1152')) == (true)) || ((GetWidgetVisibility('u2149')) == (true))) {
function waitu66d40012b07e4744955a4546af0376821() {

	MoveWidgetBy('u175', GetNum('-80'), GetNum('0'),'linear',380);
function waitu007f36947c40466c9a499abc340dd0e91() {

	MoveWidgetBy('u175', GetNum('80'), GetNum('0'),'easeInCubic',320);
function waitu2b569b240bea4ea99b575935a26dec361() {

	SetPanelVisibility('u1152','hidden','none',500);

	SetPanelVisibility('u2149','hidden','none',500);

	SetPanelVisibility('u216','','none',500);

	SetPanelVisibility('u248','','none',500);

	SetPanelVisibility('u258','','none',500);

	SetPanelVisibility('u1197','','none',500);

	SetPanelVisibility('u1229','','none',500);

	SetPanelVisibility('u1239','','none',500);
}
setTimeout(waitu2b569b240bea4ea99b575935a26dec361, 1500);
}
setTimeout(waitu007f36947c40466c9a499abc340dd0e91, 570);
}
setTimeout(waitu66d40012b07e4744955a4546af0376821, 520);

}
});
gv_vAlignTable['u462'] = 'top';gv_vAlignTable['u463'] = 'top';gv_vAlignTable['u469'] = 'top';gv_vAlignTable['u2243'] = 'center';gv_vAlignTable['u2244'] = 'top';gv_vAlignTable['u2247'] = 'center';gv_vAlignTable['u2249'] = 'center';gv_vAlignTable['u474'] = 'top';gv_vAlignTable['u475'] = 'top';gv_vAlignTable['u478'] = 'top';gv_vAlignTable['u479'] = 'top';gv_vAlignTable['u2432'] = 'center';gv_vAlignTable['u2252'] = 'center';gv_vAlignTable['u2258'] = 'top';gv_vAlignTable['u2259'] = 'top';gv_vAlignTable['u484'] = 'top';gv_vAlignTable['u489'] = 'center';gv_vAlignTable['u2442'] = 'top';gv_vAlignTable['u2443'] = 'top';gv_vAlignTable['u2444'] = 'top';gv_vAlignTable['u2262'] = 'center';gv_vAlignTable['u2263'] = 'top';gv_vAlignTable['u2264'] = 'top';gv_vAlignTable['u2448'] = 'top';gv_vAlignTable['u2268'] = 'top';gv_vAlignTable['u2269'] = 'top';gv_vAlignTable['u498'] = 'center';gv_vAlignTable['u2453'] = 'center';gv_vAlignTable['u2272'] = 'top';gv_vAlignTable['u2274'] = 'center';gv_vAlignTable['u2278'] = 'center';gv_vAlignTable['u2462'] = 'center';gv_vAlignTable['u2463'] = 'top';gv_vAlignTable['u2464'] = 'top';gv_vAlignTable['u2282'] = 'top';gv_vAlignTable['u2283'] = 'top';gv_vAlignTable['u2469'] = 'top';gv_vAlignTable['u2288'] = 'top';gv_vAlignTable['u2289'] = 'top';gv_vAlignTable['u2472'] = 'top';gv_vAlignTable['u2292'] = 'top';gv_vAlignTable['u2293'] = 'top';gv_vAlignTable['u2294'] = 'top';gv_vAlignTable['u2298'] = 'center';gv_vAlignTable['u2483'] = 'center';u700.tabIndex = 0;

u700.style.cursor = 'pointer';
$axure.eventManager.click('u700', function(e) {

if (true) {

	SetPanelStateNext('u580',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u1033',true,'none','',500,'none','',500);

	SetPanelStateNext('u2029',true,'none','',500,'none','',500);

	SetPanelStateNext('u1571',true,'none','',500,'none','',500);

}
});
u701.tabIndex = 0;

u701.style.cursor = 'pointer';
$axure.eventManager.click('u701', function(e) {

if (true) {

	SetPanelStateNext('u633',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u2082',true,'none','',500,'none','',500);

	SetPanelStateNext('u1624',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u703'] = 'center';gv_vAlignTable['u706'] = 'center';gv_vAlignTable['u708'] = 'top';gv_vAlignTable['u709'] = 'top';gv_vAlignTable['u2492'] = 'center';gv_vAlignTable['u710'] = 'top';gv_vAlignTable['u711'] = 'top';gv_vAlignTable['u712'] = 'top';gv_vAlignTable['u713'] = 'top';gv_vAlignTable['u714'] = 'top';gv_vAlignTable['u715'] = 'top';gv_vAlignTable['u716'] = 'top';gv_vAlignTable['u717'] = 'top';gv_vAlignTable['u718'] = 'top';gv_vAlignTable['u719'] = 'top';gv_vAlignTable['u721'] = 'center';gv_vAlignTable['u723'] = 'center';gv_vAlignTable['u725'] = 'center';gv_vAlignTable['u727'] = 'center';gv_vAlignTable['u729'] = 'center';gv_vAlignTable['u731'] = 'center';gv_vAlignTable['u733'] = 'center';gv_vAlignTable['u735'] = 'center';gv_vAlignTable['u737'] = 'center';gv_vAlignTable['u739'] = 'center';gv_vAlignTable['u741'] = 'center';gv_vAlignTable['u743'] = 'center';gv_vAlignTable['u744'] = 'top';gv_vAlignTable['u745'] = 'top';gv_vAlignTable['u746'] = 'top';gv_vAlignTable['u747'] = 'top';gv_vAlignTable['u748'] = 'top';gv_vAlignTable['u749'] = 'top';gv_vAlignTable['u750'] = 'top';gv_vAlignTable['u751'] = 'top';gv_vAlignTable['u752'] = 'top';gv_vAlignTable['u753'] = 'top';gv_vAlignTable['u754'] = 'top';gv_vAlignTable['u755'] = 'top';gv_vAlignTable['u756'] = 'top';gv_vAlignTable['u758'] = 'center';gv_vAlignTable['u2004'] = 'top';gv_vAlignTable['u2005'] = 'top';gv_vAlignTable['u2007'] = 'center';gv_vAlignTable['u2009'] = 'center';gv_vAlignTable['u1508'] = 'top';gv_vAlignTable['u1509'] = 'top';gv_vAlignTable['u760'] = 'center';gv_vAlignTable['u762'] = 'top';gv_vAlignTable['u763'] = 'top';gv_vAlignTable['u765'] = 'center';gv_vAlignTable['u2010'] = 'top';gv_vAlignTable['u2011'] = 'top';gv_vAlignTable['u2012'] = 'top';gv_vAlignTable['u2013'] = 'top';gv_vAlignTable['u2014'] = 'top';gv_vAlignTable['u2015'] = 'top';gv_vAlignTable['u2016'] = 'top';gv_vAlignTable['u2017'] = 'top';gv_vAlignTable['u2018'] = 'top';gv_vAlignTable['u2019'] = 'top';gv_vAlignTable['u1518'] = 'top';gv_vAlignTable['u1519'] = 'top';gv_vAlignTable['u771'] = 'center';gv_vAlignTable['u773'] = 'center';gv_vAlignTable['u775'] = 'center';gv_vAlignTable['u2020'] = 'top';gv_vAlignTable['u2022'] = 'top';gv_vAlignTable['u2023'] = 'top';gv_vAlignTable['u2024'] = 'top';gv_vAlignTable['u2025'] = 'top';gv_vAlignTable['u2026'] = 'top';gv_vAlignTable['u2028'] = 'center';gv_vAlignTable['u1528'] = 'top';gv_vAlignTable['u1529'] = 'top';gv_vAlignTable['u1400'] = 'top';gv_vAlignTable['u780'] = 'center';gv_vAlignTable['u782'] = 'center';gv_vAlignTable['u784'] = 'center';gv_vAlignTable['u785'] = 'top';gv_vAlignTable['u787'] = 'top';gv_vAlignTable['u2034'] = 'center';gv_vAlignTable['u2036'] = 'center';gv_vAlignTable['u2038'] = 'center';gv_vAlignTable['u1538'] = 'top';gv_vAlignTable['u1539'] = 'top';gv_vAlignTable['u1410'] = 'center';gv_vAlignTable['u790'] = 'top';gv_vAlignTable['u791'] = 'top';gv_vAlignTable['u792'] = 'top';gv_vAlignTable['u793'] = 'top';gv_vAlignTable['u794'] = 'top';gv_vAlignTable['u795'] = 'top';gv_vAlignTable['u2040'] = 'center';gv_vAlignTable['u2041'] = 'top';gv_vAlignTable['u2042'] = 'top';gv_vAlignTable['u2043'] = 'top';gv_vAlignTable['u2044'] = 'top';gv_vAlignTable['u2045'] = 'top';gv_vAlignTable['u2046'] = 'top';gv_vAlignTable['u2047'] = 'top';gv_vAlignTable['u2048'] = 'top';gv_vAlignTable['u2049'] = 'top';gv_vAlignTable['u1548'] = 'center';gv_vAlignTable['u1311'] = 'center';gv_vAlignTable['u1420'] = 'top';gv_vAlignTable['u1421'] = 'top';gv_vAlignTable['u2050'] = 'top';gv_vAlignTable['u2051'] = 'top';gv_vAlignTable['u2052'] = 'top';gv_vAlignTable['u2053'] = 'top';gv_vAlignTable['u2054'] = 'top';gv_vAlignTable['u2055'] = 'top';gv_vAlignTable['u2056'] = 'top';gv_vAlignTable['u2057'] = 'top';gv_vAlignTable['u2058'] = 'top';gv_vAlignTable['u2059'] = 'top';gv_vAlignTable['u1558'] = 'top';gv_vAlignTable['u1559'] = 'top';gv_vAlignTable['u1321'] = 'center';gv_vAlignTable['u958'] = 'top';gv_vAlignTable['u2060'] = 'top';gv_vAlignTable['u2061'] = 'top';gv_vAlignTable['u2062'] = 'top';gv_vAlignTable['u2063'] = 'top';gv_vAlignTable['u2064'] = 'top';gv_vAlignTable['u2065'] = 'top';gv_vAlignTable['u2066'] = 'top';gv_vAlignTable['u2067'] = 'top';gv_vAlignTable['u2069'] = 'center';gv_vAlignTable['u1568'] = 'top';gv_vAlignTable['u1569'] = 'top';gv_vAlignTable['u1440'] = 'center';gv_vAlignTable['u2071'] = 'top';gv_vAlignTable['u2072'] = 'top';gv_vAlignTable['u2074'] = 'center';gv_vAlignTable['u2076'] = 'center';gv_vAlignTable['u2077'] = 'top';gv_vAlignTable['u2078'] = 'top';gv_vAlignTable['u2079'] = 'top';gv_vAlignTable['u1578'] = 'center';gv_vAlignTable['u2080'] = 'top';gv_vAlignTable['u2081'] = 'top';gv_vAlignTable['u2084'] = 'center';gv_vAlignTable['u2087'] = 'center';gv_vAlignTable['u2089'] = 'center';gv_vAlignTable['u1588'] = 'top';gv_vAlignTable['u1589'] = 'top';gv_vAlignTable['u2091'] = 'center';gv_vAlignTable['u2093'] = 'center';gv_vAlignTable['u2094'] = 'top';gv_vAlignTable['u2095'] = 'top';gv_vAlignTable['u2096'] = 'top';gv_vAlignTable['u2097'] = 'top';gv_vAlignTable['u2098'] = 'top';gv_vAlignTable['u2099'] = 'top';gv_vAlignTable['u1598'] = 'top';gv_vAlignTable['u1599'] = 'top';gv_vAlignTable['u998'] = 'top';gv_vAlignTable['u999'] = 'top';gv_vAlignTable['u100'] = 'center';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u116'] = 'center';document.getElementById('u117_img').tabIndex = 0;
HookClick('u117', false);

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

	SetPanelState('u110', 'pd0u110','fade','',200,'none','',200);

	SetPanelVisibility('u131','hidden','fade',200);
function waitu360899a226314f89a1dd72beb9bbfec21() {

SetWidgetFormText('u119', '');

	SetPanelVisibility('u120','hidden','none',500);

	SetPanelState('u131', 'pd0u131','none','',500,'none','',500);

	SendToBack("u131");
}
setTimeout(waitu360899a226314f89a1dd72beb9bbfec21, 200);

}
});
gv_vAlignTable['u118'] = 'center';
$axure.eventManager.keyup('u119', function(e) {

if ((GetWidgetValueLength('u119')) == ('0')) {

	SetPanelState('u131', 'pd0u131','none','',500,'none','',500);

	SetPanelVisibility('u120','hidden','none',500);

}
else
if ((GetWidgetValueLength('u119')) > Number('0')) {

	SetPanelVisibility('u120','','none',500);

	SetPanelState('u131', 'pd1u131','none','',500,'none','',500);
function waitub033f526158d40aa8aca176f36ee6f5f1() {

	SetPanelState('u131', 'pd2u131','none','',500,'none','',500);
}
setTimeout(waitub033f526158d40aa8aca176f36ee6f5f1, 500);

}
});
gv_vAlignTable['u1491'] = 'center';document.getElementById('u121_img').tabIndex = 0;

u121.style.cursor = 'pointer';
$axure.eventManager.click('u121', function(e) {

if (true) {

SetFocusedWidgetText('');

SetWidgetFormText('u119', '');

	SetPanelVisibility('u120','hidden','none',500);

	SetPanelState('u131', 'pd0u131','none','',500,'none','',500);

}
});
gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u129'] = 'top';u130.tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	BringToFront("u131");

	BringToFront("u110");

	MoveWidgetTo('u110', GetNum('0'), GetNum('0'),'swing',200);

	MoveWidgetTo('u104', GetNum('0'), GetNum('50'),'swing',200);

	MoveWidgetTo('u1', GetNum('0'), GetNum('80'),'swing',200);

	MoveWidgetTo('u107', GetNum('0'), GetNum('280'),'swing',200);

	MoveWidgetTo('u40', GetNum('0'), GetNum('310'),'swing',200);

SetGlobalVariableValue('ContentMenuYPosition', '0');

	SetPanelState('u110', 'pd1u110','fade','',200,'none','',200);

	SetPanelVisibility('u131','','fade',200);
function waitu0bcf07d16ad3417faeee7cc20c1e40f31() {

	var obj1 = document.getElementById("u119");
    obj1.focus();
}
setTimeout(waitu0bcf07d16ad3417faeee7cc20c1e40f31, 250);

}
});
document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	SetPanelState('u110', 'pd0u110','fade','',200,'none','',200);

	SetPanelVisibility('u131','hidden','fade',200);
function waituf1e306820447418fb8c59117b5aa35481() {

SetWidgetFormText('u119', '');

	SetPanelVisibility('u120','hidden','none',500);

	SetPanelState('u131', 'pd0u131','none','',500,'none','',500);

	SendToBack("u131");
}
setTimeout(waituf1e306820447418fb8c59117b5aa35481, 200);

}
});
gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u140'] = 'top';gv_vAlignTable['u142'] = 'center';u143.tabIndex = 0;

u143.style.cursor = 'pointer';
$axure.eventManager.click('u143', function(e) {

if ((GetPanelState('u171')) == ('pd0u171')) {

SetWidgetSelected('u136');
	SetPanelState('u2194', 'pd2u2194','none','',500,'none','',500);

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'none',1000);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

SetGlobalVariableValue('FWDetailCurrentField', 'Homestead');
function waituc926514ea5f84e5fb5311c99ea4a1a281() {

	SetPanelState('u2600', 'pd1u2600','fade','',600,'none','',600);

	SetPanelState('u2590', 'pd1u2590','fade','',400,'none','',400);

	SetPanelState('u2592', 'pd1u2592','none','',400,'fade','',400);

	SetPanelState('u171', 'pd1u171','swing','left',600,'swing','left',600);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',600);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',600);
function waitu38aa1b6300a64ba48ecd1ff9dd4fc8e11() {

	SetPanelState('u2606', 'pd1u2606','none','',400,'fade','',400);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',400);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',400);
function waitu1b8400a6aeed416eb57dbf23ab365ee71() {

SetWidgetNotSelected('u136');
	SetPanelState('u2194', 'pd1u2194','none','',500,'none','',500);
}
setTimeout(waitu1b8400a6aeed416eb57dbf23ab365ee71, 450);
}
setTimeout(waitu38aa1b6300a64ba48ecd1ff9dd4fc8e11, 150);
}
setTimeout(waituc926514ea5f84e5fb5311c99ea4a1a281, 800);

}
else
if ((GetPanelState('u171')) == ('pd1u171')) {

SetWidgetSelected('u136');function waitu77c9392a488b47d2a3b382f146dc4e741() {

	MoveWidgetTo('u175', GetNum('0'), GetNum('0'),'swing',1100);

SetGlobalVariableValue('FWDetailCardsXPosition', '0');

SetGlobalVariableValue('FWDetailCurrentField', 'Homestead');
function waitu2d5e939838464141968065e6ca20be571() {

SetWidgetNotSelected('u136');}
setTimeout(waitu2d5e939838464141968065e6ca20be571, 350);
}
setTimeout(waitu77c9392a488b47d2a3b382f146dc4e741, 400);

}

if (((GetWidgetVisibility('u1152')) == (true)) || ((GetWidgetVisibility('u2149')) == (true))) {
function waitu353c8754b4ce4f69a48ea3e58a4ae19e1() {

	MoveWidgetBy('u175', GetNum('-80'), GetNum('0'),'linear',380);
function waitu24d3eadc1d6b42fe838b9f21f1d415261() {

	MoveWidgetBy('u175', GetNum('80'), GetNum('0'),'easeInCubic',320);
function waitu14522bb108e64b8a9800bb3a7c15b3661() {

	SetPanelVisibility('u1152','hidden','none',500);

	SetPanelVisibility('u2149','hidden','none',500);

	SetPanelVisibility('u216','','none',500);

	SetPanelVisibility('u248','','none',500);

	SetPanelVisibility('u258','','none',500);

	SetPanelVisibility('u1197','','none',500);

	SetPanelVisibility('u1229','','none',500);

	SetPanelVisibility('u1239','','none',500);
}
setTimeout(waitu14522bb108e64b8a9800bb3a7c15b3661, 1500);
}
setTimeout(waitu24d3eadc1d6b42fe838b9f21f1d415261, 570);
}
setTimeout(waitu353c8754b4ce4f69a48ea3e58a4ae19e1, 1220);

}

if ((GetGlobalVariableValue('RevealedMenu')) == ('Content')) {

	SetPanelState('u110', 'pd0u110','fade','',200,'fade','',200);

	SetPanelVisibility('u131','hidden','fade',200);
function waitu20aab04148cc4a32b49f04a6e48bbe8f1() {

SetWidgetFormText('u119', '');

	SetPanelVisibility('u120','hidden','none',500);

	SetPanelState('u131', 'pd0u131','none','',500,'none','',500);

	SendToBack("u169");

	SendToBack("u110");

	SendToBack("u131");
function waitu22e1afa154ed4139bb7d91a9052d4d351() {

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waitu545cd4a65b314d78967171e332ae7d3f1() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u0','hidden','none',500);

	MoveWidgetTo('u110', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('280'),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('310'),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '0');
}
setTimeout(waitu545cd4a65b314d78967171e332ae7d3f1, 350);
}
setTimeout(waitu22e1afa154ed4139bb7d91a9052d4d351, 150);
}
setTimeout(waitu20aab04148cc4a32b49f04a6e48bbe8f1, 200);

}
});
document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (true) {

	SetPanelState('u110', 'pd0u110','fade','',200,'none','',200);

	SetPanelVisibility('u131','hidden','fade',200);
function waitu158ff8c0d3124ad4a1689fdcc7da86031() {

SetWidgetFormText('u119', '');

	SetPanelVisibility('u120','hidden','none',500);

	SetPanelState('u131', 'pd0u131','none','',500,'none','',500);

	SendToBack("u131");
}
setTimeout(waitu158ff8c0d3124ad4a1689fdcc7da86031, 200);

}
});
gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u146'] = 'top';gv_vAlignTable['u148'] = 'center';document.getElementById('u149_img').tabIndex = 0;

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if (true) {

	SetPanelState('u110', 'pd0u110','fade','',200,'none','',200);

	SetPanelVisibility('u131','hidden','fade',200);
function waitu3b6c5fbc7324465fb90ae9cca296f6321() {

SetWidgetFormText('u119', '');

	SetPanelVisibility('u120','hidden','none',500);

	SetPanelState('u131', 'pd0u131','none','',500,'none','',500);

	SendToBack("u131");
}
setTimeout(waitu3b6c5fbc7324465fb90ae9cca296f6321, 200);

}
});
gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u158'] = 'top';gv_vAlignTable['u358'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u165'] = 'top';gv_vAlignTable['u167'] = 'center';u168.tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if ((GetGlobalVariableValue('RevealedMenu')) == ('Tools')) {

SetWidgetSelected('u156');function waitu060b380da7384693bd3d0c9bdbaceaf41() {

	SetPanelState('u171', 'pd0u171','none','',500,'none','',500);

	SetPanelState('u2171', 'pd0u2171','none','',500,'none','',500);

	SetPanelState('u2558', 'pd0u2558','none','',500,'none','',500);

	SendToBack("u169");

SetGlobalVariableValue('FWDashCardsYPosition', '-70');

	MoveWidgetBy('u169', GetNum('220'), GetNum('0'),'swing',350);

	MoveWidgetBy('u171', GetNum('220'), GetNum('0'),'swing',350);

	MoveWidgetBy('u2586', GetNum('220'), GetNum('0'),'swing',350);

	MoveWidgetTo('u2172', GetNum('0'), GetNum('-70'),'none',500);
function waituee10fb9977d14dc0a9ca51a10c14dfc11() {

SetGlobalVariableValue('RevealedMenu', '');

	SetPanelVisibility('u151','hidden','none',500);
function waitue68e32cc61ae43eab4f26810a5d5380e1() {

	SetPanelState('u2171', 'pd1u2171','none','',500,'none','',500);

	SetPanelState('u2558', 'pd1u2558','none','',500,'none','',500);
}
setTimeout(waitue68e32cc61ae43eab4f26810a5d5380e1, 1000);
}
setTimeout(waituee10fb9977d14dc0a9ca51a10c14dfc11, 350);
}
setTimeout(waitu060b380da7384693bd3d0c9bdbaceaf41, 100);

}
});
gv_vAlignTable['u369'] = 'center';u170.tabIndex = 0;

u170.style.cursor = 'pointer';
$axure.eventManager.click('u170', function(e) {

if ((GetGlobalVariableValue('RevealedMenu')) == ('Content')) {

	SendToBack("u169");

	SendToBack("u110");

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waitu93a3543b9f8c4c46872dfa76843559221() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u0','hidden','none',500);

	MoveWidgetTo('u110', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u104', GetNum('0'), GetNum('50'),'none',500);

	MoveWidgetTo('u1', GetNum('0'), GetNum('80'),'none',500);

	MoveWidgetTo('u107', GetNum('0'), GetNum('280'),'none',500);

	MoveWidgetTo('u40', GetNum('0'), GetNum('310'),'none',500);

SetGlobalVariableValue('ContentMenuYPosition', '0');
}
setTimeout(waitu93a3543b9f8c4c46872dfa76843559221, 350);

}
else
if ((GetGlobalVariableValue('RevealedMenu')) == ('Tools')) {

	SendToBack("u169");

	MoveWidgetTo('u169', GetNum('0'), GetNum('0'),'swing',350);

	MoveWidgetTo('u171', GetNum('0'), GetNum('50'),'swing',350);

	MoveWidgetTo('u2586', GetNum('0'), GetNum('0'),'swing',350);
function waitu3ba8a1d5baa9468e9024384d5ac2efac1() {

SetGlobalVariableValue('RevealedMenu', '');

SetGlobalVariableValue('MainScreenXPosition', '0');

	SetPanelVisibility('u151','hidden','none',500);
}
setTimeout(waitu3ba8a1d5baa9468e9024384d5ac2efac1, 350);

}
});
gv_vAlignTable['u173'] = 'center';document.getElementById('u177_img').tabIndex = 0;

u177.style.cursor = 'pointer';
$axure.eventManager.click('u177', function(e) {

if (true) {
function waitucfbdfebd70e84a019fa3d1a53f56eccf1() {

	SetPanelState('u171', 'pd1u171','swing','left',700,'swing','left',700);

	SetPanelState('u2600', 'pd1u2600','fade','',450,'fade','',450);

	SetPanelState('u2590', 'pd1u2590','fade','',450,'fade','',450);

	SetPanelState('u2592', 'pd1u2592','fade','',450,'fade','',450);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',700);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',700);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',700);
function waitu38e5cf8e980443d9b9397002b5478adf1() {

	SetPanelState('u2606', 'pd1u2606','fade','',450,'fade','',450);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',450);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',450);
}
setTimeout(waitu38e5cf8e980443d9b9397002b5478adf1, 150);
}
setTimeout(waitucfbdfebd70e84a019fa3d1a53f56eccf1, 200);

}
});
gv_vAlignTable['u178'] = 'center';document.getElementById('u179_img').tabIndex = 0;

u179.style.cursor = 'pointer';
$axure.eventManager.click('u179', function(e) {

if (true) {
function waitu612dcc7f4cfe449a9eed44370469d97e1() {

	SetPanelState('u171', 'pd1u171','swing','left',700,'swing','left',700);

	SetPanelState('u2600', 'pd1u2600','fade','',450,'fade','',450);

	SetPanelState('u2590', 'pd1u2590','fade','',450,'fade','',450);

	SetPanelState('u2592', 'pd1u2592','fade','',450,'fade','',450);

	MoveWidgetBy('u2600', GetNum('-320'), GetNum('0'),'easeOutCubic',700);

	MoveWidgetBy('u2590', GetNum('-320'), GetNum('0'),'easeOutCubic',700);

	MoveWidgetBy('u2592', GetNum('-320'), GetNum('0'),'swing',700);
function waitud96b9c035f9246f0a7e56b178f0b79341() {

	SetPanelState('u2606', 'pd1u2606','fade','',450,'fade','',450);

	MoveWidgetBy('u2606', GetNum('50'), GetNum('0'),'swing',450);

	MoveWidgetBy('u2594', GetNum('42'), GetNum('0'),'swing',450);
}
setTimeout(waitud96b9c035f9246f0a7e56b178f0b79341, 150);
}
setTimeout(waitu612dcc7f4cfe449a9eed44370469d97e1, 200);

}
});
gv_vAlignTable['u2158'] = 'center';gv_vAlignTable['u2159'] = 'top';gv_vAlignTable['u378'] = 'top';gv_vAlignTable['u379'] = 'top';gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u181'] = 'top';gv_vAlignTable['u182'] = 'top';gv_vAlignTable['u183'] = 'top';gv_vAlignTable['u185'] = 'center';gv_vAlignTable['u187'] = 'center';gv_vAlignTable['u189'] = 'center';gv_vAlignTable['u2165'] = 'center';gv_vAlignTable['u2167'] = 'top';gv_vAlignTable['u2168'] = 'top';gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u199'] = 'center';u2533.tabIndex = 0;

u2533.style.cursor = 'pointer';
$axure.eventManager.click('u2533', function(e) {

if (true) {

SetWidgetSelected('u2517');
}
});
gv_vAlignTable['u2554'] = 'center';u2555.tabIndex = 0;

u2555.style.cursor = 'pointer';
$axure.eventManager.click('u2555', function(e) {

if (true) {

SetWidgetSelected('u2553');function waitue6a3e1d3b7ff498888ad8137dd10917a1() {

	MoveWidgetBy('u2493', GetNum('0'), GetNum('-349'),'swing',500);

	MoveWidgetBy('u2558', GetNum('0'), GetNum('-349'),'swing',500);
function waitu4b1751a77a8c481bb4eaf0125e5ad36f1() {

	SetPanelState('u2558', 'pd1u2558','fade','',400,'fade','',400);

	SetPanelState('u2594', 'pd0u2594','none','',500,'fade','',300);

	SetPanelState('u2600', 'pd0u2600','none','',500,'fade','',300);

SetWidgetNotSelected('u2553');}
setTimeout(waitu4b1751a77a8c481bb4eaf0125e5ad36f1, 300);
}
setTimeout(waitue6a3e1d3b7ff498888ad8137dd10917a1, 150);

}
});
gv_vAlignTable['u2562'] = 'top';gv_vAlignTable['u2564'] = 'center';gv_vAlignTable['u2572'] = 'top';gv_vAlignTable['u800'] = 'center';gv_vAlignTable['u803'] = 'center';gv_vAlignTable['u805'] = 'center';gv_vAlignTable['u807'] = 'center';gv_vAlignTable['u809'] = 'center';gv_vAlignTable['u811'] = 'center';gv_vAlignTable['u813'] = 'center';gv_vAlignTable['u815'] = 'center';gv_vAlignTable['u817'] = 'center';gv_vAlignTable['u819'] = 'center';gv_vAlignTable['u821'] = 'center';gv_vAlignTable['u823'] = 'top';gv_vAlignTable['u824'] = 'top';gv_vAlignTable['u825'] = 'top';gv_vAlignTable['u826'] = 'top';gv_vAlignTable['u827'] = 'top';gv_vAlignTable['u828'] = 'top';gv_vAlignTable['u829'] = 'top';gv_vAlignTable['u830'] = 'top';gv_vAlignTable['u831'] = 'top';gv_vAlignTable['u832'] = 'top';gv_vAlignTable['u833'] = 'top';gv_vAlignTable['u834'] = 'top';gv_vAlignTable['u835'] = 'top';gv_vAlignTable['u836'] = 'top';gv_vAlignTable['u837'] = 'top';gv_vAlignTable['u838'] = 'top';gv_vAlignTable['u839'] = 'top';gv_vAlignTable['u840'] = 'top';gv_vAlignTable['u841'] = 'top';gv_vAlignTable['u842'] = 'top';gv_vAlignTable['u843'] = 'top';gv_vAlignTable['u844'] = 'top';gv_vAlignTable['u845'] = 'top';gv_vAlignTable['u846'] = 'top';gv_vAlignTable['u847'] = 'top';gv_vAlignTable['u849'] = 'top';gv_vAlignTable['u850'] = 'top';gv_vAlignTable['u852'] = 'center';gv_vAlignTable['u854'] = 'center';gv_vAlignTable['u856'] = 'top';gv_vAlignTable['u857'] = 'top';gv_vAlignTable['u859'] = 'center';gv_vAlignTable['u2104'] = 'top';gv_vAlignTable['u2105'] = 'top';gv_vAlignTable['u2106'] = 'top';gv_vAlignTable['u2107'] = 'top';gv_vAlignTable['u2108'] = 'top';gv_vAlignTable['u2109'] = 'top';gv_vAlignTable['u1608'] = 'top';gv_vAlignTable['u1609'] = 'top';gv_vAlignTable['u860'] = 'top';gv_vAlignTable['u861'] = 'top';gv_vAlignTable['u862'] = 'top';gv_vAlignTable['u863'] = 'top';gv_vAlignTable['u864'] = 'top';gv_vAlignTable['u865'] = 'top';gv_vAlignTable['u866'] = 'top';gv_vAlignTable['u867'] = 'top';gv_vAlignTable['u868'] = 'top';gv_vAlignTable['u869'] = 'top';gv_vAlignTable['u2114'] = 'top';gv_vAlignTable['u2115'] = 'top';gv_vAlignTable['u2116'] = 'top';gv_vAlignTable['u2117'] = 'top';gv_vAlignTable['u2118'] = 'top';gv_vAlignTable['u2119'] = 'top';gv_vAlignTable['u1618'] = 'center';gv_vAlignTable['u1619'] = 'top';gv_vAlignTable['u870'] = 'top';gv_vAlignTable['u871'] = 'top';gv_vAlignTable['u873'] = 'center';gv_vAlignTable['u875'] = 'center';gv_vAlignTable['u877'] = 'center';gv_vAlignTable['u879'] = 'center';gv_vAlignTable['u2124'] = 'top';gv_vAlignTable['u2125'] = 'top';gv_vAlignTable['u2127'] = 'center';gv_vAlignTable['u2129'] = 'center';gv_vAlignTable['u1629'] = 'center';gv_vAlignTable['u881'] = 'center';gv_vAlignTable['u883'] = 'center';gv_vAlignTable['u884'] = 'top';gv_vAlignTable['u886'] = 'top';gv_vAlignTable['u887'] = 'top';gv_vAlignTable['u889'] = 'center';gv_vAlignTable['u2134'] = 'top';gv_vAlignTable['u1638'] = 'top';gv_vAlignTable['u1639'] = 'top';gv_vAlignTable['u1500'] = 'top';gv_vAlignTable['u1501'] = 'top';gv_vAlignTable['u1502'] = 'top';u891.tabIndex = 0;

u891.style.cursor = 'pointer';
$axure.eventManager.click('u891', function(e) {

if (true) {

	SetPanelStateNext('u262',true,'none','',500,'none','',500);

	SetPanelStateNext('u704',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u1695',true,'none','',500,'none','',500);

	SetPanelStateNext('u1243',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u895'] = 'center';gv_vAlignTable['u897'] = 'top';gv_vAlignTable['u898'] = 'top';gv_vAlignTable['u899'] = 'top';u2144.tabIndex = 0;

u2144.style.cursor = 'pointer';
$axure.eventManager.click('u2144', function(e) {

if (true) {

	SetPanelStateNext('u359',true,'none','',500,'none','',500);

	SetPanelStateNext('u801',true,'none','',500,'none','',500);

	SetPanelStateNext('u1797',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u1345',true,'none','',500,'none','',500);

}
});
u2145.tabIndex = 0;

u2145.style.cursor = 'pointer';
$axure.eventManager.click('u2145', function(e) {

if (true) {

	SetPanelStateNext('u439',true,'none','',500,'none','',500);

	SetPanelStateNext('u893',true,'none','',500,'none','',500);

	SetPanelStateNext('u1889',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u1430',true,'none','',500,'none','',500);

}
});
u2146.tabIndex = 0;

u2146.style.cursor = 'pointer';
$axure.eventManager.click('u2146', function(e) {

if (true) {

	SetPanelStateNext('u485',true,'none','',500,'none','',500);

	SetPanelStateNext('u939',true,'none','',500,'none','',500);

	SetPanelStateNext('u1935',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u1476',true,'none','',500,'none','',500);

}
});
u2147.tabIndex = 0;

u2147.style.cursor = 'pointer';
$axure.eventManager.click('u2147', function(e) {

if (true) {

	SetPanelStateNext('u580',true,'none','',500,'none','',500);

	SetPanelStateNext('u1033',true,'none','',500,'none','',500);

	SetPanelStateNext('u2029',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u1571',true,'none','',500,'none','',500);

}
});
u2148.tabIndex = 0;

u2148.style.cursor = 'pointer';
$axure.eventManager.click('u2148', function(e) {

if (true) {

	SetPanelStateNext('u633',true,'none','',500,'none','',500);

	SetPanelStateNext('u1086',true,'none','',500,'none','',500);

	SetPanelStateNext('u2082',true,'fade','',300,'fade','',200);

	SetPanelStateNext('u1624',true,'none','',500,'none','',500);

}
});
gv_vAlignTable['u1647'] = 'top';gv_vAlignTable['u1648'] = 'top';gv_vAlignTable['u1649'] = 'top';gv_vAlignTable['u1510'] = 'top';gv_vAlignTable['u1511'] = 'top';gv_vAlignTable['u1512'] = 'top';gv_vAlignTable['u1513'] = 'top';gv_vAlignTable['u1514'] = 'top';gv_vAlignTable['u1515'] = 'top';gv_vAlignTable['u1516'] = 'top';gv_vAlignTable['u1517'] = 'top';gv_vAlignTable['u2151'] = 'center';gv_vAlignTable['u1650'] = 'top';gv_vAlignTable['u1651'] = 'top';gv_vAlignTable['u1652'] = 'top';gv_vAlignTable['u1653'] = 'top';gv_vAlignTable['u1654'] = 'top';gv_vAlignTable['u1655'] = 'top';gv_vAlignTable['u1656'] = 'top';gv_vAlignTable['u1657'] = 'top';gv_vAlignTable['u1658'] = 'top';gv_vAlignTable['u1659'] = 'top';gv_vAlignTable['u1408'] = 'center';gv_vAlignTable['u1520'] = 'top';gv_vAlignTable['u1521'] = 'top';gv_vAlignTable['u1522'] = 'top';gv_vAlignTable['u1523'] = 'top';gv_vAlignTable['u1524'] = 'top';gv_vAlignTable['u1525'] = 'top';gv_vAlignTable['u1526'] = 'top';gv_vAlignTable['u1527'] = 'top';gv_vAlignTable['u2161'] = 'top';gv_vAlignTable['u1660'] = 'top';gv_vAlignTable['u1661'] = 'top';gv_vAlignTable['u1662'] = 'top';gv_vAlignTable['u1664'] = 'center';gv_vAlignTable['u1666'] = 'top';gv_vAlignTable['u1669'] = 'center';gv_vAlignTable['u1411'] = 'top';gv_vAlignTable['u1530'] = 'top';gv_vAlignTable['u1531'] = 'top';gv_vAlignTable['u1532'] = 'top';gv_vAlignTable['u1533'] = 'top';gv_vAlignTable['u1534'] = 'top';gv_vAlignTable['u1535'] = 'top';gv_vAlignTable['u2170'] = 'center';gv_vAlignTable['u2174'] = 'top';gv_vAlignTable['u2176'] = 'center';gv_vAlignTable['u2177'] = 'top';gv_vAlignTable['u2179'] = 'top';gv_vAlignTable['u1541'] = 'center';gv_vAlignTable['u1543'] = 'center';gv_vAlignTable['u2183'] = 'center';gv_vAlignTable['u2184'] = 'top';gv_vAlignTable['u2185'] = 'top';gv_vAlignTable['u2186'] = 'top';gv_vAlignTable['u2187'] = 'top';gv_vAlignTable['u2188'] = 'top';gv_vAlignTable['u2189'] = 'top';u1688.tabIndex = 0;

u1688.style.cursor = 'pointer';
$axure.eventManager.click('u1688', function(e) {

if (true) {

	SetPanelStateNext('u359',true,'none','',500,'none','',500);

	SetPanelStateNext('u801',true,'none','',500,'none','',500);

	SetPanelStateNext('u1797',true,'none','',500,'none','',500);

	SetPanelStateNext('u1345',true,'fade','',300,'fade','',200);

}
});
u1689.tabIndex = 0;

u1689.style.cursor = 'pointer';
$axure.eventManager.click('u1689', function(e) {

if (true) {

	SetPanelStateNext('u439',true,'none','',500,'none','',500);

	SetPanelStateNext('u893',true,'none','',500,'none','',500);

	SetPanelStateNext('u1889',true,'none','',500,'none','',500);

	SetPanelStateNext('u1430',true,'fade','',300,'fade','',200);

}
});
gv_vAlignTable['u1550'] = 'center';gv_vAlignTable['u1551'] = 'top';gv_vAlignTable['u1552'] = 'top';gv_vAlignTable['u1553'] = 'top';gv_vAlignTable['u2190'] = 'top';gv_vAlignTable['u2191'] = 'top';gv_vAlignTable['u2193'] = 'center';gv_vAlignTable['u2196'] = 'center';gv_vAlignTable['u1697'] = 'center';gv_vAlignTable['u1699'] = 'center';gv_vAlignTable['u1560'] = 'top';gv_vAlignTable['u1561'] = 'top';gv_vAlignTable['u1562'] = 'top';gv_vAlignTable['u1563'] = 'top';gv_vAlignTable['u1564'] = 'top';gv_vAlignTable['u1566'] = 'center';gv_vAlignTable['u1567'] = 'top';gv_vAlignTable['u202'] = 'center';gv_vAlignTable['u204'] = 'center';gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u206'] = 'top';gv_vAlignTable['u207'] = 'top';gv_vAlignTable['u208'] = 'top';u209.tabIndex = 0;

u209.style.cursor = 'pointer';
$axure.eventManager.click('u209', function(e) {

if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('+7d')) {

	MoveWidgetTo('u200', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	MoveWidgetTo('u1181', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',700);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'none',700);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'none',700);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',700);

	SetPanelState('u885', 'pd1u885','none','',700,'none','',700);

	SetPanelState('u848', 'pd1u848','none','',700,'none','',700);

	SetPanelState('u434', 'pd1u434','fade','',700,'fade','',700);

	SetPanelState('u401', 'pd1u401','fade','',700,'fade','',700);

	SetPanelState('u1853', 'pd1u1853','none','',700,'none','',700);

	SetPanelState('u1845', 'pd1u1845','none','',700,'none','',700);

	SetPanelState('u1398', 'pd1u1398','none','',700,'none','',700);

	SetPanelState('u1353', 'pd1u1353','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('-24h')) {

	MoveWidgetTo('u200', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	MoveWidgetTo('u1181', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	SetPanelState('u259', 'pd1u259','fade','',700,'fade','',700);

	SetPanelState('u249', 'pd1u249','fade','',700,'fade','',700);

	SetPanelState('u217', 'pd1u217','fade','',700,'fade','',700);

	SetPanelState('u1198', 'pd1u1198','none','',700,'none','',700);

	SetPanelState('u1230', 'pd1u1230','none','',700,'none','',700);

	SetPanelState('u1240', 'pd1u1240','none','',700,'none','',700);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('+24h')) {

	MoveWidgetTo('u200', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'linear',1100);

	MoveWidgetTo('u1181', GetNum('6'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',1100);

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',500);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

	SetPanelState('u885', 'pd1u885','fade','',500,'fade','',500);

	SetPanelState('u848', 'pd1u848','fade','',500,'fade','',500);

	SetPanelState('u434', 'pd1u434','none','',500,'none','',500);

	SetPanelState('u401', 'pd1u401','none','',500,'none','',500);

	SetPanelState('u1853', 'pd1u1853','none','',500,'none','',500);

	SetPanelState('u1845', 'pd1u1845','none','',500,'none','',500);

	SetPanelState('u1398', 'pd1u1398','none','',500,'none','',500);

	SetPanelState('u1353', 'pd1u1353','none','',500,'none','',500);
function waitu85601c08b2b04b4f919c76aff5d791481() {

	SetPanelState('u259', 'pd1u259','fade','',500,'fade','',500);

	SetPanelState('u249', 'pd1u249','fade','',500,'fade','',500);

	SetPanelState('u217', 'pd1u217','fade','',500,'fade','',500);

	SetPanelState('u1198', 'pd1u1198','none','',500,'none','',500);

	SetPanelState('u1230', 'pd1u1230','none','',500,'none','',500);

	SetPanelState('u1240', 'pd1u1240','none','',500,'none','',500);
}
setTimeout(waitu85601c08b2b04b4f919c76aff5d791481, 600);

}

if (true) {

SetGlobalVariableValue('FWDetailCurrentTimeView', '-7d');

SetGlobalVariableValue('FWDetailDataXPosition', '0');

SetWidgetSelected('u192');
SetWidgetSelected('u1173');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

	SetPanelState('u200', 'pd1u200','fade','',300,'fade','',300);

	SetPanelState('u1181', 'pd1u1181','none','',300,'none','',300);

}
});
gv_vAlignTable['u1570'] = 'top';gv_vAlignTable['u1573'] = 'center';gv_vAlignTable['u1576'] = 'center';u210.tabIndex = 0;

u210.style.cursor = 'pointer';
$axure.eventManager.click('u210', function(e) {

if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('+24h')) {

	MoveWidgetTo('u200', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	MoveWidgetTo('u1181', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',700);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'none',700);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'none',700);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',700);

	SetPanelState('u885', 'pd1u885','fade','',700,'fade','',700);

	SetPanelState('u848', 'pd1u848','fade','',700,'fade','',700);

	SetPanelState('u434', 'pd1u434','none','',700,'none','',700);

	SetPanelState('u401', 'pd1u401','none','',700,'none','',700);

	SetPanelState('u1853', 'pd1u1853','none','',700,'none','',700);

	SetPanelState('u1845', 'pd1u1845','none','',700,'none','',700);

	SetPanelState('u1398', 'pd1u1398','none','',700,'none','',700);

	SetPanelState('u1353', 'pd1u1353','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('-7d')) {

	MoveWidgetTo('u200', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	MoveWidgetTo('u1181', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	SetPanelState('u259', 'pd0u259','fade','',700,'fade','',700);

	SetPanelState('u249', 'pd0u249','fade','',700,'fade','',700);

	SetPanelState('u217', 'pd0u217','fade','',700,'fade','',700);

	SetPanelState('u1198', 'pd0u1198','none','',700,'none','',700);

	SetPanelState('u1230', 'pd0u1230','none','',700,'none','',700);

	SetPanelState('u1240', 'pd0u1240','none','',700,'none','',700);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('+7d')) {

	MoveWidgetTo('u200', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'linear',1100);

	MoveWidgetTo('u1181', GetNum('68'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',1100);

	SetPanelState('u259', 'pd0u259','fade','',500,'fade','',500);

	SetPanelState('u249', 'pd0u249','fade','',500,'fade','',500);

	SetPanelState('u217', 'pd0u217','fade','',500,'fade','',500);

	SetPanelState('u1240', 'pd0u1240','none','',500,'none','',500);

	SetPanelState('u1230', 'pd0u1230','none','',500,'none','',500);

	SetPanelState('u1198', 'pd0u1198','none','',500,'none','',500);
function waituc24302dd3e474ac399b4f8378531e2991() {

	SetPanelState('u885', 'pd1u885','fade','',500,'fade','',500);

	SetPanelState('u848', 'pd1u848','fade','',500,'fade','',500);

	SetPanelState('u434', 'pd1u434','none','',500,'none','',500);

	SetPanelState('u401', 'pd1u401','none','',500,'none','',500);

	SetPanelState('u1853', 'pd1u1853','none','',500,'none','',500);

	SetPanelState('u1845', 'pd1u1845','none','',500,'none','',500);

	SetPanelState('u1398', 'pd1u1398','none','',500,'none','',500);

	SetPanelState('u1353', 'pd1u1353','none','',500,'none','',500);

	MoveWidgetTo('u259', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',500);

	MoveWidgetTo('u249', GetNum('0'), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u217', GetNum('0'), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1198', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1230', GetNum('0'), GetNum('0'),'none',500);

	MoveWidgetTo('u1240', GetNum('0'), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);
}
setTimeout(waituc24302dd3e474ac399b4f8378531e2991, 600);

}

if (true) {

SetGlobalVariableValue('FWDetailCurrentTimeView', '-24h');

SetGlobalVariableValue('FWDetailDataXPosition', '0');

SetWidgetSelected('u194');
SetWidgetSelected('u1175');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

	SetPanelState('u200', 'pd0u200','fade','',300,'fade','',300);

	SetPanelState('u1181', 'pd0u1181','none','',300,'none','',300);

}
});
u211.tabIndex = 0;

u211.style.cursor = 'pointer';
$axure.eventManager.click('u211', function(e) {

if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('-24h')) {

	MoveWidgetTo('u200', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	MoveWidgetTo('u1181', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',700);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',700);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',700);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',700);

	SetPanelState('u885', 'pd0u885','fade','',700,'fade','',700);

	SetPanelState('u848', 'pd0u848','fade','',700,'fade','',700);

	SetPanelState('u434', 'pd0u434','none','',700,'none','',700);

	SetPanelState('u401', 'pd0u401','none','',700,'none','',700);

	SetPanelState('u1853', 'pd0u1853','none','',700,'none','',700);

	SetPanelState('u1845', 'pd0u1845','none','',700,'none','',700);

	SetPanelState('u1398', 'pd0u1398','none','',700,'none','',700);

	SetPanelState('u1353', 'pd0u1353','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('+7d')) {

	MoveWidgetTo('u200', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	MoveWidgetTo('u1181', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	SetPanelState('u259', 'pd0u259','fade','',700,'fade','',700);

	SetPanelState('u249', 'pd0u249','fade','',700,'fade','',700);

	SetPanelState('u217', 'pd0u217','fade','',700,'fade','',700);

	SetPanelState('u1240', 'pd0u1240','none','',500,'none','',500);

	SetPanelState('u1230', 'pd0u1230','none','',500,'none','',500);

	SetPanelState('u1198', 'pd0u1198','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('-7d')) {

	MoveWidgetTo('u200', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'linear',1100);

	MoveWidgetTo('u1181', GetNum('140'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',1100);

	SetPanelState('u259', 'pd0u259','fade','',500,'fade','',500);

	SetPanelState('u249', 'pd0u249','fade','',500,'fade','',500);

	SetPanelState('u217', 'pd0u217','fade','',500,'fade','',500);

	SetPanelState('u1198', 'pd0u1198','none','',500,'none','',500);

	SetPanelState('u1230', 'pd0u1230','none','',500,'none','',500);

	SetPanelState('u1240', 'pd0u1240','none','',500,'none','',500);
function waitubf1fecbc71e248bbabb77044330c727c1() {

	SetPanelState('u885', 'pd0u885','fade','',500,'fade','',500);

	SetPanelState('u848', 'pd0u848','fade','',500,'fade','',500);

	SetPanelState('u434', 'pd0u434','none','',500,'none','',500);

	SetPanelState('u401', 'pd0u401','none','',500,'none','',500);

	SetPanelState('u1853', 'pd0u1853','none','',500,'none','',500);

	SetPanelState('u1845', 'pd0u1845','none','',500,'none','',500);

	SetPanelState('u1398', 'pd0u1398','none','',500,'none','',500);

	SetPanelState('u1353', 'pd0u1353','none','',500,'none','',500);

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',500);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);
}
setTimeout(waitubf1fecbc71e248bbabb77044330c727c1, 600);

}

if (true) {

SetGlobalVariableValue('FWDetailCurrentTimeView', '+24h');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetWidgetSelected('u196');
SetWidgetSelected('u1177');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+7days</span></p>');

	SetPanelState('u200', 'pd0u200','fade','',300,'fade','',300);

	SetPanelState('u1181', 'pd0u1181','none','',300,'none','',300);

}
});
u212.tabIndex = 0;

u212.style.cursor = 'pointer';
$axure.eventManager.click('u212', function(e) {

if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('-7d')) {

	MoveWidgetTo('u200', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	MoveWidgetTo('u1181', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',700);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',700);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',700);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',700);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',700);

	SetPanelState('u885', 'pd0u885','none','',700,'none','',700);

	SetPanelState('u848', 'pd0u848','none','',700,'none','',700);

	SetPanelState('u434', 'pd0u434','fade','',700,'fade','',700);

	SetPanelState('u401', 'pd0u401','fade','',700,'fade','',700);

	SetPanelState('u1853', 'pd0u1853','none','',700,'none','',700);

	SetPanelState('u1845', 'pd0u1845','none','',700,'none','',700);

	SetPanelState('u1398', 'pd0u1398','none','',700,'none','',700);

	SetPanelState('u1353', 'pd0u1353','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('+24h')) {

	MoveWidgetTo('u200', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'easeInCubic',700);

	MoveWidgetTo('u1181', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',700);

	SetPanelState('u259', 'pd1u259','fade','',700,'fade','',700);

	SetPanelState('u249', 'pd1u249','fade','',700,'fade','',700);

	SetPanelState('u217', 'pd1u217','fade','',700,'fade','',700);

	SetPanelState('u1240', 'pd1u1240','none','',700,'none','',700);

	SetPanelState('u1230', 'pd1u1230','none','',700,'none','',700);

	SetPanelState('u1198', 'pd1u1198','none','',700,'none','',700);

}
else
if ((GetGlobalVariableValue('FWDetailCurrentTimeView')) == ('-24h')) {

	MoveWidgetTo('u200', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'linear',1100);

	MoveWidgetTo('u1181', GetNum('214'), GetNum('' + (GetGlobalVariableValue('FWDetailCardsSelectorY')) + ''),'none',1100);

	MoveWidgetTo('u259', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'easeInCubic',500);

	MoveWidgetTo('u249', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u217', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'easeInCubic',500);

	MoveWidgetTo('u1198', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1230', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('0'),'none',500);

	MoveWidgetTo('u1240', GetNum('' + (GetGlobalVariableValue('FWDetailDataForecastX')) + ''), GetNum('' + (GetGlobalVariableValue('FWDetailDataYPosition')) + ''),'none',500);

	SetPanelState('u885', 'pd0u885','fade','',500,'fade','',500);

	SetPanelState('u848', 'pd0u848','fade','',500,'fade','',500);

	SetPanelState('u434', 'pd0u434','none','',500,'none','',500);

	SetPanelState('u401', 'pd0u401','none','',500,'none','',500);

	SetPanelState('u1853', 'pd0u1853','none','',500,'none','',500);

	SetPanelState('u1845', 'pd0u1845','none','',500,'none','',500);

	SetPanelState('u1398', 'pd0u1398','none','',500,'none','',500);

	SetPanelState('u1353', 'pd0u1353','none','',500,'none','',500);
function waitu2dfaba847b8b4db8926041ee5799ef561() {

	SetPanelState('u259', 'pd1u259','fade','',500,'fade','',500);

	SetPanelState('u249', 'pd1u249','fade','',500,'fade','',500);

	SetPanelState('u217', 'pd1u217','fade','',500,'fade','',500);

	SetPanelState('u1240', 'pd1u1240','none','',500,'none','',500);

	SetPanelState('u1230', 'pd1u1230','none','',500,'none','',500);

	SetPanelState('u1198', 'pd1u1198','none','',500,'none','',500);
}
setTimeout(waitu2dfaba847b8b4db8926041ee5799ef561, 600);

}

if (true) {

SetGlobalVariableValue('FWDetailCurrentTimeView', '+7d');

SetGlobalVariableValue('FWDetailDataXPosition', '' + (GetGlobalVariableValue('FWDetailDataForecastX')) + '');

SetWidgetSelected('u198');
SetWidgetSelected('u1179');
SetWidgetRichText('u205', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u206', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u207', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u208', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+7days</span></p>');

SetWidgetRichText('u1186', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-7days</span></p>');

SetWidgetRichText('u1187', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">-24hours</span></p>');

SetWidgetRichText('u1188', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">+24hours</span></p>');

SetWidgetRichText('u1189', '<p style="text-align:center;"><span style="font-family:Arial;font-size:12px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">+7days</span></p>');

	SetPanelState('u200', 'pd1u200','fade','',300,'fade','',300);

	SetPanelState('u1181', 'pd1u1181','none','',300,'none','',300);

}
});
gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u215'] = 'top';gv_vAlignTable['u219'] = 'center';gv_vAlignTable['u1580'] = 'center';gv_vAlignTable['u1582'] = 'center';gv_vAlignTable['u1583'] = 'top';gv_vAlignTable['u1584'] = 'top';gv_vAlignTable['u1585'] = 'top';gv_vAlignTable['u1586'] = 'top';gv_vAlignTable['u1587'] = 'top';gv_vAlignTable['u220'] = 'top';gv_vAlignTable['u221'] = 'top';gv_vAlignTable['u222'] = 'top';gv_vAlignTable['u223'] = 'top';gv_vAlignTable['u224'] = 'top';gv_vAlignTable['u225'] = 'top';gv_vAlignTable['u226'] = 'top';gv_vAlignTable['u227'] = 'top';gv_vAlignTable['u228'] = 'top';gv_vAlignTable['u229'] = 'top';gv_vAlignTable['u1590'] = 'top';gv_vAlignTable['u1591'] = 'top';gv_vAlignTable['u1592'] = 'top';gv_vAlignTable['u1593'] = 'top';gv_vAlignTable['u1594'] = 'top';gv_vAlignTable['u1595'] = 'top';gv_vAlignTable['u1596'] = 'top';gv_vAlignTable['u1597'] = 'top';gv_vAlignTable['u230'] = 'top';gv_vAlignTable['u231'] = 'top';gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u235'] = 'top';gv_vAlignTable['u236'] = 'top';gv_vAlignTable['u237'] = 'top';gv_vAlignTable['u238'] = 'top';gv_vAlignTable['u240'] = 'center';gv_vAlignTable['u241'] = 'top';gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u243'] = 'top';gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u245'] = 'top';gv_vAlignTable['u246'] = 'top';gv_vAlignTable['u251'] = 'center';gv_vAlignTable['u253'] = 'center';gv_vAlignTable['u255'] = 'center';gv_vAlignTable['u257'] = 'center';gv_vAlignTable['u1002'] = 'top';gv_vAlignTable['u1004'] = 'center';gv_vAlignTable['u1006'] = 'center';gv_vAlignTable['u1008'] = 'top';gv_vAlignTable['u1009'] = 'top';gv_vAlignTable['u261'] = 'center';gv_vAlignTable['u264'] = 'center';gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u269'] = 'center';gv_vAlignTable['u1013'] = 'center';gv_vAlignTable['u1014'] = 'top';gv_vAlignTable['u1015'] = 'top';gv_vAlignTable['u1016'] = 'top';gv_vAlignTable['u1017'] = 'top';gv_vAlignTable['u1018'] = 'top';gv_vAlignTable['u1019'] = 'top';gv_vAlignTable['u2227'] = 'top';gv_vAlignTable['u2228'] = 'top';gv_vAlignTable['u271'] = 'center';gv_vAlignTable['u273'] = 'center';gv_vAlignTable['u275'] = 'center';gv_vAlignTable['u277'] = 'center';gv_vAlignTable['u279'] = 'center';gv_vAlignTable['u1022'] = 'top';gv_vAlignTable['u1023'] = 'top';gv_vAlignTable['u1024'] = 'top';gv_vAlignTable['u1025'] = 'top';gv_vAlignTable['u1026'] = 'top';gv_vAlignTable['u1027'] = 'top';gv_vAlignTable['u1028'] = 'top';gv_vAlignTable['u1029'] = 'top';gv_vAlignTable['u281'] = 'center';gv_vAlignTable['u283'] = 'center';gv_vAlignTable['u285'] = 'center';gv_vAlignTable['u287'] = 'center';gv_vAlignTable['u289'] = 'center';gv_vAlignTable['u1032'] = 'center';gv_vAlignTable['u1035'] = 'center';gv_vAlignTable['u1037'] = 'center';gv_vAlignTable['u1039'] = 'center';gv_vAlignTable['u290'] = 'top';gv_vAlignTable['u291'] = 'top';gv_vAlignTable['u292'] = 'top';gv_vAlignTable['u293'] = 'top';gv_vAlignTable['u294'] = 'top';gv_vAlignTable['u295'] = 'top';gv_vAlignTable['u296'] = 'top';gv_vAlignTable['u297'] = 'top';gv_vAlignTable['u298'] = 'top';gv_vAlignTable['u299'] = 'top';gv_vAlignTable['u1043'] = 'center';gv_vAlignTable['u1045'] = 'top';gv_vAlignTable['u1046'] = 'top';gv_vAlignTable['u1047'] = 'top';gv_vAlignTable['u1048'] = 'top';gv_vAlignTable['u1049'] = 'top';gv_vAlignTable['u1050'] = 'top';gv_vAlignTable['u1051'] = 'top';gv_vAlignTable['u1052'] = 'top';gv_vAlignTable['u1053'] = 'top';gv_vAlignTable['u1054'] = 'top';gv_vAlignTable['u1055'] = 'top';gv_vAlignTable['u1056'] = 'top';gv_vAlignTable['u1057'] = 'top';gv_vAlignTable['u1058'] = 'top';gv_vAlignTable['u1059'] = 'top';gv_vAlignTable['u2265'] = 'top';gv_vAlignTable['u1060'] = 'top';gv_vAlignTable['u1061'] = 'top';gv_vAlignTable['u1062'] = 'top';gv_vAlignTable['u1063'] = 'top';gv_vAlignTable['u1064'] = 'top';gv_vAlignTable['u1065'] = 'top';gv_vAlignTable['u1066'] = 'top';gv_vAlignTable['u1067'] = 'top';gv_vAlignTable['u1068'] = 'top';gv_vAlignTable['u1069'] = 'top';gv_vAlignTable['u1070'] = 'top';gv_vAlignTable['u1071'] = 'top';gv_vAlignTable['u1073'] = 'center';gv_vAlignTable['u1075'] = 'top';gv_vAlignTable['u1076'] = 'top';gv_vAlignTable['u1078'] = 'center';gv_vAlignTable['u1080'] = 'center';gv_vAlignTable['u1081'] = 'top';gv_vAlignTable['u1082'] = 'top';gv_vAlignTable['u1083'] = 'top';gv_vAlignTable['u1084'] = 'top';gv_vAlignTable['u1085'] = 'top';gv_vAlignTable['u1088'] = 'center';gv_vAlignTable['u1090'] = 'center';gv_vAlignTable['u1092'] = 'center';gv_vAlignTable['u1094'] = 'center';gv_vAlignTable['u1095'] = 'top';gv_vAlignTable['u1096'] = 'top';gv_vAlignTable['u1097'] = 'top';gv_vAlignTable['u1098'] = 'top';gv_vAlignTable['u1099'] = 'top';gv_vAlignTable['u901'] = 'center';gv_vAlignTable['u903'] = 'center';gv_vAlignTable['u905'] = 'center';gv_vAlignTable['u907'] = 'center';gv_vAlignTable['u909'] = 'center';gv_vAlignTable['u911'] = 'center';gv_vAlignTable['u913'] = 'center';gv_vAlignTable['u914'] = 'top';gv_vAlignTable['u915'] = 'top';gv_vAlignTable['u916'] = 'top';gv_vAlignTable['u917'] = 'top';gv_vAlignTable['u918'] = 'top';gv_vAlignTable['u919'] = 'top';gv_vAlignTable['u921'] = 'center';gv_vAlignTable['u923'] = 'top';gv_vAlignTable['u924'] = 'top';gv_vAlignTable['u925'] = 'top';gv_vAlignTable['u926'] = 'top';gv_vAlignTable['u927'] = 'top';gv_vAlignTable['u928'] = 'top';gv_vAlignTable['u929'] = 'top';gv_vAlignTable['u930'] = 'top';gv_vAlignTable['u931'] = 'top';gv_vAlignTable['u932'] = 'top';gv_vAlignTable['u933'] = 'top';gv_vAlignTable['u934'] = 'top';gv_vAlignTable['u935'] = 'top';gv_vAlignTable['u936'] = 'top';gv_vAlignTable['u937'] = 'top';gv_vAlignTable['u938'] = 'top';gv_vAlignTable['u941'] = 'center';gv_vAlignTable['u943'] = 'center';gv_vAlignTable['u945'] = 'center';gv_vAlignTable['u947'] = 'center';gv_vAlignTable['u949'] = 'center';gv_vAlignTable['u951'] = 'top';gv_vAlignTable['u952'] = 'top';gv_vAlignTable['u953'] = 'top';gv_vAlignTable['u954'] = 'top';gv_vAlignTable['u955'] = 'top';gv_vAlignTable['u956'] = 'top';gv_vAlignTable['u957'] = 'top';gv_vAlignTable['u1701'] = 'center';gv_vAlignTable['u2205'] = 'top';gv_vAlignTable['u2206'] = 'top';gv_vAlignTable['u1705'] = 'center';gv_vAlignTable['u1707'] = 'center';gv_vAlignTable['u1709'] = 'center';gv_vAlignTable['u960'] = 'top';gv_vAlignTable['u961'] = 'top';gv_vAlignTable['u962'] = 'top';