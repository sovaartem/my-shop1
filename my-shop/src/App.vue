<template>
  <div class="app" >
    <ProductCard  
    name="Українська вишинка"
    description="Стильна вишиванка з традиційними орнаментами"
    price="1500"
    image="https://upload.wikimedia.org/wikipedia/commons/7/75/Folklore_of_Sanok%2C_2010_1.JPG"  
    />
    <ProductCard1
    name="Футболка Chrome Hearts"
    description="Стильна, брендова футболка "
    price="700"
    image="https://content1.rozetka.com.ua/goods/images/big/588729815.jpg"
    />
  </div>
</template>

<script>
  import ProductCard from './components/ProductCard.vue';
  import ProductCard1 from './components/ProductCard1.vue';

  export default {
    components: {
      ProductCard,
      ProductCard1
    }
  }
</script>
