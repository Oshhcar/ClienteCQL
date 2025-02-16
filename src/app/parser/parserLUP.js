/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parserLUP = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,19],$V1=[5,22],$V2=[1,22],$V3=[1,91],$V4=[1,104];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"INSTRUCTIONS":4,"EOF":5,"INSTRUCTION":6,"LOGIN":7,"LOGOUT":8,"DATABASES":9,"DATABASE":10,"TABLES":11,"TABLE":12,"COLUMNS":13,"COLUMN":14,"TYPES":15,"TYPE":16,"PROCEDURES":17,"PROCEDURE":18,"MENSAJE":19,"ERROR":20,"DATA":21,"[":22,"+":23,"login":24,"]":25,"success":26,"-":27,"fail":28,"logout":29,"databases":30,"database":31,"name":32,"comment_multi2":33,"tables":34,"table":35,"columns":36,"column":37,"INSTRUCTIONS_COLUMNS":38,"INSTRUCTION_COLUMN":39,"type":40,"pk":41,"types":42,"attributes":43,"procedures":44,"procedure":45,"mensaje":46,"INSTRUCTIONS_ERROR":47,"INSTRUCTION_ERROR":48,"line":49,"desc":50,"data":51,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",22:"[",23:"+",24:"login",25:"]",26:"success",27:"-",28:"fail",29:"logout",30:"databases",31:"database",32:"name",33:"comment_multi2",34:"tables",35:"table",36:"columns",37:"column",40:"type",41:"pk",42:"types",43:"attributes",44:"procedures",45:"procedure",46:"mensaje",49:"line",50:"desc",51:"data"},
productions_: [0,[3,2],[4,1],[4,2],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,11],[7,11],[8,11],[8,11],[9,9],[9,8],[10,17],[10,18],[11,9],[11,8],[12,17],[12,18],[13,9],[13,8],[14,8],[14,9],[38,1],[38,2],[39,9],[39,9],[39,9],[15,9],[15,8],[16,17],[16,25],[16,26],[17,9],[17,8],[18,17],[19,9],[20,9],[20,8],[47,1],[47,2],[48,9],[48,9],[48,9],[48,9],[21,9],[21,8]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 
            console.log("DOCUMENTO OK ");
            return new AST($$[$0-1]); 
        
break;
case 2: case 35: case 51:

            this.$ = [];
            this.$.push($$[$0]);
        
break;
case 3: case 36: case 52:

            this.$ = $$[$0-1];
            this.$.push($$[$0]);
        
break;
case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18:
 this.$ = $$[$0]; 
break;
case 19:
 this.$ = new Login(true, (yylineno + 1), (_$[$0-10].first_column + 1)); 
break;
case 20:
 this.$ = new Login(false, (yylineno + 1), (_$[$0-10].first_column + 1)); 
break;
case 21:
 this.$ = new Logout(true, (yylineno + 1), (_$[$0-10].first_column + 1)); 
break;
case 22:
 this.$ = new Logout(false, (yylineno + 1), (_$[$0-10].first_column + 1)); 
break;
case 23:
 this.$ = new Databases($$[$0-4], (yylineno + 1), (_$[$0-8].first_column + 1)); 
break;
case 24:
 this.$ = new Databases(null, (yylineno + 1), (_$[$0-7].first_column + 1)); 
break;
case 25:
 this.$ = new Database($$[$0-8], null, (yylineno + 1), (_$[$0-16].first_column + 1)); 
break;
case 26:
 this.$ = new Database($$[$0-9], $$[$0-4], (yylineno + 1), (_$[$0-17].first_column + 1)); 
break;
case 27:
 this.$ = new Tables($$[$0-4], (yylineno + 1), (_$[$0-8].first_column + 1)); 
break;
case 28:
 this.$ = new Tables(null, (yylineno + 1), (_$[$0-7].first_column + 1)); 
break;
case 29:
 this.$ = new Table($$[$0-8], null, (yylineno + 1), (_$[$0-16].first_column + 1)); 
break;
case 30:
 this.$ = new Table($$[$0-9], $$[$0-4], (yylineno + 1), (_$[$0-17].first_column + 1)); 
