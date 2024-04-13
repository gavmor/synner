import fs from 'fs'
import podcastXmlParser from "podcast-xml-parser";
import { extractURLs } from './src/opml';

const OPMLPath = process.argv[2];
const urls = await extractURLs(fs.readFileSync(OPMLPath, "utf-8"))


await urls.map(async (xmlUrl)=>{
    // console.log(xmlUrl)
    try {
        const { podcast, episodes } = await podcastXmlParser(new URL(xmlUrl));
        episodes[0].link
        // Promise.all(episodes.map(async e => await podcastXmlParser(new URL(e.link))))
        //     .then(console.log);
    } catch (e) {
        // console.log(e)
    }
})


