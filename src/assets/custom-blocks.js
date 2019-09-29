var Blockly;

Blockly.Blocks['sent_select'] = {
  init: function() {
    this.appendValueInput("select")
        .setCheck("id")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SELECT");
    this.appendValueInput("from")
        .setCheck("id")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("FROM");
    this.appendValueInput("where")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("WHERE");
    this.appendValueInput("orderby")
        .setCheck("id")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ORDER BY");
    this.appendValueInput("limit")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("LIMIT");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['sent_select'] = function(block) {
  var value_select = Blockly.JavaScript.valueToCode(block, 'select', Blockly.JavaScript.ORDER_ATOMIC);
  var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
  var value_where = Blockly.JavaScript.valueToCode(block, 'where', Blockly.JavaScript.ORDER_ATOMIC);
  var value_orderby = Blockly.JavaScript.valueToCode(block, 'orderby', Blockly.JavaScript.ORDER_ATOMIC);
  var value_limit = Blockly.JavaScript.valueToCode(block, 'limit', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var va = ""+value_select;
  va = va.split('(').join('').split(')').join('');

  var fr = ""+value_from;
  fr = fr.split('(').join('').split(')').join('');

  var wh = ""+value_where;
  wh = wh.split('(').join('').split(')').join('');

  var or = ""+value_orderby;
  or = or.split('(').join('').split(')').join('');

  var li = ""+value_limit;
  li = li.split('(').join('').split(')').join('');

  var code;
  if(wh == ""){
    if(or == ""){
      if(li == "") {
        code = 'SELECT ' + va + ' FROM ' + fr + ';\n';
      } else {
        code = 'SELECT ' + va + ' FROM ' + fr + ' LIMIT ' + li + ';\n';
      }
    }
    else {
      if(li == ""){
        code = 'SELECT ' + va + ' FROM ' + fr + ' ORDER BY ' + or + ';\n';
      } else {
        code = 'SELECT ' + va + ' FROM ' + fr + ' ORDER BY ' + or + ' LIMIT ' + li + ';\n';
      }
    }
  } else {
    if(or == ""){
      if(li == ""){
        code = 'SELECT ' + va + ' FROM ' + fr + ' WHERE ' + wh + ';\n';
      } else {
        code = 'SELECT ' + va + ' FROM ' + fr + ' WHERE ' + wh + ' LIMIT ' + li + ';\n';
      }
    } else{
      if(li == ""){
        code = 'SELECT ' + va + ' FROM ' + fr + ' WHERE ' + wh + ' ORDER BY ' + or + ';\n';
      } else {
        code = 'SELECT ' + va + ' FROM ' + fr + ' WHERE ' + wh + ' ORDER BY ' + or + ' LIMIT ' + li + ';\n';
      }
    }
  }
  return code;
};

Blockly.Blocks['sent_delete'] = {
  init: function() {
    this.appendValueInput("delete")
        .setCheck("id")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DELETE FROM");
    this.appendValueInput("where")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("WHERE");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_delete'] = function(block) {
  var value_delete = Blockly.JavaScript.valueToCode(block, 'delete', Blockly.JavaScript.ORDER_ATOMIC);
  var value_where = Blockly.JavaScript.valueToCode(block, 'where', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var fr = ""+value_delete;
  fr = fr.split('(').join('').split(')').join('');

  var wh = ""+value_where;
  wh = wh.split('(').join('').split(')').join('');

  var code;
  if(wh == ""){
    code = 'DELETE FROM ' + fr + ';\n';
  } else {
    code = 'DELETE FROM ' + fr + ' WHERE ' + wh + ';\n';
  }
  return code;
};


Blockly.Blocks['all_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("*");
    this.setOutput(true, "id");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['all_type'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '*';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['id_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("id"), "id");
    this.setOutput(true, "id");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['id_type'] = function(block) {
  var text_id = block.getFieldValue('id');
  // TODO: Assemble JavaScript into code variable.
  var code = text_id;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['boolean_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "op");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['boolean_type'] = function(block) {
  var dropdown_op = block.getFieldValue('op');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_op;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['math_type'] = {
  init: function() {
    this.appendValueInput("op1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["*","*"], ["/","/"], ["**","**"], ["%","%"]]), "op");
    this.appendValueInput("op2")
        .setCheck(null);
    this.appendValueInput("op3")
        .setCheck(null);
    this.setOutput(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['math_type'] = function(block) {
  var value_op1 = Blockly.JavaScript.valueToCode(block, 'op1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_op2 = Blockly.JavaScript.valueToCode(block, 'op2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_op3 = Blockly.JavaScript.valueToCode(block, 'op3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_op1 + ' ' + dropdown_op + ' ' + value_op2 + ' ' + value_op3;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['relacional_type'] = {
  init: function() {
    this.appendValueInput("op1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["<","<"], [">",">"], ["<=","<="], [">=",">="], ["==","=="], ["!=","!="]]), "op");
    this.appendValueInput("op2")
        .setCheck(null);
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setOutput(true, "Boolean");
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['relacional_type'] = function(block) {
  var value_op1 = Blockly.JavaScript.valueToCode(block, 'op1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_op2 = Blockly.JavaScript.valueToCode(block, 'op2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var code = value_op1 + ' ' + dropdown_op + ' ' + value_op2 + ' ' + value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['logic_type'] = {
  init: function() {
    this.appendValueInput("op1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["||","||"], ["&&","&&"], ["\"^\"","\"^\""]]), "op");
    this.appendValueInput("op2")
        .setCheck(null);
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['logic_type'] = function(block) {
  var value_op1 = Blockly.JavaScript.valueToCode(block, 'op1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_op = block.getFieldValue('op');
  var value_op2 = Blockly.JavaScript.valueToCode(block, 'op2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var drop = dropdown_op+"";
  drop = drop.split('"').join('');

  var code = value_op1 + ' ' + drop + ' ' + value_op2 + ' ' + value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['unario_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["!","!"]]), "op");
    this.appendValueInput("op1")
        .setCheck(null);
    this.appendValueInput("op3")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['unario_type'] = function(block) {
  var dropdown_op = block.getFieldValue('op');
  var value_op1 = Blockly.JavaScript.valueToCode(block, 'op1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_op3 = Blockly.JavaScript.valueToCode(block, 'op3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code =  dropdown_op + ' ' + value_op1 + ' ' + value_op3;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['sent_insert'] = {
  init: function() {
    this.appendValueInput("table")
        .setCheck("id")
        .appendField("INSERT INTO");
    this.appendValueInput("values")
        .setCheck("id")
        .appendField("VALUES");
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_insert'] = function(block) {
  var value_table = Blockly.JavaScript.valueToCode(block, 'table', Blockly.JavaScript.ORDER_ATOMIC);
  var value_values = Blockly.JavaScript.valueToCode(block, 'values', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var va = ""+value_table;
  va = va.split('(').join('').split(')').join('');

  var fr = ""+value_values;
  fr = fr.split('(').join('').split(')').join('');

  var code = 'INSERT INTO ' + va + '\n' + 'VALUES ' + value_values + ';\n';
  return code;f
};


Blockly.Blocks['sent_update'] = {
  init: function() {
    this.appendValueInput("update")
        .setCheck("id")
        .appendField("UPDATE");
    this.appendValueInput("set")
        .setCheck("id")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SET");
    this.appendValueInput("where")
        .setCheck("Boolean")
        .appendField("WHERE");
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_update'] = function(block) {
  var value_update = Blockly.JavaScript.valueToCode(block, 'update', Blockly.JavaScript.ORDER_ATOMIC);
  var value_set = Blockly.JavaScript.valueToCode(block, 'set', Blockly.JavaScript.ORDER_ATOMIC);
  var value_where = Blockly.JavaScript.valueToCode(block, 'where', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  var va = ""+value_update;
  va = va.split('(').join('').split(')').join('');

  var fr = ""+value_set;
  fr = fr.split('(').join('').split(')').join('');

  var wh = ""+value_where;
  wh = wh.split('(').join('').split(')').join('');

  var code;
  if(wh == ""){
    code = 'UPDATE ' + va + '\nSET\n' + fr + ';\n';
  } else {
    code = 'UPDATE ' + va + '\nSET\n' + fr + '\nWHERE ' + wh + ';\n';
  }

  return code;
};

Blockly.Blocks['use_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("USE")
        .appendField(new Blockly.FieldTextInput("datbase"), "database");
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['use_block'] = function(block) {
  var text_database = block.getFieldValue('database');
  // TODO: Assemble JavaScript into code variable.
  var code = 'USE ' + text_database + ';\n';
  return code;
};

Blockly.Blocks['sent_decla'] = {
  init: function() {
    this.appendValueInput("tipo")
        .setCheck("id")
        .appendField("TIPO")
        .appendField(new Blockly.FieldDropdown([["int","int"], ["double","double"], ["string","string"], ["boolean","boolean"], ["date","date"], ["time","time"], ["map","map"], ["list","list"], ["set","set"]]), "tipo");
    this.appendValueInput("valor")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("VALOR");
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_decla'] = function(block) {
  var dropdown_tipo = block.getFieldValue('tipo');
  var value_tipo = Blockly.JavaScript.valueToCode(block, 'tipo', Blockly.JavaScript.ORDER_ATOMIC);
  var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  /*
  var va = ""+value_tipo;
  va = va.split('(').join('').split(')').join('');
  */  
  var fr = ""+value_tipo;
  fr = fr.split('(').join('').split(')').join('');

  var wh = ""+value_valor;
  wh = wh.split('(').join('').split(')').join('');

  var code;
  if(wh == ""){
    code = dropdown_tipo + ' ' + fr +';\n';
  } else {
    code = dropdown_tipo +' ' + fr + ' = ' + wh + ';\n';
  }
  return code;
};

Blockly.Blocks['sent_if'] = {
  init: function() {
    this.appendValueInput("cond")
        .setCheck("Boolean")
        .appendField("If");
    this.appendStatementInput("sent_if")
        .setCheck(null);
    this.appendStatementInput("sent_else")
        .setCheck(null)
        .appendField("else");
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_if'] = function(block) {
  var value_cond = Blockly.JavaScript.valueToCode(block, 'cond', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_sent_if = Blockly.JavaScript.statementToCode(block, 'sent_if');
  var statements_sent_else = Blockly.JavaScript.statementToCode(block, 'sent_else');
  // TODO: Assemble JavaScript into code variable.
  var code = 'if ' + value_cond + ' {\n';
  code += statements_sent_if + '\n} else {\n' + statements_sent_else + '\n}\n';
  return code;
};

Blockly.Blocks['sent_log'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Log");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_log'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var fr = ""+value_name;
  fr = fr.split('(').join('').split(')').join('');
  var code = 'Log(' + fr + ');\n';
  return code;
};

Blockly.Blocks['cadena'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "valor");
    this.appendDummyInput()
        .appendField("\"");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['cadena'] = function(block) {
  var text_valor = block.getFieldValue('valor');
  // TODO: Assemble JavaScript into code variable.
  var code = '"' + text_valor + '"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['date'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("date '");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("2019-11-14"), "date");
    this.appendDummyInput()
        .appendField("'");
    this.setInputsInline(true);
    this.setOutput(true, "date");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['date'] = function(block) {
  var text_date = block.getFieldValue('date');
  // TODO: Assemble JavaScript into code variable.
  var code = '\''+text_date+'\'';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("time'");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("12:12:00"), "time");
    this.appendDummyInput()
        .appendField("'");
    this.setInputsInline(true);
    this.setOutput(true, "time");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['time'] = function(block) {
  var text_time = block.getFieldValue('time');
  // TODO: Assemble JavaScript into code variable.
  var code = '\''+var_time+'\'';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['sent_while'] = {
  init: function() {
    this.appendValueInput("cond")
        .setCheck("Boolean")
        .appendField("While");
    this.appendStatementInput("sent_if")
        .setCheck(null);
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_while'] = function(block) {
  var value_cond = Blockly.JavaScript.valueToCode(block, 'cond', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_sent_if = Blockly.JavaScript.statementToCode(block, 'sent_if');
  // TODO: Assemble JavaScript into code variable.
  var code = 'while ' + value_cond + '{\n' + statements_sent_if + '\n}\n';
  return code;
};

Blockly.Blocks['sent_dowhile'] = {
  init: function() {
    this.appendStatementInput("sent_if")
        .setCheck(null)
        .appendField("do");
    this.appendValueInput("cond")
        .setCheck("Boolean")
        .appendField("while");
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_dowhile'] = function(block) {
  var statements_sent_if = Blockly.JavaScript.statementToCode(block, 'sent_if');
  var value_cond = Blockly.JavaScript.valueToCode(block, 'cond', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'do {\n' + statements_sent_if + '\n}\nwhile' + value_cond + ';\n';
  return code;
};

Blockly.Blocks['sent_for'] = {
  init: function() {
    this.appendValueInput("repeat")
        .setCheck("Number")
        .appendField("repeat");
    this.appendDummyInput()
        .appendField("times");
    this.appendStatementInput("sents")
        .setCheck("sent")
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_for'] = function(block) {
  var value_repeat = Blockly.JavaScript.valueToCode(block, 'repeat', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_sents = Blockly.JavaScript.statementToCode(block, 'sents');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for(int @i = 0; @i < ' + value_repeat + '; @i++){\n'+ statements_sents + '\n}\n';
  return code;
};

Blockly.Blocks['sent_asigna'] = {
  init: function() {
    this.appendValueInput("tipo")
        .setCheck("id");
    this.appendValueInput("valor")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_asigna'] = function(block) {
  var value_tipo = Blockly.JavaScript.valueToCode(block, 'tipo', Blockly.JavaScript.ORDER_ATOMIC);
  var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var wh = ""+value_tipo;
  wh = wh.split('(').join('').split(')').join('');
  var code =  wh + ' = ' +value_valor+ ';\n';
  return code;
};

Blockly.Blocks['sent_call'] = {
  init: function() {
    this.appendValueInput("call")
        .setCheck("id")
        .appendField("Funcion");
    this.appendDummyInput()
        .appendField("(")
        .appendField(new Blockly.FieldTextInput(""), "parametros")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_call'] = function(block) {
  var value_call = Blockly.JavaScript.valueToCode(block, 'call', Blockly.JavaScript.ORDER_ATOMIC);
  var text_parametros = block.getFieldValue('parametros');
  // TODO: Assemble JavaScript into code variable.
  var wh = ""+value_call;
  wh = wh.split('(').join('').split(')').join('');
  var code = wh + '(' + text_parametros+ ');\n';
  return code;
};

Blockly.Blocks['sent_call_pro'] = {
  init: function() {
    this.appendValueInput("call")
        .setCheck("id")
        .appendField("Call");
    this.appendDummyInput()
        .appendField("(")
        .appendField(new Blockly.FieldTextInput(""), "parametros")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_call_pro'] = function(block) {
  var value_call = Blockly.JavaScript.valueToCode(block, 'call', Blockly.JavaScript.ORDER_ATOMIC);
  var text_parametros = block.getFieldValue('parametros');
  // TODO: Assemble JavaScript into code variable.
  var wh = ""+value_call;
  wh = wh.split('(').join('').split(')').join('');
  var code ='call ' + wh + '(' + text_parametros+ ');\n';
  return code;
};

Blockly.Blocks['sent_switch'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Switch");
    this.appendDummyInput()
        .appendField("case")
        .appendField(new Blockly.FieldTextInput(""), "case1");
    this.appendStatementInput("sentcase1")
        .setCheck("sent");
    this.appendDummyInput()
        .appendField("case")
        .appendField(new Blockly.FieldTextInput(""), "case2");
    this.appendStatementInput("sentcase2")
        .setCheck("sent");
    this.appendDummyInput()
        .appendField("default");
    this.appendStatementInput("sentcase3")
        .setCheck("sent");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_switch'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var text_case1 = block.getFieldValue('case1');
  var statements_sentcase1 = Blockly.JavaScript.statementToCode(block, 'sentcase1');
  var text_case2 = block.getFieldValue('case2');
  var statements_sentcase2 = Blockly.JavaScript.statementToCode(block, 'sentcase2');
  var statements_sentcase3 = Blockly.JavaScript.statementToCode(block, 'sentcase3');
  // TODO: Assemble JavaScript into code variable.

  var fr = ""+value_name;
  fr = fr.split('(').join('').split(')').join('');
  var code = 'switch(' + fr + '){\n';
  code +=  'case '+ text_case1 + ': {\n' + statements_sentcase1 + '\n}\n';
  code +=  'case '+ text_case2 + ': {\n' + statements_sentcase2 + '\n}\n';
  code +=  'default: {\n' + statements_sentcase1 + '\n}\n';
  code += '\n}\n';

  return code;
};

Blockly.Blocks['sent_break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("break");
    this.setPreviousStatement(true, "sent");
    this.setNextStatement(true, "sent");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['sent_break'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'break;\n';
  return code;
};