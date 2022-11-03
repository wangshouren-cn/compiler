import { TokenType } from "./TokenType";

/**
 * Token字符类
 *
 * @example
 *
 * ```
 * 'var a = 1 + 2'
 *
 * 'var a' -> VARIABLE a
 *
 * '=' -> OPEATOR =
 *
 * '1' -> INTEGER 1
 *
 * '+' -> OPEATOR +
 *
 * '2' -> INTEGER 2
 * ```
 */
export class Token {
  _type: TokenType;
  _value: string;

  constructor(tokenType: TokenType, value: string) {
    this._type = tokenType;
    this._value = value;
  }

  getType(): TokenType {
    return this._type;
  }

  getValue(): string {
    return this._value;
  }

  /**
   * 是否是声明变量
   */
  isVariable(): boolean {
    return this._type === TokenType.VARIABLE;
  }

  /**
   * 是否是值或声明变量的类型
   */
  isValue(): boolean {
    return this.isScalar() || this.isVariable();
  }

  /**
   * 是否是值类型
   */
  isScalar(): boolean {
    return (
      this._type === TokenType.INTEGER ||
      this._type === TokenType.FLOAT ||
      this._type === TokenType.STRING ||
      this._type === TokenType.BOOLEAN
    );
  }

  toString(): string {
    return `type ${this._type}, value ${this._value}`;
  }
}
