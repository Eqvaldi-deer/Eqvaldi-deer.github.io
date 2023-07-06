const readTxt = async () => {
  let url = "Changelog.txt";
  let response = await fetch(url);
  const txt = await response.text().then((str) => {
    return str.split('\r');
  });

  let result = txt.join('<br/>');

  let iframe = document.createElement('iframe');
  iframe.srcdoc = `<pre>${result}</pre>`;
  iframe.style.width = '100%';
  iframe.style.height = '400px';

  let ele = document.getElementById('textData');
  ele.appendChild(iframe);
}

const readTxtNews = async () => {
  let url = "NEWS.txt";
  let response = await fetch(url);
  const txt = await response.text().then((str) => {
    return str.split('\r');
  });

  let result = txt.join('<br/>');

  let iframe = document.createElement('iframe');
  iframe.srcdoc = `<pre>${result}</pre>`;
  iframe.style.width = '100%';
  iframe.style.height = '400px';

  let ele = document.getElementById('newsData');
  ele.appendChild(iframe);
}

readTxt();
readTxtNews();