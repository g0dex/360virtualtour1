var APP_DATA = {
  "scenes": [
    {
      "id": "0-piran",
      "name": "Piran",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.662409504219543,
          "pitch": 0.40929400723579334,
          "rotation": 0,
          "target": "1-recepcija"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-recepcija",
      "name": "Recepcija",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7036203839605033,
          "pitch": 0.08151133221993234,
          "rotation": 0.7853981633974483,
          "target": "0-piran"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6299421094061319,
          "pitch": 0.11311301318023936,
          "title": "Recepcija Akvarija Piran",
          "text": "bla bla bla<div><br></div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
