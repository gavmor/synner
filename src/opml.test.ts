import {test, expect, equals} from "@benchristel/taste"
import {extractURLs} from "./opml.ts"

const OPMLFixture = `<?xml version="1.0" encoding="utf-8" standalone="no"?>
<opml version="1.0">
    <head>
        <title>Pocket Casts Feeds</title>
    </head>

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

test("Sinner given OPML XML", {
    "extracts URLs"(){
        expect(extractURLs(OPMLFixture), equals, [
            "https://feeds.megaphone.fm/bloodandsyrup",
            "https://primalblueprint.libsyn.com/rss"
        ]) 
    }
})
