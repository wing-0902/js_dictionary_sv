<script>
  const { data } = $props();
</script>

<h1>{data.name}</h1>

<p>License: {data.info.licenses}</p>
<p>Repo: {data.info.repository}</p>
<p>Publisher: {data.info.publisher}</p>
