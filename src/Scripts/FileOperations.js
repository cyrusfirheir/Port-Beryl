
window.exportFileToDisk = function(filename, content, extension=".txt") {
  var blob = new Blob([content], {
   type: "text/plain;charset=utf-8"
  });
  saveAs(blob, filename+extension);
}

window.dateTimeString = function() {
  var today = new Date();
  var date = today.getFullYear() +""+ (today.getMonth()+1) +""+ today.getDate();
  var time = today.getHours() +""+ today.getMinutes() +""+ today.getSeconds();
  return "-" + date + time;
}
