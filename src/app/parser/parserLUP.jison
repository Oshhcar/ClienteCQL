/* description: Parses and executes mathematical expressions. */

/* lexical grammar */
%lex
%options case-insensitive
comment_simple      "//"[^\r\n]*
comment_multi       "/*""/"*([^*/]|[^*]"/"|"*"[^/])*"*"*"*/"

%%

\s+                 /* skip whitespace */
{comment_simple}    /* skip comment */
{comment_multi}     /* skip coment */

/* reserved words */
"login"     return 'login'
"logout"    return 'logout'
"success"   return 'success'
"fail"      return 'fail'

/* Symbols */
"+"                 return '+'
"-"                 return '-'
"["                 return '['
"]"                 return ']'

<<EOF>>                 return 'EOF'
.                       return 'INVALID'

/lex

%{

const AST = require('./ast/AST').AST;
const Login = require('./ast/Login').Login;
const Logout = require('./ast/Logout').Logout;

%}

%start START

%% /* language grammar */

START
    : INSTRUCTIONS EOF
        { 
            console.log("DOCUMENTO OK ");
            return new AST($1); 
        }
    ;

INSTRUCTIONS
    : INSTRUCTION 
        {
            $$ = [];
            $$.push($1);
        }
    | INSTRUCTIONS INSTRUCTION
        {
            $$ = $1;
            $$.push($2);
        }
    ;

INSTRUCTION
    : LOGIN
        { $$ = $1; }
    | LOGOUT
        { $$ = $1; }
    ;

LOGIN
    :'[' '+' login ']' '[' success ']' '[' '-' login ']'
        { $$ = new Login(true, (yylineno + 1), (@1.first_column + 1)); }
    |'[' '+' login ']' '[' fail ']' '[' '-' login ']'
        { $$ = new Login(false, (yylineno + 1), (@1.first_column + 1)); }
    ;

LOGOUT
    :'[' '+' logout ']' '[' success ']' '[' '-' logout ']'
        { $$ = new Logout(true, (yylineno + 1), (@1.first_column + 1)); }
    |'[' '+' logout ']' '[' fail ']' '[' '-' logout ']'
        { $$ = new Logout(false, (yylineno + 1), (@1.first_column + 1)); }
    ;