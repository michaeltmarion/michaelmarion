/*

 MyFonts Webfont Build ID 3392456, 2017-05-20T18:55:16-0400

 The fonts listed in this notice are subject to the End User License
 Agreement(s) entered into by the website owner. All other parties are 
 explicitly restricted from using the Licensed Webfonts(s).

 You may obtain a valid license at the URLs below.

 Webfont: FrutigerLTPro-Black by Linotype
 URL: https://www.myfonts.com/fonts/linotype/frutiger/pro-75-black/

 Webfont: FrutigerLTPro-BlackItalic by Linotype
 URL: https://www.myfonts.com/fonts/linotype/frutiger/pro-76-black-italic/

 Webfont: FrutigerLTPro-Bold by Linotype
 URL: https://www.myfonts.com/fonts/linotype/frutiger/pro-65-bold/

 Webfont: FrutigerLTPro-UltraBlack by Linotype
 URL: https://www.myfonts.com/fonts/linotype/frutiger/pro-95-ultra-black/

 Webfont: FrutigerLTPro-Roman by Linotype
 URL: https://www.myfonts.com/fonts/linotype/frutiger/pro-55-roman/

 Webfont: FrutigerLTPro-Light by Linotype
 URL: https://www.myfonts.com/fonts/linotype/frutiger/frutiger-pro-45-light/

 Webfont: FrutigerLTPro-BoldItalic by Linotype
 URL: https://www.myfonts.com/fonts/linotype/frutiger/pro-66-bold-italic/

 Webfont: FrutigerLTPro-Italic by Linotype
 URL: https://www.myfonts.com/fonts/linotype/frutiger/pro-56-italic/

 Webfont: FrutigerLTPro-LightItalic by Linotype
 URL: https://www.myfonts.com/fonts/linotype/frutiger/pro-46-light-italic/


 License: https://www.myfonts.com/viewlicense?type=web&buildid=3392456
 Licensed pageviews: 250,000
 Webfonts copyright: Part of the digitally encoded machine readable outline data for producing the Typefaces provided is copyrighted &#x00A9; 2006 Linotype GmbH, www.linotype.com. All rights reserved. This software is the property of Linotype GmbH, and may not be reproduced, 

 ? 2017 MyFonts Inc
*/
var protocol=document.location.protocol;"https:"!=protocol&&(protocol="http:");var count=document.createElement("script");count.type="text/javascript";count.async=!0;count.src=protocol+"//hello.myfonts.net/count/33c3c8";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(count,s);var browserName,browserVersion,webfontType;if("undefined"==typeof woffEnabled)var woffEnabled=!0;var svgEnabled=0,woff2Enabled=1;
if("undefined"!=typeof customPath)var path=customPath;else{var scripts=document.getElementsByTagName("SCRIPT"),script=scripts[scripts.length-1].src;script.match("://")||"/"==script.charAt(0)||(script="./"+script);path=script.replace(/\\/g,"/").replace(/\/[^\/]*\/?$/,"")}
var wfpath=path+"/webfonts/",browsers=[{regex:"MSIE (\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:9,type:"woff"},{version:5,type:"eot"}]},{regex:"Trident/(\\d+\\.\\d+); (.+)?rv:(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$3)",type:[{version:11,type:"woff"}]},{regex:"Firefox[/s](\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:3.6,type:"woff"},{version:3.5,type:"ttf"}]},{regex:"Edge/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:12,type:"woff"}]},
{regex:"Chrome/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:36,type:"woff2"},{version:6,type:"woff"},{version:4,type:"ttf"}]},{regex:"Mozilla.*Android (\\d+\\.\\d+).*AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$1)",type:[{version:4.1,type:"woff"},{version:3.1,type:"svg#wf"},{version:2.2,type:"ttf"}]},{regex:"Mozilla.*(iPhone|iPad).* OS (\\d+)_(\\d+).* AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)",unhinted:!0,type:[{version:5,
type:"woff"},{version:4.2,type:"ttf"},{version:1,type:"svg#wf"}]},{regex:"Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari",versionRegex:"1.0",type:[{version:1,type:"svg#wf"}]},{regex:"Version/(\\d+\\.\\d+)(\\.\\d+)? Safari/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:5.1,type:"woff"},{version:3.1,type:"ttf"}]},{regex:"Opera/(\\d+\\.\\d+)(.+)Version/(\\d+\\.\\d+)(\\.\\d+)?",versionRegex:"new Number(RegExp.$3)",type:[{version:24,type:"woff2"},{version:11.1,type:"woff"},
{version:10.1,type:"ttf"}]}],browLen=browsers.length,suffix="",i=0;
a:for(;i<browLen;i++){var regex=new RegExp(browsers[i].regex);if(regex.test(navigator.userAgent)){browserVersion=eval(browsers[i].versionRegex);var typeLen=browsers[i].type.length;for(j=0;j<typeLen;j++)if(browserVersion>=browsers[i].type[j].version&&(1==browsers[i].unhinted&&(suffix="_unhinted"),webfontType=browsers[i].type[j].type,"woff"!=webfontType||woffEnabled)&&("woff2"!=webfontType||woff2Enabled)&&("svg#wf"!=webfontType||svgEnabled))break a}else webfontType="woff"}
/(Macintosh|Android)/.test(navigator.userAgent)&&"svg#wf"!=webfontType&&(suffix="_unhinted");var head=document.getElementsByTagName("head")[0],stylesheet=document.createElement("style");stylesheet.setAttribute("type","text/css");head.appendChild(stylesheet);
for(var fonts=[{fontFamily:"FrutigerLTPro-Black",url:wfpath+"33C3C8_0"+suffix+"_0."+webfontType},{fontFamily:"FrutigerLTPro-BlackItalic",url:wfpath+"33C3C8_1"+suffix+"_0."+webfontType},{fontFamily:"FrutigerLTPro-Bold",url:wfpath+"33C3C8_2"+suffix+"_0."+webfontType},{fontFamily:"FrutigerLTPro-UltraBlack",url:wfpath+"33C3C8_3"+suffix+"_0."+webfontType},{fontFamily:"FrutigerLTPro-Roman",url:wfpath+"33C3C8_4"+suffix+"_0."+webfontType},{fontFamily:"FrutigerLTPro-Light",url:wfpath+"33C3C8_5"+suffix+"_0."+
webfontType},{fontFamily:"FrutigerLTPro-BoldItalic",url:wfpath+"33C3C8_6"+suffix+"_0."+webfontType},{fontFamily:"FrutigerLTPro-Italic",url:wfpath+"33C3C8_7"+suffix+"_0."+webfontType},{fontFamily:"FrutigerLTPro-LightItalic",url:wfpath+"33C3C8_8"+suffix+"_0."+webfontType}],len=fonts.length,css="",i=0;i<len;i++){var format="svg#wf"==webfontType?'format("svg")':"ttf"==webfontType?'format("truetype")':"eot"==webfontType?"":'format("'+webfontType+'")',css=css+("@font-face{font-family: "+fonts[i].fontFamily+
";src:url("+fonts[i].url+")"+format+";");fonts[i].fontWeight&&(css+="font-weight: "+fonts[i].fontWeight+";");fonts[i].fontStyle&&(css+="font-style: "+fonts[i].fontStyle+";");css+="}"}stylesheet.styleSheet?stylesheet.styleSheet.cssText=css:stylesheet.innerHTML=css;
