<script lang='ts'>
import Router from 'svelte-spa-router';
import routes from './routes'
</script>
  
<style lang="scss">

	:global(body) {
		height: 100vh;
	  
		* {
			box-sizing: border-box;
		}
	}

	.App {
		height: 100%;
	  display: flex;
		align-items: stretch;

		.menu {
			flex-basis: 160px;
			background: #f3f3f3;
			padding: 16px;

			a { 
				color: #2297c5;

				&:visited {
					color: #5a93aa;
				}
			}
		}

		.content {
			flex-grow: 1;
			padding: 0 16px;
		}
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;

		li {
			margin-bottom: 16px;

			&:last-child {
				margin-bottom: 0;
			}
		}

		ul {
			padding-left: 16px;
			list-style: circle;

			li {
				margin-bottom: 8px;
			}
		}

		p {
			font-size: 10px;
			color: #666;
			margin-bottom: 8px;
		}
	}
</style>
  
<div class="App">
	<div class="menu">
		<ul>
			<li>
				<p>styles</p>
				<ul>
					<li><a href="#/flex">flex</a></li>
					<li><a href="#/grid">grid</a></li>
					<li><a href="#/sticky">sticky</a></li>
				</ul>
			</li>
			<li>
				<p>scripts</p>
				<ul>
					<li><a href="">-</a></li>
				</ul>
			</li>
		</ul>
	</div>
	<div class="content">
		<Router {routes} />
	</div>
</div>
  