import { JSDOM } from 'jsdom';
import fs from 'fs/promises';
import { buildDataSource } from '../dataSource';

export const renderDOM = (html: string) => {
  const dom = new JSDOM(html);
  const window = dom.window;
  const document = window.document;

  return {
    querySelectorAll: document.querySelectorAll.bind(document),
    querySelector: document.querySelector.bind(document),
  };
};

export const resetTestDB = async () => {
  const dbPath = '/tmp/test.sqlite';
  await fs.rm(dbPath);
  buildDataSource(dbPath);
};
