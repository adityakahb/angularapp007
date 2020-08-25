import { TextTrimmerPipe } from './text-trimmer.pipe';

describe('TextTrimmerPipe', () => {
  it('create an instance', () => {
    const pipe = new TextTrimmerPipe();
    expect(pipe).toBeTruthy();
  });
});
