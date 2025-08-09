class ListNode {
  private value: number;
  public next: null | ListNode;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
    private head: Node | null;
    public next: null | LinkedList;
    constructor(value: number, next: LinkedList | null) {
      this.next = next;
    }
}

function hasCycle(head: LinkedList | null): boolean {
  if (!head) return false;
  let current = head;
  let nodes = [current]

  while (current.next) {
    if (nodes.includes(current.next)) return true;

    nodes.push(current.next)
    current = current.next
  }
  
  return false
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
