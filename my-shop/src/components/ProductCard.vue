<template>
    <div class="product-card" >
       <img :src="image" :alt="name" class="product-image" >
       <h2>{{ name }}</h2>
       <p>{{ description }}</p>
       <p class="price" >{{ price }}</p>
       <button class="buy-button" >Купити</button>
    </div>
</template>

<script>
       export default {
          props: {
             name: String,
             description: String,
             price: Number,
             image: String
          }
       };
</script>

<style scoped > 
    .product-card {
        max-width: 300px;
        border: 1px solid #e0e0e0 ;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) ;
        text-align: center;
        

    }
    .product-card:hover {
        border-color: #007bff ;
    }
    .product-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .price {
        font-size: 18px;
        font-weight: bold;
    }
    .buy-button {
        color: #fff;
        font-weight: bold;
        border: none;
        border-radius: 6px;
        padding: 10px 20px;
        cursor: pointer;
        margin-bottom: 20px;
        background: linear-gradient(90deg , #00AEFF , #57C785 , #5396ED);
        background-size: 200% 100%;
        animation: shine 3s infinite;


    }
    
 @keyframes shine {
    to { background-position: 200% 0; }
}
</style>