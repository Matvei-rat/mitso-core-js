function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return this.width * this.height;
  };
}

function getJSON(obj) {
  return JSON.stringify(obj);
}

function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  return Object.assign(Object.create(proto), obj);
}

class Selector {
  constructor() {
    this.parts = {
      element: '',
      id: '',
      classes: [],
      attrs: [],
      pseudoClasses: [],
      pseudoElement: '',
    };
    this.order = [];
  }

  checkOrder(order) {
    if (this.order.includes(order) && (order === 1 || order === 2 || order === 6)) {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    }
    if (this.order.length > 0 && this.order[this.order.length - 1] > order) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }
    this.order.push(order);
  }

  element(value) {
    this.checkOrder(1);
    this.parts.element = value;
    return this;
  }

  id(value) {
    this.checkOrder(2);
    this.parts.id = `#${value}`;
    return this;
  }

  class(value) {
    this.checkOrder(3);
    this.parts.classes.push(`.${value}`);
    return this;
  }

  attr(value) {
    this.checkOrder(4);
    this.parts.attrs.push(`[${value}]`);
    return this;
  }

  pseudoClass(value) {
    this.checkOrder(5);
    this.parts.pseudoClasses.push(`:${value}`);
    return this;
  }

  pseudoElement(value) {
    this.checkOrder(6);
    this.parts.pseudoElement = `::${value}`;
    return this;
  }

  stringify() {
    return this.parts.element
      + this.parts.id
      + this.parts.classes.join('')
      + this.parts.attrs.join('')
      + this.parts.pseudoClasses.join('')
      + this.parts.pseudoElement;
  }
}

const cssSelectorBuilder = {
  element(value) {
    return new Selector().element(value);
  },

  id(value) {
    return new Selector().id(value);
  },

  class(value) {
    return new Selector().class(value);
  },

  attr(value) {
    return new Selector().attr(value);
  },

  pseudoClass(value) {
    return new Selector().pseudoClass(value);
  },

  pseudoElement(value) {
    return new Selector().pseudoElement(value);
  },

  combine(selector1, combinator, selector2) {
    const combined = new Selector();
    combined.parts.element = `${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
    return combined;
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
