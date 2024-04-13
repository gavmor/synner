import fs from 'fs'
import podcastXmlParser from "podcast-xml-parser";
import { extractURLs } from './src/opml';
import { latestMP3Url } from './src/podcast';
//@ts-expect-error
import ProgressBar from 'progress'

const urls = await extractURLs(fs.readFileSync(process.argv[2], "utf-8"))
const bar = new ProgressBar(':bar', { total: urls.length });

const mp3URls = await Promise.all(urls.map(async (xmlUrl)=>{
    return podcastXmlParser(new URL(xmlUrl))
        .then(({episodes}) => latestMP3Url(episodes))
        .catch(() => null)
        .finally(() => bar.tick())
    
}))

console.log(mp3URls)