<template>
  <article class="product-card">
    <img :src="product.image" :alt="product.title" class="product-image" />

    <div class="product-body">
      <h3 class="product-title">{{ product.title }}</h3>
      <p class="product-desc">{{ product.description }}</p>

      <div class="product-meta">
        <span class="price">{{ formatPrice(product.price) }}</span>
        <span class="stock" :class="{ out: product.stock === 0 }">
          Stock: {{ product.stock }}
        </span>
      </div>

      <button
        @click="buy"
        :disabled="isOutOfStock"
        class="buy-btn"
      >
        {{ isOutOfStock ? 'Agotado' : 'Comprar' }}
      </button>
    </div>
  </article>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['buy'])

const isOutOfStock = computed(() => props.product.stock === 0)

function formatPrice(price) {
  const numericPrice = Number(price)
  if (isNaN(numericPrice)) return 'Precio inválido'
  const clp = Math.round(numericPrice * 1000)
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(clp)
}

function buy() {
  if (!isOutOfStock.value) {
    emit('buy', props.product.id)
  }
}
</script>

<style scoped>
.product-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: stretch;
  box-shadow: 0 6px 18px rgba(2,6,23,0.3);
}

.product-image {
  width: 100%;
  height: 160px;
  object-fit: contain;
  object-position: center;
  border-radius: 6px;
  background: #f6f7f9;
  padding: 8px;
}

.product-title {
  margin: 0;
  font-size: 1.05rem;
}

.product-desc {
  font-size: 0.9rem;
  color: #bfc7d1;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.4rem;
}

.price {
  font-weight: 700;
  color: #ffd54a;
}

.stock {
  font-size: 0.85rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  background: rgba(255,255,255,0.03);
}

.stock.out {
  opacity: 0.6;
}

.buy-btn {
  margin-top: 0.5rem;
  width: 100%;
  background: #28a745;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 6px;
}

.buy-btn[disabled] {
  background: #6c757d;
  cursor: not-allowed;
}
</style>
