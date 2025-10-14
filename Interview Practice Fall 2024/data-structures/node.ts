export default class node {
    value: any;
    prev: node | null;
    next: node | null;

    constructor(value: any, prev: node | null, next: node | null) {
        this.value = value;
        this.prev = prev ?? null;
        this.next = next ?? null;
    }
}