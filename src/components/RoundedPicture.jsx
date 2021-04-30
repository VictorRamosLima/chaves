import '../styles/components/RoundedPicture.css'

export const RoundedPicture = ({path}) => (
  <div className="contact-avatar" style={{ backgroundImage: `url(${path})` }} />
)
