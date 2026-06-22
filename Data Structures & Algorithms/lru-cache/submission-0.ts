class LRUCache {
    /**
     * @param {number} capacity
     */
    capacity: number;
    map: Map<number, ListNode>;
    head: ListNode;
    tail: ListNode;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new ListNode(0,0);
        this.tail = new ListNode(0,0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const node: ListNode = this.map.get(key);
        if (node) {
            this.remove(node);
            this.insert(node);
            return node.value;
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.map.has(key)) {
            const existing = this.map.get(key);
            this.remove(existing);
            existing.value = value;
            this.map.set(key, existing);
            this.insert(existing);
        } else {
            if (this.map.size === this.capacity) {
                const lru = this.tail.prev;
                this.remove(lru);
                this.map.delete(lru.key);
            }
            const node = new ListNode(key, value);
            this.insert(node);
            this.map.set(key, node);
        }
    }

    remove(node: ListNode): void {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    insert(node: ListNode): void {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }
}

class ListNode {
    key: number;
    value: number;
    prev: ListNode;
    next: ListNode;
    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
