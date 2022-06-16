import { JSDOM } from 'jsdom';

export const renderDOM = (html: string) => {
  const dom = new JSDOM(html);
  const window = dom.window;
  const document = window.document;

  return {
    querySelectorAll: document.querySelectorAll.bind(document),
    querySelector: document.querySelector.bind(document),
  };
};
