import dm from '../src/db';

const tableName = process.argv[2];

const tableOptions = {
  prefix: '',
  suffix: '',
};

if (tableName) {
  dm.execute(tableName, tableOptions);
}
