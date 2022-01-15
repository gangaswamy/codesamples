class Node{
    constructor(d){
        this.data = d;
        this.next = null;
    }
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");

a.next = b;
b.next = c;

function display(node){
    while(node){
        console.log(node.data);
        node = node.next;
    }
}

display(a);
