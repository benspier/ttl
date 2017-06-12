import test from 'ava'

test('should be undefined in strict mode', t => {
  function f () { return this }
  t.true(f() === undefined)
})

test('should reference the implicitly bound object', t => {
  const obj = {
    a: 42,
    method: function () { return this.a }
  }
  t.is(obj.method(), 42)
})

test('should reference the explicitly bound object via Function.prototype.call()', t => {
  function f () { return this.a }
  const obj = {
    a: 42
  }
  t.is(f.call(obj), 42)
})

test('should reference the explicitly bound object via Function.prototype.apply()', t => {
  function f () { return this.a }
  const obj = {
    a: 42
  }
  t.is(f.apply(obj), 42)
})

