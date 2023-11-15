export class SqlBuilder {
  private selectStmt = '';
  private fromStmt = '';
  private whereStmt = '';
  private orderByStmt = '';

  select(fields: Array<string>) {
    this.selectStmt += `SELECT ${fields.join(', ')}`;
    return this;
  }

  from(table: string) {
    this.fromStmt += ` FROM ${table}`;
    return this;
  }

  where(condition: string) {
    if (this.whereStmt === '') {
      this.whereStmt += ` WHERE ${condition}`;
    } else {
      this.whereStmt += ` AND ${condition}`;
    }
    return this;
  }

  innerJoin(table: string, condition: string) {
    if (this.fromStmt === '') {
      throw new Error('You must call from() before calling innerJoin()');
    }
    this.fromStmt += ` INNER JOIN ${table} ON ${condition}`;
    return this;
  }

  orderBy(field: string, order: string) {
    this.orderByStmt += ` ORDER BY ${field} ${order}`;
    return this;
  }

  build(): string {
    return this.selectStmt + this.fromStmt + this.whereStmt + this.orderByStmt;
  }
}
