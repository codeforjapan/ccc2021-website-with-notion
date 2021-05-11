export const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

export const pageview = (path: string) => {
  if (!GOOGLE_ANALYTICS_ID) return

  window.gtag('config', GOOGLE_ANALYTICS_ID, {
    page_path: path
  })
}

declare global {
  interface Window {
    gtag(
      type: 'config',
      googleAnalyticsId: string,
      { page_path }: { page_path: string }
    ): void
  }
}