break;
case 31:
 this.$ = new Columns($$[$0-4], (yylineno + 1), (_$[$0-8].first_column + 1)); 
break;
case 32:
 this.$ = new Columns(null, (yylineno + 1), (_$[$0-7].first_column + 1)); 
break;
case 33:
 this.$ = new Column(null, (yylineno + 1), (_$[$0-7].first_column + 1)); 
break;
case 34:
 this.$ = new Column($$[$0-4], (yylineno + 1), (_$[$0-8].first_column + 1)); 
break;
case 37:
 this.$ = new Atributo("name", $$[$0-4]); 
break;
case 38:
 this.$ = new Atributo("Tipo", $$[$0-4]); 
break;
case 39:
 this.$ = new Atributo("Pk", $$[$0-4]); 
break;
case 40:
 this.$ = new Types($$[$0-4], (yylineno + 1), (_$[$0-8].first_column + 1)); 
break;
case 41:
 this.$ = new Types(null, (yylineno + 1), (_$[$0-7].first_column + 1)); 
break;
case 42:
 this.$ = new Type($$[$0-8], null, (yylineno + 1), (_$[$0-16].first_column + 1)); 
break;
case 43:
 this.$ = new Type($$[$0-16], null, (yylineno + 1), (_$[$0-24].first_column + 1)); 
break;
case 44:
 this.$ = new Type ($$[$0-17], $$[$0-8], (yylineno + 1), (_$[$0-25].first_column + 1)); 
break;
case 45:
 this.$ = new Procedures($$[$0-4], (yylineno + 1), (_$[$0-8].first_column + 1)); 
break;
case 46:
 this.$ = new Procedures(null, (yylineno + 1), (_$[$0-7].first_column + 1)); 
break;
case 47:
 this.$ = new Procedure($$[$0-8], null, (yylineno + 1), (_$[$0-16].first_column + 1)); 
break;
case 48:
 this.$ = new Mensaje($$[$0-4], (yylineno + 1), (_$[$0-8].first_column + 1)); 
break;
case 49:
 this.$ = new Error($$[$0-4], (yylineno + 1), (_$[$0-8].first_column + 1)); 
break;
case 50:
 this.$ = new Error(null, (yylineno + 1), (_$[$0-7].first_column + 1)); 
break;
case 53:
 this.$ = new Atributo("line", $$[$0-4]); 
break;
case 54:
 this.$ = new Atributo("column", $$[$0-4]); 
break;
case 55:
 this.$ = new Atributo("type", $$[$0-4]); 
break;
case 56:
 this.$ = new Atributo("desc", $$[$0-4]); 
break;
case 57:
 this.$ = new Data($$[$0-4], (yylineno + 1), (_$[$0-8].first_column + 1)); 
