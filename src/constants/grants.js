import * as roles from './roles';
import * as permissions from './permissions';

const grants = {};

grants[roles.PUBLIC] = [permissions.VIEW_ALL_BLOGS];

grants[roles.USER] = [
  permissions.CREATE_BLOG,
  permissions.UPDATE_BLOG,
  permissions.DELETE_BLOG,
  permissions.FETCH_ALL_BLOGS,
];

export default grants;
