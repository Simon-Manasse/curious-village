export default class Decision {
  private static decision: boolean = false;

  public static getDecision(): boolean {
    return this.decision;
  }

  public static setDecision(decision: boolean): void {
    this.decision = decision;
  }
}
