function onOpen() {
  var nome = 'Métodos';
  
  ultimaLinhaAtiva(nome);
  
}


function ultimaLinhaAtiva(nome) {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nome);
  ss.getRange('D' + (ss.getLastRow() + 1)).activate();
}