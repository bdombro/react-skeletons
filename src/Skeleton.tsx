/* eslint-disable */
import React from 'react'
import {Box, keyframes} from '@chakra-ui/react'

export default Skeleton

/**
 * A Chakra BOX with a loading state that shows a skeleton animation.
 */
export function Skeleton({
	children,
	isLoading,
	...boxProps
}: React.ComponentProps<typeof Box> & {
	isLoading: boolean
}) {
	return (
		<Box
			animation={isLoading ? `${loadingKeyframe} 2s infinite` : ''}
			borderRadius="6px"
			color={isLoading ? '#00000000' : 'none'}
			display="inline-block"
			sx={{
				'> *': {
					visibility: isLoading ? 'hidden' : 'shown',
				},
			}}
			{...boxProps}>
			{children}
		</Box>
	)
}

const loadingKeyframe = keyframes`
  0% {
    background: rgba(0, 0, 0, 0.1);
  }
  25% {
    background: rgba(0, 0, 0, 0.2);
  }
  100% {
    background: rgba(0, 0, 0, 0.1);
  }
`
