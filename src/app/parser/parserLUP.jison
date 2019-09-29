/* description: Parses and executes mathematical expressions. */

/* lexical grammar */
%lex
%options case-insensitive

comment_simple      "//"[^\r\n]*
comment_multi       "/*""/"*([^*/]|[^*]"/"|"*"[^/])*"*"*"*/"
comment_multi2      "$" ([^$])* "$"* "$"
%%

\s+                 /* skip whitespace */
{comment_simple}    /* skip comment */
{comment_multi}     /* skip coment */

/* reserved words */
"login"     return 'login'
"logout"    return 'logout'
"success"   return 'success'
"fail"      return 'fail'
"databases" return 'databases'
"database"  return 'database'
"name"      return 'name'
"table"     return 'table'
"tables"    return 'tables'
"columns"   return 'columns'
"column"    return 'column'
"types"     return 'types'
"type"      return 'type'
"pk"        return 'pk'
"attributes" return 'attributes'
"procedures" return 'procedures'
"procedure" return 'procedure'
"message"   return 'mensaje'
"error"     return 'error'
"line"      return 'line'
"desc"      return 'desc'
"data"      return 'data'

/* Symbols */
"+"                 return '+'
"-"                 return '-'
"["                 return '['
"]"                 return ']'

{comment_multi2}    return 'comment_multi2'

<<EOF>>                 return 'EOF'
.                       return 'INVALID'

/lex

