<template>
  <div>
    <h2>Пошук товару</h2>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Введіть назву товару"
    />
    <p>{{ searchQuery }}</p>
    <ProductList
    :products="filtersProducts"  />
  </div>
</template>

<script>
import ProductList from "../components/ProductList";

export default {
  data() {
    return {
      searchQuery: "",
      products: [
        {
          name: "Samsung S23",
          price: 35000,
          image:
            "https://img.jabko.ua/image/cache/catalog/products/2025/06/091721/4O2A0570-1397x1397.JPG.webp",
        },
        {
          name: "Macbook air M2",
          price: 30000,
          image:
            "https://fopi.ua/images/Y2F0YWxvZy9Qcm9kdWN0L0FwcGxlINGC0LXRhdC90ZbQutCwL01hYy9NYWNCb29rIEFpci9NMi9BaXIgMTUgMjAyMy9TaWx2ZXIvbWJhMTUtc2lsdmVyLWdhbGxlcnkxLTIwMjMwNi5qcGVnOjQ1MDo0NTA.webp",
        },
        {
          name: "Samsung 4K Qualed",
          price: 30000,
          image:
            "https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/import/6004451720290740.webp",
        },
        {
          name: "Iphone 15",
          price: 20000,
          image:
            "https://mcstore.com.ua/image/catalog/xMTM93-1696870471.jpg.pagespeed.ic.6DD4GnJEsF.jpg",
        },
        {
          name: "Ipad Pro",
          price: 18000,
          image:
            "https://apple-mania.com.ua/media/catalog/product/cache/e026f651b05122a6916299262b60c47d/i/p/ipad-pro-12-select-wifi-spacegray-202104_geo_ru_1_1_1_1_1_1_1_1.webp",
        },
        {
          name: "Keyboards Aula F75",
          price: 2000,
          image:
            "https://images.prom.ua/5668406984_w640_h640_igrovaya-klaviatura-aula.jpg",
        },
      ],
    };
  },
  computed: {
    filtersProducts: function() {
        return this.products.filter(function(product) {
            return product.name.toLowerCase().includes(this.searchQuery.toLowerCase());

        }.bind(this))
    }
  },
  components: {
    ProductList,
  },
};
</script>
