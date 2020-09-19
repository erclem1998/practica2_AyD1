import { Reservacion } from './reservacion';

describe('Reservacion', () => {
  it('should create an instance', () => {
    expect(new Reservacion(1,2,'15/02/2020','19/02/2020',3,1,500.99,1234567)).toBeTruthy();
  });
});
