// fixtures/baseFixture.ts

import { test as base }
from '@playwright/test';

import users
from '../data/valid_users.json';

import { getRecord }
from '../utils/testData';

import { env }
from '../utils/env';

type UserRecord = { username: string };

type MyFixtures = {
  standardUser: { username: string; password: string };
};

export const test = base.extend<MyFixtures>({

  standardUser: async ({}, use) => {

    const user =
      getRecord<UserRecord>(
        users,
        'standard_user'
      );

    await use({

      username:
        user.username,

      password:
        env.saucePassword
    });
  }
});
