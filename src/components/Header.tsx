import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					{"<Spielname>"}
				</a>
				<a href="/about" class={url == '/about' && 'active'}>
					About
				</a>
			</nav>
		</header>
	);
}
