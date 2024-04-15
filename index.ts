import fs from 'fs'
import podcastXmlParser from "podcast-xml-parser";
import { extractURLs } from './src/opml';
import { latestMP3Url } from './src/podcast';
//@ts-expect-error
import ProgressBar from 'progress'
import { download } from './src/download';
import slugify from 'slugify';



const urls = await extractURLs(fs.readFileSync(process.argv[2], "utf-8"))
const bar = new ProgressBar(':bar', { total: urls.length });

urls.forEach((xmlUrl) => {
    return podcastXmlParser(new URL(xmlUrl))
        .then(({ episodes, podcast: {title} }) => ({mp3url: latestMP3Url(episodes), title}))
        .then(downloadMp3)
        .catch(() => null)
        .finally(() => bar.tick())

})

function downloadMp3({mp3url, title}: {mp3url: string | null, title: string}): Promise<void> {
    if (mp3url) {
        return download(mp3url, filename(title))
    } else {
        return Promise.resolve()
    }
}

function filename(title: string): string {
    return "/tmp/sinner/" + slugify(Date.now().toString() + title) + ".mp3";
}