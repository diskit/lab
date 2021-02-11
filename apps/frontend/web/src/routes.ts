import Home from './pages/Home.svelte';
import Grid from './pages/Grid.svelte';
import Flex from './pages/Flex.svelte';
import Sticky from './pages/Sticky.svelte';

export default {
  '/': Home,
  '/flex': Flex,
  '/grid': Grid,
  '/sticky': Sticky,
  '*': Home
}