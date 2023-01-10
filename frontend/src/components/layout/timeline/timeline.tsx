import styles from "./timeline.module.css";

// let slider = tns({
//   container : ".mySlider",
//   "slideby" : 1,
//   "speed" : 400,
//   "nav" : false,
//   controlsContainer: "#controls",
//   prevButton : ".previous",
//   nextButton : ".next",
//   reponsive:{
//     1600:{
//       items: 4,
//       gutter: 20
//     },
//     1024:{
//       items:3,
//       gutter:20
//     },
//     768:{
//       items:2,
//       gutter:20
//     },
//     480:{
//       items:1,
//     }
//   }
// })

export function Timeline() {
  return (
    <section id="slider">
      <h1 className={styles.h1}>Skills:</h1>
      <div className={styles.sliderBloc}>
        <div className={styles.container}>
          <div className={styles.subSkillsCard}>
            <div className={styles.sliderWrapper}>
              <div className={styles.controller}>
                <div>
                  <h3 className={styles.h3}>skills in a dynamic card</h3>
                </div>
                <div className={styles.buttonControl} id="control">
                  <button className={styles.previous}>
                    left
                    {/* <i className="fa fa-angle-left" aria-hidden="true"></i> */}
                  </button>
                  <button className={styles.next}>
                    right
                    {/* <i className="fa fa-angle-right" aria-hidden="true"></i> */}
                  </button>
                </div>
              </div>
              <br></br>
              <div className={styles.mySlider}></div>
              <div>
                <div className={styles.slide}>
                  <div className={styles.slideItem}>
                    <a href="#">learn More</a>
                  </div>
                  <br></br>
                  <div>
                    <h3>cyber</h3>
                    <p>ok</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.slide}>
                  <div className={styles.slideItem}>
                    <a href="#">learn More</a>
                  </div>
                  <br></br>
                  <div>
                    <h3>sysadmin</h3>
                    <p>ok</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.slide}>
                  <div className={styles.slideItem}>
                    <a href="#">learn More</a>
                  </div>
                  <br></br>
                  <div>
                    <h3>programming</h3>
                    <p>ok</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.slide}>
                  <div className={styles.slideItem}>
                    <a href="#">learn More</a>
                  </div>
                  <br></br>
                  <div>
                    <h3>techno watch</h3>
                    <p>ok</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
