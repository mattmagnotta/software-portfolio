import React from 'react'
import { Spring } from 'react-spring/renderprops'
const AnimaitedLogo = () => {

    return (
        <div style={{width:'40%',maxWidth:'300px'}}>
        <Spring
          from={{ x: 100 }}
          to={{ x: 100 }}>
          {props => (
            <svg
              class="logoSVG"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 410.01 502.88">
              <g id="Artboard_1" data-name="Artboard 1">
                <path
                  className="path"
                  d="M456,528V137L658,271,863,137v53L659,323,500,218V500Z"
                  transform="translate(-455.5 -136.07)"
                  fill="none"
                  stroke="#1261A0"
                  stroke-width="4px"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                />
                <path
                  className="path"
                  d="M865,247l-1.69,391L661.73,503.14,456,636.25l.23-53L661,451.13,819.62,556.82l1.22-282Z"
                  transform="translate(-455.5 -136.07)"
                  fill="none"
                  stroke="#1261A0"
                  stroke-linecap="round"
                  stroke-width="4px"
                />
              </g>
            </svg>
          )}
        </Spring>
      </div>
    )
}

export default AnimaitedLogo
