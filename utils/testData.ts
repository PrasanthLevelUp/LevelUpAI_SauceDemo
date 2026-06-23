import users from '../data/valid_users.json';
import { env } from './env';

export function getRecord<T>(
  dataset: { key: string; value: T }[],
  key: string
): T {

  const record = dataset.find(
    r => r.key === key
  );

  if (!record) {
    throw new Error(
      `Record ${key} not found`
    );
  }

  return record.value;
}

export type User = {
  username: string;
  password: string;
};

export function getUser(key: string): User {
  const record = getRecord<{ username: string }>(
    users,
    key
  );

  return {
    username: record.username,
    password: env.saucePassword
  };
}
