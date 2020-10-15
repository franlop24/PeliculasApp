export interface CarteleraResponse {
    page:          number;
    total_results: number;
    total_pages:   number;
    results:       Movie[];
}

export interface Movie {
    popularity:        number;
    id:                number;
    video:             boolean;
    vote_count:        number;
    vote_average:      number;
    title:             string;
    release_date:      Date;
    original_language: OriginalLanguage;
    original_title:    string;
    genre_ids:         number[];
    backdrop_path:     string;
    adult:             boolean;
    overview:          string;
    poster_path:       string;
}

export enum OriginalLanguage {
    CA = "ca",
    En = "en",
    Es = "es",
    Ko = "ko",
}
