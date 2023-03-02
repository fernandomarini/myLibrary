import { PipeBooksPipe } from './pipe-books.pipe';

describe('PipeBooksPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeBooksPipe();
    expect(pipe).toBeTruthy();
  });
});
