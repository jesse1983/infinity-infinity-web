import { useMemo } from "react";

export function InfinitySeaNavCircle({ floor, onClick = console.log }) {

  const map = {
    'ground-floor': { rotate: "rotate-[120deg]", index: 1 },
    apartament: {rotate: "rotate-[10deg]", index: 3 },
    'beach-club': {rotate: "rotate-[95deg]", index: 0 },
    'underground': {rotate: "rotate-[95deg]", index: 2 },
  };
  const rotate = useMemo(() => {
    return map[floor]?.rotate || "";
  }, [floor]);

  const click = (chooseFloor: string) => {
    if (onClick) onClick(chooseFloor);
  }
  const gClass = (name: string) => {
    return 'cursor-pointer stroke-white/0 stroke-[30px] fill-white ' + (name === floor ? 'opacity-100' : 'opacity-30');
  }



  return (
    <svg
      viewBox="0 0 917 832"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-[120%] mt-14 ${rotate} transition duration-500`}
    >
      <g>
        <g className={gClass('beach-club')} onClick={() => click('beach-club')}>
          <path
            d="M202.495 569.838L180.753 579.236L176.699 569.856C175.652 567.433 175.328 565.349 175.729 563.603C176.12 561.836 177.206 560.568 178.987 559.798C180.167 559.288 181.282 559.138 182.331 559.348C183.371 559.537 184.305 560.019 185.13 560.792C185.947 561.545 186.597 562.481 187.081 563.599L186.107 563.393C185.507 562.006 185.21 560.721 185.215 559.539C185.191 558.346 185.482 557.286 186.09 556.36C186.676 555.443 187.591 554.716 188.833 554.179C190.676 553.382 192.4 553.448 194.005 554.376C195.602 555.283 196.991 557.103 198.172 559.837L202.495 569.838ZM199.607 568.358L196.291 560.687C195.467 558.782 194.516 557.461 193.435 556.723C192.334 555.995 191.069 555.94 189.64 556.557C188.232 557.166 187.426 558.116 187.223 559.408C186.999 560.71 187.299 562.313 188.122 564.217L191.546 572.138L189.651 572.957L186.55 565.782C185.798 564.043 184.885 562.84 183.811 562.174C182.727 561.487 181.533 561.425 180.229 561.989C178.904 562.562 178.131 563.474 177.909 564.725C177.658 565.963 177.909 567.453 178.661 569.192L181.655 576.118L199.607 568.358Z"
            fill="white"
            id="path12797"
          />
          <path
            d="M178.418 547.91L174.39 536.056L176.408 535.371L180.436 547.224L178.418 547.91ZM188.679 544.138L184.096 530.65L186.146 529.953L191.535 545.812L169.109 553.432L163.883 538.054L165.933 537.358L170.353 550.365L188.679 544.138Z"
            fill="white"
            id="path12799"
          />
          <path
            d="M184.4 527.267L158.818 522.386L158.231 519.986L178.66 503.834L179.288 506.398L160.062 521.349L159.821 520.363L183.78 524.736L184.4 527.267ZM177.24 524.631L175.091 524.391L171.814 511.015L173.609 509.809L177.24 524.631Z"
            fill="white"
            id="path12801"
          />
          <path
            d="M175.327 489.088C175.599 490.85 175.56 492.522 175.211 494.105C174.839 495.691 174.203 497.113 173.301 498.371C172.399 499.628 171.272 500.681 169.919 501.529C168.563 502.354 167.027 502.899 165.31 503.164C163.593 503.429 161.964 503.372 160.422 502.993C158.877 502.593 157.485 501.929 156.246 501.001C155.004 500.052 153.978 498.875 153.168 497.47C152.336 496.069 151.784 494.488 151.512 492.727C151.251 491.033 151.295 489.394 151.644 487.811C151.971 486.231 152.624 484.841 153.603 483.64L155.417 484.969C154.584 486.079 154.045 487.246 153.8 488.471C153.533 489.699 153.502 490.982 153.709 492.32C153.925 493.724 154.372 494.991 155.048 496.119C155.702 497.251 156.543 498.194 157.573 498.948C158.58 499.705 159.713 500.25 160.974 500.58C162.209 500.892 163.529 500.939 164.933 500.723C166.338 500.506 167.593 500.061 168.699 499.389C169.779 498.697 170.697 497.837 171.451 496.807C172.183 495.782 172.701 494.629 173.006 493.349C173.288 492.073 173.321 490.733 173.105 489.328C172.899 487.991 172.483 486.777 171.858 485.686C171.234 484.596 170.357 483.647 169.228 482.839L170.557 481.025C171.853 481.875 172.905 483.002 173.715 484.407C174.525 485.811 175.063 487.372 175.327 489.088Z"
            fill="white"
            id="path12803"
          />
          <path
            d="M147.355 458.424L147.22 455.957L170.87 454.662L171.005 457.129L147.355 458.424ZM171.816 471.927L171.953 474.427L148.302 475.722L148.165 473.222L171.816 471.927ZM160.079 457.49L160.918 472.795L158.721 472.915L157.883 457.61L160.079 457.49Z"
            fill="white"
            id="path12805"
          />
          <path
            d="M170.397 426.897C170.286 428.676 169.89 430.301 169.21 431.773C168.508 433.243 167.582 434.496 166.432 435.531C165.282 436.567 163.956 437.354 162.453 437.892C160.951 438.409 159.334 438.612 157.6 438.504C155.867 438.395 154.287 437.991 152.862 437.291C151.438 436.569 150.22 435.623 149.209 434.452C148.199 433.258 147.448 431.889 146.957 430.344C146.444 428.797 146.243 427.135 146.355 425.356C146.462 423.645 146.856 422.054 147.535 420.582C148.193 419.109 149.128 417.891 150.341 416.927L151.829 418.614C150.778 419.52 150.001 420.545 149.5 421.688C148.977 422.831 148.672 424.078 148.588 425.428C148.499 426.847 148.664 428.179 149.083 429.426C149.48 430.672 150.1 431.773 150.944 432.73C151.766 433.685 152.757 434.459 153.918 435.052C155.057 435.621 156.336 435.95 157.755 436.038C159.173 436.127 160.494 435.962 161.719 435.541C162.922 435.097 164.002 434.452 164.959 433.608C165.893 432.763 166.646 431.748 167.218 430.563C167.767 429.377 168.086 428.075 168.175 426.656C168.259 425.305 168.113 424.031 167.736 422.832C167.36 421.633 166.706 420.518 165.776 419.488L167.463 418C168.546 419.108 169.333 420.434 169.824 421.979C170.315 423.524 170.506 425.164 170.397 426.897Z"
            fill="white"
            id="path12807"
          />
          <path
            d="M170.747 412.227L147.27 409.089L147.601 406.607L168.932 409.458L170.689 396.311L172.836 396.598L170.747 412.227Z"
            fill="white"
            id="path12809"
          />
          <path
            d="M175.104 382.049C174.415 384.993 173.027 387.112 170.94 388.407C168.853 389.703 166.151 389.962 162.834 389.186L149.623 386.094L150.194 383.656L163.306 386.725C166.03 387.362 168.184 387.218 169.767 386.291C171.351 385.364 172.405 383.781 172.93 381.54C173.459 379.278 173.22 377.38 172.212 375.847C171.204 374.314 169.338 373.228 166.615 372.591L153.502 369.522L154.057 367.149L167.269 370.242C170.585 371.018 172.891 372.45 174.187 374.537C175.487 376.602 175.793 379.106 175.104 382.049Z"
            fill="white"
            id="path12811"
          />
          <path
            d="M178.352 363.991L155.901 356.443L159.157 346.757C159.998 344.255 161.151 342.489 162.616 341.459C164.088 340.407 165.744 340.19 167.583 340.808C168.802 341.218 169.731 341.851 170.371 342.709C171.018 343.545 171.39 344.527 171.487 345.654C171.591 346.76 171.449 347.891 171.061 349.045L170.474 348.241C170.956 346.809 171.594 345.655 172.388 344.779C173.168 343.875 174.093 343.282 175.164 342.999C176.213 342.71 177.379 342.78 178.662 343.212C180.565 343.851 181.803 345.053 182.377 346.816C182.957 348.558 182.773 350.841 181.824 353.663L178.352 363.991ZM177.194 360.959L179.857 353.037C180.518 351.07 180.694 349.451 180.383 348.181C180.051 346.903 179.147 346.016 177.672 345.52C176.218 345.032 174.983 345.2 173.968 346.024C172.932 346.842 172.083 348.235 171.422 350.202L168.672 358.38L166.716 357.723L169.206 350.314C169.81 348.518 169.935 347.013 169.582 345.799C169.235 344.564 168.389 343.72 167.042 343.268C165.673 342.808 164.489 342.969 163.488 343.751C162.473 344.504 161.664 345.779 161.06 347.575L158.656 354.728L177.194 360.959Z"
            fill="white"
            id="path12813"
          />
        </g>
        <g className={gClass('ground-floor')} onClick={() => click('ground-floor')}>
          <path
            d="M657.779 636.189L672.098 655.056L665.037 660.416C663.438 661.63 661.865 662.413 660.32 662.764C658.788 663.134 657.348 663.065 656.001 662.559C654.649 662.084 653.455 661.163 652.419 659.798C651.409 658.468 650.851 657.08 650.744 655.632C650.632 654.216 650.953 652.811 651.708 651.417C652.462 650.023 653.639 648.719 655.238 647.506L661.195 642.985L661.021 644.603L655.784 637.703L657.779 636.189ZM660.899 644.441L662.524 644.737L656.622 649.217C654.735 650.649 653.613 652.137 653.257 653.682C652.896 655.259 653.281 656.793 654.413 658.284C655.559 659.793 656.939 660.586 658.555 660.663C660.153 660.753 661.895 660.082 663.781 658.65L669.684 654.17L669.511 655.789L660.899 644.441Z"
            fill="white"
            id="path12815"
          />
          <path
            d="M641.319 649.918L644.73 675.737L642.637 677.05L620.88 662.736L623.116 661.334L643.355 674.882L642.495 675.422L639.112 651.303L641.319 649.918ZM641.069 657.544L641.517 659.66L629.85 666.976L628.14 665.652L641.069 657.544Z"
            fill="white"
            id="path12817"
          />
          <path
            d="M611.197 668.859L631.366 685.116L628.959 686.355L610.027 671.022L611.351 670.341L612.774 694.689L610.518 695.85L609.001 669.99L611.197 668.859Z"
            fill="white"
            id="path12819"
          />
          <path
            d="M595.76 676.835L605.825 698.276L603.558 699.34L593.493 677.899L595.76 676.835Z"
            fill="white"
            id="path12821"
          />
          <path
            d="M585.99 682.904L593.493 705.37L591.535 706.024L575.413 691.93L576.44 691.587L572.118 712.508L570.16 713.162L562.657 690.695L564.936 689.934L571.249 708.838L570.703 709.02L574.716 689.843L575.839 689.468L590.634 702.365L590.024 702.568L583.711 683.664L585.99 682.904Z"
            fill="white"
            id="path12823"
          />
          <path
            d="M555.825 707.147L543.671 710.151L543.159 708.082L555.313 705.077L555.825 707.147ZM552.939 696.602L539.11 700.02L538.59 697.918L554.85 693.898L560.534 716.892L544.767 720.79L544.248 718.688L557.584 715.391L552.939 696.602Z"
            fill="white"
            id="path12825"
          />
          <path
            d="M532.196 700.454L535.598 723.894L533.555 724.19L514.427 706.178L515.499 706.022L518.453 726.382L516.009 726.737L512.607 703.297L514.65 703L533.745 721.017L532.673 721.173L529.718 700.813L532.196 700.454Z"
            fill="white"
            id="path12827"
          />
          <path
            d="M499.657 705.238L501.262 726.698L509.563 726.077L509.725 728.236L490.626 729.665L490.465 727.506L498.765 726.885L497.16 705.424L499.657 705.238Z"
            fill="white"
            id="path12829"
          />
          <path
            d="M473.937 706.909C475.719 706.953 477.369 707.287 478.888 707.911C480.384 708.557 481.682 709.435 482.783 710.545C483.861 711.678 484.698 712.973 485.294 714.432C485.866 715.913 486.131 717.522 486.088 719.258C486.046 720.994 485.702 722.577 485.058 724.005C484.39 725.455 483.49 726.708 482.359 727.763C481.204 728.84 479.864 729.654 478.338 730.203C476.812 730.774 475.147 731.038 473.343 730.993C471.562 730.949 469.923 730.604 468.427 729.958C466.931 729.335 465.643 728.468 464.565 727.358C463.464 726.248 462.627 724.952 462.055 723.472C461.459 721.99 461.183 720.381 461.226 718.645C461.269 716.908 461.624 715.315 462.292 713.865C462.937 712.414 463.836 711.161 464.99 710.107C466.122 709.051 467.451 708.238 468.977 707.666C470.502 707.117 472.156 706.865 473.937 706.909ZM473.882 709.141C472.461 709.106 471.148 709.311 469.941 709.755C468.711 710.221 467.645 710.883 466.744 711.741C465.82 712.621 465.095 713.641 464.57 714.801C464.044 715.984 463.764 717.286 463.729 718.707C463.694 720.127 463.91 721.43 464.377 722.615C464.844 723.822 465.518 724.877 466.398 725.779C467.255 726.703 468.287 727.416 469.493 727.92C470.676 728.445 471.978 728.726 473.398 728.761C474.819 728.796 476.144 728.58 477.374 728.114C478.604 727.671 479.681 727.009 480.605 726.129C481.506 725.271 482.231 724.251 482.779 723.069C483.304 721.908 483.584 720.618 483.619 719.197C483.654 717.799 483.438 716.496 482.971 715.289C482.482 714.081 481.808 713.015 480.951 712.091C480.071 711.189 479.028 710.475 477.822 709.949C476.616 709.446 475.303 709.176 473.882 709.141Z"
            fill="white"
            id="path12831"
          />
          <path
            d="M441.972 705.95L439.288 727.303L447.547 728.341L447.277 730.489L428.275 728.101L428.545 725.952L436.804 726.99L439.487 705.638L441.972 705.95Z"
            fill="white"
            id="path12833"
          />
          <path
            d="M421.337 716.889L409.087 714.307L409.526 712.221L421.777 714.803L421.337 716.889ZM423.326 706.138L409.387 703.201L409.833 701.082L426.223 704.536L421.338 727.712L405.446 724.363L405.892 722.244L419.335 725.077L423.326 706.138ZM415.113 728.372L409.712 731.521L406.567 730.858L412.796 727.883L415.113 728.372Z"
            fill="white"
            id="path12835"
          />
          <path
            d="M403.375 700.431L396.49 723.094L388.007 720.516C386.086 719.933 384.53 719.118 383.339 718.072C382.141 717.048 381.353 715.842 380.973 714.454C380.565 713.08 380.61 711.573 381.109 709.933C381.594 708.336 382.391 707.069 383.501 706.133C384.582 705.212 385.909 704.649 387.48 704.442C389.045 704.258 390.788 704.457 392.709 705.041L399.864 707.215L398.461 707.991L400.979 699.703L403.375 700.431ZM387.9 695.729L391.229 705.723L388.639 704.936L385.277 694.932L387.9 695.729ZM398.52 707.797L399.244 709.254L392.154 707.1C389.888 706.412 388.021 706.387 386.554 707.025C385.065 707.658 384.049 708.869 383.504 710.661C382.954 712.474 383.121 714.057 384.006 715.411C384.87 716.758 386.435 717.775 388.702 718.464L395.792 720.618L394.379 721.427L398.52 707.797Z"
            fill="white"
            id="path12837"
          />
          <path
            d="M378.98 693.743L370.129 715.713L361.906 712.401C360.044 711.65 358.565 710.702 357.471 709.556C356.368 708.43 355.688 707.16 355.432 705.743C355.146 704.339 355.324 702.842 355.964 701.252C356.588 699.703 357.494 698.512 358.681 697.677C359.84 696.855 361.21 696.41 362.794 696.342C364.369 696.296 366.088 696.648 367.95 697.398L374.886 700.193L373.421 700.842L376.657 692.808L378.98 693.743ZM363.978 687.699L366.415 697.947L363.905 696.936L361.435 686.675L363.978 687.699ZM373.496 700.654L374.09 702.17L367.216 699.401C365.019 698.516 363.162 698.327 361.644 698.834C360.106 699.333 358.987 700.451 358.287 702.187C357.579 703.945 357.606 705.537 358.369 706.963C359.112 708.381 360.581 709.532 362.778 710.417L369.652 713.186L368.173 713.867L373.496 700.654Z"
            fill="white"
            id="path12839"
          />
          <path
            d="M347.466 695.536L336.269 689.935L337.222 688.029L348.419 693.63L347.466 695.536ZM352.113 685.64L339.373 679.268L340.341 677.331L355.321 684.824L344.725 706.007L330.199 698.741L331.168 696.805L343.455 702.95L352.113 685.64Z"
            fill="white"
            id="path12841"
          />
          <path
            d="M324.095 668.86C325.597 669.819 326.837 670.958 327.815 672.278C328.761 673.604 329.418 675.027 329.787 676.547C330.124 678.073 330.17 679.615 329.926 681.172C329.651 682.735 329.046 684.249 328.112 685.713C327.177 687.178 326.065 688.354 324.775 689.244C323.454 690.14 322.036 690.747 320.522 691.065C318.976 691.39 317.409 691.394 315.819 691.075C314.218 690.775 312.656 690.14 311.135 689.169C309.633 688.211 308.408 687.068 307.462 685.742C306.503 684.434 305.849 683.027 305.5 681.52C305.132 680 305.085 678.458 305.36 676.895C305.617 675.319 306.212 673.799 307.147 672.335C308.081 670.871 309.209 669.69 310.53 668.794C311.832 667.886 313.25 667.278 314.783 666.972C316.297 666.654 317.855 666.645 319.457 666.945C321.047 667.263 322.593 667.902 324.095 668.86ZM322.893 670.743C321.695 669.979 320.465 669.474 319.202 669.231C317.909 668.994 316.654 669.009 315.439 669.278C314.193 669.553 313.046 670.052 311.996 670.773C310.935 671.514 310.022 672.484 309.257 673.682C308.493 674.88 308.004 676.107 307.792 677.362C307.567 678.637 307.598 679.888 307.885 681.115C308.142 682.349 308.656 683.493 309.428 684.548C310.169 685.609 311.138 686.522 312.336 687.287C313.534 688.051 314.78 688.552 316.074 688.789C317.356 689.045 318.619 689.035 319.865 688.76C321.08 688.492 322.228 687.993 323.309 687.264C324.358 686.543 325.265 685.583 326.029 684.385C326.782 683.206 327.27 681.979 327.495 680.704C327.701 679.417 327.676 678.157 327.419 676.923C327.132 675.696 326.608 674.545 325.848 673.472C325.076 672.417 324.091 671.508 322.893 670.743Z"
            fill="white"
            id="path12843"
          />
        </g>
        <g className={gClass('underground')} onClick={() => click('underground')}>
          <path
            d="M724.182 321.354C723.549 319.713 723.204 318.032 723.147 316.314C723.118 314.609 723.367 313.183 723.892 312.038L726.045 312.26C725.587 313.331 725.347 314.62 725.323 316.128C725.329 317.649 725.611 319.136 726.171 320.588C726.706 321.977 727.308 323.039 727.978 323.772C728.676 324.518 729.397 324.978 730.141 325.151C730.892 325.345 731.626 325.304 732.342 325.028C733.205 324.695 733.802 324.175 734.134 323.467C734.473 322.78 734.636 321.98 734.623 321.067C734.631 320.145 734.564 319.156 734.422 318.098C734.281 317.041 734.15 315.979 734.029 314.914C733.93 313.84 733.943 312.807 734.069 311.816C734.203 310.846 734.53 309.97 735.051 309.19C735.601 308.422 736.466 307.811 737.645 307.356C738.739 306.935 739.849 306.834 740.973 307.053C742.126 307.286 743.207 307.897 744.217 308.886C745.248 309.867 746.124 311.294 746.845 313.167C747.324 314.409 747.619 315.709 747.732 317.068C747.865 318.419 747.797 319.654 747.527 320.773L745.36 320.701C745.627 319.511 745.701 318.322 745.582 317.135C745.471 315.969 745.225 314.891 744.844 313.902C744.333 312.576 743.733 311.55 743.042 310.825C742.352 310.1 741.62 309.644 740.848 309.458C740.104 309.286 739.354 309.345 738.596 309.637C737.733 309.97 737.131 310.479 736.792 311.166C736.46 311.874 736.301 312.685 736.314 313.598C736.336 314.533 736.418 315.529 736.559 316.586C736.701 317.644 736.817 318.699 736.908 319.751C737.008 320.825 736.99 321.847 736.856 322.817C736.752 323.8 736.435 324.672 735.906 325.432C735.385 326.213 734.545 326.826 733.387 327.272C732.314 327.686 731.2 327.776 730.047 327.544C728.915 327.303 727.83 326.682 726.791 325.68C725.781 324.691 724.912 323.249 724.182 321.354Z"
            fill="white"
            id="path12845"
          />
          <path
            d="M733.406 345.479C732.602 342.566 732.806 340.04 734.018 337.904C735.23 335.767 737.478 334.246 740.761 333.34L753.841 329.73L754.507 332.143L741.525 335.726C738.829 336.471 737.007 337.629 736.061 339.201C735.114 340.772 734.946 342.667 735.559 344.885C736.177 347.125 737.295 348.677 738.915 349.54C740.534 350.404 742.691 350.463 745.388 349.719L758.369 346.136L759.017 348.484L745.938 352.095C742.655 353.001 739.945 352.848 737.808 351.636C735.678 350.445 734.21 348.393 733.406 345.479Z"
            fill="white"
            id="path12847"
          />
          <path
            d="M739.194 362.719L762.503 358.514L764.317 368.571C764.786 371.168 764.626 373.271 763.839 374.88C763.056 376.512 761.71 377.499 759.801 377.844C758.535 378.072 757.416 377.965 756.442 377.521C755.472 377.1 754.673 376.419 754.045 375.478C753.421 374.559 753 373.5 752.784 372.302L753.685 372.724C753.954 374.211 753.951 375.529 753.677 376.679C753.429 377.847 752.904 378.813 752.102 379.576C751.322 380.336 750.266 380.836 748.934 381.076C746.959 381.432 745.295 380.976 743.943 379.707C742.595 378.46 741.656 376.372 741.128 373.441L739.194 362.719ZM741.669 364.817L743.153 373.042C743.521 375.084 744.148 376.587 745.032 377.551C745.939 378.51 747.158 378.852 748.69 378.576C750.199 378.304 751.2 377.561 751.692 376.349C752.206 375.134 752.279 373.504 751.911 371.462L750.379 362.971L752.41 362.604L753.798 370.296C754.134 372.161 754.75 373.54 755.644 374.433C756.543 375.348 757.691 375.68 759.09 375.428C760.511 375.171 761.471 374.459 761.971 373.292C762.497 372.143 762.592 370.636 762.256 368.771L760.916 361.345L741.669 364.817Z"
            fill="white"
            id="path12849"
          />
          <path
            d="M744.729 394.451C744.544 392.701 744.646 390.989 745.035 389.315C745.449 387.66 746.059 386.348 746.863 385.378L748.884 386.15C748.165 387.066 747.599 388.249 747.185 389.699C746.797 391.169 746.685 392.678 746.849 394.226C747.006 395.707 747.313 396.888 747.77 397.769C748.251 398.671 748.828 399.302 749.502 399.661C750.177 400.043 750.897 400.194 751.659 400.113C752.579 400.015 753.291 399.667 753.794 399.069C754.3 398.494 754.665 397.763 754.889 396.878C755.135 395.99 755.326 395.016 755.464 393.958C755.601 392.9 755.749 391.841 755.909 390.781C756.091 389.718 756.371 388.724 756.75 387.799C757.13 386.897 757.673 386.136 758.379 385.517C759.109 384.917 760.102 384.551 761.359 384.418C762.525 384.294 763.623 384.484 764.652 384.987C765.705 385.51 766.592 386.38 767.31 387.597C768.052 388.811 768.528 390.417 768.74 392.413C768.881 393.737 768.829 395.069 768.586 396.411C768.365 397.75 767.98 398.925 767.429 399.936L765.355 399.306C765.92 398.225 766.3 397.096 766.492 395.918C766.687 394.763 766.729 393.659 766.617 392.605C766.467 391.191 766.153 390.045 765.674 389.166C765.195 388.287 764.606 387.657 763.908 387.278C763.235 386.918 762.494 386.781 761.687 386.867C760.767 386.964 760.054 387.301 759.548 387.876C759.044 388.474 758.681 389.216 758.457 390.102C758.236 391.01 758.057 391.993 757.919 393.051C757.782 394.109 757.621 395.159 757.437 396.199C757.255 397.262 756.973 398.244 756.593 399.147C756.237 400.069 755.705 400.829 754.997 401.426C754.292 402.045 753.322 402.42 752.088 402.551C750.944 402.673 749.845 402.472 748.792 401.948C747.761 401.422 746.873 400.541 746.129 399.304C745.41 398.088 744.944 396.47 744.729 394.451Z"
            fill="white"
            id="path12851"
          />
          <path
            d="M747.434 420.34C747.427 418.558 747.715 416.899 748.296 415.363C748.9 413.85 749.741 412.527 750.82 411.396C751.921 410.286 753.192 409.413 754.634 408.777C756.098 408.162 757.699 407.852 759.436 407.846C761.172 407.84 762.764 408.139 764.21 408.743C765.678 409.369 766.956 410.233 768.042 411.335C769.152 412.459 770.002 413.776 770.594 415.285C771.209 416.794 771.519 418.451 771.525 420.256C771.532 422.038 771.233 423.685 770.629 425.199C770.048 426.712 769.218 428.024 768.139 429.133C767.06 430.265 765.789 431.138 764.325 431.752C762.861 432.389 761.26 432.71 759.523 432.716C757.786 432.722 756.183 432.412 754.715 431.786C753.247 431.182 751.969 430.318 750.882 429.194C749.796 428.092 748.945 426.787 748.331 425.277C747.739 423.768 747.44 422.122 747.434 420.34ZM749.667 420.333C749.672 421.754 749.913 423.061 750.391 424.255C750.892 425.471 751.583 426.518 752.466 427.395C753.372 428.294 754.412 428.989 755.587 429.482C756.784 429.974 758.093 430.217 759.514 430.212C760.935 430.207 762.232 429.954 763.403 429.454C764.597 428.954 765.632 428.251 766.508 427.345C767.408 426.462 768.092 425.411 768.561 424.191C769.053 422.994 769.297 421.685 769.292 420.263C769.287 418.842 769.034 417.524 768.534 416.307C768.056 415.091 767.364 414.033 766.458 413.134C765.576 412.257 764.535 411.562 763.338 411.047C762.163 410.555 760.865 410.311 759.444 410.316C758.046 410.321 756.749 410.574 755.556 411.074C754.362 411.597 753.315 412.3 752.416 413.183C751.54 414.089 750.855 415.151 750.363 416.371C749.894 417.591 749.662 418.911 749.667 420.333Z"
            fill="white"
            id="path12853"
          />
          <path
            d="M748.171 438.077L771.804 439.646L771.638 442.145L750.165 440.719L749.287 453.954L747.126 453.811L748.171 438.077Z"
            fill="white"
            id="path12855"
          />
          <path
            d="M745.773 470.284C746.075 468.528 746.644 466.944 747.482 465.531C748.338 464.145 749.395 462.987 750.653 462.059C751.93 461.156 753.333 460.516 754.862 460.138C756.411 459.786 758.041 459.757 759.753 460.051C761.464 460.345 762.98 460.914 764.3 461.759C765.638 462.629 766.747 463.701 767.628 464.974C768.526 466.272 769.136 467.716 769.459 469.305C769.803 470.898 769.823 472.583 769.517 474.362C769.216 476.118 768.637 477.69 767.781 479.076C766.947 480.467 765.903 481.615 764.649 482.521C763.391 483.449 761.987 484.09 760.439 484.442C758.887 484.816 757.255 484.856 755.543 484.562C753.831 484.268 752.306 483.686 750.968 482.815C749.626 481.967 748.517 480.895 747.641 479.6C746.761 478.328 746.148 476.895 745.804 475.302C745.482 473.713 745.471 472.041 745.773 470.284ZM747.974 470.662C747.733 472.063 747.745 473.393 748.01 474.651C748.293 475.936 748.793 477.086 749.512 478.102C750.248 479.144 751.153 480.009 752.225 480.696C753.319 481.388 754.566 481.854 755.967 482.094C757.368 482.335 758.688 482.31 759.928 482.019C761.191 481.733 762.332 481.219 763.351 480.479C764.39 479.764 765.245 478.847 765.918 477.726C766.61 476.632 767.076 475.385 767.316 473.984C767.557 472.583 767.536 471.241 767.253 469.956C766.992 468.675 766.493 467.514 765.757 466.472C765.038 465.456 764.134 464.591 763.044 463.878C761.972 463.19 760.735 462.726 759.335 462.485C757.956 462.249 756.636 462.274 755.373 462.56C754.107 462.869 752.955 463.381 751.917 464.095C750.897 464.836 750.04 465.764 749.344 466.881C748.671 468.001 748.215 469.262 747.974 470.662Z"
            fill="white"
            id="path12857"
          />
          <path
            d="M740.196 501.08C740.649 499.426 741.339 497.931 742.267 496.595C743.211 495.287 744.25 494.309 745.387 493.661L746.934 495.313C745.97 495.844 745.067 496.661 744.227 497.764C743.381 498.889 742.755 500.191 742.35 501.67C741.831 503.563 741.847 505.123 742.4 506.35C742.946 507.599 743.916 508.415 745.308 508.796C746.7 509.178 747.947 508.982 749.048 508.208C750.143 507.455 750.983 506.013 751.567 503.881L752.015 502.249L753.744 502.723L760.655 512.196L759.652 512.272L763.141 499.545L765.229 500.118L761.204 514.803L759.54 514.347L752.628 504.874L753.692 503.937L753.451 504.818C752.699 507.559 751.529 509.437 749.941 510.452C748.347 511.489 746.593 511.745 744.679 511.22C743.395 510.868 742.326 510.248 741.47 509.358C740.614 508.469 740.063 507.323 739.816 505.922C739.562 504.543 739.689 502.929 740.196 501.08Z"
            fill="white"
            id="path12859"
          />
        </g>
        <g className={gClass('apartament')} onClick={() => click('apartament')}>
          <path
            d="M371.852 171.328L376.64 145.729L379.037 145.132L395.264 165.503L392.702 166.14L377.681 146.969L378.666 146.724L374.38 170.699L371.852 171.328ZM374.461 164.158L374.693 162.008L388.057 158.683L389.27 160.474L374.461 164.158Z"
            fill="white"
            id="path12861"
          />
          <path
            d="M560.487 172.725L568.798 150.545L571.142 151.423L562.832 173.603L560.487 172.725Z"
            fill="white"
            id="path12863"
          />
          <path
            d="M267.648 233.707L261.571 208.383L263.516 206.86L286.644 218.834L284.566 220.461L263.028 209.09L263.827 208.465L269.7 232.101L267.648 233.707ZM267.104 226.097L266.439 224.039L277.282 215.549L279.12 216.689L267.104 226.097Z"
            fill="white"
            id="path12865"
          />
          <path
            d="M291.062 214.472L278.194 194.587L285.637 189.77C287.323 188.68 288.949 188.017 290.517 187.782C292.072 187.528 293.502 187.704 294.808 188.31C296.12 188.885 297.242 189.892 298.174 191.331C299.08 192.732 299.533 194.159 299.532 195.611C299.538 197.031 299.112 198.408 298.256 199.742C297.399 201.075 296.128 202.287 294.442 203.378L288.164 207.44L288.458 205.839L293.164 213.112L291.062 214.472ZM288.568 206.01L286.969 205.594L293.191 201.568C295.179 200.281 296.409 198.881 296.88 197.367C297.358 195.822 297.089 194.263 296.071 192.691C295.042 191.1 293.725 190.206 292.119 190.009C290.533 189.8 288.745 190.338 286.757 191.625L280.535 195.651L280.829 194.05L288.568 206.01Z"
            fill="white"
            id="path12867"
          />
          <path
            d="M307.561 202.495L305.995 176.499L308.176 175.339L328.86 191.164L326.53 192.403L307.306 177.45L308.202 176.973L309.861 201.272L307.561 202.495ZM308.353 194.907L308.057 192.765L320.215 186.296L321.825 187.739L308.353 194.907Z"
            fill="white"
            id="path12869"
          />
          <path
            d="M333.1 188.057L323.862 166.247L332.025 162.789C333.874 162.006 335.59 161.634 337.175 161.673C338.75 161.692 340.129 162.112 341.31 162.935C342.504 163.728 343.435 164.914 344.103 166.492C344.754 168.029 344.954 169.513 344.702 170.942C344.462 172.342 343.805 173.625 342.731 174.791C341.648 175.935 340.182 176.899 338.333 177.682L331.448 180.599L332.027 179.104L335.406 187.08L333.1 188.057ZM347.993 181.748L339.033 176.21L341.525 175.154L350.517 180.679L347.993 181.748ZM332.106 179.291L330.616 178.636L337.44 175.746C339.62 174.822 341.069 173.645 341.786 172.214C342.524 170.775 342.528 169.193 341.798 167.469C341.059 165.724 339.915 164.616 338.368 164.144C336.842 163.664 334.988 163.886 332.807 164.809L325.984 167.7L326.55 166.174L332.106 179.291Z"
            fill="white"
            id="path12871"
          />
          <path
            d="M360.46 176.349L353.462 155.998L345.59 158.705L344.886 156.657L362.997 150.429L363.701 152.477L355.83 155.184L362.828 175.534L360.46 176.349Z"
            fill="white"
            id="path12873"
          />
          <path
            d="M400.645 162.774L397.632 139.281L399.679 139.018L412.769 155.966L411.695 156.103L419.984 136.414L422.031 136.151L425.044 159.645L422.662 159.95L420.126 140.182L420.697 140.109L413.049 158.147L411.874 158.298L399.855 142.783L400.492 142.701L403.028 162.469L400.645 162.774Z"
            fill="white"
            id="path12875"
          />
          <path
            d="M434.795 144.825L447.301 144.231L447.402 146.361L434.896 146.954L434.795 144.825ZM435.583 155.729L449.813 155.054L449.915 157.217L433.185 158.011L432.063 134.351L448.286 133.582L448.389 135.745L434.666 136.396L435.583 155.729Z"
            fill="white"
            id="path12877"
          />
          <path
            d="M456.821 155.94L458.042 132.286L460.103 132.392L475.364 153.78L474.283 153.724L475.343 133.179L477.81 133.306L476.589 156.96L474.528 156.854L459.3 135.468L460.382 135.524L459.322 156.069L456.821 155.94Z"
            fill="white"
            id="path12879"
          />
          <path
            d="M489.842 157.577L492.455 136.216L484.193 135.205L484.456 133.056L503.466 135.381L503.203 137.531L494.941 136.52L492.327 157.881L489.842 157.577Z"
            fill="white"
            id="path12881"
          />
          <path
            d="M515.226 160.893C513.488 160.5 511.935 159.848 510.569 158.938C509.229 158.011 508.128 156.894 507.267 155.589C506.433 154.267 505.867 152.833 505.569 151.285C505.299 149.721 505.355 148.091 505.738 146.397C506.121 144.703 506.769 143.219 507.682 141.945C508.621 140.655 509.749 139.603 511.066 138.791C512.41 137.961 513.884 137.427 515.487 137.189C517.096 136.928 518.78 136.997 520.54 137.395C522.279 137.788 523.818 138.448 525.157 139.376C526.502 140.281 527.594 141.384 528.433 142.684C529.295 143.989 529.861 145.423 530.131 146.988C530.424 148.557 530.379 150.189 529.995 151.883C529.612 153.578 528.951 155.07 528.011 156.361C527.094 157.657 525.966 158.708 524.627 159.516C523.31 160.328 521.847 160.864 520.239 161.125C518.635 161.364 516.964 161.286 515.226 160.893ZM515.719 158.715C517.105 159.029 518.433 159.086 519.704 158.888C521.001 158.672 522.176 158.233 523.228 157.569C524.308 156.888 525.218 156.03 525.961 154.995C526.709 153.939 527.24 152.717 527.553 151.331C527.867 149.945 527.911 148.625 527.686 147.371C527.465 146.096 527.012 144.93 526.326 143.872C525.667 142.798 524.796 141.896 523.712 141.165C522.655 140.417 521.434 139.887 520.048 139.573C518.662 139.26 517.32 139.211 516.022 139.426C514.73 139.619 513.544 140.056 512.465 140.737C511.412 141.401 510.501 142.259 509.732 143.311C508.989 144.346 508.461 145.556 508.147 146.942C507.839 148.306 507.795 149.626 508.015 150.902C508.257 152.182 508.708 153.36 509.367 154.434C510.053 155.491 510.935 156.396 512.014 157.149C513.098 157.879 514.332 158.402 515.719 158.715Z"
            fill="white"
            id="path12883"
          />
          <path
            d="M546.864 168.206L553.722 147.807L545.832 145.155L546.522 143.102L564.675 149.205L563.985 151.257L556.095 148.605L549.238 169.003L546.864 168.206Z"
            fill="white"
            id="path12885"
          />
          <path
            d="M571.322 176.041L581.549 154.677L589.546 158.505C591.356 159.372 592.772 160.412 593.792 161.625C594.821 162.818 595.419 164.13 595.584 165.56C595.78 166.979 595.508 168.462 594.768 170.008C594.047 171.514 593.068 172.646 591.83 173.404C590.622 174.151 589.225 174.508 587.641 174.474C586.056 174.441 584.358 173.991 582.547 173.124L575.802 169.895L577.321 169.309L573.581 177.122L571.322 176.041ZM577.233 169.492L576.752 167.912L583.436 171.111C585.572 172.134 587.409 172.45 588.946 172.061C590.513 171.66 591.701 170.616 592.509 168.927C593.328 167.218 593.401 165.628 592.73 164.156C592.08 162.694 590.686 161.452 588.55 160.429L581.866 157.229L583.384 156.643L577.233 169.492Z"
            fill="white"
            id="path12887"
          />
          <path
            d="M603.137 191.529C601.614 190.602 600.35 189.49 599.345 188.192C598.37 186.886 597.682 185.477 597.281 183.966C596.912 182.447 596.832 180.907 597.043 179.345C597.284 177.776 597.857 176.25 598.759 174.766C599.662 173.282 600.749 172.081 602.02 171.165C603.321 170.24 604.726 169.603 606.233 169.252C607.771 168.894 609.338 168.857 610.934 169.142C612.542 169.407 614.117 170.008 615.658 170.946C617.181 171.873 618.429 172.989 619.404 174.294C620.39 175.581 621.074 176.974 621.456 178.474C621.857 179.985 621.936 181.525 621.694 183.094C621.472 184.675 620.909 186.208 620.007 187.692C619.104 189.176 618.002 190.38 616.7 191.304C615.418 192.24 614.013 192.878 612.487 193.217C610.98 193.567 609.422 193.61 607.815 193.345C606.218 193.06 604.659 192.455 603.137 191.529ZM604.297 189.621C605.512 190.359 606.752 190.837 608.02 191.054C609.319 191.263 610.572 191.22 611.781 190.926C613.021 190.624 614.158 190.101 615.191 189.357C616.237 188.593 617.129 187.604 617.867 186.39C618.606 185.176 619.068 183.939 619.254 182.679C619.451 181.4 619.393 180.15 619.08 178.929C618.797 177.701 618.258 176.568 617.464 175.53C616.7 174.485 615.712 173.593 614.498 172.854C613.283 172.116 612.027 171.642 610.728 171.433C609.442 171.204 608.178 171.241 606.938 171.543C605.73 171.837 604.593 172.36 603.528 173.112C602.494 173.856 601.608 174.835 600.87 176.049C600.143 177.244 599.681 178.481 599.483 179.761C599.305 181.052 599.357 182.311 599.64 183.54C599.954 184.76 600.502 185.899 601.285 186.956C602.079 187.994 603.083 188.882 604.297 189.621Z"
            fill="white"
            id="path12889"
          />
        </g>
        <path
          d="M708.621 581.106C709.182 585.593 713.274 588.775 717.761 588.214C722.248 587.654 725.43 583.562 724.869 579.075C724.309 574.588 720.217 571.406 715.73 571.966C711.243 572.527 708.061 576.619 708.621 581.106Z"
          fill="#5F8DB1"
          id="path12891"
        />
        <path
          d="M683.7 235.335C684.26 239.822 688.352 243.005 692.839 242.444C697.326 241.883 700.508 237.791 699.948 233.304C699.387 228.818 695.295 225.635 690.808 226.196C686.322 226.757 683.139 230.848 683.7 235.335Z"
          fill="#5F8DB1"
          id="path12893"
        />
        <path
          d="M233.527 625.364C234.088 629.851 238.179 633.033 242.666 632.472C247.153 631.912 250.336 627.82 249.775 623.333C249.214 618.846 245.122 615.664 240.635 616.224C236.149 616.785 232.966 620.877 233.527 625.364Z"
          fill="#5F8DB1"
          id="path12895"
        />
        <path
          d="M196.151 270.476C196.712 274.963 200.804 278.146 205.29 277.585C209.777 277.024 212.96 272.932 212.399 268.445C211.838 263.959 207.746 260.776 203.259 261.337C198.773 261.898 195.59 265.989 196.151 270.476Z"
          fill="#5F8DB1"
          id="path12897"
        />
      </g>
    </svg>
  );
}
