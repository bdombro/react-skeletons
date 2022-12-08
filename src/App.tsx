/* eslint-disable */
import React from 'react'
import {Box, ChakraProvider, Heading, Stack, Text, useInterval} from '@chakra-ui/react'
import Skeleton from './Skeleton'

export default function App() {
	const [isLoading, setIsLoading] = React.useState(true)
	useInterval(() => {
		setIsLoading(!isLoading)
	}, 3000)

	return (
		<ChakraProvider>
			<Box p={3}>
				<Heading size="xl">Loading Skeleton Demo</Heading>
				<Stack spacing={3}>
					<Text>State: {isLoading ? 'Loading' : 'Loaded'} for 3s...</Text>
					<Text>
						<Skeleton as="span" isLoading={isLoading}>
							This text is now loaded.
						</Skeleton>
					</Text>
					<Skeleton isLoading={isLoading} width={300}>
						<img src="//source.unsplash.com/random/300x300" />
					</Skeleton>
				</Stack>
			</Box>
		</ChakraProvider>
	)
}
