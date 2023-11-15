import { SqlBuilder } from './sqlBuilder';

describe('[Builder] SQL Builder', () => {
  it('should build a simple SQL query', () => {
    // given
    const sqlBuilder = new SqlBuilder();
    const sql = sqlBuilder
      .select(['id', 'name', 'age'])
      .from('users')
      .where('age > 18');

    // when
    const result = sql.build();

    // then
    expect(result).toEqual('SELECT id, name, age FROM users WHERE age > 18');
  });

  it('should build a SQL query with multiple conditions', () => {
    // given
    const sqlBuilder = new SqlBuilder();
    const sql = sqlBuilder
      .select(['id', 'name', 'age'])
      .from('users')
      .where('age > 18')
      .where('name = "John"');

    // when
    const result = sql.build();

    // then
    expect(result).toEqual(
      'SELECT id, name, age FROM users WHERE age > 18 AND name = "John"'
    );
  });

  it('should build a SQL query with order by', () => {
    // given
    const sqlBuilder = new SqlBuilder();
    const sql = sqlBuilder
      .from('users')
      .where('age > 18')
      .where('name = "John"')
      .select(['id', 'name', 'age'])
      .orderBy('age', 'DESC');

    // when
    const result = sql.build();

    // then
    expect(result).toEqual(
      'SELECT id, name, age FROM users WHERE age > 18 AND name = "John" ORDER BY age DESC'
    );
  });
});
