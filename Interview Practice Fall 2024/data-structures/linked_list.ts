import node from './node';

class linked_list {
    private _head: node | null;
    private _tail: node | null;
    size: number;

    constructor(list?: any[]) {
        this.size = list?.length ?? 0;
        this._head = null;
        this._tail = null;
        if(list && list.length > 0) {
            let i = list.length - 1;
            let c: node = new node (list[i], null, null);
            this._tail = c;
            while (i > 0) {
                i--;
                let p = c;
                c = new node (list[i], null, c);
                p.prev = c;
            }
            this._head = c;
        }
    }

    append(value: any) {
        const n = new node(value, this._tail, null);
        if (this._tail)
            this._tail.next = n;
        else 
            this._head = n;
        this._tail = n;
        this.size++;
    }

    prepend(value: any) {
        const n = new node(value, null, this._head);
        if (this._head)
            this._head.prev = n;
        else
            this._tail = n;
        this._head = n;
        this.size++;
    }

    pop(index?: number): any {
        let i = index ?? this.size - 1;
        let p: node | null = null;
        let c = this._head;
        while (i > 0) {
            if (c) {
                p = c;
                c = c.next;
            }
            i--;
        }
        if (c === null) return null;
        if (p)
            p.next = c.next;
        else this._head = c.next;
        if (c.next)
            c.next.prev = p;
        else this._tail = p;
        this.size--;
        return c.value;
    }
}

function do_something() {
    const ll = new linked_list([1,2,3,4,5,6,7]);
    ll.append(8);
    console.log(ll.size);
    console.log(ll.pop());
    console.log(ll.pop(5));
}
do_something();