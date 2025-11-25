<style scoped>
.projects-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.carousel-container {
  overflow: hidden;
  width: 100%;
}

.carousel {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 5px;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.ctrl-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--glass);
  border: 1px solid var(--accent);
  color: white;
  font-size: 22px;
  cursor: pointer;
  transition: 0.3s;
}

.ctrl-btn:hover {
  background: var(--accent);
  color: black;
}

/* Mobile */
@media (max-width: 750px) {
  .carousel {
    padding: 0 !important;
    scroll-snap-type: x mandatory;
  }

  .controls {
    display: none;
  }
}
</style>



