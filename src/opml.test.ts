import {test, expect, equals} from "@benchristel/taste"
import {extractURLs} from "./opml.ts"

const OPMLFixture = `<?xml version="1.0" encoding="utf-8" standalone="no"?>
<opml version="1.0">
    <body>
        <outline text="feeds">
            <outline
                xmlUrl="https://feeds.megaphone.fm/bloodandsyrup"
                type="rss"
                text="Blood &amp; Syrup: A Vampire the Masquerade Podcast"
            />


            <outline
                xmlUrl="https://primalblueprint.libsyn.com/rss"
                type="rss"
                text="The Primal Kitchen Podcast"
            />
        </outline>
    </body>
</opml>
`

test("extractURLs, given OPML XML", {
    async "extracts URLs"(){
        expect(await extractURLs(OPMLFixture), equals, [
            "https://feeds.megaphone.fm/bloodandsyrup",
            "https://primalblueprint.libsyn.com/rss"
        ]) 
    },

    async "with no body"(){
        expect(await extractURLs(`<?xml version="1.0" encoding="utf-8" standalone="no"?>
        <opml version="1.0">
        </opml>
        `), equals, [ ])
    },

    async "with no feeds"(){
        expect(await extractURLs(`<?xml version="1.0" encoding="utf-8" standalone="no"?>
        <opml version="1.0">       
            <body>
                <outline text="feeds"></outline>
            </body>
        </opml>
        `), equals, [ ])
    },

    async "with empty body"(){
        expect(await extractURLs(`<?xml version="1.0" encoding="utf-8" standalone="no"?>
        <opml version="1.0">       
            <body></body>
        </opml>
        `), equals, [ ])
    },

    async "with empty sting"(){
        expect(await extractURLs(``), equals, [ ]) 
    },

    async "that is actually arbitrary XML"(){
        expect(await extractURLs(`<foo><bar/></foo>`), equals, [ ]) 
    }
})
