function format_line(line) {
    if (line==""){
        return [{
        "class": "text",
        "string": "\n"}];
    }
    line = line.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "\\n");
    line = line.replace(/\s/g, "&nbsp;").replace(/\t/g, "&nbsp;" * 4);

    var keys = ["int", "float", "double", "long", "short", "if", "else", "for", "do", "while", "switch", "case", "default", "return", "continue", "break", "class", "private", "public", "protected", "sizeof"];
    var ops = ["+", "-", "*", "/", "%", "&", "|", "!", "&lt;", "&gt;", "=", "(", ")", "[", "]", "{", "}", "?", ",", ".", ":", ";", "~"];

    if (line[0] == "#"){
        return [{
        "class": "head",
        "string": line}];
    }
    line = line.replace(/#.*|\w+|\w+\d+|&\w+;|\".*?\"|\/\/.*|\W|\d/g, function(word){
        word += "\$";
        return word;
    }).split("$");
    line = line.slice(0, line.length-1);
    var new_line = [];
    for (var i=0;i<line.length;++i) {
        if (keys.includes(line[i])) {
            new_line.push({
                "class": "key",
                "string": line[i]
            });
        } else if (ops.includes(line[i])) {
            new_line.push({
                "class": "operator",
                "string": line[i]
            });
        } else if (line[i][0] == "\"") {
            new_line.push({
                "class": "string",
                "string": line[i]
            });
        }else if (line[i].slice(0, 2) == "\/\/") {
            new_line.push({
                "class": "comment",
                "string": line[i]
            });
        } else {
            try {
                new_line.push({
                    "class": "number",
                    "string": String(int(line[i][0]))
                });
            } catch (ValueError) {
                new_line.push({
                    "class": "text",
                    "string": line[i]
                });
            }
        }
    }
    return new_line;
}
function format_source(source) {
    var i = 0, source = source.split("\n");
    var new_source = [], s_a, s_b, s_c;
    while (i < source.length) {
        if (source[i].indexOf("/*") != -1) {
            j = source[i].indexOf("/*");
            if (source[i].indexOf("*/") != -1) {
                s_a = source[i].slice(0, j) != "" ? format_line(source[i].slice(0, j)) : [];
                s_b = [{
                    "class": "comment",
                    "string": source[i].slice(j, source[i].indexOf("*/") + 2)
                }];
                s_c = (source[i].slice(source[i].indexOf("*/") + 2)) != "" ? format_line(source[i].slice(source[i].indexOf("*/") + 2)) : [];
                s_a.concat(s_b.concat(s_c));
                new_source.push(s_a.concat(s_b.concat(s_c))); i += 1;
            } else {
                source[i] = source[i].slice(j)
                s_b = source[i].slice(j) != "" ? format_line(source[i].slice(j)): [];
                while (i < source.length) {
                    j = source[i].indexOf("*/");
                    if (j != -1) {
                        s_a = source[i].slice(-source[i].length + j + 2) != "" ? format_line(source[i].slice(-source[i].length + j + 2)) : [];
                        new_source.push(s_b.concat([{
                            "class": "comment",
                            "string": source[i].slice(j + 2)
                        }]).concat(s_a)); i += 1;
                        break;
                    } else {
                        new_source.push(s_b.concat([{
                            "class": "comment",
                            "string": source[i]
                        }]));
                        i += 1;
                        s_b = [];
                    }
                }
            }
        } else {
            new_source.push(format_line(source[i]));
            i += 1;
        }
    }
    return new_source;
}
function show_source(source){
    source = format_source(source);
    table = "<table id=\"source\">";
    table += "<tbody>";
    for(var i=0;i<source.length;++i){
        line = source[i];
        table += "<tr>";
        table += "<td>"+String(i+1)+"</td>";
        table += "<td>";
        table += "<div class=\"line\">";
        for(var j=0;j<line.length;++j){
            table += "<div class=\""+line[j]["class"]+"\">"+line[j]["string"]+"</div>";
        }
        table += "</div>";
        table += "</td>";
        table += "</tr>";
    }
    table += "</tbody>";
    table += "</table>";
    
    var b=document.getElementById("SourceShow");
    b.innerHTML = table;
}
