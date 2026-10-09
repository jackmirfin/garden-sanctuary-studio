import type { AnchorHTMLAttributes } from 'react'

// The imported site's links are in-page anchors, not separate content routes.
export default function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} />
}