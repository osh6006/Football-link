interface LocalNewsItem {
  description: string;
  link: string;
  originallink: string;
  pubDate: string;
  title: string;
}

export interface LocalNewsResponse {
  display: number;
  items: LocalNewsItem[];
  lastBuildDate: string;
  start: number;
  total: number;
}
