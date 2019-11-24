import * as React from 'react'
import animations from '~/utils/animations'
import { IsPending } from '~/store/global/isPending'
import { Started } from '~/store/default/Spinner/started'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'

type UseIn = (params: {
  isPending: IsPending
  started: Started
  root: React.MutableRefObject<SVGSVGElement>
}) => void

const useIn: UseIn = params => {
  const { isPending, started, root } = params
  const duration = 1
  useEffectAsync({
    effect: async () => {
      if (isPending.state) {
        root.current.style.display = 'block'
        animations.opacity(root.current, 1, duration, 'InOut')
        await functions.delay(duration)
        started.dispatch({ type: 'on' })
      }
    },
    deps: [isPending.state]
  })
}

export default useIn
