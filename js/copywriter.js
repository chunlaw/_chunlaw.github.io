checkedfrPair = [];

function popup(id,i){
	var ret = "<p><button onclick='document.getElementById("+id+").innerHTML="+'"'+checkedfrPair[i].find+'"'+"'>"+checkedfrPair[i].find+"</button> -> <button onclick='document.getElementById("+id+").innerHTML="+'"'+checkedfrPair[i].replace+'"'+"'>"+checkedfrPair[i].replace+"</button></p>";
	if ( checkedfrPair[i].remark != null )
		ret += "<p>"+checkedfrPair[i].remark+"</p>";
	return ret;
}

function findAndReplace() {
    var texts = [];
    var frPair = [];
    var lines = document.getElementById('pairs').value.split('\n');
    for (var i = 0; i < lines.length; i++) {
    	var tokens = lines[i].split('|');
        var find = tokens[0];
        var replace = tokens[1];
        var remark = tokens[2];
        frPair.push({
            find: find,
            replace: replace,
            remark: remark
        });
    }
    checkedfrPair = frPair;
    str = document.getElementById('txt').value;
    for (var i = 0, len = str.length; i < len; i++) {
        texts.push({
            highlighted: "-1",
            value: str[i],
            replacement: null,
        })
    }

    for (var i = 0; i < frPair.length; ++i) {
        for (var k = 0; k < texts.length; ++k) {
            var find = true;
            for (var j = 0; find && j < frPair[i].find.length; ++j) {
                find = find && texts[k+j] != null && frPair[i].find[j] == texts[k + j].value;
            }
            if (find) {
                texts.splice(k, frPair[i].find.length);
                for (var j = 0; j < frPair[i].replace.length; ++j) {
                    texts.splice(k + j, 0, {
                        highlighted: i,
                        value: frPair[i].replace[j],
                    });
                }
            }
        }
    }

    var orgStr = "<p>";
    for (var i = 0, len = str.length; i < len; i++) {
        if (str[i] == '\n')
        {
            orgStr += "</p><p>";
        } else {
            orgStr += str[i];
        }
    }
    orgStr += "</p><p></p>";
    document.getElementById('cp_input').innerHTML = orgStr;

    var outputStr = '<p>';
    var startSpan = 0;
    replaceId = 0;
    for (var i = 0, len = texts.length; i < len; i++) {
        if (texts[i].value == '\n') {
            outputStr += "</p><p>";
            continue;
        }
        
        if ( i > 0 && texts[i-1].highlighted != texts[i].highlighted && startSpan == 1 ) {
        	outputStr += "</span>";
        	startSpan = 0;
        }
        if ( ( i > 0 && texts[i-1].highlighted != texts[i].highlighted && texts[i].highlighted != -1 ) ||
        	 ( i == 0 && texts[i].highlighted != -1 ) ) {
            outputStr += "<span class='highlight' id='"+replaceId+"' onclick='tooltip.pop(this,popup("+replaceId+","+texts[i].highlighted+"))'>";
            replaceId ++;
            startSpan = 1;
        }

        outputStr += texts[i].value;
        
    }
    outputStr += "</p><p></p>";
    document.getElementById('cp_output').innerHTML = outputStr;
}

