// local
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

// global

interface Source {
  id: string;
  name: string;
}
interface GlobalNewsItem {
  source: Source;
  author: "BBC News";
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface GlobalNewsResponse {
  status: string;
  totalResults: number;
  articles: GlobalNewsItem[];
}
