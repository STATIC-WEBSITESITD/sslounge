import { WHATSAPP_LINK } from '../constants/contact'

const WhatsAppSticky = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      className="whatsapp-sticky"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  )
}

export default WhatsAppSticky
