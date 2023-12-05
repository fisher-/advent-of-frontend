export class ChristmasEmitter {
  private events = new Map<string, (() => unknown)[]>();

  on(name: string, listener: () => unknown) {
    const events = this.events.get(name) || [];
    events.push(listener);
    this.events.set(name, events);
  }

  off(name: string, listener: () => unknown) {
    const events = this.events.get(name);
    if (!events || !events.includes(listener)) {
      throw new Error("Listener not found");
    }
    events.splice(events.indexOf(listener), 1);
    this.events.set(name, events);
  }

  emit(eventName: string) {
    const events = this.events.get(eventName) || [];
    events.forEach((event: () => unknown) => event());
  }
}
