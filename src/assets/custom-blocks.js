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