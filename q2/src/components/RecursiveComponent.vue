<template>

  <ul class="character-list">

    <template v-for="character of characters" :key="character.name">

      <li :class="{ selected: isSelected(character) }" @click="select(character, level)">
        <div class="name">
          {{ character.name }}
        </div>

        <template v-if="isSelected(character)">
          <teleport to="#container">
            <recursive-component
              v-if="character.children"
              :characters="character.children"
              :selected="selected"
              :level="level + 1"
              @selected="select"
            />
          </teleport>
        </template>
      </li>

    </template>

  </ul>

</template>

<script setup>
const props = defineProps({
  characters: {
    type: Array,
    required: true
  },
  selected: {
    type: Array,
    required: false,
    default: () => [{
      name: 'Thranduil',
      children: [
        { name: 'Legolas' }
      ]
    }]
  },
  level: {
    type: Number,
    required: false,
    default: 0
  }
});
const emit = defineEmits([ 'selected' ]);
const select = (route, level) => {
  emit('selected', route, level);
};
const isSelected = (character) => {
  if (!props.selected || !props.selected.length || !props.selected.some(char => char.name === character.name)) {
    return false;
  }
  return props.selected[props.level]?.name === character.name;
};
</script>
<style scoped>
.character-list {
  border-right: 1px solid #41b883;
  min-height: 25vh;
  width: 200px;
  margin: 0;
  padding: 0;
  position: relative;
}
.character-list li {
  display: flex;
  padding: 0.5em 1em;
}
.character-list li:hover {
  cursor: pointer;
}
.character-list li:not(.selected):hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.character-list li.selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
