<template>
  <v-app-bar flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon>
      </v-app-bar-nav-icon>
    </template>
    <v-container style=" background-color: #999; width: 50px; height: 50px; border-radius: 100%;" >
      <v-img src="../../img/logo_pambalatech_fundo_branco.png"></v-img>
    </v-container>
    <v-spacer></v-spacer>
    <v-text-field style="border: 1px solid black;" density="compact" variant="solo" label="Procurar produtos" append-inner-icon="mdi-magnify" single-line hide-details flat></v-text-field>
    <v-spacer></v-spacer>
    <v-btn prepend-icon="mdi mdi-bell">
      <template v-slot:prepend>
        <v-icon color="blue"></v-icon>
      </template>
      Notificações
    </v-btn>
    <v-btn prepend-icon="mdi mdi-logout"> Sair</v-btn>
  </v-app-bar>
</template>

<script>
export default{

}
</script>