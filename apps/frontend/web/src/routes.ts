import Home from './pages/Home.svelte';
import GridArea from './pages/grid/Area.svelte';
import GridRepeat from './pages/grid/Repeat.svelte';
import Flex from './pages/Flex.svelte';
import Sticky from './pages/sticky/Sticky.svelte';
import StickyTable from './pages/sticky/Table.svelte';

export default {
  '/': Home,
  '/flex': Flex,
  '/grid/area': GridArea,
  '/grid/repeat': GridRepeat,
  '/sticky': Sticky,
  '/sticky/table': StickyTable,
  '*': Home
}