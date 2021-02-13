import Home from './pages/Home.svelte';
import GridArea from './pages/GridArea.svelte';
import GridRepeat from './pages/GridRepeat.svelte';
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