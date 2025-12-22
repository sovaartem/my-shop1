я пишу:<template>
    <div>
        <nav>
            <router-link to="/admin/products" active-class="active-link">Головна</router-link>
            <router-link to="/admin/reviews" active-class="active-link">Відгуки</router-link>
        </nav>

        <!-- Контент адміністративної панелі -->
        <main>
            <router-view /> <!-- Динамічне завантаження сторінок -->
        </main>
    </div>
</template> 