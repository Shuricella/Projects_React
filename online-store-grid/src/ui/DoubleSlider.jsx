import {useEffect, useRef} from 'react';
import styles from './double_slider.module.css';

const DoubleSlider = ( {
  min= 100, 
  max= 200,
  formatValue = value => value,
  selected = {from: min, to: max},
  precision= 0, 
  filterName= ''
} ) => {

  const elementRef = useRef(null);
  let dragging = null;
  let shiftX = null;
  let subElements = {};

  useEffect(() => {
    const element = elementRef.current;
    const { thumbLeft, thumbRight, inner, progress, from, to } = subElements;

    const onThumbPointerMove = (event) => {
      event.preventDefault();

      const { left: innerLeft, right: innerRight, width } = inner.getBoundingClientRect();

      if (dragging === thumbLeft) {
        let newLeft = (event.clientX - innerLeft + shiftX) / width;

        if (newLeft < 0) {
          newLeft = 0;
        }
        newLeft *= 100;

        const right = parseFloat(thumbRight.style.right);

        if (newLeft + right > 100) {
          newLeft = 100 - right;
        }

        thumbLeft.style.left = progress.style.left = newLeft + "%";

        from.innerHTML = formatValue(getValue().from);
      }

      if (dragging === thumbRight) {
        let newRight = (innerRight - event.clientX - shiftX) / width;

        if (newRight < 0) {
          newRight = 0;
        }
        newRight *= 100;

        const left = parseFloat(thumbLeft.style.left);

        if (left + newRight > 100) {
          newRight = 100 - left;
        }

        thumbRight.style.right = progress.style.right = newRight + "%";

        to.innerHTML = formatValue(getValue().to);
      }
    };

    const onThumbPointerUp = () => {
      element.classList.remove("range-slider_dragging");

      document.removeEventListener("pointermove", onThumbPointerMove);
      document.removeEventListener("pointerup", onThumbPointerUp);

      element.dispatchEvent(
        new CustomEvent("range-selected", {
          bubbles: true,
          detail: {
            filterName: filterName,
            value: getValue(),
          },
        })
      );
    };

    const onThumbPointerDown = (event) => {
      const thumbElem = event.target.closest("span");

      if (!thumbElem) return;

      event.preventDefault();

      const { left, right } = thumbElem.getBoundingClientRect();

      if (thumbElem === thumbLeft) {
        shiftX = right - event.clientX;
      } else {
        shiftX = left - event.clientX;
      }

      dragging = thumbElem;

      element.classList.add("range-slider_dragging");

      document.addEventListener("pointermove", onThumbPointerMove);
      document.addEventListener("pointerup", onThumbPointerUp);
    };

    thumbLeft.addEventListener("pointerdown", onThumbPointerDown);
    thumbRight.addEventListener("pointerdown", onThumbPointerDown);

    return () => {
      thumbLeft.removeEventListener("pointerdown", onThumbPointerDown);
      thumbRight.removeEventListener("pointerdown", onThumbPointerDown);
    };
  }, [formatValue, selected, precision, filterName]);

  const getValue = () => {
    const rangeTotal = max - min;
    const { left } = subElements.thumbLeft.style;
    const { right } = subElements.thumbRight.style;

    const leftShift = parseFloat(left) * (rangeTotal / 100);
    const rightShift = parseFloat(right) * (rangeTotal / 100);

    const from = Math.round((min + leftShift) * 10 ** precision) / 10 ** precision;
    const to = Math.round((max - rightShift) * 10 ** precision) / 10 ** precision;

    return { from, to };
  };
  
    
  const template = `
    <div class="range-slider">
        <span data-element="from">${formatValue(selected.from)}</span>

        <div data-element="inner" class="range-slider__inner">
          <span data-element="progress" class="range-slider__progress"></span>

          <span data-element="thumbLeft" class="range-slider__thumb-left">
            <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.959114 4.55246L4.65304 0.992556C4.97059 0.686527 5.5 0.911567 5.5 1.35258V16.9297C5.5 17.3481 5.01686 17.5815 4.68917 17.3214L1.06751 14.4471C0.708988 14.1625 0.5 13.7298 0.5 13.2721V5.63253C0.5 5.2251 0.66574 4.83519 0.959114 4.55246Z" fill="white" stroke="#000000"/>
            </svg>
          </span>
          
          <span data-element="thumbRight" class="range-slider__thumb-right">
            <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.959114 4.55246L4.65304 0.992556C4.97059 0.686527 5.5 0.911567 5.5 1.35258V16.9297C5.5 17.3481 5.01686 17.5815 4.68917 17.3214L1.06751 14.4471C0.708988 14.1625 0.5 13.7298 0.5 13.2721V5.63253C0.5 5.2251 0.66574 4.83519 0.959114 4.55246Z" fill="white" stroke="#000000"/>
            </svg>
          </span>
        </div>

        <span data-element="to">${formatValue(selected.to)}</span>
      </div>
  `;

    return <div ref={elementRef} dangerouslySetInnerHTML={{ __html: template }} />;
  
  };

  export default DoubleSlider;





  // <div className={styles['range-slider']}>
  //                                  {/* ${this.formatValue(from)} */}
  //       <span data-element="from">${formatValue(selected.from)}                                   </span>

  //       <div data-element="inner" className={styles['range-slider__inner']}>
  //         <span data-element="progress" className={styles['range-slider__progress']}></span>

  //         <span data-element="thumbLeft" className={styles['range-slider__thumb-left']}>
  //           <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  //             <path d="M0.959114 4.55246L4.65304 0.992556C4.97059 0.686527 5.5 0.911567 5.5 1.35258V16.9297C5.5 17.3481 5.01686 17.5815 4.68917 17.3214L1.06751 14.4471C0.708988 14.1625 0.5 13.7298 0.5 13.2721V5.63253C0.5 5.2251 0.66574 4.83519 0.959114 4.55246Z" fill="white" stroke="#000000"/>
  //           </svg>
  //         </span>
          
  //         <span data-element="thumbRight" className={styles['range-slider__thumb-right']}>
  //           <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  //             <path d="M0.959114 4.55246L4.65304 0.992556C4.97059 0.686527 5.5 0.911567 5.5 1.35258V16.9297C5.5 17.3481 5.01686 17.5815 4.68917 17.3214L1.06751 14.4471C0.708988 14.1625 0.5 13.7298 0.5 13.2721V5.63253C0.5 5.2251 0.66574 4.83519 0.959114 4.55246Z" fill="white" stroke="#000000"/>
  //           </svg>
  //         </span>
  //       </div>
  //                                {/* ${this.formatValue(to)} */}
  //       <span data-element="to">${formatValue(selected.to)}                                 </span>
  //     </div>