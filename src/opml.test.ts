import {test, expect, equals} from "@benchristel/taste"
import {extractURLs} from "./opml.ts"

test("Sinner given OPML XML", {
    "extracts URLs"(){
        expect(extractURLs(foo), equals, []) 
    }
})
