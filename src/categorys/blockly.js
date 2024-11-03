Blockly.Blocks['when_play_clicked'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when ")
        .appendField(new Blockly.FieldImage("https://static.vecteezy.com/system/resources/thumbnails/035/753/221/small_2x/video-play-button-icon-for-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-png.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField("clicked");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setColour(65);
 this.setTooltip("When the word \"play\" is clicked, many of your creations might happen.");
 this.setHelpUrl("");
  }
};
                    
                    

Blockly.Blocks['alert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Alert")
        .appendField(new Blockly.FieldTextInput("hello world"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Alerts a string.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['console_log'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("console type:")
        .appendField(new Blockly.FieldDropdown([["Normal","NORMAL"], ["Warning","WARNING"], ["Error","ERROR"]]), "TYPE")
        .appendField(new Blockly.FieldTextInput("text"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Logs a string in the console.");
 this.setHelpUrl("");
  }
};