%{

const AST = require('./ast/AST').AST;
const Login = require('./ast/Login').Login;
const Logout = require('./ast/Logout').Logout;
const Databases = require('./ast/Databases').Databases;
const Database = require('./ast/Database').Database;
const Tables = require('./ast/Tables').Tables;
const Table = require('./ast/Table').Table;
const Columns = require('./ast/Columns').Columns;
const Column = require('./ast/Column').Column;
const Atributo = require('./ast/Atributo').Atributo;
const Types = require('./ast/Types').Types;
const Type = require('./ast/Type').Type;
const Procedures = require('./ast/Procedures').Procedures;
const Procedure = require('./ast/Procedure').Procedure;
const Mensaje = require('./ast/Mensaje').Mensaje;
const Error = require('./ast/Error').Error;
const Data = require('./ast/Data').Data;

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
    | DATABASES
        { $$ = $1; }
    | DATABASE
        { $$ = $1; }
    | TABLES
        { $$ = $1; }
    | TABLE
        { $$ = $1; }
    | COLUMNS
        { $$ = $1; }
    | COLUMN
        { $$ = $1; }
    | TYPES
        { $$ = $1; }
    | TYPE
        { $$ = $1; }
    | PROCEDURES
        { $$ = $1; }
    | PROCEDURE 
        { $$ = $1; }
    | MENSAJE
        { $$ = $1; }
    | ERROR
        { $$ = $1; }
    | DATA 
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

DATABASES
    :'[' '+' databases ']' INSTRUCTIONS '[' '-' databases ']'
        { $$ = new Databases($5, (yylineno + 1), (@1.first_column + 1)); }
    | '[' '+' databases ']' '[' '-' databases ']'
        { $$ = new Databases(null, (yylineno + 1), (@1.first_column + 1)); }
    ;

DATABASE
    :'[' '+' database ']' '[' '+' name ']' comment_multi2 '[' '-' name ']' '[' '-' database ']'
        { $$ = new Database($9, null, (yylineno + 1), (@1.first_column + 1)); }
    |'[' '+' database ']' '[' '+' name ']' comment_multi2 '[' '-' name ']' INSTRUCTIONS '[' '-' database ']'
        { $$ = new Database($9, $14, (yylineno + 1), (@1.first_column + 1)); }
    ;

TABLES
    :'[' '+' tables ']' INSTRUCTIONS '[' '-' tables ']'
        { $$ = new Tables($5, (yylineno + 1), (@1.first_column + 1)); }
    | '[' '+' tables ']' '[' '-' tables ']'
        { $$ = new Tables(null, (yylineno + 1), (@1.first_column + 1)); }
    ;

TABLE
    :'[' '+' table ']' '[' '+' name ']' comment_multi2 '[' '-' name ']' '[' '-' table ']'
        { $$ = new Table($9, null, (yylineno + 1), (@1.first_column + 1)); }
    |'[' '+' table ']' '[' '+' name ']' comment_multi2 '[' '-' name ']' INSTRUCTIONS '[' '-' table']'
        { $$ = new Table($9, $14, (yylineno + 1), (@1.first_column + 1)); }
    ;

COLUMNS
    :'[' '+' columns ']' INSTRUCTIONS '[' '-' columns ']'
        { $$ = new Columns($5, (yylineno + 1), (@1.first_column + 1)); }
    | '[' '+' columns ']' '[' '-' columns ']'
        { $$ = new Columns(null, (yylineno + 1), (@1.first_column + 1)); }
    ;

COLUMN
    :'[' '+' column ']' '[' '-' column ']'
        { $$ = new Column(null, (yylineno + 1), (@1.first_column + 1)); }
    |'[' '+' column ']' INSTRUCTIONS_COLUMNS '[' '-' column ']'
        { $$ = new Column($5, (yylineno + 1), (@1.first_column + 1)); }
    ;

INSTRUCTIONS_COLUMNS
    : INSTRUCTION_COLUMN
        {
            $$ = [];
            $$.push($1);
        }
    | INSTRUCTIONS_COLUMNS INSTRUCTION_COLUMN
        {
            $$ = $1;
            $$.push($2);
        }
    ;

INSTRUCTION_COLUMN
    : '[' '+' name ']' comment_multi2 '[' '-' name ']'
        { $$ = new Atributo("name", $5); }
    | '[' '+' type ']' comment_multi2 '[' '-' type ']'
        { $$ = new Atributo("Tipo", $5); }
    | '[' '+' pk ']' comment_multi2 '[' '-' pk ']'
        { $$ = new Atributo("Pk", $5); }
    ;

TYPES
    :'[' '+' types ']' INSTRUCTIONS '[' '-' types ']'
        { $$ = new Types($5, (yylineno + 1), (@1.first_column + 1)); }
    | '[' '+' types ']' '[' '-' types ']'
        { $$ = new Types(null, (yylineno + 1), (@1.first_column + 1)); }
    ;

TYPE
    :'[' '+' type ']' '[' '+' name ']' comment_multi2 '[' '-' name ']' '[' '-' type ']'
        { $$ = new Type($9, null, (yylineno + 1), (@1.first_column + 1)); }
    |'[' '+' type ']' '[' '+' name ']' comment_multi2 '[' '-' name ']' '[' '+' attributes ']' '[' '-' attributes ']' '[' '-' type ']'
        { $$ = new Type($9, null, (yylineno + 1), (@1.first_column + 1)); }
    |'[' '+' type ']' '[' '+' name ']' comment_multi2 '[' '-' name ']' '[' '+' attributes ']' INSTRUCTIONS '[' '-' attributes ']' '[' '-' type']'
        { $$ = new Type ($9, $18, (yylineno + 1), (@1.first_column + 1)); }
    ;

PROCEDURES
    :'[' '+' procedures ']' INSTRUCTIONS '[' '-' procedures ']'
        { $$ = new Procedures($5, (yylineno + 1), (@1.first_column + 1)); }
    | '[' '+' procedures ']' '[' '-' procedures ']'
        { $$ = new Procedures(null, (yylineno + 1), (@1.first_column + 1)); }
    ;

PROCEDURE
    :'[' '+' procedure ']' '[' '+' name ']' comment_multi2 '[' '-' name ']' '[' '-' procedure ']'
        { $$ = new Procedure($9, null, (yylineno + 1), (@1.first_column + 1)); }
    ;

MENSAJE
    :'[' '+' mensaje ']' comment_multi2 '[' '-' mensaje ']'
        { $$ = new Mensaje($5, (yylineno + 1), (@1.first_column + 1)); }
    ;

ERROR
    :'[' '+' error ']' INSTRUCTIONS_ERROR '[' '-' error ']'
        { $$ = new Error($5, (yylineno + 1), (@1.first_column + 1)); }
    |'[' '+' error ']' '[' '-' error ']'
        { $$ = new Error(null, (yylineno + 1), (@1.first_column + 1)); }
    ;

INSTRUCTIONS_ERROR
    : INSTRUCTION_ERROR
        {
            $$ = [];
            $$.push($1);
        }
    | INSTRUCTIONS_ERROR INSTRUCTION_ERROR
        {
            $$ = $1;
            $$.push($2);
        }
    ;

INSTRUCTION_ERROR
    : '[' '+' line ']' comment_multi2 '[' '-' line ']'
        { $$ = new Atributo("line", $5); }
    | '[' '+' column ']' comment_multi2 '[' '-' column ']'
        { $$ = new Atributo("column", $5); }
    | '[' '+' type ']' comment_multi2 '[' '-' type ']'
        { $$ = new Atributo("type", $5); }
    | '[' '+' desc ']' comment_multi2 '[' '-' desc ']'
        { $$ = new Atributo("desc", $5); }
    ;

DATA
    :'[' '+' data ']' comment_multi2 '[' '-' data ']'
        { $$ = new Data($5, (yylineno + 1), (@1.first_column + 1)); }
    |'[' '+' data ']' '[' '-' data ']'
        { $$ = new Data(null, (yylineno + 1), (@1.first_column + 1)); }
    ;
