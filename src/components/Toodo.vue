<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{
      'bg-grey-2': true
    }">
    <q-toolbar
      slot="header">
      <q-toolbar-title>
        "Too" do
        <div
          slot="subtitle">
          <!-- Running on Quasar v{{$q.version}} -->
          a.k.a. trello
        </div>
      </q-toolbar-title>
    </q-toolbar>

    <div
      class="flex row full-width drag-wrapper no-wrap">
      <template
        v-for="(list, index) in lists">
        <div
          :key="index"
          class="flex column list-wrapper">
          <p>
            {{ list.title }}
          </p>
          <draggable
            @add="added"
            :list="list.data"
            class="drag-area"
            :options="{
              forceFallback: true,
              fallbackTolerance: 0,
              group: {
                name: 'todo'
              }
            }">
            <!-- :options="{
              forceFallback: true,
              fallbackTolerance: 0,
              group:{
                name:'people',
                put: index !== 0
              }
            }"> -->
            <transition-group
              name="list-complete">
              <div
                v-for="(element, index) in list.data"
                :key="index"
                class="list-complete-item">
                {{element.name}}
              </div>
            </transition-group>
          </draggable>
        </div>
      </template>
    </div>
  </q-layout>
</template>

<script>
  import {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSide,
    QItemMain
  } from 'quasar'
  import Draggable from 'vuedraggable'

  export default {
    name: 'Toodo',
    data () {
      return {
        lists: [
          {
            validation: true,
            title: 'Backlog',
            data: [
              { name: 'Readaptar a navegação do aplicativo', valid: false },
              { name: 'Fazer barra de sugestões de atrações', valid: false },
              { name: 'Melhorar UI de roteiros', valid: false },
              { name: 'Usar Prerender na aplicação', valid: false },
              { name: 'Criar tela de resumo de roteiro', valid: false },
              { name: 'Botão call2action no blog', valid: false }
            ]
          },
          {
            validation: true,
            title: 'Doing',
            data: [
              { name: 'Adicionar ServiceWorker ', valid: false },
              { name: 'Redesenhar a Home', valid: false },
              { name: 'Melhorar SEO', valid: false },
              { name: 'Corrigir bug no login. Callback do Facebook', valid: false }
            ]
          },
          {
            validation: true,
            title: 'Done',
            data: [
            ]
          }
        ]
      }
    },
    components: {
      Draggable,
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QItem,
      QItemSide,
      QItemMain
    },
    methods: {
      added (event) {
        console.log(event)
      }
    }
  }
</script>

<style>
  .list-wrapper {
    background: rgb(234, 234, 234);
    margin: 0 4px;
    padding: 8px;
  }

  .list-wrapper p {
    padding: 0 1px;
    color: rgb(72, 63, 63);
    font-family: Roboto;
    font-weight: 400;
    display:inline-block;
    width: 250px;
    white-space: nowrap;
    overflow:hidden !important;
    text-overflow: ellipsis;
  }

  .list-complete-item {
    padding: 8px;
    background: rgba(255, 255, 255, 1);
    margin-top: 10px;
    height: 80px;
    box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 0px 0px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
    border-radius: 3px;
    transition: all .36s;
  }

  .list-complete-enter,
  .list-complete-leave-active {
    opacity: 0;
  }

  .drag-wrapper {
    overflow-x: scroll;
    padding: 8px 0;
    flex-wrap: unset;
  }

  .drag-area {
    height: calc(100vh - 50px);
    max-height: calc(100vh - 125px);
    width: 250px;
    overflow-y: scroll;
  }

  .drag-area
  .list-complete-item:first-child {
    margin: 0;
  }

  .drag-area span {
    display: block;
    height: 100%;
  }

  .sortable-drag {
    -webkit-transition: -webkit-transform .1s ease-out !important;
    -moz-transition: -moz-transform .1s ease-out !important;
    -o-transition: -o-transform .1s ease-out !important;
    transition: transform .1s ease-out !important;
  }
</style>
