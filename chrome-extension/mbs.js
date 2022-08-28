window.onload = marketoBrowserSupport;
function marketoBrowserSupport() {
  document.querySelectorAll('meta[mktoName]').forEach((e) => {
    if (e.getAttribute('class') == 'mktoBoolean') {
      document.documentElement.innerHTML = document.documentElement.innerHTML
        .split('${' + e.id + '}')
        .join(`${e.getAttribute(`${e.getAttribute('default')}_value`)}`);
    } else if (e.getAttribute('units') != null) {
      document.documentElement.innerHTML = document.documentElement.innerHTML
        .split('${' + e.id + '}')
        .join(`${e.getAttribute('default')}${e.getAttribute('units')}`);
    } else {
      document.documentElement.innerHTML = document.documentElement.innerHTML
        .split('${' + e.id + '}')
        .join(`${e.getAttribute('default')}`);
    }
  });
}
