import node from './node';

class queue {
    size: number;
    private _front: node | null;
    private _rear: node | null;

    constructor(list?: any[]) {
        this.size = list?.length ?? 0;
        this._front = null;
        this._rear =  null;
        let n = list && list.length > 0 ? new node(list[0], null, null) : null;
        this._front = n;
        for (let i = 1; list && i<list.length; i++) {
            n = new node(list[i], n, null);
            if (n.prev) n.prev.next = n;
        }
        this._rear = n;
    }

    enque(value: any) {
        let n = new node(value, this._rear, null);;
        if (this._rear)
            this._rear.next = n;
        else
            this._front = n;
        this._rear = n;
        this.size++;
    }

    deque(): any {
        let n = this._front;
        if (n === null) return null;
        if (this._front?.next)
            this._front.next.prev = null;
        else
            this._rear = null;
        this._front = n.next;
        this.size--;
        return n.value;
    }
}

function do_something() {
    const q = new queue([1,2,3,4,5,6,7]);
    q.enque(8);
    console.log(q.size);
    for (let i = 0; i < 8; i++)
        console.log(q.deque());
    console.log(q.size);
}
do_something();