import CollapseElement from './collapse/collapse';
import WriteUsElement from './write-us/write-us';
import LikerElement from './liker/liker';

window.onload = async () => {
  const container = document.getElementById('container');

  const collapse = new CollapseElement('You can define custom cursors. Note that not all browsers support svg files for cursors, and .cur files are supported across the board, so it can be a good idea to provide a .cur fallback if you want to use an svg cursor. You can also provide a fallback to one of the non-custom cursors.');
  collapse.bindToDOM(container);

  const writeUs = new WriteUsElement();
  writeUs.bindToDOM(document.body);

  const liker = new LikerElement();
  liker.bindToDOM(container);
};
