const { Stack } = require("../src/Stack");


describe('My Stack', () => {

  let stack;

  beforeEach(() => {
    stack = new Stack();
  })

  it('is created empty', () => {
    //toBe check the reference
    expect(stack.top).toBe(-1);
    // toEqual check value equality
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('1');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('1');

    stack.push('2');
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('2');
  });

  it('can pop off', () => {
    stack.push('1');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('1');
    stack.pop();
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({})
  })
})