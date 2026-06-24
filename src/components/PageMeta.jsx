import { useEffect } from 'react'

function setMetaTag(name, content) {
  if (!content) return

  let element = document.querySelector(`meta[name="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function PageMeta({ title, description, keywords }) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    setMetaTag('description', description)
    setMetaTag('keywords', keywords)
  }, [title, description, keywords])

  return null
}

export default PageMeta
