export class SqlBuilder {
  private selectStmt = '';
  private fromStmt = '';
  private whereStmt = '';
  private orderByStmt = '';

  build(): string {
    return this.selectStmt + this.fromStmt + this.whereStmt + this.orderByStmt;
  }
}
