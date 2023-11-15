import { SqlBuilder } from './sqlBuilder';

describe('[Builder] SQL Builder', () => {
  let sqlBuilder: SqlBuilder;

  beforeEach(() => {
    sqlBuilder = new SqlBuilder();
  });

  it('should build a simple SQL query', () => {
    // given
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

  it('should build a SQL query with inner join', () => {
    // given
    const sql = sqlBuilder
      .select(['id', 'name', 'age'])
      .from('users')
      .innerJoin('orders', 'users.id = orders.user_id')
      .where('age > 18')
      .where('name = "John"');

    // when
    const result = sql.build();

    // then
    expect(result).toEqual(
      'SELECT id, name, age FROM users INNER JOIN orders ON users.id = orders.user_id WHERE age > 18 AND name = "John"'
    );
  });

  it('should build a SQL query with multiple inner joins', () => {
    // given
    const sql = sqlBuilder
      .select(['id', 'name', 'age'])
      .from('users')
      .innerJoin('orders', 'users.id = orders.user_id')
      .innerJoin('products', 'orders.product_id = products.id')
      .where('age > 18')
      .where('name = "John"');

    // when
    const result = sql.build();

    // then
    expect(result).toEqual(
      'SELECT id, name, age FROM users INNER JOIN orders ON users.id = orders.user_id INNER JOIN products ON orders.product_id = products.id WHERE age > 18 AND name = "John"'
    );
  });

  it('should throw error when call inner join but never call from()', () => {
    // given
    const sql = sqlBuilder.select(['id', 'name', 'age']);

    // when
    const result = () => sql.innerJoin('orders', 'users.id = orders.user_id');

    // then
    expect(result).toThrowError(
      'You must call from() before calling innerJoin()'
    );
  });
});
