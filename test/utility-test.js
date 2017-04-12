import { pageTitle } from '../src/scripts/lib/utility';
import test from 'ava';

test('function siteTitle return `TOP｜familiar-note`', t => {
  const title = 'TOP｜familiar-note';
  t.is(pageTitle('TOP'), title);
});
