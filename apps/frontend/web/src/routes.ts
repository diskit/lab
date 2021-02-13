import Home from './pages/Home.svelte';
import GridArea from './pages/grid/Area.svelte';
import GridRepeat from './pages/grid/Repeat.svelte';
import Flex from './pages/Flex.svelte';
import Sticky from './pages/Sticky.svelte';

export default {
  '/': Home,
  '/flex': Flex,
  '/grid/area': GridArea,
  '/grid/repeat': GridRepeat,
  '/sticky': Sticky,
  '*': Home
}