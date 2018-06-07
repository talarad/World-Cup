import ServerMethods from './ServerMethods.js'


describe('add member', () => {
  it('should add member', () => {
    ServerMethods.register('aaa', '123456', 'aaa', 'aaa').then(data => {
      expect(data.user.firstName).toBe('aaa');
      expect(data.user.lastName).toBe('aaa');
      expect(data.user.username).toBe('aaa');
      expect(data.user.password).toBe(123456);
    })
  })
})

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});