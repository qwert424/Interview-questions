Reflect
Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 proxy handler (en-US) 的方法相同。Reflect 不是一个函数对象，因此它是不可构造的。

描述
与大多数全局对象不同 Reflect 并非一个构造函数，所以不能通过 new 运算符对其进行调用，或者将 Reflect 对象作为一个函数来调用。Reflect 的所有属性和方法都是静态的（就像 Math 对象）。

Reflect 对象提供了以下静态方法，这些方法与 proxy handler 方法的命名相同。

简单来说就是提供对象的基本方法 


静态方法
Reflect.apply(target, thisArgument, argumentsList)
对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 Function.prototype.apply() 功能类似。

Reflect.construct(target, argumentsList[, newTarget])
对构造函数进行 new 操作，相当于执行 new target(...args)。

Reflect.defineProperty(target, propertyKey, attributes)
和 Object.defineProperty() 类似。如果设置成功就会返回 true

Reflect.deleteProperty(target, propertyKey)
作为函数的delete操作符，相当于执行 delete target[name]。

Reflect.get(target, propertyKey[, receiver])
获取对象身上某个属性的值，类似于 target[name]。

Reflect.getOwnPropertyDescriptor(target, propertyKey)
类似于 Object.getOwnPropertyDescriptor()。如果对象中存在该属性，则返回对应的属性描述符，否则返回 undefined。

Reflect.getPrototypeOf(target)
类似于 Object.getPrototypeOf()。

Reflect.has(target, propertyKey)
判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。

Reflect.isExtensible(target)
类似于 Object.isExtensible().

Reflect.ownKeys(target)
返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 Object.keys(), 但不会受enumerable 影响).

Reflect.preventExtensions(target)
类似于 Object.preventExtensions()。返回一个Boolean。

Reflect.set(target, propertyKey, value[, receiver])
将值分配给属性的函数。返回一个Boolean，如果更新成功，则返回true。

Reflect.setPrototypeOf(target, prototype)
设置对象原型的函数。返回一个 Boolean，如果更新成功，则返回 true。