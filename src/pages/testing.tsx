import styles from '@/styles/Testing.module.css';
const Testing = () => {
    return (
        <>
  <h1>Direction-Aware Hover Effect</h1>
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.col} style={{ flexBasis: 1600 }}>
        <div
          className={styles.photoContainer}
          style={{
            backgroundImage: "url(https://source.unsplash.com/1600x250/?sig=10)"
          }}
        />
        <h2>Image 1</h2>
        <div className={styles.slide}>
          <p>
            Morbi leo turpis, lacinia id ultricies sed, tincidunt nec est. Fusce
            a ligula quis sapien aliquet iaculis quis aliquam elit. Suspendisse
            cursus facilisis risus, feugiat varius ante interdum et.
          </p>
        </div>
      </div>
      <div className={styles.col} style={{ flexBasis: 800 }}>
        <div
          className={styles.photoContainer}
          style={{
            backgroundImage: "url(https://source.unsplash.com/800x250/?sig=15)"
          }}
        />
        <h2>Image 2</h2>
        <div className={styles.slide}>
          <p>
            Nulla suscipit lacus libero, eu mollis leo sollicitudin in. Sed
            fermentum eu diam a ornare. Nulla malesuada dolor ac lorem porta
            suscipit. Suspendisse eget placerat quam.
          </p>
        </div>
      </div>
      <div className={styles.col} style={{ flexBasis: 1200 }}>
        <div
          className={styles.photoContainer}
          style={{
            backgroundImage: "url(https://source.unsplash.com/1200x250/?sig=18)"
          }}
        />
        <h2>Image 3</h2>
        <div className={styles.slide}>
          <p>
            Pellentesque tincidunt sem id lacus scelerisque, sed dapibus nulla
            dignissim.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.col} style={{ flexBasis: 1000 }}>
        <div
          className={styles.photoContainer}
          style={{
            backgroundImage: "url(https://source.unsplash.com/1000x250/?sig=11)"
          }}
        />
        <h2>Image 4</h2>
        <div className={styles.slide}>
          <p>
            Quisque vestibulum sit amet magna gravida ornare. Phasellus a lectus
            venenatis, pellentesque diam quis, accumsan metus.
          </p>
        </div>
      </div>
      {/* <div className="col" style={{ flexBasis: 1200 }}>
        <div
          className="photo-container"
          style={{
            backgroundImage: "url(https://source.unsplash.com/1200x250/?sig=40)"
          }}
        />
        <h2>Image 5</h2>
        <div className="slide">
          <p>
            Duis porta tincidunt lorem ut venenatis. Nulla at mauris non ligula
            ultricies iaculis eu ac dui. Vivamus sed odio vitae augue aliquam
            pharetra.
          </p>
        </div>
      </div>
      <div className="col" style={{ flexBasis: 800 }}>
        <div
          className="photo-container"
          style={{
            backgroundImage: "url(https://source.unsplash.com/800x250/?sig=80)"
          }}
        />
        <h2>Image 6</h2>
        <div className="slide">
          <p>
            Donec fringilla cursus blandit. Aliquam tristique porttitor mi,
            venenatis pulvinar ex maximus eu. Sed condimentum suscipit pharetra.
          </p>
        </div>
      </div>
      <div className="col" style={{ flexBasis: 2000 }}>
        <div
          className="photo-container"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/2000x250/?sig=210)"
          }}
        />
        <h2>Image 7</h2>
        <div className="slide">
          <p>
            Nullam rhoncus libero vel orci eleifend, in placerat lectus
            molestie. Donec eu interdum neque.
          </p>
        </div>
      </div>
      <div className="col" style={{ flexBasis: 1600 }}>
        <div
          className="photo-container"
          style={{
            backgroundImage: "url(https://source.unsplash.com/1600x250/?sig=19)"
          }}
        />
        <h2>Image 8</h2>
        <div className="slide">
          <p>
            Cras pulvinar nisi ut pharetra aliquam. Donec aliquet, eros ac
            imperdiet consectetur, lorem tortor gravida tortor, ut mattis mi
            urna quis nisl.
          </p>
        </div>
      </div> */}
    </div>
    {/* <div className="row">
      <div className="col" style={{ flexBasis: 1600 }}>
        <div
          className="photo-container"
          style={{
            backgroundImage: "url(https://source.unsplash.com/1600x250/?sig=45)"
          }}
        />
        <h2>Image 9</h2>
        <div className="slide">
          <p>
            Praesent interdum ullamcorper dapibus. Aenean libero leo, viverra
            non nunc id, laoreet gravida quam. Nunc in lorem tincidunt, finibus
            nisi id, cursus lacus. Aliquam sed purus id neque convallis
            ultrices.
          </p>
        </div>
      </div>
      <div className="col" style={{ flexBasis: 700 }}>
        <div
          className="photo-container"
          style={{
            backgroundImage: "url(https://source.unsplash.com/700x250/?sig=70)"
          }}
        />
        <h2>Image 10</h2>
        <div className="slide">
          <p>
            Pellentesque vehicula sapien at lobortis eleifend. Quisque eget nisi
            dui. Ut imperdiet in mauris ultrices aliquam. Morbi id ex lacus. Nam
            non nibh nisi. Morbi volutpat sollicitudin odio ac sodales.
          </p>
        </div>
      </div>
      <div className="col" style={{ flexBasis: 1200 }}>
        <div
          className="photo-container"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/1200x250/?sig=120)"
          }}
        />
        <h2>Image 11</h2>
        <div className="slide">
          <p>Nunc rutrum nibh purus, non auctor libero egestas eget.</p>
        </div>
      </div>
      <div className="col" style={{ flexBasis: 900 }}>
        <div
          className="photo-container"
          style={{
            backgroundImage: "url(https://source.unsplash.com/900x250/?sig=91)"
          }}
        />
        <h2>Image 12</h2>
        <div className="slide">
          <p>
            Curabitur sit amet lobortis sem. Donec malesuada sem erat, eget
            ultrices tellus faucibus vel.
          </p>
        </div>
      </div>
    </div> */}
  </div>
</>

    )
}
export default Testing