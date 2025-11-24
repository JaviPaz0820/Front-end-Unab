export default function useScrollObserver(){
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('inview')
        io.unobserve(e.target)
      }
    })
  }, { threshold:0.15 })

  function observe(el){
    if(el) io.observe(el)
  }

  return { observe }
}
