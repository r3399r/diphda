/**
 * String util class.
 */
export class StringHelper {
  private static isCorrectID(str: string): boolean {
    return /^[a-zA-Z]?\d{9}$/.test(str) || /^\d{3,9}$/.test(str);
  }

  public static allAreCorrectId(arr: string[]): boolean {
    return arr.every((str: string) => this.isCorrectID(str));
  }
}
