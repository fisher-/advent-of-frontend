export interface Letter {
  content: string;
  country: 'pl' | 'de' | 'us';
  priority: 'high' | 'medium' | 'low';
}

type SortingStrategy = PriorityStrategy | LengthStrategy | CountryStrategy;

export class LetterSorter {
  private sortingStrategy: SortingStrategy;

  constructor(sortingStrategy: SortingStrategy) {
    this.sortingStrategy = sortingStrategy;
  }

  sortLetters(letters: Letter[]): Letter[] {
    return letters.sort(
      this.sortingStrategy.compareFn.bind(this.sortingStrategy)
    );
  }
}

export class PriorityStrategy {
  private priority = {
    high: 0,
    medium: 1,
    low: 2,
  }

  compareFn(a: Letter, b: Letter): number {
    return this.priority[a.priority] - this.priority[b.priority];
  }
}

export class CountryStrategy {
  private priority = {
    pl: 0,
    de: 1,
    us: 2,
  }

  compareFn(a: Letter, b: Letter): number {
    return this.priority[a.country] - this.priority[b.country];
  }
}

export class LengthStrategy {
  compareFn(a: Letter, b: Letter): number {
    return a.content.length - b.content.length;
  }
}
