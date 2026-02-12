<template>
  <div class="admin">
    <h1>Адмін-панель</h1>

    
    <section>
      <h2>Профіль адміністратора</h2>
      <input v-model="admin.name" placeholder="Ім'я" />
      <input v-model="admin.email" placeholder="Email" />
      <p>Ім'я: {{ admin.name }}</p>
      <p>Email: {{ admin.email }}</p>
    </section>

    
    <section>
      <h2>Відгуки</h2>
      <select v-model="filter">
        <option value="all">Всі</option>
        <option value="5">5 зірок</option>
        <option value="4">4 зірки</option>
      </select>

      <ul>
        <li v-for="r in filteredReviews" :key="r.id">
          {{ r.text }} — {{ r.rating }}⭐
          <button @click="deleteReview(r.id)">Видалити</button>
        </li>
      </ul>
    </section>

    
    <section>
      <h2>Логотип сайту</h2>
      <input type="file" @change="uploadLogo" />
      <img :src="logo" width="120" />
    </section>

    
    <section>
      <h2>Користувачі</h2>
      <ul>
        <li v-for="u in users" :key="u.id">
          {{ u.name }} ({{ u.role }})
          <button @click="u.role='admin'">Зробити адміном</button>
        </li>
      </ul>
    </section>

    
    <section>
      <h2>Налаштування</h2>
      <input v-model="settings.siteName" placeholder="Назва сайту" />
      <p>Назва: {{ settings.siteName }}</p>
    </section>

  
    <section>
      <h2>Статистика</h2>
      <p>Користувачів: {{ users.length }}</p>
      <p>Відгуків: {{ reviews.length }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      admin: {
        name: "Admin",
        email: "admin@gmail.com"
      },
      reviews: [
        { id: 1, text: "Класний сайт", rating: 5 },
        { id: 2, text: "Нормально", rating: 4 }
      ],
      filter: "all",

      
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",

      users: [
        { id: 1, name: "Іван", role: "user" },
        { id: 2, name: "Оля", role: "user" }
      ],
      settings: {
        siteName: "Мій сайт"
      }
    }
  },
  computed: {
    filteredReviews() {
      if (this.filter === "all") return this.reviews
      return this.reviews.filter(r => r.rating == this.filter)
    }
  },
  methods: {
    deleteReview(id) {
      this.reviews = this.reviews.filter(r => r.id !== id)
    },
    uploadLogo(e) {
      this.logo = URL.createObjectURL(e.target.files[0])
    }
  }
}
</script>

<style>
.admin {
  max-width: 600px;
  margin: auto;
  font-family: Arial;
}
section {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 15px;
}
button {
  margin-left: 10px;
}
</style>
