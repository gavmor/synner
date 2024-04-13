//@ts-expect-error
import opml from 'opml'
import {promisify} from "es6-promisify"
const parse = promisify(opml.parse)

export async function extractURLs(OPML: string): Promise<string[]>{
    const document = await parse(OPML).catch(() => null)
    return document?.opml.body.subs?.[0].subs?.map(({xmlUrl}:{xmlUrl:string})=>xmlUrl) || []
}