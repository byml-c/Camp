function LINK(obj, last, next){
    var link = new Object();
    link = {
        obj: obj,
        last: last,
        next: next
    }
}

function insert(next, obj){
    var link = LINK(obj, next.last, next);
    next.last = link;
    return link;
}

function remove(node){
    node.last.next = node.next;
    node.next.last = node.last;
}

function push_back(obj, last){
    var link = LINK(obj, last, null);
    last.next = link;
    return link;
}