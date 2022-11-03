export interface Info {
  total_count: number,
  incomplete_results:boolean,
  items: [
    {
  id: number | string,
  full_name: string,
  description: string,
  topics: string[],
  watchers: number,
  language: string,
  updated_at: string,
  issue_events_url: string
    }
  ]
}
