
<template>
  <v-app>
    <v-app-bar color="blue" height="60" border="2px solid black">
      <v-img rounded-circle w-50 h-50 src="../../img/logo_pambalatech_fundo_branco.png"></v-img>
      <v-btn>Inicio</v-btn>
      <v-btn>Catálogo</v-btn>
      <v-btn>Productos</v-btn>
      <v-btn>Serviços</v-btn>
      <v-btn>Sobre</v-btn>
      <v-card-text>
        <v-text-field rounded h-25:loading="loading"
        append-inner-icon="mdi-magnify"
        density="compact"
        label=""
        variant="solo"
        hide-details
        single-line
        width="300"
        >
          
        </v-text-field>
      </v-card-text>
      <v-btn border-md>
        Comprar
        <v-icon icon="mdi-cart"></v-icon>
      </v-btn>
    </v-app-bar>
  </v-app>
</template>
