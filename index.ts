import fs from 'fs'
import opml from 'opml'
import {promisify} from "es6-promisify"
const parse = promisify(opml.parse)
import podcastXmlParser from "podcast-xml-parser";
import { glob } from 'glob';
import {formatTestResultsAsText, runTests, getAllTests} from "@benchristel/taste"

// const OPMLPath = process.argv[2];
// const XML = await parse(fs.readFileSync(OPMLPath))
// const urls = XML.opml.body.subs[0].subs.map(sub=>sub.xmlUrl)

// await urls.map(async (xmlUrl)=>{
//     // console.log(xmlUrl)
//     try {
        // const { podcast, episodes } = await podcastXmlParser(new URL(xmlUrl));
//         episodes[0].link
//         // Promise.all(episodes.map(async e => await podcastXmlParser(new URL(e.link))))
//         //     .then(console.log);
//     } catch (e) {
//         // console.log(e)
//     }
// })


