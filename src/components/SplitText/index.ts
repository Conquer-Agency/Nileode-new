interface SplitTextOptions {
  type: string;
  position: string;
}

export default class SplitText {
  chars: any[];
  constructor(target: HTMLElement | null, options: SplitTextOptions) {
    this.chars = [];
    // Implementation details here
  }
} 