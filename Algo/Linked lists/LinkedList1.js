class SLL {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
}
    addFront(value) {
        let new_node = new SLLNode(val);
    }
    removefront() {
        if(!this.head == null) {
            return this.head;
        }
        var removeNode = this.head;
        this.head = removeNode.next;
        return this.head;
    }
}

class SLL {
    // constructor, other methods, removed for brevity
    removeFront() {
        if(this.head == null ) {
            return this.head;
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head
    }

