import { glob } from 'glob';
import {formatTestResultsAsText, runTests, getAllTests} from "@benchristel/taste"

glob(`${__dirname}/src/**/*.test.ts`)
  .then((paths) => Promise.all(paths.map((path) => import(path))))
  .then(() => runTests(getAllTests()))
  .then(formatTestResultsAsText)
  .then(console.log);

