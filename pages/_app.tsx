import {ApolloProvider} from '@apollo/client'
import {useApollo} from '../apollo/client'
import {NextComponentType} from 'next'
import 'tailwindcss/tailwind.css'

interface AppProps {
  Component: NextComponentType
  pageProps: any
}

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
