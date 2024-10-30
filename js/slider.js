/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./app/assets/js/slider.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * Main slider class
 *
 * @since 1.0.0
 */
var MGBlockSlider = /*#__PURE__*/function () {
  function MGBlockSlider() {
    var _this = this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$selector = _ref.selector,
      selector = _ref$selector === void 0 ? '.wp-block-mgblockslider-slider' : _ref$selector,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'light' : _ref$theme,
      _ref$directionNav = _ref.directionNav,
      directionNav = _ref$directionNav === void 0 ? true : _ref$directionNav,
      _ref$hideDirections = _ref.hideDirections,
      hideDirections = _ref$hideDirections === void 0 ? true : _ref$hideDirections,
      _ref$controlNav = _ref.controlNav,
      controlNav = _ref$controlNav === void 0 ? false : _ref$controlNav,
      _ref$hideControls = _ref.hideControls,
      hideControls = _ref$hideControls === void 0 ? false : _ref$hideControls,
      _ref$thumbsNav = _ref.thumbsNav,
      thumbsNav = _ref$thumbsNav === void 0 ? false : _ref$thumbsNav,
      _ref$thumbsNavFloat = _ref.thumbsNavFloat,
      thumbsNavFloat = _ref$thumbsNavFloat === void 0 ? false : _ref$thumbsNavFloat,
      _ref$thumbsNavFloatPo = _ref.thumbsNavFloatPos,
      thumbsNavFloatPos = _ref$thumbsNavFloatPo === void 0 ? false : _ref$thumbsNavFloatPo,
      _ref$hideThumbs = _ref.hideThumbs,
      hideThumbs = _ref$hideThumbs === void 0 ? false : _ref$hideThumbs,
      _ref$autoStart = _ref.autoStart,
      autoStart = _ref$autoStart === void 0 ? true : _ref$autoStart,
      _ref$stopOnHover = _ref.stopOnHover,
      stopOnHover = _ref$stopOnHover === void 0 ? true : _ref$stopOnHover,
      _ref$pauseUnfocused = _ref.pauseUnfocused,
      pauseUnfocused = _ref$pauseUnfocused === void 0 ? true : _ref$pauseUnfocused,
      _ref$waitVideo = _ref.waitVideo,
      waitVideo = _ref$waitVideo === void 0 ? false : _ref$waitVideo,
      _ref$swipeNav = _ref.swipeNav,
      swipeNav = _ref$swipeNav === void 0 ? true : _ref$swipeNav,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? 'slide' : _ref$animation,
      _ref$vertical = _ref.vertical,
      vertical = _ref$vertical === void 0 ? false : _ref$vertical,
      _ref$verticalArrows = _ref.verticalArrows,
      verticalArrows = _ref$verticalArrows === void 0 ? false : _ref$verticalArrows,
      _ref$transition = _ref.transition,
      transition = _ref$transition === void 0 ? 'linear' : _ref$transition,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 5.0 : _ref$duration,
      _ref$speed = _ref.speed,
      speed = _ref$speed === void 0 ? 0.5 : _ref$speed,
      _ref$arrowType = _ref.arrowType,
      arrowType = _ref$arrowType === void 0 ? '' : _ref$arrowType,
      _ref$paginationType = _ref.paginationType,
      paginationType = _ref$paginationType === void 0 ? '' : _ref$paginationType,
      _ref$autoHeight = _ref.autoHeight,
      autoHeight = _ref$autoHeight === void 0 ? true : _ref$autoHeight,
      _ref$lightbox = _ref.lightbox,
      lightbox = _ref$lightbox === void 0 ? false : _ref$lightbox,
      _ref$lightboxOpens = _ref.lightboxOpens,
      lightboxOpens = _ref$lightboxOpens === void 0 ? 'slide' : _ref$lightboxOpens,
      _ref$lightboxArrows = _ref.lightboxArrows,
      lightboxArrows = _ref$lightboxArrows === void 0 ? false : _ref$lightboxArrows,
      _ref$lightboxCounter = _ref.lightboxCounter,
      lightboxCounter = _ref$lightboxCounter === void 0 ? false : _ref$lightboxCounter;
    _classCallCheck(this, MGBlockSlider);
    this.selector = selector;
    this.theme = theme;
    this.directionNav = directionNav;
    this.hideDirections = hideDirections;
    this.controlNav = controlNav;
    this.hideControls = hideControls;
    this.thumbsNav = thumbsNav;
    this.thumbsNavFloat = thumbsNavFloat;
    this.thumbsNavFloatPos = thumbsNavFloatPos;
    this.hideThumbs = hideThumbs;
    this.autoStart = autoStart;
    this.stopOnHover = stopOnHover;
    this.pauseUnfocused = pauseUnfocused;
    this.waitVideo = waitVideo;
    this.swipeNav = swipeNav;
    this.animation = animation;
    this.vertical = vertical;
    this.verticalArrows = verticalArrows;
    this.transition = transition;
    this.duration = duration * 1000;
    this.speed = speed * 1000;
    this.arrowType = arrowType;
    this.paginationType = paginationType;
    this.autoHeight = autoHeight;
    this.lightbox = lightbox;
    this.lightboxOpens = lightboxOpens;
    this.lightboxArrows = lightboxArrows;
    this.lightboxCounter = lightboxCounter;
    this.current = 0;
    this.loadState = false;
    this.setAnimation = false;
    this.triggerObserver = false;
    this.slider = document.querySelector("".concat(this.selector, " .wp-block-mg-block-slider-slider__container"));
    this.slidesContainer = document.querySelector("".concat(this.selector, " .wp-block-mg-block-slider-slides__container"));
    this.slides = document.querySelectorAll("".concat(this.selector, " .wp-block-mg-block-slider-slide"));
    this.i18n = mgblocksliderI18n;
    if (this.slider) {
      document.addEventListener('DOMContentLoaded', function () {
        return _this.initSlider();
      });
      window.addEventListener('load', function () {
        _this.loadState = true;
        _this.slider.parentElement.removeChild(_this.loadingSpinner);
        if (_this.autoStart) {
          _this.startAnimation();
        }
      });
    }
  }

  /**
   * Init slider
   */
  _createClass(MGBlockSlider, [{
    key: "initSlider",
    value: function initSlider() {
      // Transition styles.
      if ('none' !== this.animation) {
        this.slidesContainer.style.transitionDuration = "".concat(this.speed, "ms");
        this.slidesContainer.style.transitionTimingFunction = this.transition;
      }

      // Themes.
      this.slider.parentElement.classList.add("".concat(this.theme, "-theme"));

      // Animations.
      this.slider.classList.add("is-".concat(this.animation));

      // Vertical animations.
      if (this.vertical) {
        this.slider.classList.add('is-vertical');
      }
      this.slides[this.current].classList.add('wp-block-mg-block-slider-slide__current');

      // If the slider only contains 2 slides, add a custom class to prevent
      // breaking the animations.
      if (this.slides.length === 2) {
        this.slidesContainer.classList.add('wp-block-mg-block-slider-slides__container--2-slides');
      }
      this.createControls();
      this.orderSlides(this.current);
      this.loadingEvent(this.loadState);
      if (this.swipeNav) {
        this.swipeEvents();
        this.keyEvents();
      }
      if (this.autoHeight) {
        this.calcMinHeight();
        this.slider.parentElement.classList.add('auto-height');
      }
      if (this.lightbox) {
        this.createLightbox();
        this.slider.parentElement.classList.add('has-lightbox');
      }
    }

    /**
     * Calculate the max height of all slides and set to the container for
     * auto-height.
     */
  }, {
    key: "calcMinHeight",
    value: function calcMinHeight() {
      var _this2 = this;
      this.minHeight = this.slides[this.current].getBoundingClientRect().height;
      this.slides.forEach(function (slide) {
        if (slide.getBoundingClientRect().height > _this2.minHeight) {
          _this2.minHeight = Math.floor(slide.getBoundingClientRect().height);

          // Recalculate the slider height after resize the window.
          window.addEventListener('resize', function () {
            clearTimeout(window.resizedFinished);
            window.resizedFinished = setTimeout(function () {
              _this2.minHeight = Math.floor(slide.getBoundingClientRect().height);
              _this2.slidesContainer.style.height = "".concat(_this2.minHeight, "px");
            }, 100);
          });
        }
        _this2.slidesContainer.style.height = "".concat(_this2.minHeight, "px");
      });
    }

    /**
     * Create controls for change slides
     */
  }, {
    key: "createControls",
    value: function createControls() {
      var _this3 = this;
      //
      // Directional arrows
      // --------------------------------------
      if (this.directionNav) {
        var directionNavigation = document.createElement('div');
        directionNavigation.classList.add('wp-block-mg-block-slider-slider__control', 'wp-block-mg-block-slider-slider__control__arrows');
        directionNavigation.innerHTML = "\n\t\t\t\t<p class=\"wp-block-mg-block-slider-slider__control__arrow wp-block-mg-block-slider-slider__control__arrow--prev\" title=\"".concat(this.i18n.prev, "\">\n\t\t\t\t\t<span class=\"screen-reader-text\">").concat(this.i18n.showPrevSlide, "</span>\n\t\t\t\t</p>\n\t\t\t\t<p class=\"wp-block-mg-block-slider-slider__control__arrow wp-block-mg-block-slider-slider__control__arrow--next\" title=\"").concat(this.i18n.next, "\">\n\t\t\t\t\t<span class=\"screen-reader-text\">").concat(this.i18n.showNextSlide, "</span>\n\t\t\t\t</p>");
        if ('' !== this.arrowType) {
          directionNavigation.classList.add("wp-block-mg-block-slider-slider__control--".concat(this.arrowType));
        }
        if (this.verticalArrows) {
          directionNavigation.classList.add('wp-block-mg-block-slider-slider__control--vertical');
        }
        this.slider.appendChild(directionNavigation);
        var navPrev = directionNavigation.querySelector(".wp-block-mg-block-slider-slider__control__arrow--prev"),
          navNext = directionNavigation.querySelector(".wp-block-mg-block-slider-slider__control__arrow--next");

        // Change slides.
        navPrev.addEventListener('click', function (e) {
          if (!e.target.classList.contains('is-changing')) {
            e.target.classList.add('is-changing');
            if (_this3.current > 0) {
              _this3.current--;
            } else {
              _this3.current = _this3.slides.length - 1;
            }
            _this3.changeSlide('prev');
            setTimeout(function () {
              return e.target.classList.remove('is-changing');
            }, _this3.speed);
          }
        });
        navNext.addEventListener('click', function (e) {
          if (!e.target.classList.contains('is-changing')) {
            e.target.classList.add('is-changing');
            _this3.current = (_this3.current + 1) % _this3.slides.length;
            _this3.changeSlide('next');
            setTimeout(function () {
              return e.target.classList.remove('is-changing');
            }, _this3.speed);
          }
        });

        // Add classes to the slider.
        this.slider.classList.add('directional-nav');
        if (this.hideDirections) {
          this.slider.classList.add('directional-nav--is-hidden');
        }
      }

      //
      // Control dots
      // --------------------------------------
      if (this.controlNav) {
        var controlNavigation = document.createElement('ul');
        controlNavigation.classList.add('wp-block-mg-block-slider-slider__control', 'wp-block-mg-block-slider-slider__control__dots');
        this.slides.forEach(function (slide, index) {
          return controlNavigation.innerHTML += "\n\t\t\t\t<li class=\"wp-block-mg-block-slider-slider__control__dot\" title=\"".concat(index + 1, "\">\n\t\t\t\t\t<span class=\"screen-reader-text\">").concat(_this3.i18n.showSlide, " ").concat(index + 1, "</span>\n\t\t\t\t</li>");
        });
        if ('' !== this.paginationType) {
          controlNavigation.classList.add("wp-block-mg-block-slider-slider__control--".concat(this.paginationType));
        }
        if (this.thumbsNavFloat) {
          controlNavigation.classList.add('is-floating', "wp-block-mg-block-slider-slider__control--floating-".concat(this.thumbsNavFloatPos));
        }
        this.slider.insertAdjacentElement('afterend', controlNavigation);
        this.navDots = document.querySelectorAll("".concat(this.selector, " .wp-block-mg-block-slider-slider__control__dot"));
        this.navDots[this.current].classList.add('wp-block-mg-block-slider-slider__control__dot--current');

        // Change slides and dots.
        this.navDots.forEach(function (dot, index) {
          dot.addEventListener('click', function () {
            _this3.changeControls(_this3.navDots, 'wp-block-mg-block-slider-slider__control__dot--current', index);
            _this3.changeSlide('dots', index);

            // Check the current index and change slides in the correct
            // order.
            if (index === _this3.current + 1) {
              _this3.changeSlide(false, index);
            } else if (index === _this3.current - 1) {
              _this3.changeSlide(false, index);
            }
            _this3.current = index;
          });
        });

        // Add classes to the slider.
        this.slider.classList.add('control-nav');
        if (this.hideControls) {
          this.slider.classList.add('control-nav--is-hidden');
        }
      }

      //
      // Thumbnails
      // --------------------------------------
      if (this.thumbsNav) {
        var thumbNavigation = document.createElement('ul');
        thumbNavigation.classList.add('wp-block-mg-block-slider-slider__thumbnails');
        if (this.slider.classList.contains('alignwide')) {
          thumbNavigation.classList.add('alignwide');
        }
        if (this.slider.classList.contains('alignfull')) {
          thumbNavigation.classList.add('alignfull');
        }
        this.slides.forEach(function (slide, index) {
          // Add thumbnails based on the images file name or with a generic image.
          var slideSrc = slide.querySelector('img') ? slide.querySelector('img').src : null;
          if (slideSrc) {
            var imageFormat = slideSrc.split('.').pop(),
              imagePath = slideSrc.slice(0, slideSrc.length - imageFormat.length - 1);
            thumbNavigation.innerHTML += "\n\t\t\t\t\t\t<li class=\"wp-block-mg-block-slider-slider__thumb\">\n\t\t\t\t\t\t\t<img src=\"".concat(imagePath, ".").concat(imageFormat, "\" alt=\"").concat(_this3.i18n.slide, " ").concat(index + 1, "\">\n\t\t\t\t\t\t\t<span class=\"screen-reader-text\">").concat(_this3.i18n.showSlide, " ").concat(index + 1, "</span>\n\t\t\t\t\t\t</li>");
          } else {
            slideSrc = slide.querySelector('video') ? 'video' : 'img';
            thumbNavigation.innerHTML += "\n\t\t\t\t\t\t<li class=\"wp-block-mg-block-slider-slider__thumb wp-block-mg-block-slider-slider__thumb--".concat(slideSrc, "\">\n\t\t\t\t\t\t\t<span class=\"screen-reader-text\">").concat(_this3.i18n.showSlide, " ").concat(index + 1, "</span>\n\t\t\t\t\t\t</li>");
          }
        });
        this.slider.insertAdjacentElement('afterend', thumbNavigation);
        this.thumbs = document.querySelectorAll("".concat(this.selector, " .wp-block-mg-block-slider-slider__thumbnails .wp-block-mg-block-slider-slider__thumb"));
        this.thumbs[this.current].classList.add('wp-block-mg-block-slider-slider__thumb--current');

        // Change slides and thumbnails.
        this.thumbs.forEach(function (img, index) {
          img.addEventListener('click', function () {
            _this3.changeControls(_this3.navDots, 'wp-block-mg-block-slider-slider__control__dot--current', index);
            _this3.changeSlide('dots', index);

            // Check the current index and change slides in the correct order.
            if (index === _this3.current + 1) {
              _this3.changeSlide(false, index);
            } else if (index === _this3.current - 1) {
              _this3.changeSlide(false, index);
            }
            _this3.current = index;
          });
        });

        // Add classes to the slider.
        this.slider.classList.add('thumbnails-nav');
        if (this.hideThumbs) {
          this.slider.classList.add('thumbnails-nav--is-hidden');
        }
      }
    }

    /**
     * Change slides depending the direction
     *
     * @param { string } direction The direction of the slides.
     * @param { number } index     The position number of the current slide.
     */
  }, {
    key: "changeSlide",
    value: function changeSlide(direction) {
      var _this4 = this;
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.current;
      this.slides.forEach(function (slide, position) {
        slide.classList.remove('wp-block-mg-block-slider-slide__current', 'wp-block-mg-block-slider-slide__prev', 'wp-block-mg-block-slider-slide__next');
        setTimeout(function () {
          _this4.slidesContainer.classList.remove('wp-block-mg-block-slider-slides__container--prev', 'wp-block-mg-block-slider-slides__container--next');
        }, _this4.speed);

        // If there are videos.
        if (slide.querySelector('video')) {
          var videoDuration = Math.ceil(slide.querySelector('video').duration) * 1000;

          // Pause the video on change slide.
          if (_this4.pauseUnfocused) {
            if (position === index) {
              slide.querySelector('video').play();
            } else {
              slide.querySelector('video').pause();
            }
          }

          // Stop animation and wait until the video ends.
          if (position === index && _this4.waitVideo) {
            if (slide.querySelector('video').autoplay) {
              clearInterval(_this4.setAnimation);
              _this4.setAnimation = setInterval(function (nextIndex) {
                _this4.current = (_this4.current + 1) % _this4.slides.length;
                _this4.changeSlide('next', nextIndex);
              }, videoDuration + 250);
            } else {
              _this4.setAnimation = setInterval(function (nextIndex) {
                _this4.current = (_this4.current + 1) % _this4.slides.length;
                _this4.changeSlide('next', nextIndex);
              }, _this4.duration);
            }
          }
        }
      });
      if ('none' !== this.animation || 'fade' !== this.animation) {
        this.orderSlides(index);
        if ('next' === direction) {
          this.slidesContainer.classList.add('wp-block-mg-block-slider-slides__container--next');
        }
        if ('prev' === direction) {
          this.slidesContainer.classList.add('wp-block-mg-block-slider-slides__container--prev');
        }
      }
      this.slides[index].classList.add('wp-block-mg-block-slider-slide__current');
      if (this.controlNav) {
        this.changeControls(this.navDots, 'wp-block-mg-block-slider-slider__control__dot--current', index);
      }
      if (this.thumbsNav) {
        this.changeControls(this.thumbs, 'wp-block-mg-block-slider-slider__thumb--current', index);
      }
    }

    /**
     * Change the current element control
     *
     * @param { Object } control      The elements to control and interact.
     * @param { string } currentClass The current control class to modify.
     * @param { number } index        The position number of the current slide.
     */
  }, {
    key: "changeControls",
    value: function changeControls(control, currentClass) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.current;
      if (typeof control !== 'undefined') {
        control.forEach(function (el) {
          return el.classList.remove(currentClass);
        });
        control[index].classList.add(currentClass);
      }
    }

    /**
     * Order slides for correct animations
     *
     * @param { number } index The position number of the current slide.
     */
  }, {
    key: "orderSlides",
    value: function orderSlides(index) {
      if (this.slides.length > 2) {
        // Prevent null on previous sibling of current.
        if (undefined != this.slides[index].previousElementSibling) {
          this.slides[index].previousElementSibling.classList.add('wp-block-mg-block-slider-slide__prev');
        } else {
          this.slides[this.slides.length - 1].classList.add('wp-block-mg-block-slider-slide__prev');
        }

        // Prevent null on next sibling of current.
        if (undefined != this.slides[index].nextElementSibling) {
          this.slides[index].nextElementSibling.classList.add('wp-block-mg-block-slider-slide__next');
        } else {
          this.slides[0].classList.add('wp-block-mg-block-slider-slide__next');
        }
      }
    }

    /**
     * Change slides with a swipe on touch screens
     */
  }, {
    key: "swipeEvents",
    value: function swipeEvents() {
      var _this5 = this;
      var touchstartX = 0,
        startTouch = 0;
      this.slider.parentElement.addEventListener('touchstart', function (e) {
        // Stop animation to prevent overlapping.
        clearInterval(_this5.setAnimation);
        _this5.slider.classList.add('dragging');
        _this5.slidesContainer.style.transitionDuration = '0ms';
        startTouch = e.touches[0].clientX - _this5.slides[_this5.current].clientLeft;
      });
      this.slider.parentElement.addEventListener('touchmove', function (e) {
        touchstartX = e.touches[0].clientX;
        if (!_this5.vertical && _this5.slides.length > 2 && ('slide' === _this5.animation || 'cards' === _this5.animation)) {
          _this5.slides[_this5.current].style.transform = "translate3d(".concat(touchstartX - startTouch, "px, 0, 0)");
          _this5.slidesContainer.querySelector('.wp-block-mg-block-slider-slide__prev').style.transform = "translate3d(calc(".concat(touchstartX - startTouch, "px - 100%), 0, 0)");
          _this5.slidesContainer.querySelector('.wp-block-mg-block-slider-slide__next').style.transform = "translate3d(calc(".concat(touchstartX - startTouch, "px + 100%), 0, 0)");
        }
      });
      this.slider.parentElement.addEventListener('touchend', function () {
        _this5.slidesContainer.querySelector('.wp-block-mg-block-slider-slide__current').style.removeProperty('transform');
        if (_this5.slides.length > 2) {
          _this5.slidesContainer.querySelector('.wp-block-mg-block-slider-slide__prev').style.removeProperty('transform');
          _this5.slidesContainer.querySelector('.wp-block-mg-block-slider-slide__next').style.removeProperty('transform');
        }
        if (0 !== touchstartX) {
          if (startTouch - touchstartX < -50) {
            if (_this5.current > 0) {
              _this5.current--;
            } else {
              _this5.current = _this5.slides.length - 1;
            }
            _this5.changeSlide('prev');
          } else if (startTouch - touchstartX > 50) {
            _this5.current = (_this5.current + 1) % _this5.slides.length;
            _this5.changeSlide('next');
          }
          touchstartX = 0;
        }
        _this5.slider.classList.remove('dragging');
        _this5.slidesContainer.style.transitionDuration = "".concat(_this5.speed, "ms");

        // Restart animation.
        if (_this5.autoStart) {
          _this5.setAnimation = setInterval(function () {
            _this5.current = (_this5.current + 1) % _this5.slides.length;
            _this5.changeSlide('next', _this5.current);
          }, _this5.duration);
        }
      });
    }

    /**
     * Change slides with the keyboard <- ->
     */
  }, {
    key: "keyEvents",
    value: function keyEvents() {
      var _this6 = this;
      document.addEventListener('keydown', function (e) {
        // Stop animation to prevent overlapping.
        clearInterval(_this6.setAnimation);
        switch (e.key) {
          case 'ArrowLeft':
            if (!_this6.slider.classList.contains('is-changing')) {
              _this6.slider.classList.add('is-changing');
              if (_this6.current > 0) {
                _this6.current--;
              } else {
                _this6.current = _this6.slides.length - 1;
              }
              _this6.changeSlide('prev');
              setTimeout(function () {
                return _this6.slider.classList.remove('is-changing');
              }, _this6.speed);
            }
            break;
          case 'ArrowRight':
            if (!_this6.slider.classList.contains('is-changing')) {
              _this6.slider.classList.add('is-changing');
              _this6.current = (_this6.current + 1) % _this6.slides.length;
              _this6.changeSlide('next');
              setTimeout(function () {
                return _this6.slider.classList.remove('is-changing');
              }, _this6.speed);
            }
            break;
        }

        // Restart animation.
        if (_this6.autoStart) {
          _this6.setAnimation = setInterval(function () {
            _this6.current = (_this6.current + 1) % _this6.slides.length;
            _this6.changeSlide('next', _this6.current);
          }, _this6.duration);
        }
      });
    }

    /**
     * Auto start animation
     */
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var _this7 = this;
      this.setAnimation = setInterval(function () {
        _this7.current = (_this7.current + 1) % _this7.slides.length;
        _this7.changeSlide('next');
      }, this.duration);
      if (this.stopOnHover) {
        // Stop animation on hover.
        this.slider.parentElement.addEventListener('mouseenter', function () {
          return clearInterval(_this7.setAnimation);
        });

        // Resume animation when lost hover.
        this.slider.parentElement.addEventListener('mouseleave', function () {
          _this7.setAnimation = setInterval(function () {
            _this7.current = (_this7.current + 1) % _this7.slides.length;
            _this7.changeSlide('next', _this7.current);
          }, _this7.duration);
        });
      } else {
        // Stop and restart animation on click to prevent overlapping.
        this.slider.parentElement.addEventListener('click', function () {
          clearInterval(_this7.setAnimation);
          _this7.setAnimation = setInterval(function () {
            _this7.current = (_this7.current + 1) % _this7.slides.length;
            _this7.changeSlide('next', _this7.current);
          }, _this7.duration);
        });
      }
      if (this.pauseUnfocused) {
        // Observe when the slider gets out of window visibility.
        var Observer = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              clearInterval(_this7.setAnimation);
              _this7.triggerObserver = true;
            } else if (_this7.triggerObserver) {
              _this7.setAnimation = setInterval(function (index) {
                _this7.current = (_this7.current + 1) % _this7.slides.length;
                _this7.changeSlide('next', index);
              }, _this7.duration);
            }
          });
        }, {
          root: null,
          rootMargin: '0px',
          threshold: 0.3
        });
        Observer.observe(this.slider);
      }

      // Stop animation on change the browser tab.
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState !== 'visible') {
          clearInterval(_this7.setAnimation);
        } else {
          _this7.setAnimation = setInterval(function () {
            _this7.current = (_this7.current + 1) % _this7.slides.length;
            _this7.changeSlide('next', _this7.current);
          }, _this7.duration);
        }
      });
    }

    /**
     * Lightbox
     */
  }, {
    key: "createLightbox",
    value: function createLightbox() {
      var _this8 = this;
      var lightbox = document.createElement('div');
      lightbox.classList.add('wp-block-mg-block-slider-slider__lightbox');
      lightbox.innerHTML = "\n\t\t\t<ul class=\"wp-block-mg-block-slider-slider__lightbox__container\"></ul>\n\t\t\t<p class=\"wp-block-mg-block-slider-slider__lightbox__control wp-block-mg-block-slider-slider__lightbox__control--close\" title=\"".concat(this.i18n.closeLightbox, "\"><span class=\"screen-reader-text\">").concat(this.i18n.closeLightbox, "</span></p>\n\t\t\t<p class=\"wp-block-mg-block-slider-slider__lightbox__control wp-block-mg-block-slider-slider__lightbox__control--prev\" title=\"").concat(this.i18n.prev, "\"><span class=\"screen-reader-text\">").concat(this.i18n.prevSlide, "</span></p>\n\t\t\t<p class=\"wp-block-mg-block-slider-slider__lightbox__control wp-block-mg-block-slider-slider__lightbox__control--next\" title=\"").concat(this.i18n.next, "\"><span class=\"screen-reader-text\">").concat(this.i18n.nextSlide, "</span></p>\n\t\t");
      var lightboxContainer = lightbox.querySelector('.wp-block-mg-block-slider-slider__lightbox__container');
      var lightboxPrev = lightbox.querySelector('.wp-block-mg-block-slider-slider__lightbox__control--prev');
      var lightboxNext = lightbox.querySelector('.wp-block-mg-block-slider-slider__lightbox__control--next');

      // Open icon.
      var openLightbox;
      if ('button' === this.lightboxOpens) {
        openLightbox = document.createElement('p');
        openLightbox.classList.add('wp-block-mg-block-slider-slide__open-lightbox');
        openLightbox.setAttribute('title', this.i18n.openLightbox);
        openLightbox.innerHTML = "+ <span class=\"screen-reader-text\">".concat(this.i18n.openLightbox, "</span>");
      }

      // Slides counter.
      var slidesCounter;
      if (this.lightboxCounter) {
        slidesCounter = document.createElement('span');
        slidesCounter.classList.add('wp-block-mg-block-slider-slider__lightbox__control', 'wp-block-mg-block-slider-slider__lightbox__control--counter');
        lightbox.appendChild(slidesCounter);
      }

      // Control types.
      if ('' !== this.arrowType) {
        lightbox.querySelectorAll('.wp-block-mg-block-slider-slider__lightbox__control').forEach(function (control) {
          return control.classList.add("wp-block-mg-block-slider-slider__lightbox__control--".concat(_this8.arrowType));
        });
        if ('button' === this.lightboxOpens) {
          openLightbox.classList.add("wp-block-mg-block-slider-slide__open-lightbox--".concat(this.arrowType));
        }
      }

      // Hide controls.
      if (!this.lightboxArrows) {
        lightboxPrev.classList.add("wp-block-mg-block-slider-slider__lightbox__control--hidden");
        lightboxNext.classList.add("wp-block-mg-block-slider-slider__lightbox__control--hidden");
      }

      // Get all the slides to show on lightbox.
      this.slides.forEach(function (slide) {
        var slideContent = slide.cloneNode(true);
        slideContent.classList.remove('wp-block-mg-block-slider-slide__current', 'wp-block-mg-block-slider-slide__prev', 'wp-block-mg-block-slider-slide__next');

        // Append slides clones.
        lightboxContainer.appendChild(slideContent);
        if ('button' === _this8.lightboxOpens) {
          // Append open icon.
          var openLightboxItem = openLightbox.cloneNode(true);
          slide.appendChild(openLightboxItem);
          openLightboxItem.addEventListener('click', function () {
            document.body.style.overflow = 'hidden';
            lightboxContainer.style.transform = "translateX(-".concat(_this8.current * 100, "vw)");
            lightbox.classList.add('wp-block-mg-block-slider-slider__lightbox--is-open');
            slideContent.classList.add('wp-block-mg-block-slider-slide__current');
            if (_this8.lightboxCounter) {
              slidesCounter.innerHTML = "".concat(_this8.current + 1, "/").concat(_this8.slides.length);
            }
          });
        } else {
          slide.setAttribute('data-openlightbox', 'true');
          slide.addEventListener('click', function () {
            document.body.style.overflow = 'hidden';
            lightboxContainer.style.transform = "translateX(-".concat(_this8.current * 100, "%)");
            lightbox.classList.add('wp-block-mg-block-slider-slider__lightbox--is-open');
            slideContent.classList.add('wp-block-mg-block-slider-slide__current');
            if (_this8.lightboxCounter) {
              slidesCounter.innerHTML = "".concat(_this8.current + 1, "/").concat(_this8.slides.length);
            }
          });
        }
      });

      // Close button.
      lightbox.querySelector('.wp-block-mg-block-slider-slider__lightbox__control--close').addEventListener('click', function () {
        lightbox.classList.remove('wp-block-mg-block-slider-slider__lightbox--is-open');
        document.body.style.overflow = null;
      });

      // Previous slide.
      lightboxPrev.addEventListener('click', function () {
        if (_this8.current > 0) {
          _this8.current--;
        } else {
          _this8.current = _this8.slides.length - 1;
        }
        _this8.changeSlide('prev');
        lightboxContainer.style.transform = "translateX(-".concat(_this8.current * 100, "%)");
        if (_this8.lightboxCounter) {
          slidesCounter.innerHTML = "".concat(_this8.current + 1, "/").concat(_this8.slides.length);
        }
      });

      // Next slide.
      lightboxNext.addEventListener('click', function () {
        _this8.current = (_this8.current + 1) % _this8.slides.length;
        _this8.changeSlide('next');
        lightboxContainer.style.transform = "translateX(-".concat(_this8.current * 100, "%)");
        if (_this8.lightboxCounter) {
          slidesCounter.innerHTML = "".concat(_this8.current + 1, "/").concat(_this8.slides.length);
        }
      });
      lightboxContainer.style.width = "".concat(this.slides.length * 100, "%");
      this.slider.parentElement.appendChild(lightbox);
    }

    /**
     * Check the state of the page and add a loading screen before you can interact
     *
     * @param { boolean } state The state of the page. Loading state = false.
     */
  }, {
    key: "loadingEvent",
    value: function loadingEvent(state) {
      if (!state) {
        this.loadingSpinner = document.createElement('div');
        this.loadingSpinner.classList.add('wp-block-mg-block-slider-slider__loading');
        this.loadingSpinner.innerHTML = "<p><span class=\"screen-reader-text\">".concat(this.i18n.loading, "</span></p>");
        this.slider.parentElement.appendChild(this.loadingSpinner);
      }
    }
  }]);
  return MGBlockSlider;
}();
(function (window) {
  // Make the slider for global access, save in the window.
  if (typeof window.MGBlockSlider === 'undefined') {
    window.MGBlockSlider = MGBlockSlider;
  }
})(window);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdEO0lBQ0Q7RUFBQztFQUFBO0FBQUE7QUFHRixDQUFFLFVBQVVILE1BQU0sRUFBRztFQUNwQjtFQUNBLElBQUssT0FBUUEsTUFBTSxDQUFDM0MsYUFBZSxLQUFLLFdBQVcsRUFBRztJQUNyRDJDLE1BQU0sQ0FBQzNDLGFBQWEsR0FBR0EsYUFBYTtFQUNyQztBQUNELENBQUMsRUFBSTJDLE1BQU0sQ0FBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWctYmxvY2stc2xpZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21nLWJsb2NrLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21nLWJsb2NrLXNsaWRlci8uL2FwcC9hc3NldHMvanMvc2xpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogTWFpbiBzbGlkZXIgY2xhc3NcbiAqXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuXG5jbGFzcyBNR0Jsb2NrU2xpZGVyIHtcblx0Y29uc3RydWN0b3IoIHtcblx0XHRzZWxlY3RvciAgICAgICAgICA9ICcud3AtYmxvY2stbWdibG9ja3NsaWRlci1zbGlkZXInLFxuXHRcdHRoZW1lICAgICAgICAgICAgID0gJ2xpZ2h0Jyxcblx0XHRkaXJlY3Rpb25OYXYgICAgICA9IHRydWUsXG5cdFx0aGlkZURpcmVjdGlvbnMgICAgPSB0cnVlLFxuXHRcdGNvbnRyb2xOYXYgICAgICAgID0gZmFsc2UsXG5cdFx0aGlkZUNvbnRyb2xzICAgICAgPSBmYWxzZSxcblx0XHR0aHVtYnNOYXYgICAgICAgICA9IGZhbHNlLFxuXHRcdHRodW1ic05hdkZsb2F0ICAgID0gZmFsc2UsXG5cdFx0dGh1bWJzTmF2RmxvYXRQb3MgPSBmYWxzZSxcblx0XHRoaWRlVGh1bWJzICAgICAgICA9IGZhbHNlLFxuXHRcdGF1dG9TdGFydCAgICAgICAgID0gdHJ1ZSxcblx0XHRzdG9wT25Ib3ZlciAgICAgICA9IHRydWUsXG5cdFx0cGF1c2VVbmZvY3VzZWQgICAgPSB0cnVlLFxuXHRcdHdhaXRWaWRlbyAgICAgICAgID0gZmFsc2UsXG5cdFx0c3dpcGVOYXYgICAgICAgICAgPSB0cnVlLFxuXHRcdGFuaW1hdGlvbiAgICAgICAgID0gJ3NsaWRlJyxcblx0XHR2ZXJ0aWNhbCAgICAgICAgICA9IGZhbHNlLFxuXHRcdHZlcnRpY2FsQXJyb3dzICAgID0gZmFsc2UsXG5cdFx0dHJhbnNpdGlvbiAgICAgICAgPSAnbGluZWFyJyxcblx0XHRkdXJhdGlvbiAgICAgICAgICA9IDUuMCxcblx0XHRzcGVlZCAgICAgICAgICAgICA9IDAuNSxcblx0XHRhcnJvd1R5cGUgICAgICAgICA9ICcnLFxuXHRcdHBhZ2luYXRpb25UeXBlICAgID0gJycsXG5cdFx0YXV0b0hlaWdodCAgICAgICAgPSB0cnVlLFxuXHRcdGxpZ2h0Ym94ICAgICAgICAgID0gZmFsc2UsXG5cdFx0bGlnaHRib3hPcGVucyAgICAgPSAnc2xpZGUnLFxuXHRcdGxpZ2h0Ym94QXJyb3dzICAgID0gZmFsc2UsXG5cdFx0bGlnaHRib3hDb3VudGVyICAgPSBmYWxzZSxcblx0fSA9IHt9ICkge1xuXHRcdHRoaXMuc2VsZWN0b3IgICAgICAgICAgPSBzZWxlY3Rvcjtcblx0XHR0aGlzLnRoZW1lICAgICAgICAgICAgID0gdGhlbWU7XG5cdFx0dGhpcy5kaXJlY3Rpb25OYXYgICAgICA9IGRpcmVjdGlvbk5hdjtcblx0XHR0aGlzLmhpZGVEaXJlY3Rpb25zICAgID0gaGlkZURpcmVjdGlvbnM7XG5cdFx0dGhpcy5jb250cm9sTmF2ICAgICAgICA9IGNvbnRyb2xOYXY7XG5cdFx0dGhpcy5oaWRlQ29udHJvbHMgICAgICA9IGhpZGVDb250cm9scztcblx0XHR0aGlzLnRodW1ic05hdiAgICAgICAgID0gdGh1bWJzTmF2O1xuXHRcdHRoaXMudGh1bWJzTmF2RmxvYXQgICAgPSB0aHVtYnNOYXZGbG9hdDtcblx0XHR0aGlzLnRodW1ic05hdkZsb2F0UG9zID0gdGh1bWJzTmF2RmxvYXRQb3M7XG5cdFx0dGhpcy5oaWRlVGh1bWJzICAgICAgICA9IGhpZGVUaHVtYnM7XG5cdFx0dGhpcy5hdXRvU3RhcnQgICAgICAgICA9IGF1dG9TdGFydDtcblx0XHR0aGlzLnN0b3BPbkhvdmVyICAgICAgID0gc3RvcE9uSG92ZXI7XG5cdFx0dGhpcy5wYXVzZVVuZm9jdXNlZCAgICA9IHBhdXNlVW5mb2N1c2VkO1xuXHRcdHRoaXMud2FpdFZpZGVvICAgICAgICAgPSB3YWl0VmlkZW87XG5cdFx0dGhpcy5zd2lwZU5hdiAgICAgICAgICA9IHN3aXBlTmF2O1xuXHRcdHRoaXMuYW5pbWF0aW9uICAgICAgICAgPSBhbmltYXRpb247XG5cdFx0dGhpcy52ZXJ0aWNhbCAgICAgICAgICA9IHZlcnRpY2FsO1xuXHRcdHRoaXMudmVydGljYWxBcnJvd3MgICAgPSB2ZXJ0aWNhbEFycm93cztcblx0XHR0aGlzLnRyYW5zaXRpb24gICAgICAgID0gdHJhbnNpdGlvbjtcblx0XHR0aGlzLmR1cmF0aW9uICAgICAgICAgID0gZHVyYXRpb24gKiAxMDAwO1xuXHRcdHRoaXMuc3BlZWQgICAgICAgICAgICAgPSBzcGVlZCAqIDEwMDA7XG5cdFx0dGhpcy5hcnJvd1R5cGUgICAgICAgICA9IGFycm93VHlwZTtcblx0XHR0aGlzLnBhZ2luYXRpb25UeXBlICAgID0gcGFnaW5hdGlvblR5cGU7XG5cdFx0dGhpcy5hdXRvSGVpZ2h0ICAgICAgICA9IGF1dG9IZWlnaHQ7XG5cdFx0dGhpcy5saWdodGJveCAgICAgICAgICA9IGxpZ2h0Ym94O1xuXHRcdHRoaXMubGlnaHRib3hPcGVucyAgICAgPSBsaWdodGJveE9wZW5zO1xuXHRcdHRoaXMubGlnaHRib3hBcnJvd3MgICAgPSBsaWdodGJveEFycm93cztcblx0XHR0aGlzLmxpZ2h0Ym94Q291bnRlciAgID0gbGlnaHRib3hDb3VudGVyO1xuXHRcdHRoaXMuY3VycmVudCAgICAgICAgICAgPSAwO1xuXHRcdHRoaXMubG9hZFN0YXRlICAgICAgICAgPSBmYWxzZTtcblx0XHR0aGlzLnNldEFuaW1hdGlvbiAgICAgID0gZmFsc2U7XG5cdFx0dGhpcy50cmlnZ2VyT2JzZXJ2ZXIgICA9IGZhbHNlO1xuXHRcdHRoaXMuc2xpZGVyICAgICAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBgJHsgdGhpcy5zZWxlY3RvciB9IC53cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19jb250YWluZXJgICk7XG5cdFx0dGhpcy5zbGlkZXNDb250YWluZXIgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGAkeyB0aGlzLnNlbGVjdG9yIH0gLndwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXNfX2NvbnRhaW5lcmAgKTtcblx0XHR0aGlzLnNsaWRlcyAgICAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggYCR7IHRoaXMuc2VsZWN0b3IgfSAud3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlYCApO1xuXHRcdHRoaXMuaTE4biAgICAgICAgICAgICAgPSBtZ2Jsb2Nrc2xpZGVySTE4bjtcblxuXHRcdGlmICggdGhpcy5zbGlkZXIgKSB7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsICgpID0+IHRoaXMuaW5pdFNsaWRlcigpICk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZFN0YXRlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5zbGlkZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCggdGhpcy5sb2FkaW5nU3Bpbm5lciApO1xuXHRcdFx0XHRpZiAoIHRoaXMuYXV0b1N0YXJ0ICkge1xuXHRcdFx0XHRcdHRoaXMuc3RhcnRBbmltYXRpb24oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0IHNsaWRlclxuXHQgKi9cblx0aW5pdFNsaWRlcigpIHtcblx0XHQvLyBUcmFuc2l0aW9uIHN0eWxlcy5cblx0XHRpZiAoICdub25lJyAhPT0gdGhpcy5hbmltYXRpb24gKSB7XG5cdFx0XHR0aGlzLnNsaWRlc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHsgdGhpcy5zcGVlZCB9bXNgO1xuXHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIuc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gdGhpcy50cmFuc2l0aW9uO1xuXHRcdH1cblxuXHRcdC8vIFRoZW1lcy5cblx0XHR0aGlzLnNsaWRlci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoIGAkeyB0aGlzLnRoZW1lIH0tdGhlbWVgICk7XG5cblx0XHQvLyBBbmltYXRpb25zLlxuXHRcdHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5hZGQoIGBpcy0keyB0aGlzLmFuaW1hdGlvbiB9YCApO1xuXG5cdFx0Ly8gVmVydGljYWwgYW5pbWF0aW9ucy5cblx0XHRpZiAoIHRoaXMudmVydGljYWwgKSB7XG5cdFx0XHR0aGlzLnNsaWRlci5jbGFzc0xpc3QuYWRkKCAnaXMtdmVydGljYWwnICk7XG5cdFx0fVxuXHRcdHRoaXMuc2xpZGVzWyB0aGlzLmN1cnJlbnQgXS5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlX19jdXJyZW50JyApO1xuXG5cdFx0Ly8gSWYgdGhlIHNsaWRlciBvbmx5IGNvbnRhaW5zIDIgc2xpZGVzLCBhZGQgYSBjdXN0b20gY2xhc3MgdG8gcHJldmVudFxuXHRcdC8vIGJyZWFraW5nIHRoZSBhbmltYXRpb25zLlxuXHRcdGlmICggdGhpcy5zbGlkZXMubGVuZ3RoID09PSAyICkge1xuXHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCggJ3dwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXNfX2NvbnRhaW5lci0tMi1zbGlkZXMnICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVDb250cm9scygpO1xuXHRcdHRoaXMub3JkZXJTbGlkZXMoIHRoaXMuY3VycmVudCApO1xuXHRcdHRoaXMubG9hZGluZ0V2ZW50KCB0aGlzLmxvYWRTdGF0ZSApO1xuXG5cdFx0aWYgKCB0aGlzLnN3aXBlTmF2ICkge1xuXHRcdFx0dGhpcy5zd2lwZUV2ZW50cygpO1xuXHRcdFx0dGhpcy5rZXlFdmVudHMoKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuYXV0b0hlaWdodCApIHtcblx0XHRcdHRoaXMuY2FsY01pbkhlaWdodCgpO1xuXHRcdFx0dGhpcy5zbGlkZXIucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnYXV0by1oZWlnaHQnICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmxpZ2h0Ym94ICkge1xuXHRcdFx0dGhpcy5jcmVhdGVMaWdodGJveCgpO1xuXHRcdFx0dGhpcy5zbGlkZXIucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnaGFzLWxpZ2h0Ym94JyApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIG1heCBoZWlnaHQgb2YgYWxsIHNsaWRlcyBhbmQgc2V0IHRvIHRoZSBjb250YWluZXIgZm9yXG5cdCAqIGF1dG8taGVpZ2h0LlxuXHQgKi9cblx0Y2FsY01pbkhlaWdodCgpIHtcblx0XHR0aGlzLm1pbkhlaWdodCA9IHRoaXMuc2xpZGVzWyB0aGlzLmN1cnJlbnQgXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cdFx0dGhpcy5zbGlkZXMuZm9yRWFjaCggKCBzbGlkZSApID0+IHtcblx0XHRcdGlmICggc2xpZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ID4gdGhpcy5taW5IZWlnaHQgKSB7XG5cdFx0XHRcdHRoaXMubWluSGVpZ2h0ID0gTWF0aC5mbG9vciggc2xpZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICk7XG5cblx0XHRcdFx0Ly8gUmVjYWxjdWxhdGUgdGhlIHNsaWRlciBoZWlnaHQgYWZ0ZXIgcmVzaXplIHRoZSB3aW5kb3cuXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgKCkgPT4ge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dCggd2luZG93LnJlc2l6ZWRGaW5pc2hlZCApO1xuXHRcdFx0XHRcdHdpbmRvdy5yZXNpemVkRmluaXNoZWQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLm1pbkhlaWdodCA9IE1hdGguZmxvb3IoIHNsaWRlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCApO1xuXHRcdFx0XHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7IHRoaXMubWluSGVpZ2h0IH1weGA7XG5cdFx0XHRcdFx0fSwgMTAwICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2xpZGVzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAkeyB0aGlzLm1pbkhlaWdodCB9cHhgO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgY29udHJvbHMgZm9yIGNoYW5nZSBzbGlkZXNcblx0ICovXG5cdGNyZWF0ZUNvbnRyb2xzKCkge1xuXHRcdC8vXG5cdFx0Ly8gRGlyZWN0aW9uYWwgYXJyb3dzXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRpZiAoIHRoaXMuZGlyZWN0aW9uTmF2ICkge1xuXHRcdFx0Y29uc3QgZGlyZWN0aW9uTmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0XHRkaXJlY3Rpb25OYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoICd3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19jb250cm9sJywgJ3dwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX2NvbnRyb2xfX2Fycm93cycgKTtcblx0XHRcdGRpcmVjdGlvbk5hdmlnYXRpb24uaW5uZXJIVE1MID0gYFxuXHRcdFx0XHQ8cCBjbGFzcz1cIndwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX2NvbnRyb2xfX2Fycm93IHdwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX2NvbnRyb2xfX2Fycm93LS1wcmV2XCIgdGl0bGU9XCIkeyB0aGlzLmkxOG4ucHJldiB9XCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzY3JlZW4tcmVhZGVyLXRleHRcIj4keyB0aGlzLmkxOG4uc2hvd1ByZXZTbGlkZSB9PC9zcGFuPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwIGNsYXNzPVwid3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlcl9fY29udHJvbF9fYXJyb3cgd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlcl9fY29udHJvbF9fYXJyb3ctLW5leHRcIiB0aXRsZT1cIiR7IHRoaXMuaTE4bi5uZXh0IH1cIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInNjcmVlbi1yZWFkZXItdGV4dFwiPiR7IHRoaXMuaTE4bi5zaG93TmV4dFNsaWRlIH08L3NwYW4+XG5cdFx0XHRcdDwvcD5gO1xuXG5cdFx0XHRpZiAoICcnICE9PSB0aGlzLmFycm93VHlwZSApIHtcblx0XHRcdFx0ZGlyZWN0aW9uTmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKCBgd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlcl9fY29udHJvbC0tJHsgdGhpcy5hcnJvd1R5cGUgfWAgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0aGlzLnZlcnRpY2FsQXJyb3dzICkge1xuXHRcdFx0XHRkaXJlY3Rpb25OYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoICd3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19jb250cm9sLS12ZXJ0aWNhbCcgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zbGlkZXIuYXBwZW5kQ2hpbGQoIGRpcmVjdGlvbk5hdmlnYXRpb24gKTtcblx0XHRcdGNvbnN0IG5hdlByZXYgPSBkaXJlY3Rpb25OYXZpZ2F0aW9uLnF1ZXJ5U2VsZWN0b3IoIGAud3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlcl9fY29udHJvbF9fYXJyb3ctLXByZXZgICksXG5cdFx0XHRcdG5hdk5leHQgICA9IGRpcmVjdGlvbk5hdmlnYXRpb24ucXVlcnlTZWxlY3RvciggYC53cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19jb250cm9sX19hcnJvdy0tbmV4dGAgKTtcblxuXHRcdFx0Ly8gQ2hhbmdlIHNsaWRlcy5cblx0XHRcdG5hdlByZXYuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCBlICkgPT4ge1xuXHRcdFx0XHRpZiAoICEgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnaXMtY2hhbmdpbmcnICkgKSB7XG5cdFx0XHRcdFx0ZS50YXJnZXQuY2xhc3NMaXN0LmFkZCggJ2lzLWNoYW5naW5nJyApO1xuXHRcdFx0XHRcdGlmICggdGhpcy5jdXJyZW50ID4gMCApIHtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudC0tO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnQgPSB0aGlzLnNsaWRlcy5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCAncHJldicgKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCAnaXMtY2hhbmdpbmcnICksIHRoaXMuc3BlZWQgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHRuYXZOZXh0LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggZSApID0+IHtcblx0XHRcdFx0aWYgKCAhIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ2lzLWNoYW5naW5nJyApICkge1xuXHRcdFx0XHRcdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoICdpcy1jaGFuZ2luZycgKTtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnQgPSAoIHRoaXMuY3VycmVudCArIDEgKSAlIHRoaXMuc2xpZGVzLmxlbmd0aDtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCAnbmV4dCcgKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCAnaXMtY2hhbmdpbmcnICksIHRoaXMuc3BlZWQgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBBZGQgY2xhc3NlcyB0byB0aGUgc2xpZGVyLlxuXHRcdFx0dGhpcy5zbGlkZXIuY2xhc3NMaXN0LmFkZCggJ2RpcmVjdGlvbmFsLW5hdicgKTtcblxuXHRcdFx0aWYgKCB0aGlzLmhpZGVEaXJlY3Rpb25zICkge1xuXHRcdFx0XHR0aGlzLnNsaWRlci5jbGFzc0xpc3QuYWRkKCAnZGlyZWN0aW9uYWwtbmF2LS1pcy1oaWRkZW4nICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyBDb250cm9sIGRvdHNcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdGlmICggdGhpcy5jb250cm9sTmF2ICkge1xuXHRcdFx0Y29uc3QgY29udHJvbE5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndWwnICk7XG5cdFx0XHRjb250cm9sTmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlcl9fY29udHJvbCcsICd3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19jb250cm9sX19kb3RzJyApO1xuXHRcdFx0dGhpcy5zbGlkZXMuZm9yRWFjaCggKCBzbGlkZSwgaW5kZXggKSA9PiBjb250cm9sTmF2aWdhdGlvbi5pbm5lckhUTUwgKz0gYFxuXHRcdFx0XHQ8bGkgY2xhc3M9XCJ3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19jb250cm9sX19kb3RcIiB0aXRsZT1cIiR7IGluZGV4ICsgMSB9XCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzY3JlZW4tcmVhZGVyLXRleHRcIj4keyB0aGlzLmkxOG4uc2hvd1NsaWRlIH0gJHsgaW5kZXggKyAxIH08L3NwYW4+XG5cdFx0XHRcdDwvbGk+YCxcblx0XHRcdCk7XG5cblx0XHRcdGlmICggJycgIT09IHRoaXMucGFnaW5hdGlvblR5cGUgKSB7XG5cdFx0XHRcdGNvbnRyb2xOYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoIGB3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19jb250cm9sLS0keyB0aGlzLnBhZ2luYXRpb25UeXBlIH1gICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdGhpcy50aHVtYnNOYXZGbG9hdCApIHtcblx0XHRcdFx0Y29udHJvbE5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZChcblx0XHRcdFx0XHQnaXMtZmxvYXRpbmcnLFxuXHRcdFx0XHRcdGB3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19jb250cm9sLS1mbG9hdGluZy0keyB0aGlzLnRodW1ic05hdkZsb2F0UG9zIH1gLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNsaWRlci5pbnNlcnRBZGphY2VudEVsZW1lbnQoICdhZnRlcmVuZCcsIGNvbnRyb2xOYXZpZ2F0aW9uICk7XG5cdFx0XHR0aGlzLm5hdkRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBgJHsgdGhpcy5zZWxlY3RvciB9IC53cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19jb250cm9sX19kb3RgICk7XG5cdFx0XHR0aGlzLm5hdkRvdHNbIHRoaXMuY3VycmVudCBdLmNsYXNzTGlzdC5hZGQoICd3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19jb250cm9sX19kb3QtLWN1cnJlbnQnICk7XG5cblx0XHRcdC8vIENoYW5nZSBzbGlkZXMgYW5kIGRvdHMuXG5cdFx0XHR0aGlzLm5hdkRvdHMuZm9yRWFjaCggKCBkb3QsIGluZGV4ICkgPT4ge1xuXHRcdFx0XHRkb3QuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlQ29udHJvbHMoIHRoaXMubmF2RG90cywgJ3dwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX2NvbnRyb2xfX2RvdC0tY3VycmVudCcsIGluZGV4ICk7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggJ2RvdHMnLCBpbmRleCApO1xuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgdGhlIGN1cnJlbnQgaW5kZXggYW5kIGNoYW5nZSBzbGlkZXMgaW4gdGhlIGNvcnJlY3Rcblx0XHRcdFx0XHQvLyBvcmRlci5cblx0XHRcdFx0XHRpZiAoIGluZGV4ID09PSB0aGlzLmN1cnJlbnQgKyAxICkge1xuXHRcdFx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggZmFsc2UsIGluZGV4ICk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICggaW5kZXggPT09IHRoaXMuY3VycmVudCAtIDEgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCBmYWxzZSwgaW5kZXggKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50ID0gaW5kZXg7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gQWRkIGNsYXNzZXMgdG8gdGhlIHNsaWRlci5cblx0XHRcdHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5hZGQoICdjb250cm9sLW5hdicgKTtcblxuXHRcdFx0aWYgKCB0aGlzLmhpZGVDb250cm9scyApIHtcblx0XHRcdFx0dGhpcy5zbGlkZXIuY2xhc3NMaXN0LmFkZCggJ2NvbnRyb2wtbmF2LS1pcy1oaWRkZW4nICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyBUaHVtYm5haWxzXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRpZiAoIHRoaXMudGh1bWJzTmF2ICkge1xuXHRcdFx0Y29uc3QgdGh1bWJOYXZpZ2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3VsJyApO1xuXHRcdFx0dGh1bWJOYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoICd3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX190aHVtYm5haWxzJyApO1xuXG5cdFx0XHRpZiAoIHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5jb250YWlucyggJ2FsaWdud2lkZScgKSApIHtcblx0XHRcdFx0dGh1bWJOYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoICdhbGlnbndpZGUnICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5jb250YWlucyggJ2FsaWduZnVsbCcgKSApIHtcblx0XHRcdFx0dGh1bWJOYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoICdhbGlnbmZ1bGwnICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2xpZGVzLmZvckVhY2goICggc2xpZGUsIGluZGV4ICkgPT4ge1xuXHRcdFx0XHQvLyBBZGQgdGh1bWJuYWlscyBiYXNlZCBvbiB0aGUgaW1hZ2VzIGZpbGUgbmFtZSBvciB3aXRoIGEgZ2VuZXJpYyBpbWFnZS5cblx0XHRcdFx0bGV0IHNsaWRlU3JjID0gc2xpZGUucXVlcnlTZWxlY3RvciggJ2ltZycgKSA/IHNsaWRlLnF1ZXJ5U2VsZWN0b3IoICdpbWcnICkuc3JjIDogbnVsbDtcblxuXHRcdFx0XHRpZiAoIHNsaWRlU3JjICkge1xuXHRcdFx0XHRcdGNvbnN0IGltYWdlRm9ybWF0ID0gc2xpZGVTcmMuc3BsaXQoICcuJyApLnBvcCgpLFxuXHRcdFx0XHRcdFx0aW1hZ2VQYXRoICAgICA9IHNsaWRlU3JjLnNsaWNlKCAwLCBzbGlkZVNyYy5sZW5ndGggLSBpbWFnZUZvcm1hdC5sZW5ndGggLSAxICk7XG5cdFx0XHRcdFx0dGh1bWJOYXZpZ2F0aW9uLmlubmVySFRNTCArPSBgXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJ3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX190aHVtYlwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIiR7IGltYWdlUGF0aCB9LiR7IGltYWdlRm9ybWF0IH1cIiBhbHQ9XCIkeyB0aGlzLmkxOG4uc2xpZGUgfSAkeyBpbmRleCArIDEgfVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInNjcmVlbi1yZWFkZXItdGV4dFwiPiR7IHRoaXMuaTE4bi5zaG93U2xpZGUgfSAkeyBpbmRleCArIDEgfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvbGk+YDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzbGlkZVNyYyA9IHNsaWRlLnF1ZXJ5U2VsZWN0b3IoICd2aWRlbycgKSA/ICd2aWRlbycgOiAnaW1nJztcblx0XHRcdFx0XHR0aHVtYk5hdmlnYXRpb24uaW5uZXJIVE1MICs9IGBcblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cIndwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX3RodW1iIHdwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX3RodW1iLS0keyBzbGlkZVNyYyB9XCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwic2NyZWVuLXJlYWRlci10ZXh0XCI+JHsgdGhpcy5pMThuLnNob3dTbGlkZSB9ICR7IGluZGV4ICsgMSB9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9saT5gO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0XHR0aGlzLnNsaWRlci5pbnNlcnRBZGphY2VudEVsZW1lbnQoICdhZnRlcmVuZCcsIHRodW1iTmF2aWdhdGlvbiApO1xuXHRcdFx0dGhpcy50aHVtYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBgJHsgdGhpcy5zZWxlY3RvciB9IC53cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX190aHVtYm5haWxzIC53cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX190aHVtYmAgKTtcblx0XHRcdHRoaXMudGh1bWJzWyB0aGlzLmN1cnJlbnQgXS5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlcl9fdGh1bWItLWN1cnJlbnQnICk7XG5cblx0XHRcdC8vIENoYW5nZSBzbGlkZXMgYW5kIHRodW1ibmFpbHMuXG5cdFx0XHR0aGlzLnRodW1icy5mb3JFYWNoKCAoIGltZywgaW5kZXggKSA9PiB7XG5cdFx0XHRcdGltZy5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VDb250cm9scyggdGhpcy5uYXZEb3RzLCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlcl9fY29udHJvbF9fZG90LS1jdXJyZW50JywgaW5kZXggKTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCAnZG90cycsIGluZGV4ICk7XG5cblx0XHRcdFx0XHQvLyBDaGVjayB0aGUgY3VycmVudCBpbmRleCBhbmQgY2hhbmdlIHNsaWRlcyBpbiB0aGUgY29ycmVjdCBvcmRlci5cblx0XHRcdFx0XHRpZiAoIGluZGV4ID09PSB0aGlzLmN1cnJlbnQgKyAxICkge1xuXHRcdFx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggZmFsc2UsIGluZGV4ICk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICggaW5kZXggPT09IHRoaXMuY3VycmVudCAtIDEgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCBmYWxzZSwgaW5kZXggKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50ID0gaW5kZXg7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gQWRkIGNsYXNzZXMgdG8gdGhlIHNsaWRlci5cblx0XHRcdHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5hZGQoICd0aHVtYm5haWxzLW5hdicgKTtcblxuXHRcdFx0aWYgKCB0aGlzLmhpZGVUaHVtYnMgKSB7XG5cdFx0XHRcdHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5hZGQoICd0aHVtYm5haWxzLW5hdi0taXMtaGlkZGVuJyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGFuZ2Ugc2xpZGVzIGRlcGVuZGluZyB0aGUgZGlyZWN0aW9uXG5cdCAqXG5cdCAqIEBwYXJhbSB7IHN0cmluZyB9IGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIG9mIHRoZSBzbGlkZXMuXG5cdCAqIEBwYXJhbSB7IG51bWJlciB9IGluZGV4ICAgICBUaGUgcG9zaXRpb24gbnVtYmVyIG9mIHRoZSBjdXJyZW50IHNsaWRlLlxuXHQgKi9cblx0Y2hhbmdlU2xpZGUoIGRpcmVjdGlvbiwgaW5kZXggPSB0aGlzLmN1cnJlbnQgKSB7XG5cdFx0dGhpcy5zbGlkZXMuZm9yRWFjaCggKCBzbGlkZSwgcG9zaXRpb24gKSA9PiB7XG5cdFx0XHRzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHQnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlX19jdXJyZW50Jyxcblx0XHRcdFx0J3dwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZV9fcHJldicsXG5cdFx0XHRcdCd3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVfX25leHQnLFxuXHRcdFx0KTtcblxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNsaWRlc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHRcdCd3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVzX19jb250YWluZXItLXByZXYnLFxuXHRcdFx0XHRcdCd3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVzX19jb250YWluZXItLW5leHQnLFxuXHRcdFx0XHQpO1xuXHRcdFx0fSwgdGhpcy5zcGVlZCApO1xuXG5cdFx0XHQvLyBJZiB0aGVyZSBhcmUgdmlkZW9zLlxuXHRcdFx0aWYgKCBzbGlkZS5xdWVyeVNlbGVjdG9yKCAndmlkZW8nICkgKSB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvRHVyYXRpb24gPSBNYXRoLmNlaWwoIHNsaWRlLnF1ZXJ5U2VsZWN0b3IoICd2aWRlbycgKS5kdXJhdGlvbiApICogMTAwMDtcblxuXHRcdFx0XHQvLyBQYXVzZSB0aGUgdmlkZW8gb24gY2hhbmdlIHNsaWRlLlxuXHRcdFx0XHRpZiAoIHRoaXMucGF1c2VVbmZvY3VzZWQgKSB7XG5cdFx0XHRcdFx0aWYgKCBwb3NpdGlvbiA9PT0gaW5kZXggKSB7XG5cdFx0XHRcdFx0XHRzbGlkZS5xdWVyeVNlbGVjdG9yKCAndmlkZW8nICkucGxheSgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzbGlkZS5xdWVyeVNlbGVjdG9yKCAndmlkZW8nICkucGF1c2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTdG9wIGFuaW1hdGlvbiBhbmQgd2FpdCB1bnRpbCB0aGUgdmlkZW8gZW5kcy5cblx0XHRcdFx0aWYgKCBwb3NpdGlvbiA9PT0gaW5kZXggJiYgdGhpcy53YWl0VmlkZW8gKSB7XG5cdFx0XHRcdFx0aWYgKCBzbGlkZS5xdWVyeVNlbGVjdG9yKCAndmlkZW8nICkuYXV0b3BsYXkgKSB7XG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKCB0aGlzLnNldEFuaW1hdGlvbiApO1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRBbmltYXRpb24gPSBzZXRJbnRlcnZhbCggKCBuZXh0SW5kZXggKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudCA9ICggdGhpcy5jdXJyZW50ICsgMSApICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCAnbmV4dCcsIG5leHRJbmRleCApO1xuXHRcdFx0XHRcdFx0fSwgdmlkZW9EdXJhdGlvbiArIDI1MCApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEFuaW1hdGlvbiA9IHNldEludGVydmFsKCAoIG5leHRJbmRleCApID0+IHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50ID0gKCB0aGlzLmN1cnJlbnQgKyAxICkgJSB0aGlzLnNsaWRlcy5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICduZXh0JywgbmV4dEluZGV4ICk7XG5cdFx0XHRcdFx0XHR9LCB0aGlzLmR1cmF0aW9uICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0aWYgKCAnbm9uZScgIT09IHRoaXMuYW5pbWF0aW9uIHx8ICdmYWRlJyAhPT0gdGhpcy5hbmltYXRpb24gKSB7XG5cdFx0XHR0aGlzLm9yZGVyU2xpZGVzKCBpbmRleCApO1xuXG5cdFx0XHRpZiAoICduZXh0JyA9PT0gZGlyZWN0aW9uICkge1xuXHRcdFx0XHR0aGlzLnNsaWRlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlc19fY29udGFpbmVyLS1uZXh0JyApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAncHJldicgPT09IGRpcmVjdGlvbiApIHtcblx0XHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCggJ3dwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXNfX2NvbnRhaW5lci0tcHJldicgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnNsaWRlc1sgaW5kZXggXS5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlX19jdXJyZW50JyApO1xuXG5cdFx0aWYgKCB0aGlzLmNvbnRyb2xOYXYgKSB7XG5cdFx0XHR0aGlzLmNoYW5nZUNvbnRyb2xzKCB0aGlzLm5hdkRvdHMsICd3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19jb250cm9sX19kb3QtLWN1cnJlbnQnLCBpbmRleCApO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy50aHVtYnNOYXYgKSB7XG5cdFx0XHR0aGlzLmNoYW5nZUNvbnRyb2xzKCB0aGlzLnRodW1icywgJ3dwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX3RodW1iLS1jdXJyZW50JywgaW5kZXggKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2hhbmdlIHRoZSBjdXJyZW50IGVsZW1lbnQgY29udHJvbFxuXHQgKlxuXHQgKiBAcGFyYW0geyBPYmplY3QgfSBjb250cm9sICAgICAgVGhlIGVsZW1lbnRzIHRvIGNvbnRyb2wgYW5kIGludGVyYWN0LlxuXHQgKiBAcGFyYW0geyBzdHJpbmcgfSBjdXJyZW50Q2xhc3MgVGhlIGN1cnJlbnQgY29udHJvbCBjbGFzcyB0byBtb2RpZnkuXG5cdCAqIEBwYXJhbSB7IG51bWJlciB9IGluZGV4ICAgICAgICBUaGUgcG9zaXRpb24gbnVtYmVyIG9mIHRoZSBjdXJyZW50IHNsaWRlLlxuXHQgKi9cblx0Y2hhbmdlQ29udHJvbHMoIGNvbnRyb2wsIGN1cnJlbnRDbGFzcywgaW5kZXggPSB0aGlzLmN1cnJlbnQgKSB7XG5cdFx0aWYgKCB0eXBlb2YoIGNvbnRyb2wgKSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRjb250cm9sLmZvckVhY2goICggZWwgKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCBjdXJyZW50Q2xhc3MgKSApO1xuXHRcdFx0Y29udHJvbFsgaW5kZXggXS5jbGFzc0xpc3QuYWRkKCBjdXJyZW50Q2xhc3MgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogT3JkZXIgc2xpZGVzIGZvciBjb3JyZWN0IGFuaW1hdGlvbnNcblx0ICpcblx0ICogQHBhcmFtIHsgbnVtYmVyIH0gaW5kZXggVGhlIHBvc2l0aW9uIG51bWJlciBvZiB0aGUgY3VycmVudCBzbGlkZS5cblx0ICovXG5cdG9yZGVyU2xpZGVzKCBpbmRleCApIHtcblx0XHRpZiAoIHRoaXMuc2xpZGVzLmxlbmd0aCA+IDIgKSB7XG5cdFx0XHQvLyBQcmV2ZW50IG51bGwgb24gcHJldmlvdXMgc2libGluZyBvZiBjdXJyZW50LlxuXHRcdFx0aWYgKCB1bmRlZmluZWQgIT0gdGhpcy5zbGlkZXNbIGluZGV4IF0ucHJldmlvdXNFbGVtZW50U2libGluZyApIHtcblx0XHRcdFx0dGhpcy5zbGlkZXNbIGluZGV4IF0ucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlX19wcmV2JyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zbGlkZXNbIHRoaXMuc2xpZGVzLmxlbmd0aCAtIDEgXS5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlX19wcmV2JyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQcmV2ZW50IG51bGwgb24gbmV4dCBzaWJsaW5nIG9mIGN1cnJlbnQuXG5cdFx0XHRpZiAoIHVuZGVmaW5lZCAhPSB0aGlzLnNsaWRlc1sgaW5kZXggXS5uZXh0RWxlbWVudFNpYmxpbmcgKSB7XG5cdFx0XHRcdHRoaXMuc2xpZGVzWyBpbmRleCBdLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlX19uZXh0JyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zbGlkZXNbIDAgXS5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlX19uZXh0JyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGFuZ2Ugc2xpZGVzIHdpdGggYSBzd2lwZSBvbiB0b3VjaCBzY3JlZW5zXG5cdCAqL1xuXHRzd2lwZUV2ZW50cygpIHtcblx0XHRsZXQgdG91Y2hzdGFydFggPSAwLFxuXHRcdFx0c3RhcnRUb3VjaCAgPSAwO1xuXG5cdFx0dGhpcy5zbGlkZXIucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsICggZSApID0+IHtcblx0XHRcdC8vIFN0b3AgYW5pbWF0aW9uIHRvIHByZXZlbnQgb3ZlcmxhcHBpbmcuXG5cdFx0XHRjbGVhckludGVydmFsKCB0aGlzLnNldEFuaW1hdGlvbiApO1xuXHRcdFx0dGhpcy5zbGlkZXIuY2xhc3NMaXN0LmFkZCggJ2RyYWdnaW5nJyApO1xuXHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBtcyc7XG5cdFx0XHRzdGFydFRvdWNoID0gZS50b3VjaGVzWyAwIF0uY2xpZW50WCAtIHRoaXMuc2xpZGVzWyB0aGlzLmN1cnJlbnQgXS5jbGllbnRMZWZ0O1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuc2xpZGVyLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsICggZSApID0+IHtcblx0XHRcdHRvdWNoc3RhcnRYID0gZS50b3VjaGVzWyAwIF0uY2xpZW50WDtcblx0XHRcdGlmICggISB0aGlzLnZlcnRpY2FsICYmIHRoaXMuc2xpZGVzLmxlbmd0aCA+IDIgJiYgKCAnc2xpZGUnID09PSB0aGlzLmFuaW1hdGlvbiB8fCAnY2FyZHMnID09PSB0aGlzLmFuaW1hdGlvbiApICkge1xuXHRcdFx0XHR0aGlzLnNsaWRlc1sgdGhpcy5jdXJyZW50IF0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7IHRvdWNoc3RhcnRYIC0gc3RhcnRUb3VjaCB9cHgsIDAsIDApYDtcblx0XHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvciggJy53cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVfX3ByZXYnICkuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKGNhbGMoJHsgdG91Y2hzdGFydFggLSBzdGFydFRvdWNoIH1weCAtIDEwMCUpLCAwLCAwKWA7XG5cdFx0XHRcdHRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoICcud3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlX19uZXh0JyApLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZChjYWxjKCR7IHRvdWNoc3RhcnRYIC0gc3RhcnRUb3VjaCB9cHggKyAxMDAlKSwgMCwgMClgO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdHRoaXMuc2xpZGVyLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zbGlkZXNDb250YWluZXIucXVlcnlTZWxlY3RvciggJy53cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVfX2N1cnJlbnQnICkuc3R5bGUucmVtb3ZlUHJvcGVydHkoICd0cmFuc2Zvcm0nICk7XG5cdFx0XHRpZiAoIHRoaXMuc2xpZGVzLmxlbmd0aCA+IDIgKSB7XG5cdFx0XHRcdHRoaXMuc2xpZGVzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoICcud3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlX19wcmV2JyApLnN0eWxlLnJlbW92ZVByb3BlcnR5KCAndHJhbnNmb3JtJyApO1xuXHRcdFx0XHR0aGlzLnNsaWRlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCAnLndwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZV9fbmV4dCcgKS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSggJ3RyYW5zZm9ybScgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAwICE9PSB0b3VjaHN0YXJ0WCApIHtcblx0XHRcdFx0aWYgKCBzdGFydFRvdWNoIC0gdG91Y2hzdGFydFggPCAtNTAgKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLmN1cnJlbnQgPiAwICkge1xuXHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50LS07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudCA9IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICdwcmV2JyApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBzdGFydFRvdWNoIC0gdG91Y2hzdGFydFggPiA1MCApIHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnQgPSAoIHRoaXMuY3VycmVudCArIDEgKSAlIHRoaXMuc2xpZGVzLmxlbmd0aDtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCAnbmV4dCcgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0b3VjaHN0YXJ0WCA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoICdkcmFnZ2luZycgKTtcblx0XHRcdHRoaXMuc2xpZGVzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAkeyB0aGlzLnNwZWVkIH1tc2A7XG5cblx0XHRcdC8vIFJlc3RhcnQgYW5pbWF0aW9uLlxuXHRcdFx0aWYgKCB0aGlzLmF1dG9TdGFydCApIHtcblx0XHRcdFx0dGhpcy5zZXRBbmltYXRpb24gPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudCA9ICggdGhpcy5jdXJyZW50ICsgMSApICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICduZXh0JywgdGhpcy5jdXJyZW50ICk7XG5cdFx0XHRcdH0sIHRoaXMuZHVyYXRpb24gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hhbmdlIHNsaWRlcyB3aXRoIHRoZSBrZXlib2FyZCA8LSAtPlxuXHQgKi9cblx0a2V5RXZlbnRzKCkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgKCBlICkgPT4ge1xuXHRcdFx0Ly8gU3RvcCBhbmltYXRpb24gdG8gcHJldmVudCBvdmVybGFwcGluZy5cblx0XHRcdGNsZWFySW50ZXJ2YWwoIHRoaXMuc2V0QW5pbWF0aW9uICk7XG5cblx0XHRcdHN3aXRjaCAoIGUua2V5ICkge1xuXHRcdFx0XHRjYXNlICdBcnJvd0xlZnQnIDpcblx0XHRcdFx0XHRpZiAoICEgdGhpcy5zbGlkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAnaXMtY2hhbmdpbmcnICkgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNsaWRlci5jbGFzc0xpc3QuYWRkKCAnaXMtY2hhbmdpbmcnICk7XG5cdFx0XHRcdFx0XHRpZiAoIHRoaXMuY3VycmVudCA+IDAgKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudC0tO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5zbGlkZXMubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICdwcmV2JyApO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gdGhpcy5zbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2lzLWNoYW5naW5nJyApLCB0aGlzLnNwZWVkICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHRcdGlmICggISB0aGlzLnNsaWRlci5jbGFzc0xpc3QuY29udGFpbnMoICdpcy1jaGFuZ2luZycgKSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5hZGQoICdpcy1jaGFuZ2luZycgKTtcblx0XHRcdFx0XHRcdHRoaXMuY3VycmVudCA9ICggdGhpcy5jdXJyZW50ICsgMSApICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdFx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggJ25leHQnICk7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLnNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCAnaXMtY2hhbmdpbmcnICksIHRoaXMuc3BlZWQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlc3RhcnQgYW5pbWF0aW9uLlxuXHRcdFx0aWYgKCB0aGlzLmF1dG9TdGFydCApIHtcblx0XHRcdFx0dGhpcy5zZXRBbmltYXRpb24gPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudCA9ICggdGhpcy5jdXJyZW50ICsgMSApICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICduZXh0JywgdGhpcy5jdXJyZW50ICk7XG5cdFx0XHRcdH0sIHRoaXMuZHVyYXRpb24gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQXV0byBzdGFydCBhbmltYXRpb25cblx0ICovXG5cdHN0YXJ0QW5pbWF0aW9uKCkge1xuXHRcdHRoaXMuc2V0QW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcblx0XHRcdHRoaXMuY3VycmVudCA9ICggdGhpcy5jdXJyZW50ICsgMSApICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggJ25leHQnICk7XG5cdFx0fSwgdGhpcy5kdXJhdGlvbiApO1xuXG5cdFx0aWYgKCB0aGlzLnN0b3BPbkhvdmVyICkge1xuXHRcdFx0Ly8gU3RvcCBhbmltYXRpb24gb24gaG92ZXIuXG5cdFx0XHR0aGlzLnNsaWRlci5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWVudGVyJywgKCkgPT4gY2xlYXJJbnRlcnZhbCggdGhpcy5zZXRBbmltYXRpb24gKSApO1xuXG5cdFx0XHQvLyBSZXN1bWUgYW5pbWF0aW9uIHdoZW4gbG9zdCBob3Zlci5cblx0XHRcdHRoaXMuc2xpZGVyLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0QW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwoICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnQgPSAoIHRoaXMuY3VycmVudCArIDEgKSAlIHRoaXMuc2xpZGVzLmxlbmd0aDtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCAnbmV4dCcsIHRoaXMuY3VycmVudCApO1xuXHRcdFx0XHR9LCB0aGlzLmR1cmF0aW9uICk7XG5cdFx0XHR9ICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFN0b3AgYW5kIHJlc3RhcnQgYW5pbWF0aW9uIG9uIGNsaWNrIHRvIHByZXZlbnQgb3ZlcmxhcHBpbmcuXG5cdFx0XHR0aGlzLnNsaWRlci5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggdGhpcy5zZXRBbmltYXRpb24gKTtcblx0XHRcdFx0dGhpcy5zZXRBbmltYXRpb24gPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudCA9ICggdGhpcy5jdXJyZW50ICsgMSApICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICduZXh0JywgdGhpcy5jdXJyZW50ICk7XG5cdFx0XHRcdH0sIHRoaXMuZHVyYXRpb24gKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMucGF1c2VVbmZvY3VzZWQgKSB7XG5cdFx0XHQvLyBPYnNlcnZlIHdoZW4gdGhlIHNsaWRlciBnZXRzIG91dCBvZiB3aW5kb3cgdmlzaWJpbGl0eS5cblx0XHRcdGNvbnN0IE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuXHRcdFx0XHQoIGVudHJpZXMsIG9ic2VydmVyICkgPT4ge1xuXHRcdFx0XHRcdGVudHJpZXMuZm9yRWFjaCggKCBlbnRyeSApID0+IHtcblx0XHRcdFx0XHRcdGlmICggISBlbnRyeS5pc0ludGVyc2VjdGluZyApIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggdGhpcy5zZXRBbmltYXRpb24gKTtcblx0XHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyT2JzZXJ2ZXIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggdGhpcy50cmlnZ2VyT2JzZXJ2ZXIgKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0QW5pbWF0aW9uID0gc2V0SW50ZXJ2YWwoICggaW5kZXggKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jdXJyZW50ID0gKCB0aGlzLmN1cnJlbnQgKyAxICkgJSB0aGlzLnNsaWRlcy5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jaGFuZ2VTbGlkZSggJ25leHQnLCBpbmRleCApO1xuXHRcdFx0XHRcdFx0XHR9LCB0aGlzLmR1cmF0aW9uICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cm9vdDogbnVsbCxcblx0XHRcdFx0XHRyb290TWFyZ2luOiAnMHB4Jyxcblx0XHRcdFx0XHR0aHJlc2hvbGQ6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdCk7XG5cdFx0XHRPYnNlcnZlci5vYnNlcnZlKCB0aGlzLnNsaWRlciApO1xuXHRcdH1cblxuXHRcdC8vIFN0b3AgYW5pbWF0aW9uIG9uIGNoYW5nZSB0aGUgYnJvd3NlciB0YWIuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3Zpc2liaWxpdHljaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRpZiAoIGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSAhPT0gJ3Zpc2libGUnICkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKCB0aGlzLnNldEFuaW1hdGlvbiApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRBbmltYXRpb24gPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudCA9ICggdGhpcy5jdXJyZW50ICsgMSApICUgdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICduZXh0JywgdGhpcy5jdXJyZW50ICk7XG5cdFx0XHRcdH0sIHRoaXMuZHVyYXRpb24gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogTGlnaHRib3hcblx0ICovXG5cdGNyZWF0ZUxpZ2h0Ym94KCkge1xuXHRcdGNvbnN0IGxpZ2h0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHRsaWdodGJveC5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlcl9fbGlnaHRib3gnICk7XG5cdFx0bGlnaHRib3guaW5uZXJIVE1MID0gYFxuXHRcdFx0PHVsIGNsYXNzPVwid3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlcl9fbGlnaHRib3hfX2NvbnRhaW5lclwiPjwvdWw+XG5cdFx0XHQ8cCBjbGFzcz1cIndwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX2xpZ2h0Ym94X19jb250cm9sIHdwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX2xpZ2h0Ym94X19jb250cm9sLS1jbG9zZVwiIHRpdGxlPVwiJHsgdGhpcy5pMThuLmNsb3NlTGlnaHRib3ggfVwiPjxzcGFuIGNsYXNzPVwic2NyZWVuLXJlYWRlci10ZXh0XCI+JHsgdGhpcy5pMThuLmNsb3NlTGlnaHRib3ggfTwvc3Bhbj48L3A+XG5cdFx0XHQ8cCBjbGFzcz1cIndwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX2xpZ2h0Ym94X19jb250cm9sIHdwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX2xpZ2h0Ym94X19jb250cm9sLS1wcmV2XCIgdGl0bGU9XCIkeyB0aGlzLmkxOG4ucHJldiB9XCI+PHNwYW4gY2xhc3M9XCJzY3JlZW4tcmVhZGVyLXRleHRcIj4keyB0aGlzLmkxOG4ucHJldlNsaWRlIH08L3NwYW4+PC9wPlxuXHRcdFx0PHAgY2xhc3M9XCJ3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19saWdodGJveF9fY29udHJvbCB3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19saWdodGJveF9fY29udHJvbC0tbmV4dFwiIHRpdGxlPVwiJHsgdGhpcy5pMThuLm5leHQgfVwiPjxzcGFuIGNsYXNzPVwic2NyZWVuLXJlYWRlci10ZXh0XCI+JHsgdGhpcy5pMThuLm5leHRTbGlkZSB9PC9zcGFuPjwvcD5cblx0XHRgO1xuXHRcdGNvbnN0IGxpZ2h0Ym94Q29udGFpbmVyID0gbGlnaHRib3gucXVlcnlTZWxlY3RvciggJy53cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19saWdodGJveF9fY29udGFpbmVyJyApO1xuXHRcdGNvbnN0IGxpZ2h0Ym94UHJldiAgICAgID0gbGlnaHRib3gucXVlcnlTZWxlY3RvciggJy53cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19saWdodGJveF9fY29udHJvbC0tcHJldicgKTtcblx0XHRjb25zdCBsaWdodGJveE5leHQgICAgICA9IGxpZ2h0Ym94LnF1ZXJ5U2VsZWN0b3IoICcud3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlcl9fbGlnaHRib3hfX2NvbnRyb2wtLW5leHQnICk7XG5cblx0XHQvLyBPcGVuIGljb24uXG5cdFx0bGV0IG9wZW5MaWdodGJveDtcblx0XHRpZiAoICdidXR0b24nID09PSB0aGlzLmxpZ2h0Ym94T3BlbnMgKSB7XG5cdFx0XHRvcGVuTGlnaHRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAncCcgKTtcblx0XHRcdG9wZW5MaWdodGJveC5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlX19vcGVuLWxpZ2h0Ym94JyApO1xuXHRcdFx0b3BlbkxpZ2h0Ym94LnNldEF0dHJpYnV0ZSggJ3RpdGxlJywgdGhpcy5pMThuLm9wZW5MaWdodGJveCApO1xuXHRcdFx0b3BlbkxpZ2h0Ym94LmlubmVySFRNTCA9IGArIDxzcGFuIGNsYXNzPVwic2NyZWVuLXJlYWRlci10ZXh0XCI+JHsgdGhpcy5pMThuLm9wZW5MaWdodGJveCB9PC9zcGFuPmA7XG5cdFx0fVxuXG5cdFx0Ly8gU2xpZGVzIGNvdW50ZXIuXG5cdFx0bGV0IHNsaWRlc0NvdW50ZXI7XG5cdFx0aWYgKCB0aGlzLmxpZ2h0Ym94Q291bnRlciApIHtcblx0XHRcdHNsaWRlc0NvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcblx0XHRcdHNsaWRlc0NvdW50ZXIuY2xhc3NMaXN0LmFkZCggJ3dwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX2xpZ2h0Ym94X19jb250cm9sJywgJ3dwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX2xpZ2h0Ym94X19jb250cm9sLS1jb3VudGVyJyApO1xuXHRcdFx0bGlnaHRib3guYXBwZW5kQ2hpbGQoIHNsaWRlc0NvdW50ZXIgKTtcblx0XHR9XG5cblx0XHQvLyBDb250cm9sIHR5cGVzLlxuXHRcdGlmICggJycgIT09IHRoaXMuYXJyb3dUeXBlICkge1xuXHRcdFx0bGlnaHRib3gucXVlcnlTZWxlY3RvckFsbCggJy53cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19saWdodGJveF9fY29udHJvbCcgKS5mb3JFYWNoKCAoIGNvbnRyb2wgKSA9PiBjb250cm9sLmNsYXNzTGlzdC5hZGQoIGB3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19saWdodGJveF9fY29udHJvbC0tJHsgdGhpcy5hcnJvd1R5cGUgfWAgKSApO1xuXHRcdFx0aWYgKCAnYnV0dG9uJyA9PT0gdGhpcy5saWdodGJveE9wZW5zICkge1xuXHRcdFx0XHRvcGVuTGlnaHRib3guY2xhc3NMaXN0LmFkZCggYHdwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZV9fb3Blbi1saWdodGJveC0tJHsgdGhpcy5hcnJvd1R5cGUgfWAgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBIaWRlIGNvbnRyb2xzLlxuXHRcdGlmICggISB0aGlzLmxpZ2h0Ym94QXJyb3dzICkge1xuXHRcdFx0bGlnaHRib3hQcmV2LmNsYXNzTGlzdC5hZGQoIGB3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19saWdodGJveF9fY29udHJvbC0taGlkZGVuYCApO1xuXHRcdFx0bGlnaHRib3hOZXh0LmNsYXNzTGlzdC5hZGQoIGB3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19saWdodGJveF9fY29udHJvbC0taGlkZGVuYCApO1xuXHRcdH1cblxuXHRcdC8vIEdldCBhbGwgdGhlIHNsaWRlcyB0byBzaG93IG9uIGxpZ2h0Ym94LlxuXHRcdHRoaXMuc2xpZGVzLmZvckVhY2goICggc2xpZGUgKSA9PiB7XG5cdFx0XHRjb25zdCBzbGlkZUNvbnRlbnQgPSBzbGlkZS5jbG9uZU5vZGUoIHRydWUgKTtcblx0XHRcdHNsaWRlQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0XHQnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlX19jdXJyZW50Jyxcblx0XHRcdFx0J3dwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZV9fcHJldicsXG5cdFx0XHRcdCd3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVfX25leHQnLFxuXHRcdFx0KTtcblxuXHRcdFx0Ly8gQXBwZW5kIHNsaWRlcyBjbG9uZXMuXG5cdFx0XHRsaWdodGJveENvbnRhaW5lci5hcHBlbmRDaGlsZCggc2xpZGVDb250ZW50ICk7XG5cblx0XHRcdGlmICggJ2J1dHRvbicgPT09IHRoaXMubGlnaHRib3hPcGVucyApIHtcblx0XHRcdFx0Ly8gQXBwZW5kIG9wZW4gaWNvbi5cblx0XHRcdFx0Y29uc3Qgb3BlbkxpZ2h0Ym94SXRlbSA9IG9wZW5MaWdodGJveC5jbG9uZU5vZGUoIHRydWUgKTtcblx0XHRcdFx0c2xpZGUuYXBwZW5kQ2hpbGQoIG9wZW5MaWdodGJveEl0ZW0gKTtcblxuXHRcdFx0XHRvcGVuTGlnaHRib3hJdGVtLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0XHRcdFx0bGlnaHRib3hDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7IHRoaXMuY3VycmVudCAqIDEwMCB9dncpYDtcblx0XHRcdFx0XHRsaWdodGJveC5jbGFzc0xpc3QuYWRkKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlcl9fbGlnaHRib3gtLWlzLW9wZW4nICk7XG5cdFx0XHRcdFx0c2xpZGVDb250ZW50LmNsYXNzTGlzdC5hZGQoICd3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVfX2N1cnJlbnQnICk7XG5cblx0XHRcdFx0XHRpZiAoIHRoaXMubGlnaHRib3hDb3VudGVyICkge1xuXHRcdFx0XHRcdFx0c2xpZGVzQ291bnRlci5pbm5lckhUTUwgPSBgJHsgdGhpcy5jdXJyZW50ICsgMSB9LyR7IHRoaXMuc2xpZGVzLmxlbmd0aCB9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNsaWRlLnNldEF0dHJpYnV0ZSggJ2RhdGEtb3BlbmxpZ2h0Ym94JywgJ3RydWUnICk7XG5cdFx0XHRcdHNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0XHRcdFx0bGlnaHRib3hDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7IHRoaXMuY3VycmVudCAqIDEwMCB9JSlgO1xuXHRcdFx0XHRcdGxpZ2h0Ym94LmNsYXNzTGlzdC5hZGQoICd3cC1ibG9jay1tZy1ibG9jay1zbGlkZXItc2xpZGVyX19saWdodGJveC0taXMtb3BlbicgKTtcblx0XHRcdFx0XHRzbGlkZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCggJ3dwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZV9fY3VycmVudCcgKTtcblxuXHRcdFx0XHRcdGlmICggdGhpcy5saWdodGJveENvdW50ZXIgKSB7XG5cdFx0XHRcdFx0XHRzbGlkZXNDb3VudGVyLmlubmVySFRNTCA9IGAkeyB0aGlzLmN1cnJlbnQgKyAxIH0vJHsgdGhpcy5zbGlkZXMubGVuZ3RoIH1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIENsb3NlIGJ1dHRvbi5cblx0XHRsaWdodGJveC5xdWVyeVNlbGVjdG9yKCAnLndwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX2xpZ2h0Ym94X19jb250cm9sLS1jbG9zZScgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRsaWdodGJveC5jbGFzc0xpc3QucmVtb3ZlKCAnd3AtYmxvY2stbWctYmxvY2stc2xpZGVyLXNsaWRlcl9fbGlnaHRib3gtLWlzLW9wZW4nICk7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gbnVsbDtcblx0XHR9ICk7XG5cblx0XHQvLyBQcmV2aW91cyBzbGlkZS5cblx0XHRsaWdodGJveFByZXYuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0aWYgKCB0aGlzLmN1cnJlbnQgPiAwICkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnQtLTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudCA9IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDE7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNoYW5nZVNsaWRlKCAncHJldicgKTtcblx0XHRcdGxpZ2h0Ym94Q29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0keyB0aGlzLmN1cnJlbnQgKiAxMDAgfSUpYDtcblxuXHRcdFx0aWYgKCB0aGlzLmxpZ2h0Ym94Q291bnRlciApIHtcblx0XHRcdFx0c2xpZGVzQ291bnRlci5pbm5lckhUTUwgPSBgJHsgdGhpcy5jdXJyZW50ICsgMSB9LyR7IHRoaXMuc2xpZGVzLmxlbmd0aCB9YDtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBOZXh0IHNsaWRlLlxuXHRcdGxpZ2h0Ym94TmV4dC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmN1cnJlbnQgPSAoIHRoaXMuY3VycmVudCArIDEgKSAlIHRoaXMuc2xpZGVzLmxlbmd0aDtcblx0XHRcdHRoaXMuY2hhbmdlU2xpZGUoICduZXh0JyApO1xuXHRcdFx0bGlnaHRib3hDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7IHRoaXMuY3VycmVudCAqIDEwMCB9JSlgO1xuXG5cdFx0XHRpZiAoIHRoaXMubGlnaHRib3hDb3VudGVyICkge1xuXHRcdFx0XHRzbGlkZXNDb3VudGVyLmlubmVySFRNTCA9IGAkeyB0aGlzLmN1cnJlbnQgKyAxIH0vJHsgdGhpcy5zbGlkZXMubGVuZ3RoIH1gO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGxpZ2h0Ym94Q29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7IHRoaXMuc2xpZGVzLmxlbmd0aCAqIDEwMCB9JWA7XG5cdFx0dGhpcy5zbGlkZXIucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCggbGlnaHRib3ggKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVjayB0aGUgc3RhdGUgb2YgdGhlIHBhZ2UgYW5kIGFkZCBhIGxvYWRpbmcgc2NyZWVuIGJlZm9yZSB5b3UgY2FuIGludGVyYWN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7IGJvb2xlYW4gfSBzdGF0ZSBUaGUgc3RhdGUgb2YgdGhlIHBhZ2UuIExvYWRpbmcgc3RhdGUgPSBmYWxzZS5cblx0ICovXG5cdGxvYWRpbmdFdmVudCggc3RhdGUgKSB7XG5cdFx0aWYgKCAhc3RhdGUgKSB7XG5cdFx0XHR0aGlzLmxvYWRpbmdTcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHRcdHRoaXMubG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LmFkZCggJ3dwLWJsb2NrLW1nLWJsb2NrLXNsaWRlci1zbGlkZXJfX2xvYWRpbmcnICk7XG5cdFx0XHR0aGlzLmxvYWRpbmdTcGlubmVyLmlubmVySFRNTCA9IGA8cD48c3BhbiBjbGFzcz1cInNjcmVlbi1yZWFkZXItdGV4dFwiPiR7IHRoaXMuaTE4bi5sb2FkaW5nIH08L3NwYW4+PC9wPmA7XG5cdFx0XHR0aGlzLnNsaWRlci5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKCB0aGlzLmxvYWRpbmdTcGlubmVyICk7XG5cdFx0fVxuXHR9XG59XG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblx0Ly8gTWFrZSB0aGUgc2xpZGVyIGZvciBnbG9iYWwgYWNjZXNzLCBzYXZlIGluIHRoZSB3aW5kb3cuXG5cdGlmICggdHlwZW9mKCB3aW5kb3cuTUdCbG9ja1NsaWRlciApID09PSAndW5kZWZpbmVkJyApIHtcblx0XHR3aW5kb3cuTUdCbG9ja1NsaWRlciA9IE1HQmxvY2tTbGlkZXI7XG5cdH1cbn0gKSggd2luZG93ICk7XG4iXSwibmFtZXMiOlsiTUdCbG9ja1NsaWRlciIsInNlbGVjdG9yIiwidGhlbWUiLCJkaXJlY3Rpb25OYXYiLCJoaWRlRGlyZWN0aW9ucyIsImNvbnRyb2xOYXYiLCJoaWRlQ29udHJvbHMiLCJ0aHVtYnNOYXYiLCJ0aHVtYnNOYXZGbG9hdCIsInRodW1ic05hdkZsb2F0UG9zIiwiaGlkZVRodW1icyIsImF1dG9TdGFydCIsInN0b3BPbkhvdmVyIiwicGF1c2VVbmZvY3VzZWQiLCJ3YWl0VmlkZW8iLCJzd2lwZU5hdiIsImFuaW1hdGlvbiIsInZlcnRpY2FsIiwidmVydGljYWxBcnJvd3MiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzcGVlZCIsImFycm93VHlwZSIsInBhZ2luYXRpb25UeXBlIiwiYXV0b0hlaWdodCIsImxpZ2h0Ym94IiwibGlnaHRib3hPcGVucyIsImxpZ2h0Ym94QXJyb3dzIiwibGlnaHRib3hDb3VudGVyIiwiY3VycmVudCIsImxvYWRTdGF0ZSIsInNldEFuaW1hdGlvbiIsInRyaWdnZXJPYnNlcnZlciIsInNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlc0NvbnRhaW5lciIsInNsaWRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpMThuIiwibWdibG9ja3NsaWRlckkxOG4iLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdFNsaWRlciIsIndpbmRvdyIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImxvYWRpbmdTcGlubmVyIiwic3RhcnRBbmltYXRpb24iLCJzdHlsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsImxlbmd0aCIsImNyZWF0ZUNvbnRyb2xzIiwib3JkZXJTbGlkZXMiLCJsb2FkaW5nRXZlbnQiLCJzd2lwZUV2ZW50cyIsImtleUV2ZW50cyIsImNhbGNNaW5IZWlnaHQiLCJjcmVhdGVMaWdodGJveCIsIm1pbkhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsImZvckVhY2giLCJzbGlkZSIsIk1hdGgiLCJmbG9vciIsImNsZWFyVGltZW91dCIsInJlc2l6ZWRGaW5pc2hlZCIsInNldFRpbWVvdXQiLCJkaXJlY3Rpb25OYXZpZ2F0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInByZXYiLCJzaG93UHJldlNsaWRlIiwibmV4dCIsInNob3dOZXh0U2xpZGUiLCJhcHBlbmRDaGlsZCIsIm5hdlByZXYiLCJuYXZOZXh0IiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwiY2hhbmdlU2xpZGUiLCJyZW1vdmUiLCJjb250cm9sTmF2aWdhdGlvbiIsImluZGV4Iiwic2hvd1NsaWRlIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwibmF2RG90cyIsImRvdCIsImNoYW5nZUNvbnRyb2xzIiwidGh1bWJOYXZpZ2F0aW9uIiwic2xpZGVTcmMiLCJzcmMiLCJpbWFnZUZvcm1hdCIsInNwbGl0IiwicG9wIiwiaW1hZ2VQYXRoIiwic2xpY2UiLCJ0aHVtYnMiLCJpbWciLCJkaXJlY3Rpb24iLCJwb3NpdGlvbiIsInZpZGVvRHVyYXRpb24iLCJjZWlsIiwicGxheSIsInBhdXNlIiwiYXV0b3BsYXkiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJuZXh0SW5kZXgiLCJjb250cm9sIiwiY3VycmVudENsYXNzIiwiZWwiLCJ1bmRlZmluZWQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidG91Y2hzdGFydFgiLCJzdGFydFRvdWNoIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRMZWZ0IiwidHJhbnNmb3JtIiwicmVtb3ZlUHJvcGVydHkiLCJrZXkiLCJPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsInZpc2liaWxpdHlTdGF0ZSIsImNsb3NlTGlnaHRib3giLCJwcmV2U2xpZGUiLCJuZXh0U2xpZGUiLCJsaWdodGJveENvbnRhaW5lciIsImxpZ2h0Ym94UHJldiIsImxpZ2h0Ym94TmV4dCIsIm9wZW5MaWdodGJveCIsInNldEF0dHJpYnV0ZSIsInNsaWRlc0NvdW50ZXIiLCJzbGlkZUNvbnRlbnQiLCJjbG9uZU5vZGUiLCJvcGVuTGlnaHRib3hJdGVtIiwiYm9keSIsIm92ZXJmbG93Iiwid2lkdGgiLCJzdGF0ZSIsImxvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9