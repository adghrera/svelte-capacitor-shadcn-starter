<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div style="padding: 20px; margin: 0;">
	{@render children()}
</div>
