import dm from '../src/db';

const tableName = process.argv[2];

if (tableName) {
  dm.create(tableName);
}
