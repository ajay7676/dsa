class Node{
    constructor(data , next=null){
        this.data = data;
        this.next = next;
    }
}


class LinkedList{
    constructor(){
        this.head = null
    }
}

LinkedList.prototype.inseartAtBeginning = function(data){
    const newNode = new Node(data)
    this.head = newNode;
}