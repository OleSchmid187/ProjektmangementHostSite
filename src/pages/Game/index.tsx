import './style.css';

export function Home() {
	return (
		<div class="home">
			<h1>
				{"<Spielname>"}
			</h1>
			<div className="mainGameContainer">
				<iframe className="mainGameFrame" src="https://games.cdn.famobi.com/html5games/e/endless-truck/v540/?fg_domain=play.famobi.com&fg_aid=A-T7SZ4&fg_uid=a5ff2552-bbd9-4aff-9bcc-ec056478318d&fg_pid=6cc0e50b-a8b3-450d-a1bc-dbb3d9a81379&fg_beat=416&original_ref=http%3A%2F%2Fwebglgames.com%2F" frameborder="0" scrolling="no" width="900" height="635" allowFullScreen></iframe>
			</div>
		</div>
	);
}