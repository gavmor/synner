import fs from 'fs'
import opml from 'opml'
import {promisify} from "es6-promisify"
const parse = promisify(opml.parse)
import podcastXmlParser from "podcast-xml-parser";

const text = await parse(fs.readFileSync(process.argv[2]))
const urls = text.opml.body.subs[0].subs.map(sub=>sub.xmlUrl)

await urls.map(async (xmlUrl)=>{
    console.log(xmlUrl)
    try {
        const { podcast } = await podcastXmlParser(new URL(xmlUrl));
        console.log(podcast.title); // "Conan O’Brien Needs A Friend"
    } catch (e) {
        console.log(e)
    }
})


