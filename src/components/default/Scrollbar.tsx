import * as React from 'react'
import styled from '~/utils/emotion'

const Statusbar: React.FC = () => {
  const scrollbar = React.useRef(null)
  React.useEffect(() => {
    const main = document.getElementById('main')
    const scrollMax = main.scrollHeight - main.clientHeight
    main.addEventListener('scroll', () => {
      scrollbar.current.style.transform = `scaleX(${main.scrollTop /
        scrollMax})`
    })
  })
  return (
    <>
      <ScrollbarBackground />
      <Scrollbar ref={scrollbar} />
    </>
  )
}

const ScrollbarBackground = styled.div`
  position: absolute;
  width: ${(props): number => props.theme.sizes.phone.scrollbar}px;
  height: 2px;
  background: ${(props): string => props.theme.colors.light.neutral};
  transform: none;
`
const Scrollbar = styled(ScrollbarBackground)`
  background: ${(props): string => props.theme.colors.light.logo};
  transform: scaleX(0);
  transform-origin: left center;
`

export default Statusbar
