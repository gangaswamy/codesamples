//tree and tre traversal
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function insert(node, newNode){
    if(newNode.data < node.data){
        if(node.left === null)
            node.left = newNode;
        else
            insert(node.left, newNode);
    } else {
        if(node.right === null)
            node.right = newNode;
        else
            insert(node.right,newNode);
    }
}

let root = new Node("D");
insert(root, new Node("C"));
insert(root, new Node("A"));
insert(root, new Node("B"));
insert(root, new Node("E"));
insert(root, new Node("F"));
insert(root, new Node("G"));

function preorder(node){
  if(node !== null){
        console.log(node.data);
        preorder(node.left);
        preorder(node.right);
    }
}

function inorder(node){
   if(node !== null) {
        inorder(node.left);
        console.log(node.data);
        inorder(node.right);
    }
}

function postorder(node){
    if( node !== null ) {
        postorder(node.left);
        postorder(node.right);
        console.log(node.data);
    }
}

console.log("preorder");
preorder(root);
console.log("inorder");
inorder(root);
console.log("postorder");
postorder(root);
