<script lang='ts'>
import Router from 'svelte-spa-router';
import routes from './routes'

let state: {[key: string]: boolean} = {
	"grid": true,
	"sticky": true
}

const toggle = (name: string) => {
	state[name] = !state[name];
}

$: opened = (name: string): boolean => state[name];

</script>
  
<style lang="scss">

	:global(body) {
		height: 100vh;
	  
		* {
			box-sizing: border-box;
		}
	}

	:global(.annotation) {

		font-size: 8px;
		color: #ef7d7d;
		&:before {
			content: '*';
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

    .toggleable {
      user-select: none;
      ul {
        display: none;
      }
      &.open {
        ul {
          display: block;
        }
      }
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
					<li class="toggleable {opened('grid') ? "open": ""}">
						<p on:click="{() => toggle('grid')}">Grid</p>
						<ul>
							<li><a href="#/grid/area">area</a></li>
							<li><a href="#/grid/repeat">repeat</a></li>
						</ul>
					</li>
					<li class="toggleable {opened('sticky') ? "open": ""}">
						<p on:click="{() => toggle('sticky')}">Sticky</p>
						<ul>
							<li><a href="#/sticky">sticky</a></li>
							<li><a href="#/sticky/table">table</a></li>
						</ul>
					</li>
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
  