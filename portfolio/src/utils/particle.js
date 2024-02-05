const particleOptions = {
  "autoPlay": true,
  "background": {
    "color": {
      "value": "#0f030f"
    },
    "image": "",
    "opacity": 1
  },
  "clear": true,
  "defaultThemes": {},
  "delay": 0,
  "fullScreen": {
    "enable": true,
    "zIndex": 0
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": true,
        "mode": ["repulse", "grab", "bubble"],
        "parallax": {
          "enable": false,
          "force": 60,
          "smooth": 10
        }
      },
      "resize": {
        "delay": 0.5,
        "enable": true
      }
    },
    "modes": {
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 400,
        "duration": 2,
        "mix": false,
        "opacity": 0.8,
        "size": 20,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": {}
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.3
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "blink": true,
          "consent": false,
          "opacity": 0.1
        }
      },
      "push": {
        "default": true,
        // "groups": {},
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": {}
        }
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  // "manualParticles": {},
  "particles": {
    "color": {
      "value": "random",
      "animation": {
        "h": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "s": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "l": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        }
      }
    },
    "effect": {
      "close": true,
      "fill": true,
      "options": {},
      "type": {}
    },
    // "groups": {},
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "outModes": {
        "default": "out"
      },
      "attract": {
        "distance": 200,
        "enable": true,
        "rotate": {
          "x": 3000,
          "y": 3000
        }
      },
      "angle": {
        "offset": 0,
        "value": 90
      }, 
      "center": {
        "x": 50,
        "y": 50,
        "mode": "percent",
        "radius": 0
      },
      "decay": 0,
      "distance": {},
      "drift": 0,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "inverse": false,
        "maxSpeed": 50
      },
      "path": {
        "clamp": true,
        "delay": {
          "value": 0
        },
        "enable": true,
        "options": {}
      },
      "size": false,
      "spin": {
        "acceleration": 1,
        "enable": false
      },
      "trail": {
        "enable": false,
        "length": 10,
        "fill": {}
      },
      "vibrate": false,
      "warp": true
    },
    "number": {
      "density": {
        "enable": true,
        "width": 1920,
        "height": 1080
      },
      "limit": {
        "mode": "delete",
        "value": 0
      },
      "value": 300
    },
    "opacity": {
      "value": 0.5,
      "animation": {
        "count": 5,
        "enable": true,
        "speed": 2,
        "decay": 0,
        "delay": 0,
        "sync": true,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "reduceDuplicates": false,
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "close": true,
      "fill": true,
      "options": {
        "polygon": {
          "sides": 3
        }
      },
      "type": ["star", "polygon", "circle"]
    },
    "size": {
      "value": 3,
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 5,
        "decay": 0,
        "delay": 0,
        "sync": true,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    stroke: {
      width: 2,
      // color: '#f0f0f0'
      color: '#000'
    },
    "zIndex": {
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    },
    "destroy": {
      "bounds": {},
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "value": 3
        },
        "rate": {
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "value": 0,
        "sync": false
      },
      "duration": {
        "value": 0,
        "sync": false
      }
    },
    "rotate": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": true,
      "color": {
        "value": "#ffffff"
      },
      "consent": false,
      "distance": 100,
      "enable": true,
      "frequency": 1,
      "opacity": 0.2,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 0.5,
      "warp": false
    },
    "repulse": {
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  // "responsive": {},
  "smooth": false,
  "style": {},
  // "themes": {},
  "zLayers": 100,
  "name": "Polygon Shape",
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  }
};

export default particleOptions;