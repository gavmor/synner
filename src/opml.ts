//@ts-expect-error
import { parse } from 'opml'
import { promisify } from 'util'

export async function extractURLs(OPML: string): Promise<string[]> {
    const document = await promisify(parse)(OPML).catch(() => null)
    return document?.opml.body.subs?.[0].subs?.map(({ xmlUrl }: { xmlUrl: string }) => xmlUrl) || []
}