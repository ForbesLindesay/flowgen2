import * as tt from 'typescript';
import Scope from './Scope';
import transformIdentifier from './transformIdentifier';
import transformStringLiteral from './transformStringLiteral';


export default function transformExpression(expression: tt.Expression, scope: Scope): string {
  switch (expression.kind) {
    case tt.SyntaxKind.Identifier:
      return transformIdentifier(expression as tt.Identifier, scope);
    case tt.SyntaxKind.StringLiteral:
      return transformStringLiteral(expression as tt.StringLiteral, scope);
  }
  throw scope.createError('Unsupported expression kind ' + tt.SyntaxKind[expression.kind], expression);
}