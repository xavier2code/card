interface CardProps {
  title: string
  description: string
  onClick?: () => void
  href?: string
  variant?: 'default' | 'highlight'
}

export default function Card({ title, description, onClick, href, variant = 'default' }: CardProps) {
  const baseClasses = 'card'
  const variantClasses = variant === 'highlight' ? 'card-highlight' : ''

  const handleCardClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const commonContent = (
    <>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variantClasses}`} onClick={handleCardClick}>
        {commonContent}
      </a>
    )
  }

  return (
    <div className={`${baseClasses} ${variantClasses}`} onClick={handleCardClick} role="button" tabIndex={0}>
      {commonContent}
    </div>
  )
}