export interface Playlist {
	collaborative: boolean
	description: string
	external_urls: ExternalUrls
	followers: Followers
	href: string
	id: string
	images: Image[]
	name: string
	owner: Owner
	primary_color: null
	public: boolean
	snapshot_id: string
	tracks: Tracks
	type: string
	uri: string
}

export interface ExternalUrls {
	spotify: string
}

export interface Followers {
	href: null
	total: number
}

export interface Image {
	height: number
	url: string
	width: number
}

export interface Owner {
	display_name?: string
	external_urls: ExternalUrls
	href: string
	id: string
	type: OwnerType
	uri: string
	name?: string
}

export enum OwnerType {
	Artist = 'artist',
	User = 'user'
}

export interface Tracks {
	href: string
	items: Item[]
	limit: number
	next: string
	offset: number
	previous: null
	total: number
}

export interface Item {
	added_at: Date
	added_by: Owner
	is_local: boolean
	primary_color: null
	track: Track
	video_thumbnail: VideoThumbnail
}

export interface Track {
	preview_url: null | string
	available_markets: string[]
	explicit: boolean
	type: TrackType
	episode: boolean
	track: boolean
	album: Album
	artists: Owner[]
	disc_number: number
	track_number: number
	duration_ms: number
	external_ids: ExternalIDS
	external_urls: ExternalUrls
	href: string
	id: string
	name: string
	popularity: number
	uri: string
	is_local: boolean
}

export interface Album {
	available_markets: string[]
	type: AlbumTypeEnum
	album_type: AlbumTypeEnum
	href: string
	id: string
	images: Image[]
	name: string
	release_date: string
	release_date_precision: ReleaseDatePrecision
	uri: string
	artists: Owner[]
	external_urls: ExternalUrls
	total_tracks: number
}

export enum AlbumTypeEnum {
	Album = 'album',
	Compilation = 'compilation',
	Single = 'single'
}

export enum ReleaseDatePrecision {
	Day = 'day',
	Year = 'year'
}

export interface ExternalIDS {
	isrc: string
}

export enum TrackType {
	Track = 'track'
}

export interface VideoThumbnail {
	url: null
}

// Esta la hice yo
export interface TracksWithProfiles {
	id: string
	addedBy: string
	imagen: string
	title: string
	artist: string
	album: string
	dateAdded: Date
	duration: number
	nameProfile: string
	imagenProfile: null | string
}
