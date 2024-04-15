import {createWriteStream} from "fs"
import { pipeline } from "stream/promises"

export function download(url: string, outputPath: string): Promise<void> {
    const stream = createWriteStream(outputPath)
    return fetch(url)
        .then(response => response.body && pipeline(response.body, stream))
        .then(() => { })
}
