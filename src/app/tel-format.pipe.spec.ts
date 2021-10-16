import {TelPipe} from './tel-format.pipe';

describe('TelPipe', () => {
  it('create an instance', () => {
    const pipe = new TelPipe();
    expect(pipe).toBeTruthy();
  });
});
