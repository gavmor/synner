import { equals, expect, test } from "@benchristel/taste"
import { Episode, latestMP3Url } from "./podcast"

test("latestMP3Url", {
    "when no episodes, returns null"(){
        const episodes: Episode[] = []
        expect(latestMP3Url(episodes), equals, null)
    },

    "given a single episode, returns its mp3 url"() {
        const episodes: Episode[] = [
            {
                pubDate: "Tue, 09 Apr 2024 05:39:47 -0000",
                enclosure: {
                    url: "foo"
                }
            }
        ]

        expect(latestMP3Url(episodes), equals, "foo")
    },

    "with no enclosure anywhere, returns null"(){
        const episodes = [
            {
                pubDate: "Tue, 09 Apr 2000 05:39:47 -0000",
                enclosure: null
            },
        ]
        expect(latestMP3Url(episodes), equals, null)
    },


    "given two episodes, with latest enclosure missing, returns penultimate enclosure URL"(){
        const episodes = [
            {
                pubDate: "Tue, 10 Apr 2000 05:39:47 -0000",
                enclosure: null
            },
            {
                pubDate: "Tue, 09 Apr 2000 05:39:47 -0000",
                enclosure: {
                    url: "older"
                }
            },
        ]
        expect(latestMP3Url(episodes), equals, "older")
    },

    "given two episodes, returns the URL for the most recent one"() {
        const episodes: Episode[] = [
            {
                pubDate: "Tue, 09 Apr 2000 05:39:47 -0000",
                enclosure: {
                    url: "older"
                }
            },
            {
                pubDate: "Tue, 10 Apr 2024 05:39:47 -0000",
                enclosure: {
                    url: "newer"
                }
            }
        ]

        expect(latestMP3Url(episodes), equals, "newer")
    }
})