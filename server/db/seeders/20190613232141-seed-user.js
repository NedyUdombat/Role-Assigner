import { hashPassword } from '../../utils/helpers';
import { ADMIN } from '../../utils/constants';

export default {
  up: async queryInterface => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: '112345678',
          username: 'assigner',
          full_name: 'Role Assigner',
          email: 'roleassigner@zinnia.com',
          role: ADMIN,
          password: await hashPassword('theadmin'),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },
  down: queryInterface => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
