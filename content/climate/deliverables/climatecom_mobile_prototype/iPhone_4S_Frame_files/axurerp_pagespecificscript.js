for(var i = 0; i < 6; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'center';u5.tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

    objIframe = document.getElementById("u2");
    var reload = FrameWindowNeedsReload(objIframe, $axure.globalVariableProvider.getLinkUrl('iPhone_4S_Screen.html'));
    if (!reload) {
	    objIframe.src=$axure.globalVariableProvider.getLinkUrl('iPhone_4S_Screen.html');
    } else {
        objIframe.src="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl('iPhone_4S_Screen.html'));
    }

}
});
