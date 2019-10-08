import { TweenMax, Expo } from 'gsap'
import functions from '~/utils/functions'

const borderOutDown = async (border: HTMLDivElement): Promise<void> => {
  await functions.raf()
  TweenMax.to(border, 2, {
    y: '100%',
    ease: Expo.easeOut
  })
}

export default borderOutDown
