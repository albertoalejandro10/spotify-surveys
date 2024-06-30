export interface Profile {
	display_name: string
	external_urls: ExternalUrls
	href: string
	id: string
	images: Image[]
	type: string
	uri: string
	followers: Followers
}

export interface ExternalUrls {
	spotify: string
}

export interface Followers {
	href: null
	total: number
}

export interface Image {
	url: string
	height: number
	width: number
}
