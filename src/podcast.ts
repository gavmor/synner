export type Episode = {
    pubDate: string;
    enclosure: null | {
        url: string;
    };
};

export function latestMP3Url(episodes: Episode[]): string | null {
    return episodes.filter(hasEnclosure).sort(newer)[0]?.enclosure?.url || null;
}

const newer = (a: Episode, b: Episode): number => +new Date(b.pubDate) - +new Date(a.pubDate);
const hasEnclosure = (episode: Episode): boolean => !!episode.enclosure

