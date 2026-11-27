
<template>
  <v-app>
    <MenuUser/>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="12" sm="6'">
                <h1 class="title1">Pambalatech</h1>
                <p class="par1">Aqui encontras as melhores opções de <br> produtos electrônicos de <br>segunda mão.</p>
                <v-btn class="text-none mt-8 btn1 rounded-pill" size="x-large" variant="flat" >
                  Comprar <v-icon icon="mdi mdi-arrow-right-circle" ></v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img src="../../img/logo_pambalatech_fundo_branco.png" class="
                imag"></v-img>
              </v-col>
            </v-row>
            <hr>
            <v-col>
              <v-col cols="12" sm="12">
                <v-card flat class="category mb-2">
                  <v-card-title class="subt">Categorias</v-card-title>
                  <v-btn class="rounded-pill btn2 ga-1">Mais <v-icon></v-icon icon='mdi mdi-arrow-right-circle'></v-btn>
                </v-card>
                <V-card flat>
                  <v-tabs v-model="tab" color="#c07d33" align-tabs="center" class="mt-4">
                    2
                    <v-tabs :value="1">
                      <v-btn class="text-none rounded-pill mr-2 btn3">Smartwatches</v-btn>
                    </v-tabs>
                    <v-tabs :value="1">
                      <v-btn class="text-none rounded-pill mr-2 btn3">Jogos</v-btn>
                    </v-tabs>
                    <v-tabs :value="1">
                      <v-btn class="text-none rounded-pill mr-2 btn3">Smart Home</v-btn>
                    </v-tabs>
                  </v-tabs>
                </V-card>

              </v-col>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  <Footer/>
</template>

<script setup>
import Menu from '../../components/menu/Menu.vue'
import MenuUser from '../../components/menu/MenuUser.vue'
import Footer from '../../components/footer.vue'
import {ref} from 'vue'
const tab=ref('')
</script>
<style scoped>
.title1{
  font-size: 50px;
  font-style: bold;
  color: #c07d33;
  margin-left: 100px;
  margin-top: 70px;
}
.par1{
  color:#000;
  margin-left: 100px;
  /* text-align: center; */
}
.btn1{
  margin-left: 160px;
  color:#c07d33;
  background-color:"#f3f4f6" ;
  border: 1px solid black;
  height: 40px;
}
.img{
  width: 100px !important;
  height: 100px !important;
  z-index: 1;
  margin-top: -200px   ;
}
.subt{
  color: #c07d33;
  font-weight: bold;
  margin-left: 500px;
  font-size: 24px;
}
.category{
  text-align: center;
  display: flex;
  justify-content: center;
}
.btn2{
  height: 30px;
  margin-left: 500px;
  color: #c07d33;
}
.btn3{
  background-color: #2c3e50;
  color: #fff;
}
</style>