Blockly.Blocks['sent_select'] = {
    init: function () {
        this.appendValueInput("select")
            .setCheck("String")
            .appendField("SELECT");
        this.appendValueInput("from")
            .setCheck("String")
            .appendField("FROM");
        this.setInputsInline(false);
        this.setNextStatement(true, "Boolean");
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['sent_select'] = function (block) {
    var value_select = Blockly.JavaScript.valueToCode(block, 'select', Blockly.JavaScript.ORDER_ATOMIC);
    var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};


Blockly.Blocks['sent_where'] = {
    init: function () {
        this.appendValueInput("where")
            .setCheck("Boolean")
            .appendField("WHERE");
        this.setPreviousStatement(true, "Boolean");
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['sent_where'] = function (block) {
    var value_where = Blockly.JavaScript.valueToCode(block, 'where', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};