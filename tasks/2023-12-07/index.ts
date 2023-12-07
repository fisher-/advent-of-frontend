type Letter = { [key: string]: number };
type ChangeTracker = (prop: string, value: number) => unknown;

export function createTrackedLetter(
  letter: Letter,
  changeTracker: ChangeTracker
): Letter {
  return new Proxy(letter, {
    set(target: Letter, prop: string, value: number) {
      target[prop] = value;
      changeTracker(prop, value);
      return true;
    },
  });
}
