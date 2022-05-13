import dm from '../src/db';

const tableOptions = {
  prefix: '',
  suffix: '',
};

dm.executeAll(tableOptions);
