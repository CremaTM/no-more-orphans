/*
    Thank you for downloading #NoMoreOrphans™!

    Copyright (C) 2020 Jesse Naylor and Alejandro García
    developed for CREMA™ as part of a CREMA·Lab R&D project

    The JavaScript code in this file is free software: you can
    redistribute it and/or modify it under the terms of the GNU
    General Public License (GNU GPL) as published by the Free Software
    Foundation, either version 3 of the License, or (at your option)
    any later version. The code is distributed WITHOUT ANY WARRANTY;
    without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE. See the GNU GPL for more details.

    As additional permission under GNU GPL version 3 section 7, you
    may distribute non-source (e.g., minimized or compacted) forms of
    that code without the copy of the GNU GPL normally required by
    section 4, provided you include this license notice and a URL
    through which recipients can access the Corresponding Source.
*/

var targI, targE, targetElements, targets, arr;
function noMoreOrphans(targetElements) {
    targI = targetElements;
    targE = targI;
    targets = document.querySelectorAll(targE);
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "interactive") {
            arr = Array.prototype.slice.call(targets);
            var i;
            for (i=0;i<arr.length;i++) {
                killOrphans(arr[i]);
            }
        }
    });
    arr = Array.prototype.slice.call(targets);
        var i;
        for (i=0;i<arr.length;i++) {
            killOrphans(arr[i]);
    }
}

var el, i, originalText, cursor, lastLineWidth, lastSpacePos, correctedText, minAcceptableWidth, charsPerLine, widthOfAChar;
function killOrphans(t) {
    // Get general text details
    el = t;
    var divHeight = el.offsetHeight;
    var divWidth = el.offsetWidth;
    var fontSize = window.getComputedStyle(el, null).getPropertyValue('font-size');
    fontSize = parseFloat(fontSize);
    var lineHeight = window.getComputedStyle(el, null).getPropertyValue('line-height');
    lineHeight = parseFloat(lineHeight);
    var lines = divHeight / lineHeight;
    
    // Get lastLineWidth
    lastLineWidth = getLastLineWidth(el);

    // if the paragraph is long enough, apply NoMoreOrphans
    if(lines>3) {
        charsPerLine = divWidth/(fontSize/2);
        widthOfAChar = divWidth/charsPerLine;
        minAcceptableWidth = Math.round((divWidth/6)+(widthOfAChar*3));
        // start while loop which applies NoMoreOrphans until the text is cool
        while (lastLineWidth < minAcceptableWidth) {
            if(!i){i=1;}
            // set NoMoreOrphans by replacing last space with non-breakable space
            lastSpacePos = originalText.lastIndexOf(' ');
            correctedText = rep(originalText,lastSpacePos);
            el.innerHTML = correctedText;
            lastLineWidth = getLastLineWidth(el);
            i++;
        }
    }
}
function getLastLineWidth(t) {
    el = t;
    originalText = el.innerHTML;
    el.innerHTML = originalText+"<span id='cursor'></span>";
    cursor = document.getElementById('cursor');
    var lastLineOffset = cursor.offsetLeft;
    var parentOffset = cursor.parentElement.offsetLeft;
    var lastLineWidth = lastLineOffset-parentOffset;
    el.innerHTML = originalText;
    return lastLineWidth;
}
function rep(string,pos) {
    var str = string;
    str = setCharAt(str,pos,' ');
    return str;
}
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}