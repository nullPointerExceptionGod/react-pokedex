const parameters = {
    particles: {
        "particles": {
	        "number": {
	            "value": 8,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "images",
	                "circle"
	            ],
	            "images": [
	                {
	                    "src": "../../assets/sprites.png",
	                    "height": 20,
	                    "width": 23
	                }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
    }
}

const style = {
    width: '100%',
    heigth: '100%'
}

export {parameters, style};