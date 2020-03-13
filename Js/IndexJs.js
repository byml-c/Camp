class note {
    constructor(parent, id, out_file){
        this.id = id;
        this.parent = parent;
        this.url = "note://"+window.location.pathname;
        this.editor = new editor(parent, this);
        this.out = out_file;
    }
    data(){
        var text = localStorage.getItem(this.url+"?id="+String(this.id));
        return (text==undefined)?"":text;
    }
    save(text){
        return localStorage.setItem(this.url+"?id="+String(this.id), text);
    }
    show(){
        var data = String(this.data()).split("\n"), data_in = "";
        for(var i=0;i<data.length;++i){
            if(data[i]=="")continue;
            data_in += "<li>"+data[i]+"</li>";
        }
        this.parent.innerHTML = data_in;

        var th = this;
        this.parent.onclick = function(){
            th.parent.style.left = "5px";
            th.parent.style.right = "5px";
            th.parent.style.top = "5px";
            th.parent.style.bottom = "5px";

            th.hide();
            th.editor.show();
        }
    }
    hide(){
        this.parent.onclick = null;
        this.parent.innerHTML = "";
    }
}
class editor {
    constructor(parent, note){
        this.item = document.createElement("textarea");
        this.item.className = "editor";
        this.item.style.resize = "none";
        this.parent = parent;
        this.note = note;
    }
    data(){
        return this.item.value;
    }
    show(){
        this.parent.innerHTML = "";
        this.item.value = this.note.data();
        this.parent.appendChild(this.item);
        this.item.focus();

        var th = this;
        this.item.onblur = function(){
            th.parent.style.left = "30px";
            th.parent.style.right = "5px";
            th.parent.style.top = "5px";
            th.parent.style.bottom = "5px";
            th.parent.style.backgroundColor = "transparent";

            th.note.save(th.data());
            th.hide();
            th.note.show();
        }
    }
    hide(){
        this.parent.removeChild(this.item);
    }
}

main();
function main(){
    var imp = document.getElementById("important");
    var lea = document.getElementById("learn");
    var pro = document.getElementById("progam");
    var important = new note(imp, 1);
    var learn = new note(lea, 2);
    var progam = new note(pro, 3);

    important.show();
    learn.show();
    progam.show();
}