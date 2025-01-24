import React, { useEffect, useRef } from "react"

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let particlesArray

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.directionX = -this.directionX
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.directionY = -this.directionY
        }

        this.x += this.directionX
        this.y += this.directionY

        this.draw()
      }
    }

    function init() {
      particlesArray = []
      const numberOfParticles = (canvas.height * canvas.width) / 9000
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 5 + 1
        const x = Math.random() * (canvas.width - size * 2 - size * 2) + size * 2
        const y = Math.random() * (canvas.height - size * 2 - size * 2) + size * 2
        const directionX = Math.random() * 5 - 2.5
        const directionY = Math.random() * 5 - 2.5
        const color = "rgba(255, 255, 255, 0.3)"

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color))
      }
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
      }
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  )
}

export default ParticleBackground

