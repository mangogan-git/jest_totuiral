import { timer } from '../src/timer';

jest.useFakeTimers();

test('timer will end after 1 sec.', () => {
  timer();

  expect(setTimeout).toBeCalledTimes(1);
  expect(setTimeout).lastCalledWith(expect.any(Function), 6000);
});

test('test callback', () => {
    const cb = jest.fn();

    timer(cb);
    expect(setTimeout).toBeCalledTimes(1);
    jest.advanceTimersByTime(6000);

    // same as cb .toHaveBeenCalledWith('end')
    expect(cb.mock.calls[0][0]).toBe('end');
});