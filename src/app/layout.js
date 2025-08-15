import '../lib/fontawesome';

export const metadata = {
  title: 'Anirudh UK',
  description: 'Anirudh UK: My profile and my jounery though the tech job and passion towards trekking, wildlife and photography.',
}
 

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
  <head>
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#000000" />
    <meta 
      name="keywords" 
      content="Anirudh uk, Anirudh, profile, wildlife, trekking, anirudh github, anirudh profile, anirudh linkedin"
    />
    <meta name="author" content="Anirudh UK"></meta>
    <link rel="apple-touch-icon" href="./logo192.png" />
    <link rel="manifest" href="./manifest.json" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
        {children}
    </div>
  </body>
</html>
  )
}