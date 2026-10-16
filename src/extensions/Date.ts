declare global {
  interface Date {
    formatDatetimeString(): string;
  }
}

Date.prototype.formatDatetimeString = function() {
  const month = String(this.getMonth()).padStart(2, '0');
  const day = String(this.getDay()).padStart(2, '0');
  const hours = String(this.getHours()).padStart(2, '0');
  const minutes = String(this.getMinutes()).padStart(2, '0');
  const seconds = String(this.getSeconds()).padStart(2, '0');
  return `${this.getFullYear()}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

export {};