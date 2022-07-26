---
title: vue3父子组件双向绑定
description: 自定义组件、vue3父子组件双向绑定
date: 2022-08-07
category: 前端
tags:
  - vue
---

# vue3父子组件双向绑定

## 父组件

```vue
<template>
  <div>
    <MyInput v-model:input-value="inputValue" />
    {{inputValue}}
  </div>
</template>

<script setup lang="ts">
import MyInput from "./MyInput.vue";
import {ref} from "vue";

const inputValue = ref(null)
</script>

<style scoped>

</style>
```

## 子组件

```vue
<template>
  <div class="m10">
    <el-input v-model="modelValue"></el-input>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: 'MyInput',
  props: {
    inputValue: String
  },
  setup(props, context) {
    const modelValue = computed({
      get: () => props.inputValue || '',
      set: val => {
        context.emit('update:inputValue', val)
      }
    })

    return {
      modelValue
    }
  }
})
</script>

<style scoped>

</style>
```

