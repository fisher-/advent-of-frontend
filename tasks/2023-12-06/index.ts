export class OrderController {
  private machines: Machine[] = [];

  registerMachine(machine: Machine) {
    this.machines.push(machine);
  }

  unregisterMachine(machine: Machine) {
    this.machines.splice(this.machines.indexOf(machine), 1);
  }

  setState(state: string) {
    if (state === "unknown") {
      throw new Error("Invalid state provided");
    }
    this.machines.forEach((machine: Machine) => {
      machine.state = state;
    });
  }
}

export class Machine {
  private orders: string[] = [];

  get state(): string | null {
    return this.orders[this.orders.length - 1] || null;
  }

  set state(state: string) {
    this.orders.push(state);
  }

  performAudit(): string[] {
    return this.orders.map(
      (order: string, index: number) => `Order #${index + 1} - ${order}`
    );
  }
}
