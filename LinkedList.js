// Class for LinkedList Node
class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
// Class for LinkedList
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // Adds the element to the end of the list
    add(element){
        let n = new Node(element);
        let current;
        if(!this.head){
            this.head = n;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = n;
        }
        this.size ++;
    }
    // Adds the element at a specific location
    insertAt(element, index){
        if(index < 0 || index > this.size){
            return "please enter a valid index";
        }
        else if(this.size === 0){
            this.add(element);
        }
        else{
            let current, count = 1;
            let n = new Node(element);
            current = this.head;
            while(current.next && count < index){
                current = current.next;
                count++;
            }
            n.next = current.next
            current.next = n;
            this.size++;  
        }
    }
    // Removes element from a specific index
    RemoveFrom(index){
        if(index < 0 || index > this.size){
            return "please enter a valid index";
        }
        else{
            let count = 0;
            let prev;
            let current = this.head;
            while(current.next && count < index){
                prev = current;
                current = current.next;
                count++;
            }
            if(!current.next){
                prev.next = null;
                this.count --;
            }else{
                prev.next = current.next;
                this.count --;
            }
        }
    }
    // Remove the element
    RemoveElement(element){
        if(this.head.element === element){
            this.head = this.head.next;
        }else{
            let current = this.head;
            let prev;
            while(current.next){
                if(current.element === element){
                    prev.next = current.next;
                    this.size--;
                }
                prev = current;
                current = current.next;
            }
        }
    }
    // FInds the index of element
    indexOf(element){
        let current = this.head;
        let count = 0;
        while(current.next){
            if(current.element === element){
                break;
            }
            current = current.next;
            count++;
        }
        if(current.element === element){
            return count;
        }else{
            return "element not found";
        }
    }
    // Returns if the list is empty
    isEmpty(){
        return this.size === 0;
    }
    // Returns the size of the list
    sizeOfList(){
        return this.size;
    }
    printList(){
        let out = "";
        let current = this.head;
        while(current){
            out = out + " -> " + current.element;
            current = current.next;
        }
        return out;
    }
}

let li = new LinkedList();
li.add(4);
li.add(5);
li.add(6);
li.add(7);
console.log(li.printList());

li.RemoveElement(4);
console.log(li.printList());

li.insertAt(20, 3);
console.log(li.printList());