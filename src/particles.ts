import { MoveDirection, OutMode } from "@tsparticles/engine";

export const particlesHome = {
        background: {
            color: {
                value: "",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push"
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: {
                  enable: true
                  }
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.bounce,
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 150,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

export const particlesAbout = { 
    particles: {
        number: {
          value: 120, // Number of particles
          density: {
            enable: true,
            value_area: 800 // Density area
          }
        },
        shape: {
          type: "square" // Shape of the particles
        },
        size: {
          value: 8, // Size of particles
          random: true // Random size
        },
        move: {
          enable: true, // Enable movement
          speed: 1.2, // Movement speed
          direction: MoveDirection.bottomRight, // Move diagonally down to the right
          random: false,
          straight: false,
          outModes: {
            default: OutMode.out // Particles disappear when out of bounds
          },
          attract: {
            enable: false // Disable attraction effect
          }
        },
        opacity: {
          value: 0.1 // Opacity of particles
        },
        color: {
          value: "FA1E4E" // Color of particles
        },
        lineLinked: {
          enable: false // Disable linking lines between particles
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: false // Disable hover interaction
          },
          onClick: {
            enable: false // Disable click interaction
          },
          resize: {
            enable: true // Enable resize behavior with detailed structure
          }// Correct definition for resize
        },
        modes: {
          // Define any interaction modes if needed
        }
      },
      retinaDetect: true // Enable retina detection
    }