break;
case 58:
 this.$ = new Data(null, (yylineno + 1), (_$[$0-7].first_column + 1)); 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:$V0},{1:[3]},{5:[1,20],6:21,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:$V0},o($V1,[2,2]),o($V1,[2,4]),o($V1,[2,5]),o($V1,[2,6]),o($V1,[2,7]),o($V1,[2,8]),o($V1,[2,9]),o($V1,[2,10]),o($V1,[2,11]),o($V1,[2,12]),o($V1,[2,13]),o($V1,[2,14]),o($V1,[2,15]),o($V1,[2,16]),o($V1,[2,17]),o($V1,[2,18]),{23:$V2},{1:[2,1]},o($V1,[2,3]),{2:[1,36],24:[1,23],29:[1,24],30:[1,25],31:[1,26],34:[1,27],35:[1,28],36:[1,29],37:[1,30],40:[1,32],42:[1,31],44:[1,33],45:[1,34],46:[1,35],51:[1,37]},{25:[1,38]},{25:[1,39]},{25:[1,40]},{25:[1,41]},{25:[1,42]},{25:[1,43]},{25:[1,44]},{25:[1,45]},{25:[1,46]},{25:[1,47]},{25:[1,48]},{25:[1,49]},{25:[1,50]},{25:[1,51]},{25:[1,52]},{22:[1,53]},{22:[1,54]},{4:55,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,56]},{22:[1,57]},{4:58,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,59]},{22:[1,60]},{4:61,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,62]},{22:[1,63],38:64,39:65},{4:66,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,67]},{22:[1,68]},{4:69,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,70]},{22:[1,71]},{33:[1,72]},{22:[1,74],47:73,48:75},{22:[1,77],33:[1,76]},{26:[1,78],28:[1,79]},{26:[1,80],28:[1,81]},{6:21,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,82]},{23:$V2,27:[1,83]},{23:[1,84]},{6:21,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,85]},{23:$V2,27:[1,86]},{23:[1,87]},{6:21,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,88]},{23:$V2,27:[1,89]},{23:$V3,27:[1,90]},{22:[1,92],39:93},{22:[2,35]},{6:21,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,94]},{23:$V2,27:[1,95]},{23:[1,96]},{6:21,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,97]},{23:$V2,27:[1,98]},{23:[1,99]},{22:[1,100]},{22:[1,101],48:102},{23:$V4,27:[1,103]},{22:[2,51]},{22:[1,105]},{27:[1,106]},{25:[1,107]},{25:[1,108]},{25:[1,109]},{25:[1,110]},{23:$V2,27:[1,111]},{30:[1,112]},{32:[1,113]},{23:$V2,27:[1,114]},{34:[1,115]},{32:[1,116]},{23:$V2,27:[1,117]},{36:[1,118]},{37:[1,119]},{32:[1,120],40:[1,121],41:[1,122]},{23:$V3,27:[1,123]},{22:[2,36]},{23:$V2,27:[1,124]},{42:[1,125]},{32:[1,126]},{23:$V2,27:[1,127]},{44:[1,128]},{32:[1,129]},{27:[1,130]},{23:$V4,27:[1,131]},{22:[2,52]},{2:[1,132]},{37:[1,134],40:[1,135],49:[1,133],50:[1,136]},{27:[1,137]},{51:[1,138]},{22:[1,139]},{22:[1,140]},{22:[1,141]},{22:[1,142]},{30:[1,143]},{25:[1,144]},{25:[1,145]},{34:[1,146]},{25:[1,147]},{25:[1,148]},{36:[1,149]},{25:[1,150]},{25:[1,151]},{25:[1,152]},{25:[1,153]},{25:[1,154]},{37:[1,155]},{42:[1,156]},{25:[1,157]},{25:[1,158]},{44:[1,159]},{25:[1,160]},{25:[1,161]},{46:[1,162]},{2:[1,163]},{25:[1,164]},{25:[1,165]},{25:[1,166]},{25:[1,167]},{25:[1,168]},{51:[1,169]},{25:[1,170]},{27:[1,171]},{27:[1,172]},{27:[1,173]},{27:[1,174]},{25:[1,175]},o($V1,[2,24]),{33:[1,176]},{25:[1,177]},o($V1,[2,28]),{33:[1,178]},{25:[1,179]},o($V1,[2,32]),o($V1,[2,33]),{33:[1,180]},{33:[1,181]},{33:[1,182]},{25:[1,183]},{25:[1,184]},o($V1,[2,41]),{33:[1,185]},{25:[1,186]},o($V1,[2,46]),{33:[1,187]},{25:[1,188]},{25:[1,189]},o($V1,[2,50]),{33:[1,190]},{33:[1,191]},{33:[1,192]},{33:[1,193]},{25:[1,194]},o($V1,[2,58]),{24:[1,195]},{24:[1,196]},{29:[1,197]},{29:[1,198]},o($V1,[2,23]),{22:[1,199]},o($V1,[2,27]),{22:[1,200]},o($V1,[2,31]),{22:[1,201]},{22:[1,202]},{22:[1,203]},o($V1,[2,34]),o($V1,[2,40]),{22:[1,204]},o($V1,[2,45]),{22:[1,205]},o($V1,[2,48]),o($V1,[2,49]),{22:[1,206]},{22:[1,207]},{22:[1,208]},{22:[1,209]},o($V1,[2,57]),{25:[1,210]},{25:[1,211]},{25:[1,212]},{25:[1,213]},{27:[1,214]},{27:[1,215]},{27:[1,216]},{27:[1,217]},{27:[1,218]},{27:[1,219]},{27:[1,220]},{27:[1,221]},{27:[1,222]},{27:[1,223]},{27:[1,224]},o($V1,[2,19]),o($V1,[2,20]),o($V1,[2,21]),o($V1,[2,22]),{32:[1,225]},{32:[1,226]},{32:[1,227]},{40:[1,228]},{41:[1,229]},{32:[1,230]},{32:[1,231]},{49:[1,232]},{37:[1,233]},{40:[1,234]},{50:[1,235]},{25:[1,236]},{25:[1,237]},{25:[1,238]},{25:[1,239]},{25:[1,240]},{25:[1,241]},{25:[1,242]},{25:[1,243]},{25:[1,244]},{25:[1,245]},{25:[1,246]},{4:248,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,247]},{4:250,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,249]},{22:[2,37]},{22:[2,38]},{22:[2,39]},{22:[1,251]},{22:[1,252]},{22:[2,53]},{22:[2,54]},{22:[2,55]},{22:[2,56]},{23:$V2,27:[1,253]},{6:21,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,254]},{23:$V2,27:[1,255]},{6:21,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,256]},{23:[1,258],27:[1,257]},{27:[1,259]},{31:[1,260]},{23:$V2,27:[1,261]},{35:[1,262]},{23:$V2,27:[1,263]},{40:[1,264]},{43:[1,265]},{45:[1,266]},{25:[1,267]},{31:[1,268]},{25:[1,269]},{35:[1,270]},{25:[1,271]},{25:[1,272]},{25:[1,273]},o($V1,[2,25]),{25:[1,274]},o($V1,[2,29]),{25:[1,275]},o($V1,[2,42]),{4:277,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,276]},o($V1,[2,47]),o($V1,[2,26]),o($V1,[2,30]),{23:$V2,27:[1,278]},{6:21,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:11,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:[1,279]},{43:[1,280]},{23:$V2,27:[1,281]},{25:[1,282]},{43:[1,283]},{22:[1,284]},{25:[1,285]},{27:[1,286]},{22:[1,287]},{40:[1,288]},{27:[1,289]},{25:[1,290]},{40:[1,291]},o($V1,[2,43]),{25:[1,292]},o($V1,[2,44])],
