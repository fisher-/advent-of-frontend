export class GiftRegistry {
  private registry = new Map<number, string[]>();

  addGift(childId: number, gift: string): void {
    const childGifts = this.registry.get(childId) || [];
    !childGifts.includes(gift) && childGifts.push(gift);
    this.registry.set(childId, childGifts);
  }

  removeGift(childId: number, gift: string): void {
    const childGifts = this.registry.get(childId);
    if (!childGifts) {
      throw new Error("Child not found");
    }
    if (!childGifts.includes(gift)) {
      throw new Error("Gift not found");
    }
    childGifts.splice(childGifts.indexOf(gift), 1);
    this.registry.set(childId, childGifts);
  }

  getGiftsForChild(childId: number): string[] | undefined {
    return this.registry.get(childId);
  }
}
