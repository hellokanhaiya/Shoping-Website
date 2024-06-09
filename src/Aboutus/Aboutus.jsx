import React from "react";
import styles from "./Aboutus.module.css";
const Aboutus = () => {
  const columnData = [
    {
      title: "Class aptent taciti sociosqu",
      description:
        "Quisque luctus leo sit amet ante finibus lobortis.  Class aptent taciti sociosqu.",
    },
    {
      title: "Class aptent taciti sociosqu",
      description:
        "Quisque luctus leo sit amet ante finibus lobortis.  Class aptent taciti sociosqu.",
    },
    {
      title: "Class aptent taciti sociosqu",
      description:
        "Quisque luctus leo sit amet ante finibus lobortis.  Class aptent taciti sociosqu.",
    },
  ];
  return (
    <main id="main" className="site-primary">
      <div className="mt-12 site-content">
        <div className="elementor elementor-1899">
          {/* Mission Section */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-a5f5515 elementor-section-boxed elementor-section-height-default"
            data-id="a5f5515"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-extended">
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6cd6b07"
                data-id="6cd6b07"
                data-element_type="column"
              >
                <div className="site-module module-title">
                  <h4 className="text-[#818ea0] text-[18px] my-4">
                    Our Mission, About Machic
                  </h4>
                  <h1 className="text-[5.625rem] ">
                    We believe the best experience always wins
                  </h1>
                  <div className="entry-content max-w-[35rem] mb-4">
                    <p>
                      Quisque lacinia commodo euismod. Nullam tempus nec mi id
                      blandit. In lacinia nibh vitae ante laoreet rhoncus.
                      Quisque in dapibus lorem, luctus gravida velit. Nulla
                      gravida eros ac pharetra porta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="mt-10">
            <div className="flex justify-center elementor-column-gap-extended">
              {columnData.map((data, index) => (
                <div
                  key={index}
                  className="w-[30%] mr-6 elementor-column elementor-col-33 elementor-top-column elementor-element"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="site-module text-check">
                      <h3 className={`${styles.entrytitle} flex font-semibold`}>
                        {data.title}
                      </h3>
                      <div className="entry-description">
                        <p className="text-[#818ea0] text-[13px] ml-[2.5rem]">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="my-12">
            <div>
              <img
                src="https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/10/about-1.jpg"
                alt=""
              />
            </div>
          </section>
          <section
            className="my-16 elementor-section elementor-top-section elementor-element elementor-element-9baf384 elementor-section-boxed elementor-section-height-default"
            data-id="9baf384"
            data-element_type="section"
          >
            <div className="flex elementor-container elementor-column-gap-extended">
              <div
                className="elementor-column w-[100%] elementor-col-33 elementor-top-column elementor-element elementor-element-7988065 elementor-hidden-tablet elementor-hidden-mobile"
                data-id="7988065"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap"></div>
              </div>
              <div
                className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-5e986b7"
                data-id="5e986b7"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-c82a70a elementor-widget elementor-widget-text-editor"
                    data-id="c82a70a"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <style>{`
                  /*! elementor - v3.20.0 - 26-03-2024 */
                  .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}
                `}</style>
                      <p>
                        Nam maximus nunc a augue pulvinar, non euismod mauris
                        tempus. Cras non elit vel magna molestie pellentesque in
                        eu dui. Donec laoreet quis erat vitae finibus.
                        Vestibulum enim eros, porta eget quam et, euismod dictum
                        elit. Nullam eu tempus magna. Fusce malesuada nisi id
                        felis placerat porta vel sed augue. Vivamus mollis
                        mauris vitae rhoncus egestas. Pellentesque habitant
                        morbi tristique senectus et netus et malesuada fames ac
                        turpis egestas. Phasellus luctus tempor ante in dapibus.
                        Curabitur sed lectus tempus, pulvinar magna vel, laoreet
                        sapien.
                      </p>
                      <p className="mt-6">
                        Pellentesque sodales ornare nulla. Nullam elementum est
                        quis tortor ultricies tristique. Nulla tempor eros quis
                        arcu imperdiet, rutrum pharetra mi lobortis. Donec
                        tortor ipsum, maximus quis pellentesque vel, bibendum eu
                        mauris.
                      </p>
                      <p className="mt-6">
                        Nulla bibendum tincidunt ligula, a placerat dolor
                        viverra eget. Maecenas id diam sed ligula facilisis
                        lacinia. Nunc maximus est ut sem varius suscipit.
                        Phasellus vel tellus viverra, lacinia metus et, faucibus
                        tellus. Etiam hendrerit est viverra eros mollis, a
                        laoreet ante dictum. Aliquam erat volutpat. Vivamus
                        tempor blandit dui vel interdum. Etiam ut libero eget ex
                        sodales lobortis vitae at est. Nulla facilisis velit nec
                        pellentesque commodo. Phasellus suscipit sodales magna
                        in vehicula.
                      </p>
                      <p className="mt-6">
                        Ut ac semper ligula. Pellentesque laoreet justo nec ex
                        sodales euismod. Aliquam orci tortor, bibendum nec
                        ultricies ac, auctor nec purus. Maecenas in consectetur
                        erat. Proin ut nisi ut ipsum blandit vehicula. Nulla
                        orci eros, ornare vitae tristique et, iaculis nec
                        mauris. Aliquam ornare, turpis sed lobortis ultricies,
                        lectus felis lacinia lacus, et convallis ipsum erat sed
                        tortor. Proin molestie sagittis augue, id sollicitudin
                        libero congue vel. Suspendisse id elementum nunc. Donec
                        in neque vitae nisl consequat accumsan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="elementor-section my-16 elementor-top-section elementor-element elementor-element-127022d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="127022d"
            data-element_type="section"
          >
            <div class="elementor-container elementor-column-gap-extended">
              <div
                class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-bbc0e64"
                data-id="bbc0e64"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-890d4e0 elementor-widget elementor-widget-machic-custom-title"
                    data-id="890d4e0"
                    data-element_type="widget"
                    data-widget_type="machic-custom-title.default"
                  >
                    <div class="elementor-widget-container">
                      <div class="site-module module-title small">
                        <h4 class="entry-subtitle text-[#818ea0] text-[20px]">
                          Our Vision, About Machic
                        </h4>
                        <h1 class="entry-title text-[3rem]">
                          Nulla at facilisis leo. Aenean vel molestie risus.
                          Morbi in vehicula metus, ut malesuada mauris.
                        </h1>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-eecdb08 elementor-hidden-tablet elementor-hidden-mobile"
                data-id="eecdb08"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap"></div>
              </div>
            </div>
          </section>
          <section
            class="elementor-section elementor-top-section elementor-element elementor-element-d98b4da elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="d98b4da"
            data-element_type="section"
          >
            <div class="elementor-container flex elementor-column-gap-extended">
              <div
                class="elementor-column w-[50%] elementor-col-50 elementor-top-column elementor-element elementor-element-aa4a269"
                data-id="aa4a269"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap  elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-da62a90 elementor-widget elementor-widget-image"
                    data-id="da62a90"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div class="elementor-widget-container">
                      <img
                        decoding="async"
                        width="800"
                        height="1078"
                        src="https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/10/about-2.jpg"
                        class="attachment-full w-[80%] size-full wp-image-1965"
                        alt=""
                        srcset="https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/10/about-2.jpg 800w, https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/10/about-2-223x300.jpg 223w, https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/10/about-2-760x1024.jpg 760w, https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/10/about-2-768x1035.jpg 768w, https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/10/about-2-600x809.jpg 600w, https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/10/about-2-40x54.jpg 40w, https://754969b0.rocketcdn.me/machic/multivendor/wp-content/uploads/sites/2/2021/10/about-2-64x86.jpg 64w"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="elementor-column w-[50%] elementor-col-50 elementor-top-column elementor-element elementor-element-6894683"
                data-id="6894683"
                data-element_type="column"
              >
                <div class="elementor-widget-wrap elementor-element-populated">
                  <div
                    class="elementor-element elementor-element-a6b48cc elementor-widget elementor-widget-text-editor"
                    data-id="a6b48cc"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div class="elementor-widget-container text-[16px]">
                      <p>
                        Nam maximus nunc a augue pulvinar, non euismod mauris
                        tempus. Cras non elit vel magna molestie pellentesque in
                        eu dui. Donec laoreet quis erat vitae finibus.
                        Vestibulum enim eros, porta eget quam et, euismod dictum
                        elit. Nullam eu tempus magna. Fusce malesuada nisi id
                        felis placerat porta vel sed augue. Vivamus mollis
                        mauris vitae rhoncus egestas. Pellentesque habitant
                        morbi tristique senectus et netus et malesuada fames ac
                        turpis egestas. Phasellus luctus tempor ante in dapibus.
                        Curabitur sed lectus tempus, pulvinar magna vel, laoreet
                        sapien.
                      </p>
                      <p className="mt-4">
                        Pellentesque sodales ornare nulla. Nullam elementum est
                        quis tortor ultricies tristique. Nulla tempor eros quis
                        arcu imperdiet, rutrum pharetra mi lobortis. Donec
                        tortor ipsum, maximus quis pellentesque vel, bibendum eu
                        mauris.
                      </p>
                      <p className="mt-4">
                        Nulla bibendum tincidunt ligula, a placerat dolor
                        viverra eget. Maecenas id diam sed ligula facilisis
                        lacinia. Nunc maximus est ut sem varius suscipit.
                        Phasellus vel tellus viverra, lacinia metus et, faucibus
                        tellus. Etiam hendrerit est viverra eros mollis, a
                        laoreet ante dictum. Aliquam erat volutpat. Vivamus
                        tempor blandit dui vel interdum. Etiam ut libero eget ex
                        sodales lobortis vitae at est. Nulla facilisis velit nec
                        pellentesque commodo. Phasellus suscipit sodales magna
                        in vehicula.
                      </p>
                      <p className="mt-4">
                        Ut ac semper ligula. Pellentesque laoreet justo nec ex
                        sodales euismod. Aliquam orci tortor, bibendum nec
                        ultricies ac, auctor nec purus. Maecenas in consectetur
                        erat. Proin ut nisi ut ipsum blandit vehicula. Nulla
                        orci eros, ornare vitae tristique et, iaculis nec
                        mauris. Aliquam ornare, turpis sed lobortis ultricies,
                        lectus felis lacinia lacus, et convallis ipsum erat sed
                        tortor. Proin molestie sagittis augue, id sollicitudin
                        libero congue vel. Suspendisse id elementum nunc. Donec
                        in neque vitae nisl consequat accumsan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="my-16 elementor-section elementor-top-section elementor-element elementor-element-9baf384 elementor-section-boxed elementor-section-height-default"
            data-id="9baf384"
            data-element_type="section"
          >
            <div className="flex elementor-container elementor-column-gap-extended">
              <div
                className="elementor-column w-[100%] elementor-col-33 elementor-top-column elementor-element elementor-element-7988065 elementor-hidden-tablet elementor-hidden-mobile"
                data-id="7988065"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap"></div>
              </div>
              <div
                className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-5e986b7"
                data-id="5e986b7"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-c82a70a elementor-widget elementor-widget-text-editor"
                    data-id="c82a70a"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <style>{`
                  /*! elementor - v3.20.0 - 26-03-2024 */
                  .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}
                `}</style>
                      <p>
                        Nam maximus nunc a augue pulvinar, non euismod mauris
                        tempus. Cras non elit vel magna molestie pellentesque in
                        eu dui. Donec laoreet quis erat vitae finibus.
                        Vestibulum enim eros, porta eget quam et, euismod dictum
                        elit. Nullam eu tempus magna. Fusce malesuada nisi id
                        felis placerat porta vel sed augue. Vivamus mollis
                        mauris vitae rhoncus egestas. Pellentesque habitant
                        morbi tristique senectus et netus et malesuada fames ac
                        turpis egestas. Phasellus luctus tempor ante in dapibus.
                        Curabitur sed lectus tempus, pulvinar magna vel, laoreet
                        sapien.
                      </p>
                      <p className="mt-6">
                        Pellentesque sodales ornare nulla. Nullam elementum est
                        quis tortor ultricies tristique. Nulla tempor eros quis
                        arcu imperdiet, rutrum pharetra mi lobortis. Donec
                        tortor ipsum, maximus quis pellentesque vel, bibendum eu
                        mauris.
                      </p>
                      <p className="mt-6">
                        Nulla bibendum tincidunt ligula, a placerat dolor
                        viverra eget. Maecenas id diam sed ligula facilisis
                        lacinia. Nunc maximus est ut sem varius suscipit.
                        Phasellus vel tellus viverra, lacinia metus et, faucibus
                        tellus. Etiam hendrerit est viverra eros mollis, a
                        laoreet ante dictum. Aliquam erat volutpat. Vivamus
                        tempor blandit dui vel interdum. Etiam ut libero eget ex
                        sodales lobortis vitae at est. Nulla facilisis velit nec
                        pellentesque commodo. Phasellus suscipit sodales magna
                        in vehicula.
                      </p>
                      <p className="mt-6">
                        Ut ac semper ligula. Pellentesque laoreet justo nec ex
                        sodales euismod. Aliquam orci tortor, bibendum nec
                        ultricies ac, auctor nec purus. Maecenas in consectetur
                        erat. Proin ut nisi ut ipsum blandit vehicula. Nulla
                        orci eros, ornare vitae tristique et, iaculis nec
                        mauris. Aliquam ornare, turpis sed lobortis ultricies,
                        lectus felis lacinia lacus, et convallis ipsum erat sed
                        tortor. Proin molestie sagittis augue, id sollicitudin
                        libero congue vel. Suspendisse id elementum nunc. Donec
                        in neque vitae nisl consequat accumsan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-10">
            <div className="flex justify-center elementor-column-gap-extended">
              {columnData.map((data, index) => (
                <div
                  key={index}
                  className="w-[30%] mr-6 elementor-column elementor-col-33 elementor-top-column elementor-element"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="site-module text-check">
                      <h3 className={`${styles.entrytitle} flex font-semibold`}>
                        {data.title}
                      </h3>
                      <div className="entry-description">
                        <p className="text-[#818ea0] text-[13px] ml-[2.5rem]">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Aboutus;
