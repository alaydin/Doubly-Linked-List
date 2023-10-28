let LinkedList = function () {
    this.head = null;
    this.tail = null;

    this.prepend = function (value) {
        let newNode = new Node(value, this.head, null);
        if (this.head) this.head.prev = newNode;
        else this.tail = newNode;
        this.head = newNode;
    }

    this.append = function (value) {
        let newNode = new Node(value, null, this.tail);
        if (this.tail) {
            this.tail.next = newNode;
        }
        else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    this.removeHead = function () {
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        else this.tail = null;
    }

    this.pop = function () {
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
        else this.head = null;
    }

    this.size = function () {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    this.getHead = function () {
        return this.head;
    }

    this.getTail = function () {
        return this.tail;
    }

    this.at = function (index) {
        let node = this.head
        while (node && index > 0) {
            node = node.next;
            index--;
        }
        return node;
    }

    this.contains = function (value) {
        let node = this.head;
        while (node) {
            if (node.value === value) return true;
            node = node.next;
        }
        return false;
    }

    this.find = function (value) {
        let node = this.head;
        let index = 0;
        while (node) {
            if (node.value === value) return index;
            node = node.next;
            index++;
        }
        return null;
    }

    this.toString = function () {
        let node = this.head;
        let str = '';
        while (node.next) {
            str += '(' + node.value + ') -> ';
            node = node.next;
        }
        return str + '(' + node.value + ')' + ' -> null';
    }

    this.insertAt = function (index, value) {
        if (index === 0) return this.prepend(value);
        if (index >= this.size()) return this.append(value);

        let newNode = new Node(value, null, null);
        let node = this.head;
        for (let i = 0; i < index - 1; i++) {
            node = node.next;
        }

        newNode.next = node.next;
        newNode.prev = node;
        node.next = newNode;
        newNode.next.prev = newNode;
    }

    this.removeAt = function (index) {
        if (index === 0) return this.removeHead();
        if (index >= this.size() - 1) return this.pop();

        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }

        node.prev.next = node.next;
        node.next.prev = node.prev;
        node = null;
    }

};

let Node = function (value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
};

let list = new LinkedList();
list.append(0);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);
console.log(list.toString());

// removing head, tail, and middle nodes
list.removeHead();
list.pop();
list.removeAt(3);
console.log(list.toString());

// inserting at head, tail, and middle nodes
list.prepend(0);
list.append(9);
list.insertAt(4, 4);
console.log(list.toString());

// finding nodes
console.log(list.contains(5));
console.log(list.contains(11));
console.log(list.find(5));
console.log(list.find(11));
console.log(list.at(5));
console.log(list.at(11));
console.log(list.size());
console.log(list.head);
console.log(list.tail);