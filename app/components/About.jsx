var React = require('react');

var About = () => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is a weather application built on React.
			I've built this for the Complete React Web App Developer Course.</p>
			<p>
				Here are some of the tools I've used:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a>
					- This was the JS frameworked used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a>
					- API used to get weather information.
				</li>
			</ul>
		</div>
	);
};

module.exports = About;