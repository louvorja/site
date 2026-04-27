<template>
  <div v-if="showModal" class="popup-overlay" @click.self="closeModal">
    <div class="popup-box">
      <button class="close-btn" @click="closeModal">×</button>

      <div class="popup-header">
        <h3>📸 Já conhece nosso Instagram?</h3>
      </div>

      <div class="popup-content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          class="insta-logo"
        />

        <h3>@louvorja.app</h3>

        <p>Siga nossa página, curta e compartilhe.</p>

        <router-link
          :to="{ name: 'instagram' }"
          target="_blank"
          class="follow-btn"
        >
          Seguir no Instagram
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupLayout",

  data() {
    return {
      showModal: false,
      storageKey: "instagramPopupLastShown",
      showAgainAfterDays: 14,
    };
  },

  mounted() {
    this.checkPopupDisplay();
  },

  methods: {
    checkPopupDisplay() {
      const lastShown = localStorage.getItem(this.storageKey);
      const now = Date.now();

      const interval = this.showAgainAfterDays * 24 * 60 * 60 * 1000;

      if (!lastShown || now - parseInt(lastShown) > interval) {
        this.showModal = true;
      }
    },

    closeModal() {
      localStorage.setItem(this.storageKey, Date.now());

      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}

.popup-box {
  width: 420px;
  max-width: 92%;
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.25);
  position: relative;
  animation: pop 0.35s ease;
}

@keyframes pop {
  from {
    transform: scale(0.85);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 14px;
  border: none;
  background: none;
  font-size: 30px;
  cursor: pointer;
  color: white;
  z-index: 2;
}

.popup-header {
  padding: 30px 20px;
  text-align: center;
  color: white;
  background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
}

.popup-content {
  padding: 30px;
  text-align: center;
}

.insta-logo {
  width: 70px;
  margin-bottom: 15px;
}

.follow-btn {
  display: inline-block;
  background: #e1306c;
  color: white;
  text-decoration: none;
  padding: 14px 30px;
  border-radius: 999px;
  font-weight: bold;
}

.follow-btn:hover {
  opacity: 0.9;
}
</style>
