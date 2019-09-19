import Vue from 'vue';

function mdExport(options) {
  options = options || {};
  let mdData = options.mdData || '';
  let fileName = generateName(options.fileName);

  if (!mdData) return;
  const blob = new Blob([mdData], { type: 'application/octet-stream' });
  // for IE
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    // for Non-IE (chrome, firefox.)
    let a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(a.href); //释放内存
  }
}

function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

function generateName(fileName) {
  if (fileName) return fileName + '.md';
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const t1 = [year, month, day].map(formatNumber).join('');
  const t2 = [hour, minute, second].map(formatNumber).join('');

  return `${t1}_${t2}.md`;
}

Vue.prototype.$mdExport = mdExport;
