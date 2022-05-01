import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AuthState from 'context/auth/AuthState';
import Maintenance from 'components/Maintenance';

function MyApp({ Component, pageProps }: AppProps) {
	if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE) {
		return <Maintenance />;
	}
	return (
		<AuthState>
			<Component {...pageProps} />
		</AuthState>
	);
}

export default MyApp;
