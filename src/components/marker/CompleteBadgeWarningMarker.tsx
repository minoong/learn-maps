import React from "react";
import { BadgeMarkerSVGProps } from "../../types";

export default function CompleteBadgeWarningMarker(props: BadgeMarkerSVGProps) {
  const { fill, text, badgeText, isActive } = props;
  return isActive ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="69.999"
      viewBox="0 0 64 69.999"
    >
      <defs>
        <filter
          id="icon_marker"
          x="0"
          y="0"
          width="64"
          height="69.999"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodOpacity="0.302" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="_3"
          x="23.75"
          y="14.251"
          width="16.5"
          height="31.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="0.5" />
          <feGaussianBlur stdDeviation="0.75" result="blur-2" />
          <feFlood floodOpacity="0.4" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="marker_end_hover_warning3" transform="translate(-649.5 -335.301)">
        <g id="marker_bk" transform="translate(661.751 350.005)">
          <ellipse
            id="shadow"
            cx="10"
            cy="3.5"
            rx="10"
            ry="3.5"
            transform="translate(9.749 44.296)"
            opacity="0.32"
          />
          <g
            transform="matrix(1, 0, 0, 1, -12.25, -14.7)"
            filter="url(#icon_marker)"
          >
            <g
              id="icon_marker-2"
              data-name="icon_marker"
              transform="translate(6 4)"
              fill={fill}
            >
              <path
                d="M 25.99924278259277 56.30928802490234 L 22.09029197692871 50.98194122314453 L 21.85517120361328 50.66150283813477 L 21.46423149108887 50.58989334106445 C 15.78895092010498 49.5502815246582 10.60464096069336 46.53241348266602 6.866291046142578 42.09219360351562 C 5.009251117706299 39.88648986816406 3.560451030731201 37.40430068969727 2.560151100158691 34.71457290649414 C 1.524911046028137 31.93091201782227 1.000001072883606 28.99925231933594 1.000001072883606 26.00100135803223 C 1.000001072883606 22.62488174438477 1.660861134529114 19.35112190246582 2.964210987091064 16.26976203918457 C 4.223320960998535 13.29299163818359 6.026061058044434 10.61937141418457 8.322340965270996 8.323142051696777 C 10.61863136291504 6.026901721954346 13.29235076904297 4.224201679229736 16.26922035217285 2.965101718902588 C 19.35073089599609 1.661751747131348 22.62467193603516 1.000901818275452 26.00010108947754 1.000901818275452 C 29.37553024291992 1.000901818275452 32.64947128295898 1.661751747131348 35.73097991943359 2.965101718902588 C 38.70785140991211 4.224201679229736 41.38157272338867 6.026901721954346 43.67786026000977 8.323142051696777 C 45.97414016723633 10.61937141418457 47.77688217163086 13.29299163818359 49.03599166870117 16.26976203918457 C 50.33934020996094 19.35112190246582 51.00020217895508 22.62488174438477 51.00020217895508 26.00010108947754 C 51.00020217895508 28.99920082092285 50.4752197265625 31.93087196350098 49.43984222412109 34.71458053588867 C 48.43941116333008 37.40431213378906 46.99044036865234 39.88653182983398 45.13320159912109 42.09229278564453 C 41.39447021484375 46.53260040283203 36.20988082885742 49.55053329467773 30.53449058532715 50.59016036987305 L 30.14358139038086 50.66176223754883 L 29.90846061706543 50.98216247558594 L 25.99924278259277 56.30928802490234 Z"
                stroke="none"
              />
              <path
                d="M 25.99929046630859 54.61895751953125 L 29.57248115539551 49.74974060058594 L 30.35430145263672 49.60652160644531 C 35.80182266235352 48.608642578125 40.77873229980469 45.71129989624023 44.36825180053711 41.44821166992188 C 46.15130233764648 39.33055114746094 47.54228973388672 36.9477424621582 48.50257110595703 34.36597061157227 C 49.49632263183594 31.69418144226074 50.00020217895508 28.87980270385742 50.00020217895508 26.00010108947754 C 50.00020217895508 22.75944137573242 49.36592102050781 19.61675262451172 48.114990234375 16.65932083129883 C 46.90629959106445 13.8017520904541 45.17552947998047 11.23497200012207 42.97077178955078 9.030261993408203 C 40.7659797668457 6.825531959533691 38.19911193847656 5.094791889190674 35.3414306640625 3.886111736297607 C 32.38386154174805 2.635181665420532 29.24098014831543 2.000901699066162 26.00010108947754 2.000901699066162 C 22.75922203063965 2.000901699066162 19.61634063720703 2.635181665420532 16.65877151489258 3.886111736297607 C 13.80109119415283 5.094791889190674 11.23422145843506 6.825531959533691 9.029431343078613 9.030261993408203 C 6.824671268463135 11.23497200012207 5.09390115737915 13.8017520904541 3.885210990905762 16.65932083129883 C 2.634281158447266 19.61675262451172 2.000001192092896 22.75944137573242 2.000001192092896 26.00100135803223 C 2.000001192092896 28.87985229492188 2.503811120986938 31.69425201416016 3.497431039810181 34.36600112915039 C 4.457581043243408 36.94777297973633 5.848411083221436 39.33054351806641 7.631270885467529 41.4481315612793 C 11.2204008102417 45.71112060546875 16.19703102111816 48.60840225219727 21.6444206237793 49.60625076293945 L 22.42629051208496 49.74948120117188 L 25.99929046630859 54.61895751953125 M 25.99920082092285 57.99960327148438 L 21.2840518951416 51.57352066040039 C 9.175480842590332 49.35546112060547 1.089477564164554e-06 38.74969100952148 1.089477564164554e-06 26.00100135803223 L 1.089477564164554e-06 26.00010108947754 C 1.089477564164554e-06 11.64150142669678 11.64060115814209 0.0009017700213007629 26.00010108947754 0.0009017700213007629 C 40.35960006713867 0.0009017700213007629 52.00020217895508 11.64150142669678 52.00020217895508 26.00010108947754 L 52.00020217895508 26.00100135803223 C 52.00020217895508 38.74969100952148 42.8232421875 49.35573196411133 30.71467018127441 51.57379150390625 L 25.99920082092285 57.99960327148438 Z"
                stroke="none"
                fill="#fff"
              />
            </g>
          </g>
          <g transform="matrix(1, 0, 0, 1, -12.25, -14.7)" filter="url(#_3)">
            <text
              id="_3-2"
              data-name="3"
              transform="translate(32 37)"
              fill="#fff"
              fontSize="18"
              fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
              fontWeight="700"
              letterSpacing="-0.03em"
            >
              <tspan x="-5.301" y="0">
                {text}
              </tspan>
            </text>
          </g>
        </g>
        <g id="map_warning_1" transform="translate(245.5 89.049)">
          <g
            id="map_warning_bg"
            transform="translate(444 250.25)"
            fill="#f9b700"
            stroke="#fff"
            strokeWidth="1.5"
          >
            <circle cx="9" cy="9" r="9" stroke="none" />
            <circle cx="9" cy="9" r="8.25" fill="none" />
          </g>
          <path
            id="icon_map_warning"
            d="M1.941-4.281H3.489L3.845-7.6l.081-2.126H1.517L1.6-7.6ZM2.715-.266A1.426,1.426,0,0,0,4.141-1.759a1.423,1.423,0,0,0-1.426-1.48A1.42,1.42,0,0,0,1.3-1.759,1.424,1.424,0,0,0,2.715-.266Z"
            transform="translate(450.363 264.59)"
            fill="#1b2529"
          />
        </g>
        <g id="map_warning_2" transform="translate(243.5 91.535)">
          <g
            id="사각형_461015"
            data-name="사각형 461015"
            transform="translate(449 260.766)"
            fill="#f23f3c"
            stroke="#fff"
            strokeWidth="1.5"
          >
            <rect width="18" height="18" rx="9" stroke="none" />
            <rect
              x="0.75"
              y="0.75"
              width="16.5"
              height="16.5"
              rx="8.25"
              fill="none"
            />
          </g>
          <text
            id="_99"
            data-name="99"
            transform="translate(463.9 270.666)"
            fill="#fff"
            fontSize="11"
            fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
            fontWeight="500"
            letterSpacing="-0.03em"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            <tspan x="-6.105" y="0">
              {badgeText}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39.5"
      height="44.001"
      viewBox="0 0 39.5 44.001"
    >
      <defs>
        <filter
          id="_3"
          x="11.25"
          y="7.251"
          width="12.5"
          height="23.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="0.5" />
          <feGaussianBlur stdDeviation="0.75" result="blur" />
          <feFlood floodColor="#222" floodOpacity="0.561" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="marker_end_warning3" transform="translate(-667 -358.298)">
        <g id="marker_bk" transform="translate(667.5 357.002)">
          <ellipse
            id="shadow"
            cx="9"
            cy="3"
            rx="9"
            ry="3"
            transform="translate(8 39.297)"
            fill="#373a42"
            opacity="0.2"
          />
          <path
            id="icon_marker"
            d="M13.437,34.172A17.007,17.007,0,0,1,0,17.546V17a17,17,0,1,1,34,0v.545A17.007,17.007,0,0,1,20.563,34.172L17,39Z"
            transform="translate(0 3.296)"
            fill={fill}
            stroke="#fff"
            strokeWidth="1"
          />
          <g transform="matrix(1, 0, 0, 1, -0.5, 1.3)" filter="url(#_3)">
            <text
              id="_3-2"
              data-name="3"
              transform="translate(17.5 24)"
              fill="#fff"
              fontSize="13"
              fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
              fontWeight="700"
              letterSpacing="-0.03em"
            >
              <tspan x="-3.829" y="0">
                {text}
              </tspan>
            </text>
          </g>
        </g>
        <g id="map_warning_1" transform="translate(243.5 108.298)">
          <g
            id="map_warning_bg"
            transform="translate(444 250)"
            fill="#f9b700"
            stroke="#fff"
            strokeWidth="1.5"
          >
            <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
            <circle cx="7.5" cy="7.5" r="6.75" fill="none" />
          </g>
          <path
            id="icon_map_warning"
            d="M1.827-5.25H3.1l.293-2.727.066-1.747H1.479l.066,1.747Zm.636,3.3A1.172,1.172,0,0,0,3.635-3.178,1.169,1.169,0,0,0,2.463-4.394,1.167,1.167,0,0,0,1.3-3.178,1.17,1.17,0,0,0,2.463-1.95Z"
            transform="translate(448.998 263.724)"
            fill="#1b2529"
          />
        </g>
        <g id="map_warning_2" transform="translate(242.5 108.532)">
          <g
            id="사각형_461015"
            data-name="사각형 461015"
            transform="translate(449 260.766)"
            fill="#f23f3c"
            stroke="#fff"
            strokeWidth="1.5"
          >
            <rect width="15" height="15" rx="7.5" stroke="none" />
            <rect
              x="0.75"
              y="0.75"
              width="13.5"
              height="13.5"
              rx="6.75"
              fill="none"
            />
          </g>
          <text
            id="_99"
            data-name="99"
            transform="translate(461.5 269.766)"
            fill="#fff"
            fontSize="9"
            fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
            fontWeight="500"
            letterSpacing="-0.03em"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            <tspan x="-4.995" y="0">
              {badgeText}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}
