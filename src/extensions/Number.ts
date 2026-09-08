declare global {
  interface Number {
    formatPrice(): string;
  }
}

Number.prototype.formatPrice = function() {
  return `¥${this.toLocaleString()}`;
}

export {}
