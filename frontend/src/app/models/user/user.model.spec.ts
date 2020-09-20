import { User } from './user.model';

describe('Test User', () => {
  it('Test crear un usuario', () => {
    expect(new User(2298821, 'usernametestservice', undefined, undefined, undefined)).toBeTruthy();
  });
});
