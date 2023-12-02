export class ChristmasQueue<T> {
  private registry = new Map<number, T[]>();

  enqueue(letter: T, priority: number): void {
    const letters = this.registry.get(priority) || [];
    letters.push(letter);
    this.registry.set(priority, letters);
  }

  dequeue(): T {
    const maxPriority = Math.max(...this.registry.keys());
    const letters = this.registry.get(maxPriority) || [];
    if (letters.length === 0) {
      throw new Error("There are no letters in the queue!");
    }
    const maxPriorotyLetter = letters.shift();
    if (letters.length === 0) this.registry.delete(maxPriority);
    return maxPriorotyLetter as T;
  }

  isEmpty(): boolean {
    return this.registry.size === 0;
  }
}