defaultActions: {20:[2,1],65:[2,35],75:[2,51],93:[2,36],102:[2,52],238:[2,37],239:[2,38],240:[2,39],243:[2,53],244:[2,54],245:[2,55],246:[2,56]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};


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

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/* skip comment */
break;
case 2:/* skip coment */
break;
case 3:return 24
break;
case 4:return 29
break;
case 5:return 26
break;
case 6:return 28
break;
case 7:return 30
break;
case 8:return 31
break;
case 9:return 32
break;
case 10:return 35
break;
case 11:return 34
break;
case 12:return 36
break;
case 13:return 37
break;
case 14:return 42
break;
case 15:return 40
break;
case 16:return 41
break;
case 17:return 43
break;
case 18:return 44
break;
case 19:return 45
break;
case 20:return 46
break;
case 21:return 2
break;
case 22:return 49
break;
case 23:return 50
break;
case 24:return 51
break;
case 25:return 23
break;
case 26:return 27
break;
case 27:return 22
break;
case 28:return 25
break;
case 29:return 33
break;
case 30:return 5
break;
case 31:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/i,/^(?:(\/\/[^\r\n]*))/i,/^(?:(\/\*\/*([^*\/]|[^*]\/|\*[^\/])*\**\*\/))/i,/^(?:login\b)/i,/^(?:logout\b)/i,/^(?:success\b)/i,/^(?:fail\b)/i,/^(?:databases\b)/i,/^(?:database\b)/i,/^(?:name\b)/i,/^(?:table\b)/i,/^(?:tables\b)/i,/^(?:columns\b)/i,/^(?:column\b)/i,/^(?:types\b)/i,/^(?:type\b)/i,/^(?:pk\b)/i,/^(?:attributes\b)/i,/^(?:procedures\b)/i,/^(?:procedure\b)/i,/^(?:message\b)/i,/^(?:error\b)/i,/^(?:line\b)/i,/^(?:desc\b)/i,/^(?:data\b)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:(\$([^$])*\$*\$))/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parserLUP;
exports.Parser = parserLUP.Parser;
exports.parse = function () { return parserLUP.parse.apply(parserLUP, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}