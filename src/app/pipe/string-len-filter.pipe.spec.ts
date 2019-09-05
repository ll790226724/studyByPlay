import { StringLenFilterPipe } from './string-len-filter.pipe';

describe('StringLenFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new StringLenFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
