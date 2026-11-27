<template>
  <v-app-bar height="80" color="#2c3e50" scroll-behavior="elevate" id="inpire" class="rounded-b-xl">
    <v-img class="expl-image"  src="../../img/pambalaPreto.jpeg" ></v-img>
    <v-spacer></v-spacer>
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{props}">
        <v-btn class="text-none expl mr-8 rounded-pill" size='x-large' variant="flat" v-bind="props">Ínicio</v-btn>
      </template>
    </v-menu>
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{props}">
        <v-btn class="text-none expl mr-8 rounded-pill" size='x-large' variant="flat" v-bind="props">Catálogo</v-btn>
      </template>
    </v-menu>
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{props}">
        <v-btn class="text-none expl mr-8 rounded-pill" size='x-large' variant="flat" v-bind="props">Produtos</v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>Mais vendidos</v-list-item-title>
          <v-list-item-title>Recomendacoes</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{props}">
        <v-btn class="text-none expl mr-8 rounded-pill" size='x-large' variant="flat" v-bind="props">Serviços</v-btn>
      </template>
    </v-menu>
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{props}">
        <v-btn class="text-none expl mr-8 rounded-pill " size='x-large' variant="flat" v-bind="props">Sobre</v-btn>
      </template>
    </v-menu>
     <v-text-field class="mr-8" rounded style="border: 1px solid black;" density="compact" variant="solo" label="Procurar produtos" append-inner-icon="mdi-magnify" single-line hide-details flat></v-text-field>
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{props}">
        <v-btn class="text-none expl mr-8 btn1 " size='x-large' variant="flat" 
        v-bind="props">Entrar <v-icon-btn icon="mdi mdi-login"></v-icon-btn></v-btn>
      </template>
    </v-menu>
  </v-app-bar>
</template>

<script>
  export default{

  }
</script>
<style scope>
.expl{
  color: #c07d33;
  border: 3px solid #c07d33;

}
.btn1{
  border-radius: 15px;
}

/* .rounded-pill{
} */
</style>