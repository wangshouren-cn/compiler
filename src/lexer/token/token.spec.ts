import { Token } from "./Token";
import { TokenType } from "./TokenType";

test("Token", () => {
  const token = new Token(TokenType.STRING, "222");
});
