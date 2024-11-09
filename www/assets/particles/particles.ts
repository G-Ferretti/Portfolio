import { MoveDirection, OutMode } from "@tsparticles/engine";

//   Particle object template
// {
//   "particles": { ... },
//   "interactivity": { ... },
//   "background": { ... },
//   "fullScreen": { ... },
//   "fpsLimit": 60,
//   "detectRetina": true
// }

export const homeParticles = {
        fullScreen:{
          enable: false
        },
        style: {
          height: "100%", 
          width: "100%",  
          position: "absolute" 
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
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.out,
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 120,
            },
            limit: 120,
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

export const aboutParticles = {
  fullScreen: {
    enable: false
  },
   style: {
      height: "100%", 
      width: "100%",  
      position: "absolute" 
  },
  particles: {
    collisions: {
      enable: true,
      maxSpeed: 50,
      overlap: {
        enable: true,
        retries: 1
      }
    },
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      },
    },
    limit: 200,
    color: {
      value: ['#d00000', '#ad0052']
    },
    shape: {
      type: 'square'
    },
    size: {
      value: 8,
      random: false
    },
    opacity: {
      value: 0.1
    },
    move: {
      enable: true,
      speed: 2,
      direction: MoveDirection.none,
      random: false,
      straight: false,
      outModes: {
        default: OutMode.bounce
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'bubble'
      },
      onClick: {
        enable: true,
        mode: 'repulse'
      },
      resize: {
        enable: true
      }
    },
    modes: {
      bubble: {
        duration: 1,
        size: 10,
        distance: 100,
        opacity: 0.8
      },
      repulse: {
        distance: 50,
        duration: 0.4
      }
    }
  },
  retina_detect: true
}

export const projectParticles = {
  fullScreen: {
    enable: false
  },
   style: {
      height: "100%", 
      width: "100%",  
      position: "absolute" 
  },
  particles: {
    collisions: {
      enable: true,
      maxSpeed: 50,
      overlap: {
        enable: true,
        retries: 1
      }
    },
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    },
    limit: 200,
    color: {
      value: ['#d00000', '#800080']
    },
    shape: {
      type: ['circle', 'square'],
    },
    size: {
      value: 8,
      random: false
    },
    opacity: {
      value: 0.1
    },
    move: {
      enable: true,
      speed: 2,
      direction: MoveDirection.none,
      random: false,
      straight: false,
      outModes: {
        default: OutMode.bounce
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'bubble'
      },
      onClick: {
        enable: true,
        mode: 'repulse'
      },
      resize: {
        enable: true
      }
    },
    modes: {
      bubble: {
        duration: 1,
        size: 10,
        distance: 100,
        opacity: 0.8
      },
      repulse: {
        distance: 50,
        duration: 0.4
      }
    }
  },
  retina_detect: true
}

export const contactParticles = {
  fullScreen: {
    enable: false
  },
  style: {
      height: "100%", 
      width: "100%",  
      position: "absolute" 
  },
  particles: {
    collisions: {
      enable: true,
      maxSpeed: 50,
      overlap: {
        enable: true,
        retries: 1
      }
    },
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    },
    limit: 200,
    color: {
      value: ['#d00000', '#85007b']
    },
    shape: {
      type: ['polygon', 'square'],
      polygon:{
        sides: 5
      }
    },
    size: {
      value: 8,
      random: false
    },
    opacity: {
      value: 0.1
    },
    move: {
      enable: true,
      speed: 3, 
      direction: MoveDirection.none, 
      random: false,
      straight: false,
      outModes: {
        default: OutMode.bounce
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'bubble'
      },
      onClick: {
        enable: true,
        mode: 'repulse'
      },
      resize: {
        enable: true
      }
    },
    modes: {
      bubble: {
        duration: 1,
        size: 10,
        distance: 100,
        opacity: 0.8
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  retina_detect: true
}
