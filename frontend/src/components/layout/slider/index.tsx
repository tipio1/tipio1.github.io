import styles from "./slider.module.css";

export function Slider() {
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
              <div className={styles.mySlider}>
                <div>
                  <div className={styles.slide}>
                    <div className={styles.slideItem}>
                      <a href="#">learn More</a>
                    </div>
                    <br></br>
                    <div>
                      {/* <h3></h3> */}
                      <p className={styles.p}>cyber</p>
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
                      {/* <h3></h3> */}
                      <p className={styles.p}>sysadmin</p>
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
                      {/* <h3></h3> */}
                      <p className={styles.p}>programming</p>
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
                      {/* <h3></h3> */}
                      <p className={styles.p}>techno watch</p>
                    </div>
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
