/*
*  child component
*  emitting ustom event 'termChanged'
*/

<template>
  <div>
    <input type="text" name="search-bar" id="serach-bar" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput(e) {
      this.$emit('termChanged',e.target.value) // here we emit an event with some payload
    }
  }
};
</script>

<style>
</style>

/*
*  parent component
*  listening custom event 'termChanged'
*/

<template>
  <div>
    <!-- we are listening here for the event change -->
    <SearchBar @termChanged="onTermChanged"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
export default {
  name: "App",
  components: { SearchBar },
  methods: {
    // event change function called when 'termChanged' is triggering
    onTermChanged(searchTerm) {
      console.log(searchTerm);
    }
  }
};
</script>

<style>
</style>
